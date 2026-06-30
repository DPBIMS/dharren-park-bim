import { notFound } from 'next/navigation';
import FamilyQuizClient from './QuizClient';
import { revitFamilyLessons } from '@/lib/revitFamilyLessonsData';
import { revitFamilyQuizzes } from '@/lib/revitFamilyQuizzesData';

export function generateStaticParams() {
  return revitFamilyLessons.map(l => ({ id: String(l.id) }));
}

export default async function FamilyQuizPage({ params }) {
  const { id } = await params;
  const lesson = revitFamilyLessons.find(l => l.id === id);
  const quiz   = revitFamilyQuizzes.find(q => q.lessonId === id);
  if (!lesson || !quiz) notFound();
  return <FamilyQuizClient quiz={quiz} lesson={lesson} />;
}