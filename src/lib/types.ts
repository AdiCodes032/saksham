export interface Lesson {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "Frontend" | "Backend" | "Fullstack" | "AI & ML" | "Design & UX";
  youtubeEmbedUrl: string;
  thumbnailUrl: string;
  instructor: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  learningObjectives: string[];
  resources?: {
    title: string;
    url: string;
  }[];
}

export type CategoryFilter = "All" | Lesson["category"];
