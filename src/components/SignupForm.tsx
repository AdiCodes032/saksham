"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Sparkles, GraduationCap } from "lucide-react";
import { trackSignupClick } from "@/lib/analytics";

interface SignupFormProps {
  sourceLocation?: string;
  buttonText?: string;
  placeholderText?: string;
  compact?: boolean;
}

export default function SignupForm({
  sourceLocation = "landing_hero",
  buttonText = "Request Executive Syllabus",
  placeholderText = "Enter your work / corporate email...",
  compact = false,
}: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid business email address");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Track GA Event: "signup_click"
    trackSignupClick(sourceLocation, { email });

    // Simulate backend submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  if (isSuccess) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <div className="text-sm">
          <p className="font-semibold text-emerald-200">Syllabus & Course Access Sent!</p>
          <p className="text-xs text-emerald-400/80">Check your inbox ({email}) for your executive orientation package.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`flex flex-col sm:flex-row items-stretch gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-700/60 shadow-xl focus-within:border-amber-500/80 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all ${
            compact ? "max-w-md" : "max-w-xl"
          }`}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMessage) setErrorMessage("");
            }}
            placeholder={placeholderText}
            required
            aria-label="Work Email Address for Executive Access"
            className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="gradient-button px-6 py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 shrink-0 disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
        {errorMessage && (
          <p className="mt-2 text-xs text-rose-400 pl-2">{errorMessage}</p>
        )}
      </form>
      <div className="mt-2.5 flex items-center gap-4 text-xs text-slate-400 pl-2">
        <span className="flex items-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5 text-amber-400" /> 14-Day Free Case Access
        </span>
        <span>•</span>
        <span>No credit card required</span>
        <span>•</span>
        <span>Downloadable Excel Models</span>
      </div>
    </div>
  );
}
