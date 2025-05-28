import { db } from "../libs/db.js";

export const getAllSubmission = async (req, res) => {
  try {
    const userId = req.user.id;

    const submissions = await db.submission.findMany({
      where: {
        userId: userId,
      },
    });

    res.status(200).json({
      message: "All submission fetched successfully",
      submissions: submissions,
    });
  } catch (error) {
    console.error("Error fetching submissions: ", error);
    res.status(500).json({
      message: "Error fetching submissions",
      error: error.message,
    });
  }
};

export const getSubmissionForProblem = async (req, res) => {
  try {
    const userId = req.user.id;
    const problemId = req.params.problemId;

    const submissions = await db.submission.findMany({
      where: {
        userId: userId,
        problemId: problemId,
      },
    });

    res.status(200).json({
      message: "Submission fetched successfully",
      submissions: submissions,
    });
  } catch (error) {
    console.error("Error fetching submission: ", error);
    res.status(500).json({
      message: "Error fetching submission",
      error: error.message,
    });
  }
};

export const getAllTheSubmissionForProblem = async (req, res) => {
  try {
    const problemId = req.params.problemId;
    const submissions = await db.submission.findMany({
      where: {
        problemId: problemId,
      },
    });

    res.status(200).json({
      success: true,
      message: "All submission for problem fetched successfully",
      submissions,
      count: submissions.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching submission",
      error: error.message,
    });
  }
};
