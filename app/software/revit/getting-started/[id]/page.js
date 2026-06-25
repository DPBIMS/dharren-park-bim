import { notFound } from 'next/navigation';
import RevitLessonClient from './LessonClient';
import revitLessons from '@/lib/revitLessonsData';

export function generateStaticParams() {
  return revitLessons.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = revitLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | Revit Getting Started | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function RevitLessonPage({ params }) {
  const { id } = await params;
  const lesson = revitLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <RevitLessonClient lesson={lesson} allLessons={revitLessons} />;
}
