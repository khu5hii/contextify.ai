"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `flex items-center gap-3 rounded-4xl px-3 py-2 text-sm transition ${
      pathname === path
        ? "bg-[#202024] text-white"
        : "text-[#828289] hover:bg-[#1D1D1F] hover:text-white "
    }`;

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-[#1D1D1F] bg-[#111114] p-4">
      <div className="border-b border-[#1D1D1F] pb-4">
        <h1 className="text-sm font-semibold">
          Contextify <span className="text-[#5C67D7]">AI</span>
        </h1>
      </div>

      <div className="mt-4">
        <Link href="/new">
        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0549ab] to-[#620cac] py-2 text-sm font-semibold transition hover:from-[#0a5bd6] hover:to-[#7b15d1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          New Analysis
        </button>
        </Link>
      </div>

      <nav className="mt-6 flex flex-col gap-2">
        <Link href="/dashboard" className={linkClass("/dashboard")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>
          Dashboard
        </Link>

        <Link href="/analyses" className={linkClass("/analyses")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            <path d="M20 2v4" />
            <path d="M22 4h-4" />
            <circle cx="4" cy="20" r="2" />
          </svg>
          Analyses
        </Link>

        <Link href="/saved" className={linkClass("/saved")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
          </svg>
          Saved Contexts
        </Link>

        <Link href="/exports" className={linkClass("/exports")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M12 15V3" />
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" />
          </svg>
          Exports
        </Link>
      </nav>

      <div className="mt-auto border-t border-[#1D1D1F] pt-4">
        <button className="flex w-full items-center gap-3 rounded-4xl px-3 py-2 text-sm text-gray-300 transition hover:bg-[#1D1D1F] hover:text-red-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="m16 17 5-5-5-5" />
            <path d="M21 12H9" />
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          </svg>
          Sign Out
        </button>
      </div>
    </aside>
  );
}