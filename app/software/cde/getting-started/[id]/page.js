import { notFound } from 'next/navigation';
import CDELessonClient from './LessonClient';
import cdeLessons from '@/lib/cdeLessonsData';

export function generateStaticParams() {
  return cdeLessons.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = cdeLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | Common Data Environment | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function CDELessonPage({ params }) {
  const { id } = await params;
  const lesson = cdeLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <CDELessonClient lesson={lesson} allLessons={cdeLessons} />;
}
