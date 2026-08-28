import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userType, setUserType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#05050c] text-white overflow-hidden">

      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* =====================================================
              LEFT SECTION
          ====================================================== */}

          <div className="hidden lg:block px-8">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-16">

              <div className="text-[#a78bfa] text-4xl">
                ⌖
              </div>

              <div className="text-3xl font-bold">
                LocalLink{" "}
                <span className="text-[#c084fc]">
                  AI
                </span>
              </div>

            </div>

            {/* Heading */}
            <h1 className="text-6xl font-extrabold leading-[1.05]">

              Welcome
              <br />

              <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                back.
              </span>

            </h1>

            {/* Line */}
            <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]" />

            {/* Description */}
            <p className="mt-8 max-w-[430px] text-lg leading-8 text-white/50">

              Sign in to your LocalLink AI account and
              discover tools, materials and prototype
              components available near you.

            </p>

            {/* Features */}
            <div className="mt-12 space-y-6">

              {/* AI Powered */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/10 text-xl text-purple-400">
                  ✦
                </div>

                <div>
                  <h3 className="font-semibold">
                    AI Powered
                  </h3>

                  <p className="text-sm text-white/40">
                    Smart resource recommendations
                  </p>
                </div>

              </div>

              {/* Real-time */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/10 text-xl text-purple-400">
                  ⚡
                </div>

                <div>
                  <h3 className="font-semibold">
                    Real-time
                  </h3>

                  <p className="text-sm text-white/40">
                    Live stock and availability
                  </p>
                </div>

              </div>

              {/* Nearby */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/10 text-xl text-purple-400">
                  ⌖
                </div>

                <div>
                  <h3 className="font-semibold">
                    Nearby
                  </h3>

                  <p className="text-sm text-white/40">
                    Find resources around you
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              LOGIN CARD
          ====================================================== */}

          <div className="w-full">

            <div className="rounded-[28px] border border-purple-500/40 bg-[#090718]/95 p-7 shadow-[0_0_60px_rgba(139,92,246,0.12)] sm:p-10">

              {/* Location icon */}
              <div className="flex justify-center">

                <div className="text-5xl text-[#a78bfa]">
                  ⌖
                </div>

              </div>

              {/* Title */}
              <h2 className="mt-5 text-center text-3xl font-extrabold sm:text-4xl">

                Welcome Back to{" "}

                <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                  LocalLink AI
                </span>

              </h2>

              {/* Subtitle */}
              <p className="mx-auto mt-3 max-w-[600px] text-center text-sm leading-6 text-white/45 sm:text-base">

                Sign in to continue discovering nearby
                tools, materials and prototype resources.

              </p>


              {/* =================================================
                  STUDENT / MERCHANT
              ================================================== */}

              <div className="mt-8 grid grid-cols-2 rounded-xl border border-purple-500/30 bg-black/20 p-1">

                {/* Student */}
                <button
                  type="button"
                  onClick={() => setUserType("student")}
                  className={`rounded-lg py-3 font-semibold transition-all ${
                    userType === "student"
                      ? "bg-gradient-to-r from-[#7c3aed] to-[#d946ef] text-white shadow-lg"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  🎓 Student
                </button>


                {/* Merchant */}
                <button
                  type="button"
                  onClick={() => setUserType("merchant")}
                  className={`rounded-lg py-3 font-semibold transition-all ${
                    userType === "merchant"
                      ? "bg-gradient-to-r from-[#7c3aed] to-[#d946ef] text-white shadow-lg"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  🏪 Merchant
                </button>

              </div>


              {/* =================================================
                  LOGIN FORM
              ================================================== */}

              <form className="mt-8">

                {/* Email */}
                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Email Address{" "}
                    <span className="text-pink-400">
                      *
                    </span>
                  </label>

                  <input
                    type="email"
                    placeholder={
                      userType === "student"
                        ? "Enter your student email"
                        : "Enter your merchant email"
                    }
                    className="w-full rounded-xl border border-purple-500/30 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />

                </div>


                {/* Password */}
                <div className="mt-6">

                  <div className="mb-2 flex items-center justify-between">

                    <label className="text-sm font-semibold">
                      Password{" "}
                      <span className="text-pink-400">
                        *
                      </span>
                    </label>

                    <button
                      type="button"
                      className="text-sm text-purple-400 hover:text-purple-300"
                    >
                      Forgot password?
                    </button>

                  </div>

                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-purple-500/30 bg-black/30 px-4 py-4 pr-14 text-white outline-none placeholder:text-white/25 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                    >
                      {showPassword ? "◉" : "◌"}
                    </button>

                  </div>

                </div>


                {/* Login button */}
                <button
                  type="submit"
                  className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#d946ef] py-4 font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.25)] transition hover:scale-[1.01]"
                >
                  Login as{" "}
                  {userType === "student"
                    ? "Student"
                    : "Merchant"}
                </button>

              </form>


              {/* Signup */}
              <div className="mt-7 text-center text-sm text-white/40">

                Don't have an account?{" "}

                <Link
                  to="/signup"
                  className="font-semibold text-purple-400 hover:text-purple-300"
                >
                  Sign Up
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;