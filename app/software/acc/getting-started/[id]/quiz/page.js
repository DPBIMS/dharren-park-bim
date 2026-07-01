import { notFound } from 'next/navigation';
import Link from 'next/link';
import accLessons from '@/lib/accLessonsData';

export function generateStaticParams() {
  return accLessons.map(l => ({ id: l.id }));
}

export default async function ACCQuizPage({ params }) {
  const { id } = await params;
  const lesson = accLessons.find(l => l.id === id);
  if (!lesson) notFound();

  return (
    <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif", display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ maxWidth:'520px', width:'100%', padding:'2rem 1.5rem', textAlign:'center' }}>
        <div style={{ width:'64px', height:'64px', borderRadius:'16px', background:'rgba(37,99,235,0.12)', border:'1px solid rgba(37,99,235,0.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px', margin:'0 auto 1.5rem' }}>
          📝
        </div>
        <div style={{ fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase', color:'#3b82f6', marginBottom:'.75rem' }}>Quiz · ACC Lesson {lesson.num}</div>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.5rem', fontWeight:800, letterSpacing:'-.5px', marginBottom:'.75rem', lineHeight:1.3 }}>{lesson.quiz?.label || `${lesson.title} Quiz`}</h1>
        <p style={{ color:'#8892a4', fontSize:'14px', lineHeight:'1.7', marginBottom:'1.5rem' }}>
          This quiz is currently being developed. Check back soon — all {lesson.quiz?.questions || 10} questions will be available here.
        </p>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:'rgba(245,158,11,0.08)', border:'1px solid rgba(245,158,11,0.2)', borderRadius:'100px', padding:'8px 20px', marginBottom:'2rem' }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#f59e0b' }} />
          <span style={{ fontSize:'13px', fontWeight:600, color:'#f59e0b' }}>Coming Soon — In Development</span>
        </div>
        <div style={{ display:'flex', gap:'.75rem', justifyContent:'center', flexWrap:'wrap' }}>
          <Link href={`/software/acc/getting-started/${id}`} style={{ display:'inline-block', background:'#2563eb', color:'#fff', padding:'10px 24px', borderRadius:'8px', fontSize:'13px', fontWeight:600, textDecoration:'none' }}>← Back to Lesson</Link>
          <Link href="/software/acc/getting-started" style={{ display:'inline-block', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)', color:'#e8eaf0', padding:'10px 24px', borderRadius:'8px', fontSize:'13px', fontWeight:500, textDecoration:'none' }}>All Lessons</Link>
        </div>
      </div>
    </main>
  );
}
