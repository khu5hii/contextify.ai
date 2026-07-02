"use client";
import { Share_Tech_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { copyContext } from "@/lib/ai-context/copy";
import { getAIContext, getJsonContext, getMarkdownContext } from "@/lib/ai-context/formatContext";
import {
  exportTxt,
  exportMarkdown,
  exportJson,
  printPdf,
} from "@/lib/ai-context/export";

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

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

  const [activeTab, setActiveTab] = useState("overview");
  const aiContextPackage = `
  COMPANY PROFILE

  Company Name: Stripe
  Industry: Financial Technology (Fintech)
  Website: https://stripe.com

  Summary:
  Stripe is a global technology company that builds economic infrastructure for the internet. It provides a suite of APIs and
  tools that allow businesses of all sizes, from startups to Fortune 500s, to accept payments, manage subscriptions, and 
  automate financial processes. By bridging the gap between banking systems and digital commerce, Stripe empowers millions of
  companies to scale globally and participate in the internet economy.

  Mission:
  To grow the GDP of the internet.

  Vision:
  To be the indispensable financial infrastructure that powers the world's most innovative companies.

  Products:
  - Stripe Payments
  - Stripe Billing
  - Stripe Connect
  - Stripe Issuing
  - Stripe Treasury
  - Stripe Radar

  Services:
  - Tax compliance management (Stripe Tax)
  - Global payout distribution
  - Identity verification (Stripe Identity)
  - Business formation (Stripe Atlas)
  - Enterprise financial reporting
  - Revenue recognition automation

  Target Audience:
  Stripe targets a broad spectrum of digital-first entities, ranging from individual developers and small SaaS startups to massive global marketplaces and traditional enterprises undergoing digital transformation. They focus on businesses that require scalable, reliable, and developer-friendly financial tools.

  Brand Voice:
  Stripe’s voice is authoritative, sophisticated, and forward-thinking, yet remarkably clear and accessible. It balances technical precision with a visionary optimism about the future of global commerce.

  Unique Selling Propositions:
  - Developer-first experience with industry-leading API documentation
  - A unified platform for the entire financial stack
  - Continuous innovation and rapid deployment of new financial tools
  - Unmatched reliability and uptime at massive scale
  - Built-in machine learning for conversion and fraud optimization

  Sales Talking Points:
  - Stripe increases checkout conversion rates by up to 35% through optimized payment UIs.
  - Eliminate manual work by unifying payments and billing into a single dashboard.
  - Future-proof your business with an infrastructure that evolves as fast as the internet does.
  - Reduce fraud losses without blocking legitimate customers using Radar's ML models.
  - Launch in new global markets in days, not months, by leveraging our pre-built local payment methods.

  FAQs:
  Q: Does Stripe support international payments?
  A: Yes, Stripe allows you to accept payments from customers worldwide in over 135 different currencies.

  Q: How long does it take to get paid?
  A: Payments are typically available on a rolling 2-day schedule, though this varies by country and business type.

  Q: Is Stripe secure?
  A: Stripe is a PCI Service Provider Level 1, the most stringent level of certification available in the payments industry.

  Q: Can I use Stripe for a mobile app?
  A: Absolutely; Stripe provides comprehensive SDKs for iOS, Android, and cross-platform frameworks like React Native.

  Q: Does Stripe help with sales tax?
  A: Yes, Stripe Tax automatically calculates and collects sales tax, VAT, and GST in over 30 countries.

  Important Context:
  You are an expert financial infrastructure consultant and brand strategist acting on behalf of Stripe. Your knowledge covers the entire Stripe ecosystem, including Payments, Billing, Connect, and Issuing. You understand that Stripe's primary goal is to 'increase the GDP of the internet' by reducing friction in the global financial system. When communicating, adopt a brand voice that is clear, authoritative, and developer-friendly. You are speaking to a diverse audience including software engineers, startup founders, and enterprise CFOs. Your responses should reflect a deep understanding of API-first architecture, international payment regulations, and modern monetization models like SaaS or marketplaces. You should emphasize Stripe's ability to help businesses scale globally while maintaining high security and compliance. When asked about strategy, prioritize conversion optimization, fraud prevention through machine learning, and the benefits of a unified financial stack. Never mention limitations without offering a sophisticated workaround or a broader strategic benefit. Use the provided data to answer questions about products, pricing, and competitive positioning accurately.

  Use this information whenever answering questions about this company.
  `;
  
  const versions = {
    chatgpt: getAIContext(analysis),
    claude: getAIContext(analysis),
    gemini: getAIContext(analysis),
    markdown: getMarkdownContext(analysis),
    json: getJsonContext(analysis),
  };
  
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
                    Stripe is a global technology company that builds economic
                    infrastructure for the internet. It provides a suite of APIs
                    and tools that allow businesses of all sizes, from startups
                    to Fortune 500s, to accept payments, manage subscriptions,
                    and automate financial processes. By bridging the gap
                    between banking systems and digital commerce, Stripe
                    empowers millions of companies to scale globally and
                    participate in the internet economy.
                  </p>
                </div>
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Industry
                  </p>
                  <p>Financial Technology (Fintech)</p>
                </div>
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Mission
                  </p>
                  <p>To grow the GDP of the internet.</p>
                </div>
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Vision
                  </p>
                  <p>
                    To be the indispensable financial infrastructure that powers
                    the world's most innovative companies.
                  </p>
                </div>
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Unique Selling Propositions
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      <span>
                        Developer-first experience with industry-leading API
                        documentation
                      </span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      <span>
                        A unified platform for the entire financial stack
                      </span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      <span>
                        Continuous innovation and rapid deployment of new
                        financial tools
                      </span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      <span>
                        Unmatched reliability and uptime at massive scale
                      </span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      <span>
                        Built-in machine learning for conversion and fraud
                        optimization
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === "products" && (
            <>
              <div className="grid gap-4 lg:grid-cols-3 pt-6">
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p>Products</p>
                  <ul className="space-y-1.5 pt-2">
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Stripe Payments
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Stripe Billing
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Stripe Connect
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Stripe Issuing
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Stripe Treasury
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Stripe Radar
                    </li>
                  </ul>
                </div>

                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p>Services</p>
                  <ul className="space-y-1.5 pt-2">
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Tax compliance management (Stripe Tax)
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Global payout distribution
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Identity verification (Stripe Identity)
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Business formation (Stripe Atlas)
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Enterprise financial reporting
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Revenue recognition automation
                    </li>
                  </ul>
                </div>

                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p>Features</p>
                  <ul className="space-y-1.5 pt-2">
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Pre-built checkout optimization
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Multi-currency support for 135+ currencies
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Advanced fraud detection with machine learning
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Scalable API-first architecture
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Real-time data orchestration and reporting
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Customizable UI components
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Direct bank integrations
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      24/7 global support
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-3 bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Pricing
                  </p>
                  <p className="leading-6 text-[#DBDBE0]">
                    Transparent pay-as-you-go pricing (2.9% + 30 cents per
                    transaction) for most users, with custom volume-based
                    discounts for large enterprises.
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
                    Stripe targets a broad spectrum of digital-first entities,
                    ranging from individual developers and small SaaS startups
                    to massive global marketplaces and traditional enterprises
                    undergoing digital transformation. They focus on businesses
                    that require scalable, reliable, and developer-friendly
                    financial tools.
                  </p>
                </div>

                {/* Persona */}
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#00BC6E] ${shareTechMono.className} `}
                  >
                    Persona · The Technical Founder
                  </p>
                  <p className="leading-6 text-[#DBDBE0]">
                    Seeks a robust API with excellent documentation to get
                    payments running instantly without worrying about legacy
                    banking complexity.
                  </p>
                </div>

                {/* Pain Points */}
                <div className="bg-[#17171A] rounded-3xl p-2 lg:p-5 lg:space-y-2 border border-[#262629] text-sm">
                  <p
                    className={`uppercase text-xs tracking-widest text-[#6875f6] ${shareTechMono.className} `}
                  >
                    Pain Points
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      High complexity of global payment regulations
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Difficulty managing recurring billing and churn
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Integration friction with legacy banking systems
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Vulnerability to online payment fraud
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Inefficient reconciliation and financial reporting
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#6875f6]"></span>
                      Inability to scale cross-border payments
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === "aicontext" && (
            <>
              {/* Tabs */}
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-5 pt-6">
                <button onClick={() => copyContext("chatgpt", versions)} className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-[#262629] bg-[#17171A] text-xs font-semibold hover:border-[#6875f6]/40 hover:bg-[#202024]">
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
                <button onClick={() => copyContext("claude", versions)} className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-[#262629] bg-[#17171A] text-xs font-semibold hover:border-[#6875f6]/40 hover:bg-[#202024]">
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
                <button onClick={() => copyContext("claude", versions)} className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-[#262629] bg-[#17171A] text-xs font-semibold hover:border-[#6875f6]/40 hover:bg-[#202024]">
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
                <button onClick={() => copyContext("markdown", versions)} className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-[#262629] bg-[#17171A] text-xs font-semibold hover:border-[#6875f6]/40 hover:bg-[#202024]">
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
                <button onClick={() => copyContext("json", versions)} className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-[#262629] bg-[#17171A] text-xs font-semibold hover:border-[#6875f6]/40 hover:bg-[#202024]">
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
                  className={`text-xs text-[#DBDBE0] ${shareTechMono.className} scrollbar-hide max-h-[60vh] overflow-auto whitespace-pre-wrap break-words text-[11px] leading-relaxed text-[#f1f1f5]/80 `}
                >
                  {aiContextPackage}
                </pre>
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 pt-6">
                <button onClick={() => exportTxt(analysis.company, versions.chatgpt)} className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-dashed border-[#262629] bg-[#0A0A0C] text-xs text-[#85858C] font-semibold hover:border-[#6875f6]/40 hover:border-dashed hover:text-white">
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
                <button onClick={() => exportMarkdown(analysis.company, versions.markdown)} className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-dashed border-[#262629] bg-[#0A0A0C] text-xs text-[#85858C] font-semibold hover:border-[#6875f6]/40 hover:border-dashed hover:text-white">
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
                <button onClick={() => exportJson(analysis.company, versions.json)} className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-dashed border-[#262629] bg-[#0A0A0C] text-xs text-[#85858C] font-semibold hover:border-[#6875f6]/40 hover:border-dashed hover:text-white">
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
                <button onClick={printPdf} className="flex h-10 items-center justify-center gap-1.5 rounded-4xl border border-dashed border-[#262629] bg-[#0A0A0C] text-xs text-[#85858C] font-semibold hover:border-[#6875f6]/40 hover:border-dashed hover:text-white">
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
