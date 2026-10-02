import lessonsData from "@/data/lessons.json";
import { Lesson, CategoryFilter } from "@/lib/types";

export function getAllLessons(): Lesson[] {
  return lessonsData as Lesson[];
}

export function getLessonById(id: string): Lesson | undefined {
  const all = getAllLessons();
  return all.find((lesson) => lesson.id === id || lesson.slug === id);
}

export function getRelatedLessons(currentId: string, limit = 3): Lesson[] {
  const all = getAllLessons();
  const current = getLessonById(currentId);
  if (!current) return all.slice(0, limit);

  const sameCategory = all.filter(
    (l) => l.id !== current.id && l.category === current.category
  );
  const otherCategory = all.filter(
    (l) => l.id !== current.id && l.category !== current.category
  );

  return [...sameCategory, ...otherCategory].slice(0, limit);
}

export function getCategories(): CategoryFilter[] {
  return [
    "All",
    "HR & Talent",
    "Strategy & Leadership",
    "Performance & Rewards",
    "People Analytics",
    "Industrial Relations",
  ];
}
