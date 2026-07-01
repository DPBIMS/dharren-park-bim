import { notFound } from 'next/navigation';
import ACCQuizClient from './QuizClient';
import accLessons from '@/lib/accLessonsData';
import accQuizzes from '@/lib/accQuizzesData';

export function generateStaticParams() {
  return accLessons.map(l => ({ id: l.id }));
}

export default async function ACCQuizPage({ params }) {
  const { id } = await params;
  const lesson = accLessons.find(l => l.id === id);
  const quiz   = accQuizzes.find(q => q.lessonId === id);
  if (!lesson || !quiz) notFound();
  return <ACCQuizClient quiz={quiz} lesson={lesson} />;
}
