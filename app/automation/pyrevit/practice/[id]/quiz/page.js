import { notFound } from 'next/navigation';
import PyRevitPracticeQuizClient from './QuizClient';
import pyrevitPracticeLessons from '@/lib/pyrevitPracticeLessonsData';
import pyrevitPracticeQuizzes from '@/lib/pyrevitPracticeQuizzesData';

export function generateStaticParams() {
  return pyrevitPracticeLessons.map(l => ({ id: l.id }));
}

export default async function PyRevitPracticeQuizPage({ params }) {
  const { id } = await params;
  const lesson = pyrevitPracticeLessons.find(l => l.id === id);
  const quiz   = pyrevitPracticeQuizzes.find(q => q.lessonId === id);
  if (!lesson || !quiz) notFound();
  return <PyRevitPracticeQuizClient quiz={quiz} lesson={lesson} />;
}
