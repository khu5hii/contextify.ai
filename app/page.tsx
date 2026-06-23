import Navbar from "@/components/navbar";
import { geistSans } from "@/lib/fonts";
import Image from "next/image";

const aiTools = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Cursor",
  "Perplexity",
  "LangChain",
  "n8n",
];

const features = [
  {
    title: "Company Intelligence",
    description:
      "Extract structured company information automatically from any source.",
  },
  {
    title: "AI Context Generation",
    description: "Generate prompts and context packs ready for any LLM.",
  },
  {
    title: "Competitor Discovery",
    description:
      "Identify direct and indirect competitors automatically.",
  },
  {
    title: "Sales Intelligence",
    description:
      "Generate talking points, objections and outreach angles.",
  },
];

const steps = [
  {
    number: "01",
    title: "Enter a source",
    description:
      "Drop in a website URL, Instagram handle, LinkedIn page or YouTube channel.",
  },
  {
    number: "02",
    title: "AI analyzes everything",
    description:
      "Our agents crawl, parse and synthesize public information in seconds.",
  },
  {
    number: "03",
    title: "Get a complete report",
    description:
      "Receive a structured company intelligence profile with all the angles.",
  },
  {
    number: "04",
    title: "Export to any LLM",
    description:
      "Copy or download a context block ready for ChatGPT, Claude or Cursor.",
  },
];

const audiences = [
  "Sales Teams",
  "Marketing Agencies",
  "Startup Founders",
  "Prompt Engineers",
  "Customer Support Teams",
  "Researchers",
];

export default function Landing() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-24 min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-xl">
              <h1 className="text-5xl lg:text-6xl font-bold">
                Turn Any Company Website Into{" "}
                <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                  AI-Ready Intelligence
                </span>
              </h1>

              <p className="mt-7 text-lg text-[#81858C]">
                Analyze websites, products, customers, and brand positioning
                instantly. Generate comprehensive AI-ready context for ChatGPT,
                Claude, Gemini, Cursor, and AI agents.
              </p>
            </div>

            <Image
              src="/demo.png"
              alt="Platform Demo"
              width={600}
              height={600}
              priority
            />
          </div>
        </section>

        {/* AI Tools Banner */}
        <section className="bg-[#0E0E10] border-y border-[#272729] py-12">
          <div className="max-w-7xl mx-auto px-6">
            <p
              className={`${geistSans.className} text-center text-xs uppercase tracking-wider font-semibold text-[#81858C]`}
            >
              Built for teams shipping with ChatGPT, Claude, Gemini, Cursor,
              Perplexity & more
            </p>

            <ul className="flex flex-wrap justify-center gap-6 pt-4 text-sm tracking-wider font-medium text-[#616167]">
              {aiTools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="py-28">
          <div className="flex flex-col items-center px-6">
            <h2 className="uppercase text-xs font-semibold tracking-widest text-[#6875F6] pb-5">
              Features
            </h2>

            <p className="max-w-2xl text-center text-4xl font-bold">
              Everything you need to brief an AI on any company
            </p>
          </div>

          <div className="max-w-7xl mx-auto pl-20 pr-20 mt-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-[#272729] bg-[#141417] p-8"
                >
                  {/* <div className="w-12 h-12 rounded-full bg-indigo-950 mb-6"></div> */}

                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-[#81858C] text-sm max-w-xs">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="flex flex-col items-center px-6">
            <h2 className="uppercase text-xs font-semibold tracking-widest text-[#6875F6] pb-5">
              How It Works
            </h2>

            <p className="max-w-2xl text-center text-4xl font-semibold">
              From URL to AI-ready context in 30 seconds
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl border border-[#272729] bg-[#141417] p-6"
                >
                  <p className="text-[#6875F6] mb-4 text-xs">
                    {step.number}
                  </p>

                  <h3 className="text-lg font-semibold mb-2">
                    {step.title}
                  </h3>

                  <p className="text-[#81858C] text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built For */}
        <section className="py-28">
          <div className="flex flex-col items-center px-6">
            <h2 className="uppercase text-xs font-semibold tracking-widest text-[#6875F6] pb-5">
              Built For
            </h2>

            <p className="max-w-3xl text-center text-4xl font-semibold">
              Teams that move fast with AI
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 px-6 text-sm">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="px-6 py-2 rounded-full border border-[#272729] bg-[#141417] font-medium"
              >
                {audience}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}