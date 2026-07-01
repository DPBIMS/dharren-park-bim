import { notFound } from 'next/navigation';
import FormaQuizClient from './QuizClient';
import formaLessons from '@/lib/formaLessonsData';
import formaQuizzes from '@/lib/formaQuizzesData';

export function generateStaticParams() {
  return formaLessons.map(l => ({ id: l.id }));
}

export default async function FormaQuizPage({ params }) {
  const { id } = await params;
  const lesson = formaLessons.find(l => l.id === id);
  const quiz   = formaQuizzes.find(q => q.lessonId === id);
  if (!lesson || !quiz) notFound();
  return <FormaQuizClient quiz={quiz} lesson={lesson} />;
}
