export interface Lesson {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  duration: string;
  level: "Foundation" | "Executive" | "Advanced Leadership";
  category: "HR & Talent" | "Strategy & Leadership" | "Performance & Rewards" | "People Analytics" | "Industrial Relations";
  youtubeEmbedUrl: string;
  thumbnailUrl: string;
  instructor: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  learningObjectives: string[];
  caseStudies?: string[];
  resources?: {
    title: string;
    url: string;
  }[];
}

export type CategoryFilter = "All" | Lesson["category"];
