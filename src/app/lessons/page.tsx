import React from "react";
import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { getAllLessons, getCategories } from "@/lib/lessons";
import LessonsFilter from "@/components/LessonsFilter";

export const metadata: Metadata = {
  title: "Video Lessons & Masterclasses | Saksham Learn",
  description:
    "Explore in-depth video lessons on Next.js, Tailwind CSS, AI Engineering, Fullstack SaaS, and modern frontend design.",
};

export default function LessonsPage() {
  const lessons = getAllLessons();
  const categories = getCategories();

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" /> Course Catalog
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Video Lessons & Masterclasses
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Browse our curated library of production-focused tutorials. Each lesson comes with full source code, architecture breakdowns, and step-by-step video guidance.
          </p>
        </div>

        {/* Interactive Filter & Lesson Grid */}
        <LessonsFilter initialLessons={lessons} categories={categories} />
      </div>
    </div>
  );
}
