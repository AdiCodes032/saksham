import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saksham Executive | Management & HR Leadership Masterclasses",
  description:
    "Master Strategic HRM, Total Rewards, OKRs, Campus Recruitment, and Labour Law Compliance with case-method masterclasses inspired by SIBM Pune & premier business schools.",
  keywords: [
    "Management training",
    "HR leadership courses",
    "Strategic HRM",
    "SIBM Pune HR",
    "Total Rewards architecture",
    "Performance appraisal OKRs",
    "Labour code compliance India",
    "Executive MBA case studies",
  ],
  authors: [{ name: "Saksham Executive Management Academy" }],
  openGraph: {
    title: "Saksham Executive | Management & HR Masterclasses",
    description:
      "Executive video masterclasses and case studies on Strategic HRM, Compensation Design, People Analytics, and Corporate Leadership.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Google Analytics 4 via @next/third-parties */}
        {gaId && <GoogleAnalytics gaId={gaId} />}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
