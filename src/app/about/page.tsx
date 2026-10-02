import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Target, Compass, Heart, Users, Award, Shield, ArrowRight, GraduationCap, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Faculty & Vision | Saksham Executive Management",
  description:
    "Learn about our mission to bring premier business school case-method education (SIBM Pune alumni leadership) to ambitious corporate professionals and HR leaders.",
};

export default function AboutPage() {
  const stats = [
    { label: "Corporate Leaders Trained", value: "8,500+" },
    { label: "B-School Case Masterclasses", value: "50+" },
    { label: "Executive Recommendation Rate", value: "96%" },
    { label: "Average Program Rating", value: "4.95/5" },
  ];

  const values = [
    {
      icon: Target,
      title: "Real Boardroom Relevance",
      description: "We bypass abstract textbook theories. Every case study and masterclass focuses on actionable decision-making, financial modeling, and corporate governance.",
    },
    {
      icon: Compass,
      title: "Case-Method Rigor",
      description: "Inspired by Harvard Business School and premier Indian institutions like SIBM Pune, we train executives through structured problem dissection and debate.",
    },
    {
      icon: Heart,
      title: "Executive Mentorship",
      description: "Learn directly from practicing CHROs, VP of Human Resources, and management consultants who have led Fortune 500 transformations.",
    },
    {
      icon: Shield,
      title: "Statutory & Governance Excellence",
      description: "Stay ahead of regulatory shifts with comprehensive toolkits covering the 4 New Labour Codes, POSH compliance, and ESG human capital governance.",
    },
  ];

  const faculty = [
    {
      name: "Pratyush Vats",
      role: "Chief Academic Officer & Lead HR Faculty",
      bio: "SIBM Pune Alumnus & Senior HR Business Leader. Specialist in Strategic HRM, Total Rewards Architecture, Campus Recruitment Strategy, and Labour Compliance.",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "Aanya Sharma",
      role: "Head of Executive Leadership & OD",
      bio: "Former McKinsey & Co. Organization Practice consultant with 12+ years advising Fortune 100 leadership teams on post-merger integration and agile OKRs.",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "Vikramaditya Sengupta",
      role: "Lead Faculty: People Analytics & Compensation",
      bio: "Global Head of Total Rewards and HR Operations. Authority on Compa-Ratio design, Mercer benchmarking, and attrition prediction modeling.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "Adv. Rajesh Nair",
      role: "Senior Legal Counsel & Labour Law Advisor",
      bio: "Practicing advocate specializing in Industrial Disputes Act, POSH Internal Complaints Committees, Trade Union negotiations, and statutory labor codes.",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300">
            <GraduationCap className="w-3.5 h-3.5" /> Our Mission & Pedagogy
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Bridging Premier B-School Education & Corporate Leadership
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Saksham Executive Management Academy was founded by alumni of top management institutes like SIBM Pune to democratize world-class business training. We equip managers and HR professionals with the practical acumen, financial models, and strategic clarity needed to lead in modern boardrooms.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl text-center space-y-1"
            >
              <p className="text-3xl sm:text-4xl font-black text-white bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Our Core Principles
            </h2>
            <p className="text-3xl font-extrabold text-white tracking-tight">
              The hallmarks of our executive pedagogy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="glass-card p-8 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
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

        {/* Leadership & Faculty */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Executive Faculty & Industry Mentors
            </h2>
            <p className="text-3xl font-extrabold text-white tracking-tight">
              Learn from premier B-School alumni and HR practitioners
            </p>
            <p className="text-slate-400 text-sm">
              Our faculty members bring decades of cross-industry leadership experience across Fortune 500 enterprises, premier B-schools (SIBM Pune), and high-growth scale-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 text-center space-y-4">
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-amber-500/20"
                />
                <div>
                  <h3 className="text-base font-bold text-white">{member.name}</h3>
                  <p className="text-xs text-amber-400 font-medium">{member.role}</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-amber-500/30">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Ready to elevate your management leadership?
            </h2>
            <p className="text-sm text-slate-300">
              Explore our case-method curriculum today and earn recognized executive credentials.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/lessons"
                className="w-full sm:w-auto gradient-button text-xs font-semibold text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <span>Browse Management Masterclasses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#pricing"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                View Fellowship Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
