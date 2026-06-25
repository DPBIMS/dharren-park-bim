import { notFound } from 'next/navigation';
import RevitQuizClient from './QuizClient';
import revitLessons from '@/lib/revitLessonsData';
import revitQuizzes from '@/lib/revitQuizzesData';

export function generateStaticParams() {
  return revitLessons.map(l => ({ id: l.id }));
}

export default async function RevitQuizPage({ params }) {
  const { id } = await params;
  const lesson = revitLessons.find(l => l.id === id);
  const quiz   = revitQuizzes[id];
  if (!lesson || !quiz) notFound();
  return <RevitQuizClient quiz={quiz} lesson={lesson} />;
}
