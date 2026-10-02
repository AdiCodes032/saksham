import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  ExternalLink,
  BookOpenCheck,
  Briefcase,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  FileSpreadsheet,
} from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import LessonCard from "@/components/LessonCard";
import { getAllLessons, getLessonById, getRelatedLessons } from "@/lib/lessons";

interface LessonPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.flatMap((lesson) => [
    { id: lesson.id },
    { id: lesson.slug },
  ]);
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { id } = await params;
  const lesson = getLessonById(id);

  if (!lesson) {
    return {
      title: "Masterclass Not Found | Saksham Executive",
    };
  }

  return {
    title: `${lesson.title} | Saksham Executive`,
    description: lesson.description,
    openGraph: {
      title: lesson.title,
      description: lesson.description,
      images: [{ url: lesson.thumbnailUrl }],
    },
  };
}

export default async function LessonDetailPage({ params }: LessonPageProps) {
  const { id } = await params;
  const lesson = getLessonById(id);

  if (!lesson) {
    notFound();
  }

  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex(
    (l) => l.id === lesson.id || l.slug === lesson.slug
  );
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  const relatedLessons = getRelatedLessons(lesson.id, 3);

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/lessons" className="hover:text-white flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Curriculum
          </Link>
          <span>/</span>
          <span className="text-amber-400">{lesson.category}</span>
          <span>/</span>
          <span className="text-slate-200 truncate max-w-xs">{lesson.title}</span>
        </div>

        {/* Video Player & Main Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video & Content (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Video Player Component (tracks 'video_play' GA event) */}
            <VideoPlayer
              lessonId={lesson.id}
              lessonTitle={lesson.title}
              embedUrl={lesson.youtubeEmbedUrl}
              thumbnailUrl={lesson.thumbnailUrl}
            />

            {/* Lesson Title & Quick Badges */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {lesson.category}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                  {lesson.level}
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800">
                  <Clock className="w-3 h-3 text-amber-400" /> {lesson.duration}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {lesson.title}
              </h1>

              <p className="text-sm text-slate-300 leading-relaxed">
                {lesson.longDescription || lesson.description}
              </p>
            </div>

            {/* Learning Outcomes Section */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpenCheck className="w-4 h-4 text-amber-400" /> Executive Competencies You Will Build
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lesson.learningObjectives.map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies Analyzed in this Session */}
            {lesson.caseStudies && lesson.caseStudies.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
                <h2 className="text-sm font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-indigo-400" /> Business Cases Analyzed
                </h2>
                <ul className="space-y-2">
                  {lesson.caseStudies.map((cs, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{cs}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Prev / Next Masterclass Navigation Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              {prevLesson ? (
                <Link
                  href={`/lessons/${prevLesson.slug || prevLesson.id}`}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase text-slate-500">Previous Module</p>
                    <p className="truncate max-w-[180px]">{prevLesson.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextLesson && (
                <Link
                  href={`/lessons/${nextLesson.slug || nextLesson.id}`}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors ml-auto text-right"
                >
                  <div>
                    <p className="text-[10px] uppercase text-slate-500">Next Module</p>
                    <p className="truncate max-w-[180px] text-amber-300">{nextLesson.title}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar: Instructor & Resources (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Instructor Card */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Faculty / Lead Instructor
              </h3>
              <div className="flex items-center gap-3">
                <img
                  src={lesson.instructor.avatarUrl}
                  alt={lesson.instructor.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{lesson.instructor.name}</h4>
                  <p className="text-xs text-amber-400">{lesson.instructor.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Senior management consultant and HR leader with deep expertise in B-school curriculum design, talent strategy, compensation benchmarking, and corporate restructuring.
              </p>
              <div className="pt-2 border-t border-slate-800">
                <a
                  href="https://youtube.com/@sibmpune_pratyushvats_hr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-rose-400 hover:text-rose-300 inline-flex items-center gap-1"
                >
                  <span>Watch on YouTube Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Lesson Resources */}
            {lesson.resources && lesson.resources.length > 0 && (
              <div className="glass-card rounded-2xl p-6 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Toolkits & Case Materials
                </h3>
                <ul className="space-y-2">
                  {lesson.resources.map((res, idx) => (
                    <li key={idx}>
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs text-amber-300 hover:text-white transition-colors"
                      >
                        <span className="truncate flex items-center gap-1.5">
                          <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                          {res.title}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Pro Upgrade Teaser */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-amber-950/40 via-slate-900 to-indigo-950/40 border border-amber-500/30 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" /> Executive Fellowship Pass
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Unlock full access to all 50+ management case studies, financial models, Excel templates, and monthly CHRO guest lectures.
              </p>
              <Link
                href="/#pricing"
                className="inline-block w-full py-2.5 rounded-xl text-center text-xs font-semibold text-white gradient-button"
              >
                View Fellowship Plans
              </Link>
            </div>
          </div>
        </div>

        {/* Related Lessons Section */}
        {relatedLessons.length > 0 && (
          <div className="pt-12 border-t border-slate-800/80 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Recommended Management Masterclasses
              </h2>
              <Link
                href="/lessons"
                className="text-xs font-semibold text-amber-400 hover:underline"
              >
                View Full Curriculum
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedLessons.map((rel) => (
                <LessonCard key={rel.id} lesson={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
