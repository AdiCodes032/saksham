import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Target, Compass, Heart, Users, Award, Shield, ArrowRight } from "lucide-react";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "About Us | Saksham Learn",
  description:
    "Learn about our mission to make high-quality, project-based engineering education accessible to ambitious developers worldwide.",
};

export default function AboutPage() {
  const stats = [
    { label: "Active Developers", value: "12,000+" },
    { label: "Video Masterclasses", value: "50+" },
    { label: "Completion Rate", value: "94%" },
    { label: "Average Rating", value: "4.9/5" },
  ];

  const values = [
    {
      icon: Target,
      title: "Real Production Code",
      description: "We don't teach toy 'todo apps'. Every course is based on scalable architectures used by leading tech startups.",
    },
    {
      icon: Compass,
      title: "Fast-Paced & Concise",
      description: "We respect your time. Concepts are distilled into clear, actionable lessons with zero unnecessary fluff.",
    },
    {
      icon: Heart,
      title: "Community-First Mentorship",
      description: "Learning shouldn't be lonely. Our Discord community and live office hours provide answers within minutes.",
    },
    {
      icon: Shield,
      title: "Up-to-Date Curriculum",
      description: "Frontend moves fast. We update our courses continually so you never waste time on deprecated patterns.",
    },
  ];

  const team = [
    {
      name: "Sarah Jenkins",
      role: "Co-Founder & Chief Instructor",
      bio: "Former Principal Frontend Architect at top Silicon Valley startups. Creator of open-source Next.js dev tools.",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "Alex Rivera",
      role: "Head of Product & Design",
      bio: "Design systems veteran with 10+ years shaping intuitive user experiences and accessible component libraries.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "Dr. Maya Lin",
      role: "Lead AI Engineer",
      bio: "Specialist in autonomous agent architectures, LLM orchestration, and high-throughput vector search systems.",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "David Chen",
      role: "Cloud & Infrastructure Lead",
      bio: "PostgreSQL and distributed systems engineer passionate about resilient database schemas and zero-latency APIs.",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" /> Our Mission
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Empowering developers to build the next generation of software
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Saksham Learn was born out of frustration with long, rambling tutorials that don&apos;t reflect how real engineering teams build products. We create high-fidelity, interactive lessons designed to get you from concept to production in record time.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl text-center space-y-1"
            >
              <p className="text-3xl sm:text-4xl font-black text-white bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Core Principles
            </h2>
            <p className="text-3xl font-extrabold text-white tracking-tight">
              What sets our learning experience apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="glass-card p-8 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership & Instructors */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Instructors & Leadership
            </h2>
            <p className="text-3xl font-extrabold text-white tracking-tight">
              Learn directly from industry leaders
            </p>
            <p className="text-slate-400 text-sm">
              Our instructors have led engineering and design at high-growth startups and established technology companies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 text-center space-y-4">
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-indigo-500/20"
                />
                <div>
                  <h3 className="text-base font-bold text-white">{member.name}</h3>
                  <p className="text-xs text-indigo-400 font-medium">{member.role}</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-indigo-500/30">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Ready to start learning?
            </h2>
            <p className="text-sm text-slate-300">
              Explore our curriculum today and take the next step in your engineering career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/lessons"
                className="w-full sm:w-auto gradient-button text-xs font-semibold text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <span>Browse Lessons</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#pricing"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
