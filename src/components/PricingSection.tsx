"use client";

import React from "react";
import { Check, Sparkles, Award } from "lucide-react";
import { trackSignupClick } from "@/lib/analytics";

export default function PricingSection() {
  const plans = [
    {
      name: "Executive Foundation",
      price: "$0",
      period: "forever",
      description: "Essential case study previews and foundational HR concepts for emerging managers.",
      features: [
        "Access to foundational video masterclasses",
        "Public case study summaries",
        "Standard video streaming (720p)",
        "Downloadable HR glossary & checklists",
      ],
      ctaText: "Enroll in Free Track",
      highlighted: false,
      buttonStyle: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
    },
    {
      name: "Executive Fellowship",
      price: "$29",
      period: "/month",
      badge: "Most Popular",
      description: "Full access to all B-school case studies, downloadable Excel models, and peer cohort access.",
      features: [
        "Full access to all 50+ Management & HR Masterclasses",
        "Downloadable Financial & Compa-Ratio Excel models",
        "Full case studies with solution frameworks",
        "Monthly live masterclasses with CHROs & Alumni",
        "Private Executive Discord / Slack community",
        "Verified Executive Certificate of Completion",
      ],
      ctaText: "Start 14-Day Free Executive Trial",
      highlighted: true,
      buttonStyle: "gradient-button text-white font-semibold shadow-lg shadow-indigo-500/25",
    },
    {
      name: "Corporate L&D Suite",
      price: "$249",
      period: "/quarter",
      description: "Comprehensive training solution for HR teams, business units, and corporate managers.",
      features: [
        "Multi-seat access for your entire HR/Management team",
        "Customized case studies tailored to your industry",
        "Direct 1-on-1 executive mentorship sessions",
        "LMS integration & corporate progress analytics",
        "Quarterly boardroom presentation workshops",
      ],
      ctaText: "Schedule Corporate Consultation",
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5" /> Executive Membership Options
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Invest in your corporate leadership trajectory
          </h2>
          <p className="text-slate-400 text-base">
            Start free, upgrade anytime. All paid programs include a 30-day corporate satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.highlighted
                  ? "bg-slate-900 border-2 border-amber-500/80 shadow-2xl shadow-amber-500/10 scale-105 z-10"
                  : "glass-card border border-slate-800"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-indigo-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
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
                    Curriculum Inclusions:
                  </p>
                  <ul className="space-y-3 text-xs text-slate-300">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
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
