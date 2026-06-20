import { notFound } from 'next/navigation';
import QuizClient from './QuizClient';
import quizzes from '@/lib/quizzesData';
import lessons from '@/lib/lessonsData';

export function generateStaticParams() {
  return Object.keys(quizzes).map(id => ({ id }));
}

export default async function QuizPage({ params }) {
  const resolvedParams = await params;
  const lessonId = Number(resolvedParams.id);
  const quiz = quizzes[lessonId];
  const lesson = lessons.find(l => l.id === lessonId);

  if (!quiz || !lesson) notFound();

  return <QuizClient quiz={quiz} lesson={lesson} />;
}