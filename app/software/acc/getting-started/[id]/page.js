import { notFound } from 'next/navigation';
import ACCLessonClient from './LessonClient';
import accLessons from '@/lib/accLessonsData';

export function generateStaticParams() {
  return accLessons.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = accLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | Autodesk Construction Cloud | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function ACCLessonPage({ params }) {
  const { id } = await params;
  const lesson = accLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <ACCLessonClient lesson={lesson} allLessons={accLessons} />;
}
