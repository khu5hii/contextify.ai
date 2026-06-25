import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function Saved() {
  return (
    <>
      <main className="px-20">
        <div className="flex flex-col gap-6 p-6">
          <section className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">Saved Contexts</h1>

            <p className="text-[#81838C] text-sm">
              Bookmarked intelligence packages for quick access.
            </p>
          </section>

          <section>
            <div className="flex flex-col items-center justify-center h-50 bg-[#141416] border border-[#262629] rounded-3xl gap-2">
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
                className="lucide lucide-sparkles mx-auto size-8 text-[#565658]"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx="4" cy="20" r="2"></circle>
              </svg>
              <p className="text-sm font-semibold tracking-wider">
                Nothing saved yet
              </p>
              <p className="text-[#81838c] text-xs">
                Open an analysis and tap Save to bookmark it.
              </p>
              <Link
                href="#"
                className="flex items-center gap-2 font-semibold text-xs bg-gradient-to-r from-[#0549ab] to-[#620cac] px-4 py-2 rounded-4xl transition-all duration-100 hover:from-[#0a5bd6] hover:to-[#7b15d1] mt-2"
              >
                Create One
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
