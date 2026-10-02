import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saksham Learn | Master Modern Tech with Interactive Video Lessons",
  description:
    "Accelerate your engineering skills with project-based, interactive video courses on Next.js, Tailwind CSS, Fullstack Architecture, and AI Agents.",
  keywords: [
    "Next.js tutorials",
    "Tailwind CSS v4",
    "Fullstack development",
    "AI agents",
    "Online learning",
    "Coding masterclass",
  ],
  authors: [{ name: "Saksham Learning Team" }],
  openGraph: {
    title: "Saksham Learn | Master Modern Web Tech",
    description:
      "Interactive video lessons for modern developers. Learn Next.js, Tailwind, AI, and scalable backend architecture.",
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
      <body className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
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
