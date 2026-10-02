"use client";

import { sendGAEvent } from "@next/third-parties/google";

/**
 * Custom tracking for user signups / newsletter CTA clicks
 */
export function trackSignupClick(location: string, details?: { email?: string; plan?: string }) {
  const eventPayload = {
    event: "signup_click",
    value: {
      location,
      plan: details?.plan || "default",
      timestamp: new Date().toISOString(),
    },
  };

  try {
    sendGAEvent(eventPayload);
  } catch (err) {
    console.warn("[Analytics] Failed to send GA signup_click event:", err);
  }

  // Also log for local debugging visibility
  if (process.env.NODE_ENV !== "production") {
    console.log("📊 [GA Event] signup_click:", eventPayload);
  }
}

/**
 * Custom tracking for video play interactions
 */
export function trackVideoPlay(lessonId: string, lessonTitle: string) {
  const eventPayload = {
    event: "video_play",
    value: {
      lesson_id: lessonId,
      lesson_title: lessonTitle,
      timestamp: new Date().toISOString(),
    },
  };

  try {
    sendGAEvent(eventPayload);
  } catch (err) {
    console.warn("[Analytics] Failed to send GA video_play event:", err);
  }

  // Also log for local debugging visibility
  if (process.env.NODE_ENV !== "production") {
    console.log("📊 [GA Event] video_play:", eventPayload);
  }
}
