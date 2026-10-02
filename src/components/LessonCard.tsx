"use client";

import React from "react";
import Link from "next/link";
import { Play, Clock, BarChart3, User, Sparkles } from "lucide-react";
import { Lesson } from "@/lib/types";
import { trackVideoPlay } from "@/lib/analytics";

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  const handleCardPlayClick = () => {
    trackVideoPlay(lesson.id, lesson.title);
  };

  const getLevelBadgeColor = (level: Lesson["level"]) => {
    switch (level) {
      case "Beginner":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
      case "Intermediate":
        return "bg-sky-500/10 text-sky-300 border-sky-500/20";
      case "Advanced":
        return "bg-purple-500/10 text-purple-300 border-purple-500/20";
    }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col group h-full">
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={lesson.thumbnailUrl}
          alt={lesson.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
        />
        {/* Play Overlay Button */}
        <Link
          href={`/lessons/${lesson.slug || lesson.id}`}
          onClick={handleCardPlayClick}
          className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          aria-label={`Play lesson: ${lesson.title}`}
        >
          <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-white" />
          </div>
        </Link>

        {/* Category & Duration Tags */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-white border border-slate-700/60">
            {lesson.category}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-slate-950/80 backdrop-blur-md text-slate-200">
          <Clock className="w-3 h-3 text-indigo-400" />
          <span>{lesson.duration}</span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${getLevelBadgeColor(
                lesson.level
              )}`}
            >
              {lesson.level}
            </span>
          </div>

          <Link
            href={`/lessons/${lesson.slug || lesson.id}`}
            onClick={handleCardPlayClick}
            className="block"
          >
            <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
              {lesson.title}
            </h3>
          </Link>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {lesson.description}
          </p>
        </div>

        {/* Footer info: Instructor */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <img
              src={lesson.instructor.avatarUrl}
              alt={lesson.instructor.name}
              className="w-6 h-6 rounded-full object-cover border border-slate-700"
            />
            <span className="text-slate-300 font-medium">{lesson.instructor.name}</span>
          </div>

          <Link
            href={`/lessons/${lesson.slug || lesson.id}`}
            onClick={handleCardPlayClick}
            className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1"
          >
            Watch <Play className="w-3 h-3 fill-current" />
          </Link>
        </div>
      </div>
    </div>
  );
}
