import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Code, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

import { z } from "zod";
import AuthImagePattern from "../components/AuthImagePattern.jsx";
import { useAuthStore } from "../store/useAuthStore.js";

const SignUpSchema = z.object({
  email: z.string().email("Enter a valid email id"),
  password: z.string().min(6, "Password must be atleast of 6 characters"),
  name: z.string().min(3, "Name must be atleast 3 character"),
});

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { signup, isSigningUp } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      await signup(data);
      console.log("signup data", data);
      navigate("/login");
    } catch (error) {
      console.error("SignUp failed:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900">
      <div className="min-h-screen grid lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center p-6 sm:p-12">
          <div className="w-full max-w-md space-y-8 bg-gray-800 p-8 rounded-2xl shadow-xl">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-2xl bg-green-600/10 flex items-center justify-center group-hover:bg-green-600/20 transition-colors">
                  <Code className="w-8 h-8 text-green-400" />
                </div>
                <h1 className="text-3xl font-bold mt-4 text-white">Welcome</h1>
                <p className="text-gray-300">Sign Up to your account</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-300">
                    Name
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Code className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register("name")}
                    className={`input w-full pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-300">
                    Email
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    {...register("email")}
                    className={`input w-full pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-300">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className={`input w-full pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 ${
                      errors.password
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
                disabled={isSigningUp}
              >
                {isSigningUp ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Loading...
                  </>
                ) : (
                  "Sign up"
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="text-center pt-4">
              <p className="text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image/Pattern */}
        <AuthImagePattern
          title={"Welcome to our platform!"}
          subtitle={
            "Sign up to access our platform and start using our services."
          }
        />
      </div>
    </div>
  );
};

export default SignUpPage;
