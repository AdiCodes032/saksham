"use client";

import React, { useState, useEffect } from "react";
import { Play, Sparkles, CheckCircle } from "lucide-react";
import { trackVideoPlay } from "@/lib/analytics";

interface VideoPlayerProps {
  lessonId: string;
  lessonTitle: string;
  embedUrl: string;
  thumbnailUrl: string;
}

export default function VideoPlayer({
  lessonId,
  lessonTitle,
  embedUrl,
  thumbnailUrl,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasTracked, setHasTracked] = useState(false);

  // Trigger tracking when playback starts
  const handleStartPlay = () => {
    setIsPlaying(true);
    if (!hasTracked) {
      trackVideoPlay(lessonId, lessonTitle);
      setHasTracked(true);
    }
  };

  // If the user navigates to another lesson, reset state
  useEffect(() => {
    setIsPlaying(false);
    setHasTracked(false);
  }, [lessonId]);

  // Construct embed URL with autoplay enabled when started
  const autoplayUrl = embedUrl.includes("?")
    ? `${embedUrl}&autoplay=1&rel=0`
    : `${embedUrl}?autoplay=1&rel=0`;

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
      {!isPlaying ? (
        <div className="relative w-full h-full">
          {/* Custom high-res poster image */}
          <img
            src={thumbnailUrl}
            alt={lessonTitle}
            className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-500"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-semibold text-indigo-300">
                <Sparkles className="w-3.5 h-3.5" /> Interactive Video Mode
              </span>
              <span className="text-xs bg-slate-900/80 px-2.5 py-1 rounded-md text-slate-300">
                1080p 60fps
              </span>
            </div>

            {/* Big Center Play Button */}
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={handleStartPlay}
                className="w-20 h-20 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center pl-1.5 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 ring-8 ring-indigo-500/20 cursor-pointer"
                aria-label={`Play ${lessonTitle}`}
              >
                <Play className="w-8 h-8 fill-white" />
              </button>
              <p className="mt-4 text-sm font-semibold text-white tracking-wide drop-shadow-md">
                Click to Start Video
              </p>
            </div>

            {/* Bottom info bar */}
            <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-xl">
              <span className="truncate max-w-md font-medium">{lessonTitle}</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1 shrink-0">
                <CheckCircle className="w-3.5 h-3.5" /> HD Quality
              </span>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={autoplayUrl}
          title={lessonTitle}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}
