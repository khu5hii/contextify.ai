"use client";
import Link from "next/link";
import { useState } from "react";

export default function Test() {
  const [saved, setSaved] = useState(false);

  const analysis = {
    company: "Stripe",
    website: "stripe.com",
    industry: "Financial Technology (Fintech)",
  };
  const handleSave = async () => {
    if (!saved) {
      await fetch("/api/saved-contexts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(analysis),
      });
    }

    setSaved((prev) => !prev);
  };
  return (
    <>
      <main className="mx-auto max-w-6xl px-4 pb-28 pt-4 lg:px-8 lg:pt-8">
        <Link
          href="#"
          className="inline-flex items-center gap-1.5 text-xs text-[#85858c] hover:text-white pb-6"
        >
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
            className="lucide lucide-arrow-left size-3.5"
            aria-hidden="true"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          All analyses
        </Link>
        <header className="flex flex-wrap items-start gap-5 bg-[#141416] p-10 border border-[#262629] rounded-3xl">
          <div className=" min-w-0 flex-1">
            <h1 className="text-3xl font-semibold pb-2">Stripe</h1>
            <p className="text-sm text-[#85858c]">
              Financial Technology (Fintech) · San Francisco, California and
              Dublin, Ireland · stripe.com
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleSave}
              className="inline-flex h-9 items-center gap-1.5 rounded-2xl border border-[#262629] bg-panel px-3 text-xs font-medium hover:bg-[#202024]"
            >
              {saved ? (
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
                  className="size-3.5 text-blue-500"
                >
                  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
                  <path d="m9 10 2 2 4-4" />
                </svg>
              ) : (
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
                  className="size-3.5"
                >
                  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
                </svg>
              )}

              <span>{saved ? "Saved" : "Save"}</span>
            </button>
            <button className="inline-flex h-9 items-center gap-1.5 rounded-2xl border border-[#262629] bg-panel px-3 text-xs font-medium hover:bg-[#ee343b]/10 text-red-500">
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
                className="lucide lucide-trash2 lucide-trash-2 size-3.5"
                aria-hidden="true"
              >
                <path d="M10 11v6"></path>
                <path d="M14 11v6"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                <path d="M3 6h18"></path>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              Delete
            </button>
          </div>
        </header>

        {/* <div>
        <button>Overview</button>
        <button>Products</button>
        <button>Audience</button>
        <button>AI Context</button>
      </div> */}
      </main>
    </>
  );
}
