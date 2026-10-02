import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Sparkles, Terminal, Cpu, Database, Layout } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import SignupForm from "@/components/SignupForm";
import LessonCard from "@/components/LessonCard";
import { getAllLessons } from "@/lib/lessons";

export default function HomePage() {
  const allLessons = getAllLessons();
  const featuredLessons = allLessons.slice(0, 3);

  const techStack = [
    { name: "Next.js 15", icon: Terminal },
    { name: "Tailwind CSS", icon: Layout },
    { name: "TypeScript", icon: Code },
    { name: "AI Agents", icon: Cpu },
    { name: "PostgreSQL", icon: Database },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Tech Stack Ticker / Logos */}
      <section className="py-8 border-y border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
            Curriculum Built Around Modern Industry Standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {techStack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5 text-indigo-400" />
                  <span className="font-semibold text-sm tracking-tight">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Lessons Preview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Handpicked Courses
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Masterclasses
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Start watching our most popular courses and build production apps today.
              </p>
            </div>
            <Link
              href="/lessons"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Explore All {allLessons.length} Lessons</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <FeaturesSection />

      {/* 5. Pricing Teaser Section */}
      <PricingSection />

      {/* 6. Bottom Email Signup CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-14 relative overflow-hidden border border-indigo-500/30 text-center shadow-2xl">
            {/* Background decorative glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-xs font-semibold text-indigo-300">
                <Sparkles className="w-3.5 h-3.5" /> Start Your Learning Journey
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to level up your engineering career?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Join thousands of software engineers learning modern web stacks and building real-world products.
              </p>

              <div className="pt-2 flex justify-center">
                <SignupForm
                  sourceLocation="bottom_cta_banner"
                  buttonText="Get Instant Access"
                  placeholderText="Enter your email to unlock lessons..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
