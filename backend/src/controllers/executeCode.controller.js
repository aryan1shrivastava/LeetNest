import {
  getLanguageName,
  pollBatchResults,
  submitBatch,
} from "../libs/judge0.lib.js";

import { db } from "../libs/db.js";

export const executeCode = async (req, res) => {
  try {
    const { source_code, language_id, stdin, expected_outputs, problemId } =
      req.body;

    const userId = req.user.id;

    // Validate test cases

    if (
      !Array.isArray(stdin) ||
      stdin.length === 0 ||
      !Array.isArray(expected_outputs) ||
      expected_outputs.length !== stdin.length
    ) {
      return res.status(400).json({ error: "Invalid or Missing test cases" });
    }

    // 2. Prepare each test cases for judge0 batch submission
    const submissions = stdin.map((input) => ({
      source_code,
      language_id,
      stdin: input,
    }));

    // 3. Send batch of submissions to judge0
    const submitResponse = await submitBatch(submissions);

    const tokens = submitResponse.map((res) => res.token);

    // 4. Poll judge0 for results of all submitted test cases
    const results = await pollBatchResults(tokens);

    console.log("Result-------------");
    console.log(results);

    //analyse test case results

    let allPassed = true;
    const detailedResults = results.map((result, i) => {
      const stdout = result.stdout?.trim();
      const expected_output = expected_outputs[i]?.trim();
      const passed = stdout === expected_output;

      if (!passed) {
        allPassed = false;
      }
      return {
        testCase: i + 1,
        passed,
        stdout,
        expected: expected_output,
        stderr: result.stderr || null,
        compileOutput: result.compileOutput || null,
        status: result.status.description,
        memory: result.memory ? `${result.memory} KB` : undefined,
        time: result.time ? `${result.time} sec` : undefined,
      };

      // console.log(`Testcase ${i + 1}:`);
      // console.log(`input: ${stdin[i]}`);
      // console.log(`Expected output: ${expected_output}`);
      // console.log(`Actual output: ${stdout}`);

      // console.log(`match: ${passed}`);
      // console.log("---------------------");
    });

    console.log(detailedResults);

    //store submission summary in database

    const submission = await db.submission.create({
      data: {
        userId,
        problemId,
        sourceCode: source_code,
        language: getLanguageName(language_id),
        stdin: stdin.join("\n"),
        stdout: JSON.stringify(detailedResults.map((result) => result.stdout)),
        stderr: detailedResults.some((result) => result.stderr)
          ? JSON.stringify(detailedResults.map((result) => result.stderr))
          : null,
        compileOutput: detailedResults.some((result) => result.compileOutput)
          ? JSON.stringify(
              detailedResults.map((result) => result.compileOutput)
            )
          : null,
        status: allPassed ? "Accepted" : "Wrong Answer",
        memory: detailedResults.some((result) => result.memory)
          ? JSON.stringify(detailedResults.map((result) => result.memory))
          : null,
        time: detailedResults.some((result) => result.time)
          ? JSON.stringify(detailedResults.map((result) => result.time))
          : null,
      },
    });

    //if all test cases passed, update problem status to solved for the user

    if (allPassed) {
      // upsert means if the record exists, update it, otherwise create a new one
      await db.problemSolved.upsert({
        where: {
          userId_problemId: {
            userId,
            problemId,
          },
        },
        update: {},
        create: {
          userId,
          problemId,
        },
      });
    }

    // save individual test case results in database

    const testCaseResults = detailedResults.map((result, i) => ({
      submissionId: submission.id,
      testCase: result.testCase,
      passed: result.passed,
      stdout: result.stdout,
      stderr: result.stderr,
      expected: result.expected,
      status: result.status,
      compileOutput: result.compileOutput,
      memory: result.memory,
      time: result.time,
    }));

    await db.testCaseResult.createMany({
      data: testCaseResults,
    });

    const submissionWithTestCase = await db.submission.findUnique({
      where: {
        id: submission.id,
      },
      include: {
        testCases: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Code executed successfully",
      submission: submissionWithTestCase,
    });
  } catch (error) {
    console.error("Execute Code Error:", error);
    return res.status(500).json({
      error: "An error occurred while executing the code",
    });
  }
};
