import { notFound } from 'next/navigation';
import NavisworksLessonClient from './LessonClient';
import navisworksLessons from '@/lib/navisworksLessonsData';

export function generateStaticParams() {
  return navisworksLessons.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = navisworksLessons.find(l => l.id === id);
  if (!lesson) return { title: 'Lesson Not Found' };
  return {
    title: `${lesson.title} | Navisworks Getting Started | Dharren Park BIM`,
    description: lesson.desc,
  };
}

export default async function NavisworksLessonPage({ params }) {
  const { id } = await params;
  const lesson = navisworksLessons.find(l => l.id === id);
  if (!lesson) notFound();
  return <NavisworksLessonClient lesson={lesson} allLessons={navisworksLessons} />;
}
