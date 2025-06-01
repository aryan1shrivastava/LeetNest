// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Link } from "react-router-dom";
// import { Code, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

// import { z } from "zod";
// import AuthImagePattern from "../components/AuthImagePattern";
// import { useAuthStore } from "../store/useAuthStore";

// const LoginSchema = z.object({
//   email: z.string().email("Enter a valid email"),
//   password: z.string().min(6, "Password must be atleast of 6 characters"),
// });

// const LoginPage = () => {
//   const { isLoggingIn, login } = useAuthStore();
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(LoginSchema),
//   });

//   const onSubmit = async (data) => {
//     try {
//       await login(data);
//       console.log("login data", data);
//       navigate("/");
//     } catch (error) {
//       console.error("Login failed", error);
//     }
//   };

//   return (
//     <div className="h-screen grid lg:grid-cols-2">
//       <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//         <div className="w-full max-w-md space-y-8">
//           {/* Logo */}
//           <div className="text-center mb-8">
//             <div className="flex flex-col items-center gap-2 group">
//               <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                 <Code className="w-6 h-6 text-primary" />
//               </div>
//               <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
//               <p className="text-base-content/60">Login to your account</p>
//             </div>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* Email */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Email</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type="email"
//                   {...register("email")}
//                   className={`input input-bordered w-full pl-10 ${
//                     errors.email ? "input-error" : ""
//                   }`}
//                   placeholder="you@example.com"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Password</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   {...register("password")}
//                   className={`input input-bordered w-full pl-10 ${
//                     errors.password ? "input-error" : ""
//                   }`}
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-base-content/40" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-base-content/40" />
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="btn btn-primary w-full"
//               disabled={isLoggingIn}
//             >
//               {isLoggingIn ? (
//                 <>
//                   <Loader2 className="h-5 w-5 animate-spin" />
//                   Loading...
//                 </>
//               ) : (
//                 "Sign in"
//               )}
//             </button>
//           </form>

//           {/* Footer */}
//           <div className="text-center">
//             <p className="text-base-content/60">
//               Don't have an account?{" "}
//               <Link to="/signup" className="link link-primary">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image/Pattern */}
//       {/* Right Side - Image/Pattern */}
//       <AuthImagePattern
//         title={"Welcome back!"}
//         subtitle={
//           "Sign in to continue your journey with us. Don't have an account? Create one now."
//         }
//       />
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Code, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

import { z } from "zod";
import AuthImagePattern from "../components/AuthImagePattern";
import { useAuthStore } from "../store/useAuthStore";

const LoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be atleast of 6 characters"),
});

const LoginPage = () => {
  const { isLoggingIn, login, demoLogin } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await login(data);
      console.log("login data", data);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
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
                <h1 className="text-3xl font-bold mt-4 text-white">
                  Welcome Back
                </h1>
                <p className="text-gray-300">Login to your account</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Loading...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>

              {/* Demo Login Button */}
              <button
                type="button"
                onClick={() => {
                  demoLogin();
                  navigate("/problems");
                }}
                className="w-full py-3 px-4 border border-gray-600 hover:border-green-500 text-gray-300 hover:text-green-400 font-medium rounded-lg transition-colors duration-200"
              >
                Try Demo
              </button>
            </form>

            {/* Footer */}
            <div className="text-center pt-4">
              <p className="text-gray-300">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image/Pattern */}
        <AuthImagePattern
          title={"Welcome back!"}
          subtitle={
            "Sign in to continue your journey with us. Don't have an account? Create one now."
          }
        />
      </div>
    </div>
  );
};

export default LoginPage;
