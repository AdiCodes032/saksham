import React from "react";
import { BookOpenCheck, Briefcase, Award, TrendingUp, Users, Scale } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: BookOpenCheck,
      title: "Case-Method Pedagogy",
      description: "Analyze Harvard and premier B-School style business cases to solve real-world corporate turnaround and HR challenges.",
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Briefcase,
      title: "C-Suite & HRBP Frameworks",
      description: "Master practitioner-tested frameworks: 9-Box Talent Grids, Compa-Ratio calculations, Balanced Scorecards, and Kotter's Change Model.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: TrendingUp,
      title: "Metric-Driven People Analytics",
      description: "Learn to model attrition risk, calculate Human Capital ROI (HCROI), and present data-backed business proposals to the Board.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Scale,
      title: "Labour Law & Statutory Governance",
      description: "Stay ahead with in-depth operational blueprints for the 4 New Labour Codes, POSH inquiry protocols, and ethical governance.",
      color: "text-rose-400",
      bg: "bg-rose-500/10 border-rose-500/20",
    },
    {
      icon: Users,
      title: "Executive Peer Cohorts",
      description: "Network with over 8,500+ HR professionals, management consultants, and corporate leaders across FMCG, Banking, and Tech.",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: Award,
      title: "Executive Credentialing",
      description: "Earn verifiable digital certificates to showcase your strategic management mastery on LinkedIn and your executive portfolio.",
      color: "text-sky-400",
      bg: "bg-sky-500/10 border-sky-500/20",
    },
  ];

  return (
    <section className="py-20 border-t border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Why Executive Leaders Choose Saksham
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for high-impact managers & corporate leaders
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            Bridge the gap between business theory and boardroom execution. Our curriculum is curated by premier B-school alumni (SIBM Pune) and veteran HR practitioners.
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
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
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
