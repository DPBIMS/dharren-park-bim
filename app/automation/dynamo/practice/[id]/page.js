import { notFound } from 'next/navigation';
import DynamoPracticeLessonClient from './LessonClient';
import dynamoPracticeLessons from '@/lib/dynamoPracticeLessonsData';

export function generateStaticParams() {
  return dynamoPracticeLessons.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = dynamoPracticeLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | Dynamo Practice | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function DynamoPracticeLessonPage({ params }) {
  const { id } = await params;
  const lesson = dynamoPracticeLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <DynamoPracticeLessonClient lesson={lesson} allLessons={dynamoPracticeLessons} />;
}
