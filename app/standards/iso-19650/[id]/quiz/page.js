import { notFound } from 'next/navigation';
import ISOQuizClient from './QuizClient';
import { isoLessons } from '@/lib/isoLessonsData';
import { isoQuizzes } from '@/lib/isoQuizzesData';

export function generateStaticParams() {
  return isoLessons.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = isoLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Quiz Not Found' };
  return {
    title: `Quiz — ${lesson.title} | ISO 19650 | Dharren Park BIM`,
    description: `Test your knowledge of ${lesson.title} with 10 questions. Passing score: 75%.`,
  };
}

export default async function ISOQuizPage({ params }) {
  const { id } = await params;
  const lesson = isoLessons.find(l => l.id === id);
  // isoQuizzes is an array — find by lessonId
  const quiz = isoQuizzes.find(q => q.lessonId === id);
  if (!lesson || !quiz) notFound();
  return <ISOQuizClient quiz={quiz} lesson={lesson} />;
}
