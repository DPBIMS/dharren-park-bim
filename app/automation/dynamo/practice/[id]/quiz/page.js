import { notFound } from 'next/navigation';
import DynamoPracticeQuizClient from './QuizClient';
import dynamoPracticeLessons from '@/lib/dynamoPracticeLessonsData';
import dynamoPracticeQuizzes from '@/lib/dynamoPracticeQuizzesData';

export function generateStaticParams() {
  return dynamoPracticeLessons.map(l => ({ id: l.id }));
}

export default async function DynamoPracticeQuizPage({ params }) {
  const { id } = await params;
  const lesson = dynamoPracticeLessons.find(l => l.id === id);
  const quiz   = dynamoPracticeQuizzes.find(q => q.lessonId === id);
  if (!lesson || !quiz) notFound();
  return <DynamoPracticeQuizClient quiz={quiz} lesson={lesson} />;
}
