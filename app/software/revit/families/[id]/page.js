import { notFound } from 'next/navigation';
import FamilyLessonClient from './LessonClient';
import { revitFamilyLessons } from '@/lib/revitFamilyLessonsData';

export function generateStaticParams() {
  return revitFamilyLessons.map(l => ({ id: String(l.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = revitFamilyLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | Revit Family Creation | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function FamilyLessonPage({ params }) {
  const { id } = await params;
  const lesson = revitFamilyLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <FamilyLessonClient lesson={lesson} allLessons={revitFamilyLessons} />;
}