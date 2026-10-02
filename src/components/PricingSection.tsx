"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";
import { trackSignupClick } from "@/lib/analytics";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter Free",
      price: "$0",
      period: "forever",
      description: "Essential foundation courses for beginners dipping into modern web dev.",
      features: [
        "Access to introductory lessons",
        "Community forum discussions",
        "Standard video quality (720p)",
        "Code snippets preview",
      ],
      ctaText: "Start Learning Free",
      highlighted: false,
      buttonStyle: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
    },
    {
      name: "Pro Developer",
      price: "$19",
      period: "/month",
      badge: "Most Popular",
      description: "Full access to our masterclasses, architecture breakdowns, and Discord.",
      features: [
        "Full access to all 50+ video lessons",
        "4K Ultra-HD streaming & downloads",
        "Complete source code & GitHub repos",
        "Private instructor Discord channels",
        "Monthly live Q&A sessions",
        "Official course completion certificates",
      ],
      ctaText: "Start 14-Day Free Trial",
      highlighted: true,
      buttonStyle: "gradient-button text-white font-semibold shadow-lg shadow-indigo-500/25",
    },
    {
      name: "Lifetime Access",
      price: "$199",
      period: "one-time",
      description: "Pay once, own all current and future courses with lifetime priority updates.",
      features: [
        "Lifetime access to all existing & future lessons",
        "Priority 1-on-1 code reviews from mentors",
        "Direct access to instructor office hours",
        "Lifetime Discord VIP role",
        "Commercial license for project templates",
      ],
      ctaText: "Get Lifetime Access",
      highlighted: false,
      buttonStyle: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
    },
  ];

  const handlePlanClick = (planName: string) => {
    trackSignupClick("pricing_teaser_card", { plan: planName });
  };

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5" /> Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Invest in your engineering career
          </h2>
          <p className="text-slate-400 text-base">
            Start free, upgrade anytime. All paid plans include a 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.highlighted
                  ? "bg-slate-900 border-2 border-indigo-500/80 shadow-2xl shadow-indigo-500/10 scale-105 z-10"
                  : "glass-card border border-slate-800"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm font-medium">{plan.period}</span>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="border-t border-slate-800/80 pt-6 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                    What&apos;s included:
                  </p>
                  <ul className="space-y-3 text-xs text-slate-300">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="#signup"
                onClick={() => handlePlanClick(plan.name)}
                className={`w-full py-3 rounded-xl text-center text-sm font-semibold transition-all cursor-pointer ${plan.buttonStyle}`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
