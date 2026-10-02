"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Play, Code2, Star, ArrowRight, CheckCircle } from "lucide-react";
import SignupForm from "./SignupForm";
import { trackVideoPlay } from "@/lib/analytics";

export default function HeroSection() {
  const handleDemoVideoClick = () => {
    trackVideoPlay("hero-demo-preview", "Platform Interactive Demo Preview");
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-medium text-indigo-300">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
              <span>New Masterclasses Added for 2026</span>
              <ArrowRight className="w-3 h-3 text-indigo-400" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Master Modern Tech with{" "}
              <span className="gradient-text-accent">Interactive Video Lessons</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Accelerate your engineering skills through production-tested workflows in Next.js, Tailwind CSS v4, Fullstack Architecture, and AI Agents.
            </p>

            {/* Email Signup Form (tracks 'signup_click') */}
            <div id="signup" className="pt-2">
              <SignupForm sourceLocation="hero_main" buttonText="Claim Free Access" />
            </div>

            {/* Social proof */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Student avatar"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Student avatar"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Student avatar"
                />
                <div className="h-8 w-8 rounded-full ring-2 ring-slate-900 bg-indigo-600 flex items-center justify-center font-semibold text-[10px] text-white">
                  +12k
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="font-semibold text-slate-200 ml-1 text-xs">4.9 / 5.0</span>
                </div>
                <span className="text-slate-400 text-[11px]">from 2,400+ verified developers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive App Preview Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden glass-card p-1 shadow-2xl">
                {/* Window header */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Code2 className="w-3 h-3 text-indigo-400" /> Lesson 01: Next.js Architecture
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded">
                    HD 4K
                  </span>
                </div>

                {/* Video Preview Thumbnail / Player Mock */}
                <div className="relative aspect-video bg-slate-950 group">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
                    alt="Lesson preview screenshot"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <Link
                      href="/lessons/intro-to-nextjs-app-router"
                      onClick={handleDemoVideoClick}
                      className="w-16 h-16 rounded-full bg-indigo-600/90 text-white flex items-center justify-center pl-1 shadow-xl hover:scale-110 hover:bg-indigo-500 transition-all duration-200 group-hover:ring-8 group-hover:ring-indigo-500/20"
                      aria-label="Play sample lesson"
                    >
                      <Play className="w-7 h-7 fill-white" />
                    </Link>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs text-white">
                    <span className="font-medium text-slate-200">18:45 / 18:45</span>
                    <span className="text-indigo-400 font-semibold text-[11px]">Click to Watch Full Lesson</span>
                  </div>
                </div>

                {/* Lesson Info Footer */}
                <div className="p-4 bg-slate-900/95 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Curriculum includes:</span>
                    <span className="text-indigo-400 font-semibold">6 Masterclasses</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>App Router Architecture</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Tailwind CSS v4 Tokens</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Real-time AI Agents</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>PostgreSQL & Auth APIs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
