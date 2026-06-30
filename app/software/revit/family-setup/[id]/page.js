import { notFound } from 'next/navigation';
import FamilySetupLessonClient from './LessonClient';
import { revitFamilySetupLessons } from '@/lib/revitFamilySetupLessonsData';

export function generateStaticParams() {
  return revitFamilySetupLessons.map(l => ({ id: String(l.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = revitFamilySetupLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | Revit Family Setup | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function FamilySetupLessonPage({ params }) {
  const { id } = await params;
  const lesson = revitFamilySetupLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <FamilySetupLessonClient lesson={lesson} allLessons={revitFamilySetupLessons} />;
}
