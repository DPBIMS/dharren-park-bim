import { notFound } from 'next/navigation';
import FormaLessonClient from './LessonClient';
import formaLessons from '@/lib/formaLessonsData';

export function generateStaticParams() {
  return formaLessons.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = formaLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | Autodesk Forma | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function FormaLessonPage({ params }) {
  const { id } = await params;
  const lesson = formaLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <FormaLessonClient lesson={lesson} allLessons={formaLessons} />;
}
