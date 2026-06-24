"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="flex flex-col gap-2 w-full max-w-sm p-6 border bg-[#141416] border border-[#262629] rounded-4xl">
          <h1 className="font-semibold text-2xl">Welcome back</h1>
          <p className="text-[#85858C] text-sm mb-4">
            Sign in to access your intelligence workspace.
          </p>
          <button
            className="flex items-center bg-[#17171A] gap-2 px-4 py-2 rounded-3xl hover:bg-[#262629] transition-colors border border-[#262629] justify-center font-semibold text-sm cursor-pointer"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <svg className="size-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              ></path>
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
              ></path>
              <path
                fill="#FBBC05"
                d="M5.84 14.1A6.6 6.6 0 0 1 5.48 12c0-.73.13-1.44.36-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.83z"
              ></path>
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"
              ></path>
            </svg>
            Continue with Google
          </button>
          <div className="my-5 flex items-center gap-3 text-[11px] uppercase tracking-wider text-muted-foreground">
            <div className="h-px flex-1 bg-border bg-[#272729]"></div><span className="text-[#76767C]"> or sign
            in with email{" "}</span>
            <div className="h-px flex-1 bg-border bg-[#272729]"></div>
          </div>

          <label className="uppercase text-xs font-semibold text-[#85858C]">
            Email
          </label>

          <div className="flex items-center gap-2 rounded-4xl border border-[#1E1E22] focus:outline-2 focus-outline-blue-500 px-3 bg-[#0C0C0F] rounded-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 text-[#85858C]"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>

            <input
              required
              type="email"
              placeholder="you@company.com"
              className="h-11 w-full bg-[#0C0C0F] outline-none text-white placeholder:text-[#85858C] rounded-4xl"
            />
          </div>
          <label className="uppercase text-xs font-semibold text-[#85858C]">
            Password
          </label>

          <div className="flex items-center gap-2 rounded-4xl border border-[#1E1E22] px-3 bg-[#0C0C0F]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 text-[#85858C]"
              aria-hidden="true"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>

            <input
              required
              minLength={6}
              type="password"
              placeholder="••••••••"
              className="h-11 w-full bg-[#0C0C0F] text-sm outline-none placeholder:text-[#85858C] rounded-4xl" 
            />
          </div>
          <button className="bg-blue-600 rounded-4xl p-2 mt-2 cursor-pointer"> Sign In</button>
          <Link href="/signup" className="text-xs text-[#85858C] text-center mt-2">
            Don't have an account? <span className="text-[#6875f6] text-semibold hover:underline"> Sign up </span>
          </Link>
        </div>
      </div>
    </>
  );
}
