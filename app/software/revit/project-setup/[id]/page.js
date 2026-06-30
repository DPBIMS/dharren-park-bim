import { notFound } from 'next/navigation';
import SetupLessonClient from './LessonClient';
import { revitSetupLessons } from '@/lib/revitSetupLessonsData';

export function generateStaticParams() {
  return revitSetupLessons.map(l => ({ id: String(l.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = revitSetupLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | Revit Project Setup | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function SetupLessonPage({ params }) {
  const { id } = await params;
  const lesson = revitSetupLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <SetupLessonClient lesson={lesson} allLessons={revitSetupLessons} />;
}