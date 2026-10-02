import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Share2,
  Sparkles,
  ChevronRight,
  ChevronLeft,
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
      title: "Lesson Not Found | Saksham Learn",
    };
  }

  return {
    title: `${lesson.title} | Saksham Learn`,
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
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Lessons
          </Link>
          <span>/</span>
          <span className="text-indigo-400">{lesson.category}</span>
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
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {lesson.category}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                  {lesson.level}
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800">
                  <Clock className="w-3 h-3 text-indigo-400" /> {lesson.duration}
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
                <Sparkles className="w-4 h-4 text-indigo-400" /> What You Will Master
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

            {/* Prev / Next Lesson Navigation Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              {prevLesson ? (
                <Link
                  href={`/lessons/${prevLesson.slug || prevLesson.id}`}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase text-slate-500">Previous</p>
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
                    <p className="text-[10px] uppercase text-slate-500">Next Up</p>
                    <p className="truncate max-w-[180px] text-indigo-300">{nextLesson.title}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-indigo-400" />
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar: Instructor & Resources (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Instructor Card */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Instructor
              </h3>
              <div className="flex items-center gap-3">
                <img
                  src={lesson.instructor.avatarUrl}
                  alt={lesson.instructor.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{lesson.instructor.name}</h4>
                  <p className="text-xs text-slate-400">{lesson.instructor.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Senior engineering mentor with a focus on high-performance web architecture, developer tooling, and modern frameworks.
              </p>
            </div>

            {/* Lesson Resources */}
            {lesson.resources && lesson.resources.length > 0 && (
              <div className="glass-card rounded-2xl p-6 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Lesson Resources & Code
                </h3>
                <ul className="space-y-2">
                  {lesson.resources.map((res, idx) => (
                    <li key={idx}>
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs text-indigo-300 hover:text-white transition-colors"
                      >
                        <span className="truncate">{res.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Pro Upgrade Teaser */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border border-indigo-500/30 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-400" /> Unlock Full Access
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Get unlimited access to all lessons, interactive playgrounds, downloadable cheat sheets, and mentor Discord.
              </p>
              <Link
                href="/#pricing"
                className="inline-block w-full py-2.5 rounded-xl text-center text-xs font-semibold text-white gradient-button"
              >
                View Pro Membership
              </Link>
            </div>
          </div>
        </div>

        {/* Related Lessons Section */}
        {relatedLessons.length > 0 && (
          <div className="pt-12 border-t border-slate-800/80 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Recommended Next Lessons
              </h2>
              <Link
                href="/lessons"
                className="text-xs font-semibold text-indigo-400 hover:underline"
              >
                View All
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
