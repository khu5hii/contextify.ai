import Sidebar from "@/components/sidebar";

export default function Dashboard() {
  return (
    <>
      {/* <Sidebar /> */}
      <main className="">
        <div className="flex flex-col gap-4 p-6">
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

          <section className="flex gap-4">
            <div className="space-y-2 bg-[#141416] border border-[#262629] rounded-3xl p-6 max-w-69">
              <div className="flex items-center gap-2 space-x-15">
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
                  className="lucide lucide-sparkles size-4 text-[#81838C]"
                  aria-hidden="true"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
              </div>
              <p className="text-3xl font-semibold">0</p>
            </div>

            <div className="space-y-2 bg-[#141416] border border-[#262629] rounded-3xl p-6 max-w-69">
              <div className="flex items-center gap-2 space-x-15">
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
                  className="lucide lucide-bookmark size-4 text-muted-foreground"
                  aria-hidden="true"
                >
                  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path>
                </svg>
              </div>
              <p className="text-3xl font-semibold">0</p>
            </div>

            <div className="space-y-2 bg-[#141416] border border-[#262629] rounded-3xl p-6 max-w-69">
              <div className="flex items-center gap-2 space-x-15">
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
                  className="lucide lucide-trending-up size-4 text-muted-foreground"
                  aria-hidden="true"
                >
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </div>
              <p className="text-3xl font-semibold">0</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
