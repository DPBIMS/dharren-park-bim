import { notFound } from 'next/navigation';
import ISOLessonClient from './LessonClient';
import { isoLessons } from '@/lib/isoLessonsData';

export function generateStaticParams() {
  return isoLessons.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = isoLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | ISO 19650 | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function ISOLessonPage({ params }) {
  const { id } = await params;
  const lesson = isoLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <ISOLessonClient lesson={lesson} allLessons={isoLessons} />;
}