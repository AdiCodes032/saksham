import React from "react";
import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { getAllLessons, getCategories } from "@/lib/lessons";
import LessonsFilter from "@/components/LessonsFilter";

export const metadata: Metadata = {
  title: "Management & HR Executive Masterclasses | Saksham Executive",
  description:
    "Explore case-based management masterclasses in Strategic HRM, Total Rewards, OKRs & Performance Systems, Campus Recruitment, and Labour Law Compliance.",
};

export default function LessonsPage() {
  const lessons = getAllLessons();
  const categories = getCategories();

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300">
            <GraduationCap className="w-3.5 h-3.5" /> Executive Curriculum
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Management & HR Leadership Masterclasses
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Browse our case-method curriculum inspired by top B-school pedagogy (SIBM Pune). Each module includes downloadable Excel financial models, policy templates, and step-by-step video case analysis.
          </p>
        </div>

        {/* Interactive Filter & Lesson Grid */}
        <LessonsFilter initialLessons={lessons} categories={categories} />
      </div>
    </div>
  );
}
