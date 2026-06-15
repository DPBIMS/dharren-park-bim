import { notFound } from 'next/navigation';
import LessonClient from './LessonClient';
import lessons from '@/lib/lessonsData';

export function generateStaticParams() {
  return lessons.map(l => ({ id: String(l.id) }));
}

export default async function LessonPage({ params }) {
  const resolvedParams = await params;
  const lesson = lessons.find(l => l.id === Number(resolvedParams.id));
  if (!lesson) notFound();
  return <LessonClient lesson={lesson} allLessons={lessons} />;
}