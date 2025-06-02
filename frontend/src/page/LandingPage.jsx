import React from "react";
import { Link } from "react-router-dom";
import { Code, Trophy, Users, BookOpen, ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] w-full flex items-center">
        {/* Simple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(74,222,128,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="block text-white">Master Coding with</span>
                <span className="block text-green-400 mt-2">LeetNest</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Your ultimate platform for coding practice, interview
                preparation, and skill enhancement. Join thousands of developers
                who are improving their coding skills with LeetNest.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/problems"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden"
                >
                  <span className="relative z-10">Start Coding</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 animate-shimmer" />
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-green-400 bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden"
                >
                  <span className="relative z-10">Sign Up Free</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 animate-shimmer" />
                </Link>
              </div>
            </div>

            {/* Right content - Code preview */}
            <div className="hidden lg:block relative h-[400px]">
              {/* Background blur layer */}
              {/* <div className="absolute top-4 left-4 w-full h-full bg-green-500/20 backdrop-blur-sm rounded-2xl -rotate-3" /> */}

              {/* Main code card */}
              <div className="relative z-10 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-green-500/20">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                  <code>
                    <span className="text-purple-400">function</span>{" "}
                    <span className="text-yellow-400">twoSum</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-gray-300">nums</span>
                    <span className="text-gray-400">,</span>{" "}
                    <span className="text-gray-300">target</span>
                    <span className="text-gray-400">)</span> {"{"}
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-gray-300">map = new Map()</span>
                    <span className="text-gray-400">;</span>
                    {"\n\n"}
                    {"  "}
                    <span className="text-purple-400">for</span>{" "}
                    <span className="text-gray-400">(</span>
                    <span className="text-purple-400">let</span>{" "}
                    <span className="text-gray-300">i = 0</span>
                    <span className="text-gray-400">;</span>{" "}
                    <span className="text-gray-300">{"i < nums.length"}</span>
                    <span className="text-gray-400">;</span>{" "}
                    <span className="text-gray-300">i++</span>
                    <span className="text-gray-400">)</span> {"{"}
                    {"\n"}
                    {"    "}
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-gray-300">
                      complement = target - nums[i]
                    </span>
                    <span className="text-gray-400">;</span>
                    {"\n"}
                    {"    "}
                    <span className="text-purple-400">if</span>{" "}
                    <span className="text-gray-400">(</span>
                    <span className="text-gray-300">map.has(complement)</span>
                    <span className="text-gray-400">)</span> {"{"}
                    {"\n"}
                    {"      "}
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-gray-400">[</span>
                    <span className="text-gray-300">map.get(complement)</span>
                    <span className="text-gray-400">,</span>{" "}
                    <span className="text-gray-300">i</span>
                    <span className="text-gray-400">]</span>
                    <span className="text-gray-400">;</span>
                    {"\n"}
                    {"    "}
                    {"}"}
                    {"\n"}
                    {"    "}
                    <span className="text-gray-300">map.set(nums[i], i)</span>
                    <span className="text-gray-400">;</span>
                    {"\n"}
                    {"  "}
                    {"}"}
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <span className="px-2 py-1 rounded bg-green-500/20 text-green-400">
                    Easy
                  </span>
                  <span>•</span>
                  <span>JavaScript</span>
                </div>
              </div>

              {/* Larger code example card */}
              <div className="absolute top-8 left-8 w-full bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 border border-green-500/20">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                  <code>
                    <span className="text-purple-400">function</span>{" "}
                    <span className="text-yellow-400">maxSubArray</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-gray-300">nums</span>
                    <span className="text-gray-400">)</span> {"{"}
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">let</span>{" "}
                    <span className="text-gray-300">maxSoFar = nums[0]</span>
                    <span className="text-gray-400">;</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">let</span>{" "}
                    <span className="text-gray-300">
                      maxEndingHere = nums[0]
                    </span>
                    <span className="text-gray-400">;</span>
                    {"\n\n"}
                    {"  "}
                    <span className="text-purple-400">for</span>{" "}
                    <span className="text-gray-400">(</span>
                    <span className="text-purple-400">let</span>{" "}
                    <span className="text-gray-300">i = 1</span>
                    <span className="text-gray-400">;</span>{" "}
                    <span className="text-gray-300">{"i < nums.length"}</span>
                    <span className="text-gray-400">;</span>{" "}
                    <span className="text-gray-300">i++</span>
                    <span className="text-gray-400">)</span> {"{"}
                    {"\n"}
                    {"    "}
                    <span className="text-gray-300">
                      maxEndingHere = Math.max
                    </span>
                    <span className="text-gray-400">(</span>
                    <span className="text-gray-300">nums[i]</span>
                    <span className="text-gray-400">,</span>{" "}
                    <span className="text-gray-300">
                      maxEndingHere + nums[i]
                    </span>
                    <span className="text-gray-400">)</span>
                    <span className="text-gray-400">;</span>
                    {"\n"}
                    {"    "}
                    <span className="text-gray-300">maxSoFar = Math.max</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-gray-300">maxSoFar</span>
                    <span className="text-gray-400">,</span>{" "}
                    <span className="text-gray-300">maxEndingHere</span>
                    <span className="text-gray-400">)</span>
                    <span className="text-gray-400">;</span>
                    {"\n"}
                    {"  "}
                    {"}"}
                    {"\n\n"}
                    {"  "}
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-gray-300">maxSoFar</span>
                    <span className="text-gray-400">;</span>
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <span className="px-2 py-1 rounded bg-green-500/20 text-green-400">
                    Medium
                  </span>
                  <span>•</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full py-24 bg-gray-800">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Everything you need to excel in coding
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {[
                {
                  icon: <Code className="h-7 w-7" />,
                  title: "Curated Problem Sets",
                  description:
                    "Access a wide range of coding problems carefully selected to help you master different concepts and techniques.",
                },
                {
                  icon: <Trophy className="h-7 w-7" />,
                  title: "Track Your Progress",
                  description:
                    "Monitor your improvement with detailed statistics and track your journey to becoming a better programmer.",
                },
                {
                  icon: <Users className="h-7 w-7" />,
                  title: "Community Learning",
                  description:
                    "Join a community of learners, share solutions, and learn from others' approaches to problem-solving.",
                },
                {
                  icon: <BookOpen className="h-7 w-7" />,
                  title: "Custom Playlists",
                  description:
                    "Create and organize your own problem playlists to focus on specific topics or difficulty levels.",
                },
              ].map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="relative flex items-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors duration-300">
                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gray-700 text-green-400 group-hover:bg-green-500/10 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl leading-6 font-semibold text-white group-hover:text-green-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gray-900">
        <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="lg:max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to start coding?</span>
              <span className="block text-green-400 mt-2">
                Join LeetNest today.
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Begin your journey to becoming a better programmer with our
              comprehensive platform.
            </p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Get started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 animate-shimmer" />
            </Link>
            <Link
              to="/problems"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-green-400 bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden"
            >
              <span className="relative z-10">View Problems</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 animate-shimmer" />
            </Link>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
