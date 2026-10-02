"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Github, Twitter, Youtube, ArrowUpRight, Linkedin } from "lucide-react";
import { trackSignupClick } from "@/lib/analytics";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 p-0.5 shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Saksham<span className="text-amber-400">.Executive</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering ambitious corporate managers, HRBPs, and MBA graduates with case-based leadership masterclasses inspired by premier business school pedagogy.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@sibmpune_pratyushvats_hr"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-slate-700 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Col 1 */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Executive Curriculum
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/lessons" className="hover:text-white transition-colors">
                  All Management Masterclasses
                </Link>
              </li>
              <li>
                <Link href="/lessons/strategic-human-resource-management-shrm" className="hover:text-white transition-colors">
                  Strategic HRM & Organization
                </Link>
              </li>
              <li>
                <Link href="/lessons/compensation-and-total-rewards-architecture" className="hover:text-white transition-colors">
                  Total Rewards & Compa-Ratio
                </Link>
              </li>
              <li>
                <Link href="/lessons/performance-management-okrs-balanced-scorecards" className="hover:text-white transition-colors">
                  OKRs & Performance Systems
                </Link>
              </li>
              <li>
                <Link href="/lessons/industrial-relations-labor-laws-compliance" className="hover:text-white transition-colors">
                  Labour Codes & POSH Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Col 2 */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Institute
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Faculty & Leadership
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">
                  Fellowship & Corporate Plans
                </Link>
              </li>
              <li>
                <a href="https://youtube.com/@sibmpune_pratyushvats_hr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                  <span>YouTube Channel</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  B-School Partnerships <span className="ml-1 text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded-full">New</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Newsletter */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Executive HR Briefing
            </h4>
            <p className="text-sm text-slate-400 mb-3">
              Weekly curated case studies, compensation benchmarks, and management frameworks.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                trackSignupClick("footer_newsletter");
                alert("Thank you for subscribing to the Executive HR Briefing!");
              }}
              className="space-y-2"
            >
              <input
                type="email"
                required
                placeholder="executive@company.com"
                className="w-full px-3.5 py-2 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-3.5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Saksham Executive Management Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              Accreditation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
