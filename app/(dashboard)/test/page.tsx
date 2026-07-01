"use client";
import { Share_Tech_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

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
        </div>
      </main>
    </>
  );
}
