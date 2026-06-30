import { notFound } from 'next/navigation';
import NavisworksQuizClient from './QuizClient';
import navisworksLessons from '@/lib/navisworksLessonsData';
import navisworksQuizzes from '@/lib/navisworksQuizzesData';

export function generateStaticParams() {
  return navisworksLessons.map(l => ({ id: l.id }));
}

export default async function NavisworksQuizPage({ params }) {
  const { id } = await params;
  const lesson = navisworksLessons.find(l => l.id === id);
  const quiz   = navisworksQuizzes.find(q => q.lessonId === id);
  if (!lesson || !quiz) notFound();
  return <NavisworksQuizClient quiz={quiz} lesson={lesson} />;
}
