import { notFound } from 'next/navigation';
import PyRevitPracticeLessonClient from './LessonClient';
import pyrevitPracticeLessons from '@/lib/pyrevitPracticeLessonsData';

export function generateStaticParams() {
  return pyrevitPracticeLessons.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = pyrevitPracticeLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | pyRevit Practice | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function PyRevitPracticeLessonPage({ params }) {
  const { id } = await params;
  const lesson = pyrevitPracticeLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <PyRevitPracticeLessonClient lesson={lesson} allLessons={pyrevitPracticeLessons} />;
}
