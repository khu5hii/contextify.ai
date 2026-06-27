"use client";
import Link from "next/link";
import { useState } from "react";

export default function New() {
  const [website, setWebsite] = useState("");
  const handleAnalyze = async () => {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        website,
      }),
    });

    const data = await response.json();
    console.log(data);
  };
  return (
    <main className="py-10 px-10">
      <div className="mx-auto max-w-2xl space-y-8">
        <Link
          href="/dashboard"
          className="pl-5 text-xs text-[#85858C] hover:text-white transition-colors "
        >
          ← Back to homepage
        </Link>
        <div className="flex flex-col gap-6 p-6">
          <section className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">New Context Analysis</h1>

            <p className="text-sm text-[#81838C]">
              Paste the company's official website (e.g., https://company.com).
            </p>
          </section>

          <section>
            <div className="flex flex-col gap-4 rounded-3xl border border-[#262629] bg-[#141416] p-6">
              <div className="rounded-2xl border border-[#1E1E22] bg-[#0C0C0F] px-4 py-2 transition-all focus-within:ring-1 focus-within:ring-blue-500">
                <label htmlFor="website" className="flex w-full flex-col">
                  <span className="flex items-center gap-2 uppercase text-[10px] tracking-wider text-[#828289]">
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
                      className="size-3"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    Website URL
                    <span className="text-[#6875f6]">*</span>
                  </span>

                  <input
                    id="website"
                    type="url"
                    required
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://company.com"
                    className="h-5 w-full bg-transparent text-white caret-white outline-none placeholder:text-sm placeholder:text-[#808083] font-medium pt-1"
                  />
                </label>
              </div>
              <button onClick={handleAnalyze} className="flex justify-center items-center gap-2 bg-gradient-to-r from-[#0549ab] to-[#620cac] transition hover:from-[#0a5bd6] hover:to-[#7b15d1] py-2 w-full rounded-4xl">
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
                  className="lucide lucide-sparkles size-4"
                  aria-hidden="true"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
                Generate Company Intelligence
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
