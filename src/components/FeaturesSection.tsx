import React from "react";
import { PlayCircle, Laptop, ShieldCheck, Zap, Award, Users } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: PlayCircle,
      title: "4K Bite-Sized Video Lessons",
      description: "Concise 15-30 minute masterclasses taught by top engineers, skipping fluff to focus on real architectures.",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Laptop,
      title: "Hands-on Production Code",
      description: "Every module includes full GitHub repositories, architectural diagrams, and battle-tested boilerplates.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: Zap,
      title: "Interactive Code Sandboxes",
      description: "Run live Next.js code directly alongside the video player with zero local configuration required.",
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Grade Best Practices",
      description: "Learn security, RBAC authorization, telemetry, SEO, and performance optimization from day one.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Users,
      title: "Private Discord Community",
      description: "Collaborate with 10,000+ engineers, get code reviews from instructors, and participate in weekly hackathons.",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: Award,
      title: "Verified Skill Certification",
      description: "Earn verifiable credential badges to showcase your proficiency on LinkedIn, GitHub, and your resume.",
      color: "text-pink-400",
      bg: "bg-pink-500/10 border-pink-500/20",
    },
  ];

  return (
    <section className="py-20 border-t border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Why Learn With Us
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for developers who want to ship fast
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            Stop watching outdated 40-hour tutorials. Our focused masterclasses teach modern web architecture using standard production tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${feature.bg}`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
