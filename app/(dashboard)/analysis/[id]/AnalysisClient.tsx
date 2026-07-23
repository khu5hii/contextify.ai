"use client";
import { Share_Tech_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { copyContext } from "@/lib/ai-context/copy";
import {
  getAIContext,
  getJsonContext,
  getMarkdownContext,
} from "@/lib/ai-context/formatContext";
import { exportPdf } from "@/lib/ai-context/export";
import { exportTxt, exportMarkdown, exportJson } from "@/lib/ai-context/export";

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function AnalysisClient({ analysis }: { analysis: any }) {
  const data = analysis.data;
  const aiContextPackage = data.aiContextPackage;

  const [saved, setSaved] = useState(false);
  
  async function saveAnalysis() {
    const res = await fetch("/api/saved", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        analysisId: analysis.id,
      }),
    });

    const result = await res.json();

    console.log(result);

    setSaved(result.saved);
  }

  async function deleteAnalysis() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this analysis?",
    );

    if (!confirmed) return;

    const res = await fetch("/api/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        analysisId: analysis.id,
      }),
    });

    if (res.ok) {
      window.location.href = "/analyses";
    }
  }

  const [activeTab, setActiveTab] = useState("overview");

  const versions = {
    chatgpt: getAIContext(data),
    claude: getAIContext(data),
    gemini: getAIContext(data),
    markdown: getMarkdownContext(data),
    json: getJsonContext(data),
  };

  const displayWebsite = new URL(data.website).hostname;

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 pb-28 pt-4 lg:px-8 lg:pt-8">
        <Link
          href="/analyses"
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

        {/* Header/ Company Name */}
        <header className="flex flex-wrap items-start gap-5 bg-[#141416] p-8 border border-[#262629] rounded-4xl">
          <div className=" min-w-0 flex-1">
            <h1 className="text-3xl font-semibold pb-2">{data.companyName}</h1>
            <p className="text-sm text-[#85858c]">
              {data.overview.industry} · {displayWebsite}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={saveAnalysis}
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
            <button
              onClick={deleteAnalysis}
              className="inline-flex h-9 items-center gap-1.5 rounded-2xl border border-[#262629] bg-panel px-3 text-xs font-medium hover:bg-[#ee343b]/10 text-red-500"
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

        {/* Tabs */}
        <div className="flex pt-6 gap-4">
          <button
            onClick={() => {
              setActiveTab("overview");
            }}
            className={`p-2 rounded-2xl pr-4 pl-4 text-sm ${
              activeTab === "overview"
                ? "text-white -translate-y-0.5 bg-[#17171A]"
                : "text-[#85858c] hover:text-white"
            }`}
          >
            Overview
            {activeTab === "overview" && (
              <span className="mx-auto mt-1 block h-0.5 w-6 rounded-full bg-[#6875f6]"></span>
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab("products");
            }}
            className={`p-2 rounded-2xl pr-4 pl-4 text-sm ${
              activeTab === "products"
                ? "text-white -translate-y-0.5 bg-[#17171A]"
                : "text-[#85858c] hover:text-white"
            }`}
          >
            Products
            {activeTab === "products" && (
              <span className="mx-auto mt-1 block h-0.5 w-6 rounded-full bg-[#6875f6]"></span>
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab("audience");
            }}
            className={`p-2 rounded-2xl pr-4 pl-4 text-sm ${
              activeTab === "audience"
                ? "text-white -translate-y-0.5 bg-[#17171A]"
                : "text-[#85858c] hover:text-white"
            }`}
          >
            Audience
            {activeTab === "audience" && (
              <span className="mx-auto mt-1 block h-0.5 w-6 rounded-full bg-[#6875f6]"></span>
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab("aicontext");
            }}
            className={`p-2 rounded-2xl pr-4 pl-4 text-sm ${
              activeTab === "aicontext"
                ? "text-white -translate-y-0.5 bg-[#17171A]"
                : "text-[#85858c] hover:text-white"
            }`}
          >
            AI Context
            {activeTab === "aicontext" && (
              <span className="mx-auto mt-1 block h-0.5 w-6 rounded-full bg-[#6875f6]"></span>
            )}
          </button>
        </div>

        {/* Actual Info */}
        <div>
          {activeTab === "overview" && (
            <>
              <div className="grid gap-4 lg:grid-cols-2 pt-6">
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Executive Summary
                  </p>
                  <p className="leading-6 text-[#DBDBE0]">
                    {data.overview.executiveSummary}
                  </p>
                </div>
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Industry
                  </p>
                  <p>{data.overview.industry}</p>
                </div>
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Mission
                  </p>
                  <p>{data.overview.mission}</p>
                </div>
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Vision
                  </p>
                  <p>{data.overview.vision}</p>
                </div>
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Unique Selling Propositions
                  </p>
                  <ul className="space-y-1.5">
                    {data.overview.usp?.map((usp: string, index: number) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                        <span>{usp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === "products" && (
            <>
              <div className="grid gap-4 lg:grid-cols-3 pt-6">
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Products
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {data.products.products?.map(
                      (products: string, index: number) => (
                        <li key={index} className="flex gap-2 text-sm">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                          <span>{products}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Services
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {data.products.services?.map(
                      (services: string, index: number) => (
                        <li key={index} className="flex gap-2 text-sm">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                          <span>{services}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Features
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {data.products.features?.map(
                      (features: string, index: number) => (
                        <li key={index} className="flex gap-2 text-sm">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                          <span>{features}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="lg:col-span-3 bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Pricing
                  </p>
                  <p className="leading-6 text-[#DBDBE0]">
                    {data.products.pricing}
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === "audience" && (
            <>
              <div className="grid gap-4 lg:grid-cols-1 pt-6">
                {/* Target Audience */}
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Target Audience
                  </p>
                  <p className="leading-6 text-[#DBDBE0]">
                    {data.audience.summary}
                  </p>
                </div>

                {/* Persona */}
                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                    <p
                      className={`uppercase text-xs tracking-widest text-[#00BC6E] ${shareTechMono.className} `}
                    >
                      Persona · {data.audience.personas[0].title}
                    </p>
                    <p className="leading-6 text-[#DBDBE0]">
                      {data.audience.personas[0].description}
                    </p>
                  </div>

                  <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                    <p
                      className={`uppercase text-xs tracking-widest text-[#00BC6E] ${shareTechMono.className} `}
                    >
                      Persona · {data.audience.personas[1]?.title ?? "Not Available"}
                    </p>
                    <p className="leading-6 text-[#DBDBE0]">
                      {data.audience.personas[1]?.description ?? "Not Available"}
                    </p>
                  </div>

                  <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                    <p
                      className={`uppercase text-xs tracking-widest text-[#00BC6E] ${shareTechMono.className} `}
                    >
                      Persona · {data.audience.personas[2]?.title ?? "Not Available"}
                    </p>
                    <p className="leading-6 text-[#DBDBE0]">
                      {data.audience.personas[2]?.description ?? "Not Available"}
                    </p>
                  </div>
                </div>

                {/* Pain Points */}
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Pain Points
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {data.audience.painPoints?.map(
                      (painPoints: string, index: number) => (
                        <li key={index} className="flex gap-2 text-sm">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                          <span>{painPoints}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === "aicontext" && (
            <>
              {/* Tabs */}
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-5 pt-6">
                <button
                  onClick={() => copyContext("chatgpt", versions)}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-[#262629] bg-[#17171A] text-xs font-semibold hover:border-[#6875f6]/40 hover:bg-[#202024]"
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
                    className="lucide lucide-copy size-3.5"
                    aria-hidden="true"
                  >
                    <rect
                      width="14"
                      height="14"
                      x="8"
                      y="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                  ChatGPT
                </button>
                <button
                  onClick={() => copyContext("claude", versions)}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-[#262629] bg-[#17171A] text-xs font-semibold hover:border-[#6875f6]/40 hover:bg-[#202024]"
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
                    className="lucide lucide-copy size-3.5"
                    aria-hidden="true"
                  >
                    <rect
                      width="14"
                      height="14"
                      x="8"
                      y="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                  Claude
                </button>
                <button
                  onClick={() => copyContext("claude", versions)}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-[#262629] bg-[#17171A] text-xs font-semibold hover:border-[#6875f6]/40 hover:bg-[#202024]"
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
                    className="lucide lucide-copy size-3.5"
                    aria-hidden="true"
                  >
                    <rect
                      width="14"
                      height="14"
                      x="8"
                      y="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                  Gemini
                </button>
                <button
                  onClick={() => copyContext("markdown", versions)}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-[#262629] bg-[#17171A] text-xs font-semibold hover:border-[#6875f6]/40 hover:bg-[#202024]"
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
                    className="lucide lucide-file-text size-3.5"
                    aria-hidden="true"
                  >
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                  Markdown
                </button>
                <button
                  onClick={() => copyContext("json", versions)}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-[#262629] bg-[#17171A] text-xs font-semibold hover:border-[#6875f6]/40 hover:bg-[#202024]"
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
                    className="lucide lucide-file-braces size-3.5"
                    aria-hidden="true"
                  >
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path>
                    <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"></path>
                  </svg>
                  JSON
                </button>
              </div>

              {/* Copypaste div */}
              <div className="bg-black rounded-3xl p-2 lg:p-3 lg:space-y-2 border border-[#262629] text-xs mt-4">
                <span
                  className={`uppercase ${shareTechMono.className} text-sm text-[11px] uppercase tracking-wider text-[#85858c] pl-3`}
                >
                  AI-Ready Context Package
                </span>

                <pre
                  className={`text-xs text-[#DBDBE0] ${shareTechMono.className} scrollbar-hide max-h-[60vh] overflow-auto whitespace-pre-wrap wrap-break-word text-[11px] leading-relaxed text-[#f1f1f5]/80 pl-3`}
                >
                  {aiContextPackage}
                </pre>
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 pt-6">
                <button
                  onClick={() => exportTxt(data.companyName, versions.chatgpt)}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-dashed border-[#262629] bg-[#0A0A0C] text-xs text-[#85858C] font-semibold hover:border-[#6875f6]/40 hover:border-dashed hover:text-white"
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
                    className="lucide lucide-download size-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  Export TXT
                </button>
                <button
                  onClick={() =>
                    exportMarkdown(data.companyName, versions.markdown)
                  }
                  className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-dashed border-[#262629] bg-[#0A0A0C] text-xs text-[#85858C] font-semibold hover:border-[#6875f6]/40 hover:border-dashed hover:text-white"
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
                    className="lucide lucide-download size-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  Export Markdown
                </button>
                <button
                  onClick={() => exportJson(data.companyName, data)}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-dashed border-[#262629] bg-[#0A0A0C] text-xs text-[#85858C] font-semibold hover:border-[#6875f6]/40 hover:border-dashed hover:text-white"
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
                    className="lucide lucide-download size-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  Export JSON
                </button>
                <button
                  onClick={() => exportPdf(data.companyName, versions.chatgpt)}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-dashed border-[#262629] bg-[#0A0A0C] text-xs text-[#85858C] font-semibold hover:border-[#6875f6]/40 hover:border-dashed hover:text-white"
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
                    className="lucide lucide-download size-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  Print / PDF
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
