import { notFound } from 'next/navigation';
import PyRevitQuizClient from './QuizClient';
import pyrevitLessons from '@/lib/pyrevitLessonsData';
import pyrevitQuizzes from '@/lib/pyrevitQuizzesData';

export function generateStaticParams() {
  return pyrevitLessons.map(l => ({ id: l.id }));
}

export default async function PyRevitQuizPage({ params }) {
  const { id } = await params;
  const lesson = pyrevitLessons.find(l => l.id === id);
  const quiz   = pyrevitQuizzes.find(q => q.lessonId === id);
  if (!lesson || !quiz) notFound();
  return <PyRevitQuizClient quiz={quiz} lesson={lesson} />;
}
