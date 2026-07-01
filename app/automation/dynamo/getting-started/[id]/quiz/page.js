import { notFound } from 'next/navigation';
import DynamoQuizClient from './QuizClient';
import dynamoLessons from '@/lib/dynamoLessonsData';
import dynamoQuizzes from '@/lib/dynamoQuizzesData';

export function generateStaticParams() {
  return dynamoLessons.map(l => ({ id: l.id }));
}

export default async function DynamoQuizPage({ params }) {
  const { id } = await params;
  const lesson = dynamoLessons.find(l => l.id === id);
  const quiz   = dynamoQuizzes.find(q => q.lessonId === id);
  if (!lesson || !quiz) notFound();
  return <DynamoQuizClient quiz={quiz} lesson={lesson} />;
}
