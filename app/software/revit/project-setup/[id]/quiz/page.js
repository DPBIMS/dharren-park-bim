import { notFound } from 'next/navigation';
import SetupQuizClient from './QuizClient';
import { revitSetupLessons } from '@/lib/revitSetupLessonsData';
import { revitSetupQuizzes } from '@/lib/revitSetupQuizzesData';

export function generateStaticParams() {
  return revitSetupLessons.map(l => ({ id: String(l.id) }));
}

export default async function SetupQuizPage({ params }) {
  const { id } = await params;
  const lesson = revitSetupLessons.find(l => l.id === id);
  const quiz   = revitSetupQuizzes.find(q => q.lessonId === id);
  if (!lesson || !quiz) notFound();
  return <SetupQuizClient quiz={quiz} lesson={lesson} />;
}