import { notFound } from 'next/navigation';
import DynamoLessonClient from './LessonClient';
import dynamoLessons from '@/lib/dynamoLessonsData';

export function generateStaticParams() {
  return dynamoLessons.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = dynamoLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | Dynamo | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function DynamoLessonPage({ params }) {
  const { id } = await params;
  const lesson = dynamoLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <DynamoLessonClient lesson={lesson} allLessons={dynamoLessons} />;
}
