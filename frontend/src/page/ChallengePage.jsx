import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProblemStore } from "../store/useProblemStore";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "react-hot-toast";
import { Clock, Timer, Code, AlertCircle, Play } from "lucide-react";
import ProblemPage from "./ProblemPage";

const ChallengePage = () => {
  const navigate = useNavigate();
  const { problems, getAllProblems } = useProblemStore();
  const { authUser } = useAuthStore();
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // Get time limit based on difficulty
  const getTimeLimit = (difficulty) => {
    switch (difficulty) {
      case "EASY":
        return 15 * 60; // 15 minutes in seconds
      case "MEDIUM":
        return 25 * 60; // 25 minutes in seconds
      case "HARD":
        return 40 * 60; // 40 minutes in seconds
      default:
        return 15 * 60;
    }
  };

  // Select a random problem
  useEffect(() => {
    const fetchProblems = async () => {
      await getAllProblems();
      setIsLoading(false);
    };
    fetchProblems();
  }, [getAllProblems]);

  useEffect(() => {
    if (problems.length > 0 && !selectedProblem) {
      const randomIndex = Math.floor(Math.random() * problems.length);
      const problem = problems[randomIndex];
      setSelectedProblem(problem);
      setTimeLeft(getTimeLimit(problem.difficulty));
    }
  }, [problems, selectedProblem]);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && hasStarted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, hasStarted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleTimeUp = () => {
    toast.error("Time's up! Challenge failed.");
    navigate("/problems");
  };

  const handleStartChallenge = () => {
    setHasStarted(true);
  };

  if (isLoading || !selectedProblem) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-[#0A0F0D] relative">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/mesh.svg')] bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0D]/50 via-[#0A0F0D]/80 to-[#0A0F0D]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
          {/* Rules Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-8">
            <h1 className="text-3xl font-bold text-white mb-6">
              Challenge Rules
            </h1>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Timer className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Time Limits
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Easy Problems: 15 minutes</li>
                    <li>• Medium Problems: 25 minutes</li>
                    <li>• Hard Problems: 40 minutes</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Code className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Coding Rules
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      • You can use any of the supported programming languages
                    </li>
                    <li>• You can't switch problems once started</li>
                    <li>
                      • You can't use external resources or copy-paste code
                    </li>
                    <li>
                      • All test cases must pass to complete the challenge
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Important Notes
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      • The timer starts as soon as you begin the challenge
                    </li>
                    <li>• You can't pause or restart the timer</li>
                    <li>• Giving up will count as a failed attempt</li>
                    <li>• Make sure you're ready before starting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Preview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">
                Problem for the challenge
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  selectedProblem.difficulty === "EASY"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : selectedProblem.difficulty === "MEDIUM"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-500"
                }`}
              >
                {selectedProblem.difficulty}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              {selectedProblem.title}
            </h3>
            <p className="text-gray-300 mb-4">
              {selectedProblem.description
                .replace(/<[^>]*>/g, "")
                .slice(0, 200)}
              ...
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span>
                Time Limit:{" "}
                {formatTime(getTimeLimit(selectedProblem.difficulty))}
              </span>
            </div>
          </div>

          {/* Start Button */}
          <div className="flex justify-center">
            <button
              onClick={handleStartChallenge}
              className="btn btn-success btn-lg gap-2"
            >
              <Play className="w-5 h-5" />
              Start Challenge
            </button>
          </div>
        </div>
      </div>
    );
  }

  // After starting, show the ProblemPage with timer overlay
  return (
    <div className="relative">
      {/* Timer Overlay */}
      <div className="fixed top-4 right-4 z-50 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 flex items-center gap-2">
        <Clock className="w-5 h-5 text-red-400" />
        <span className="text-lg font-semibold text-white">
          {formatTime(timeLeft)}
        </span>
      </div>

      {/* Problem Page */}
      <ProblemPage problemId={selectedProblem.id} isChallenge={true} />
    </div>
  );
};

export default ChallengePage;
