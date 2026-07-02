import { notFound } from 'next/navigation';
import PyRevitLessonClient from './LessonClient';
import pyrevitLessons from '@/lib/pyrevitLessonsData';

export function generateStaticParams() {
  return pyrevitLessons.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = pyrevitLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | pyRevit | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function PyRevitLessonPage({ params }) {
  const { id } = await params;
  const lesson = pyrevitLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <PyRevitLessonClient lesson={lesson} allLessons={pyrevitLessons} />;
}
