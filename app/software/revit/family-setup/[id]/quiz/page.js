import { notFound } from 'next/navigation';
import FamilySetupQuizClient from './QuizClient';
import { revitFamilySetupLessons } from '@/lib/revitFamilySetupLessonsData';
import { revitFamilySetupQuizzes } from '@/lib/revitFamilySetupQuizzesData';

export function generateStaticParams() {
  return revitFamilySetupLessons.map(l => ({ id: String(l.id) }));
}

export default async function FamilySetupQuizPage({ params }) {
  const { id } = await params;
  const lesson = revitFamilySetupLessons.find(l => l.id === id);
  const quiz   = revitFamilySetupQuizzes.find(q => q.lessonId === id);
  if (!lesson || !quiz) notFound();
  return <FamilySetupQuizClient quiz={quiz} lesson={lesson} />;
}
