import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className="px-20">
        <div className="flex flex-col gap-8 p-6">
          <section className="flex flex-col gap-2">
            <h1 className="uppercase text-xs font-semibold text-[#6875F5]">
              Workspace
            </h1>

            <h1 className="text-4xl font-semibold">Company Intelligence</h1>

            <p className="text-[#81838C] text-sm">
              Convert any website or social profile into a structured, AI-ready
              context package.
            </p>
          </section>

          <section className="grid grid-cols-3 gap-4">
            <div className="space-y-2 bg-[#141416] border border-[#262629] rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <p className="uppercase text-xs text-[#81838C] font-semibold">
                  Companies Analysed
                </p>

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
                  className="size-4 text-[#81838C]"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>
              </div>

              <p className="text-3xl font-semibold">0</p>
            </div>

            <div className="space-y-2 bg-[#141416] border border-[#262629] rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <p className="uppercase text-xs text-[#81838C] font-semibold">
                  Saved Contexts
                </p>

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
                  className="size-4 text-[#81838C]"
                >
                  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
                </svg>
              </div>

              <p className="text-3xl font-semibold">0</p>
            </div>

            <div className="space-y-2 bg-[#141416] border border-[#262629] rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <p className="uppercase text-xs text-[#81838C] font-semibold">
                  This Week
                </p>

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
                  className="size-4 text-[#81838C]"
                >
                  <path d="M16 7h6v6" />
                  <path d="m22 7-8.5 8.5-5-5L2 17" />
                </svg>
              </div>

              <p className="text-3xl font-semibold">0</p>
            </div>
          </section>

          <section className="flex items-center justify-between bg-[#141416] border border-[#262629] rounded-3xl p-6">
            <div>
              <p className="text-lg font-semibold">Start a new analysis</p>
              <p className="text-[#81838C] text-sm mt-2">
                {`Drop in a website URL, we'll do the rest ;)`}
              </p>
            </div>

            <Link
              href="#"
              className="flex items-center gap-2 font-semibold text-sm bg-gradient-to-r from-[#0549ab] to-[#620cac] px-4 py-3 rounded-4xl transition-all duration-100 hover:from-[#0a5bd6] hover:to-[#7b15d1]"
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
                className="size-4"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Generate Company Intelligence
            </Link>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h1 className="uppercase text-sm font-medium tracking-widest text-[#81838c]">
                Recent Analyses
              </h1>
              <Link
                href="/analyses"
                className="text-xs text-[#6875f6] hover:underline"
              >
                View all →
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center h-40 bg-[#141416] border border-[#262629] rounded-3xl gap-2">
              <p className="text-sm font-semibold tracking-wider">
                No analyses yet
              </p>
              <p className="text-[#81838c] text-xs">
                Run your first intelligence brief in under 30 seconds.
              </p>
              <Link
                href="#"
                className="flex items-center gap-2 font-semibold text-xs bg-gradient-to-r from-[#0549ab] to-[#620cac] px-4 py-2 rounded-4xl transition-all duration-100 hover:from-[#0a5bd6] hover:to-[#7b15d1] mt-2">
                Create One
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
