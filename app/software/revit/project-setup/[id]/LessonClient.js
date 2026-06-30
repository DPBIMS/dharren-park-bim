'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import AdminOnlyGate from '@/components/AdminOnlyGate';

const PLAN_ACCESS = {
  free:    (l) => l.free,
  basic:   (l) => l.cat === 'beginner',
  pro:     (l) => l.cat === 'beginner' || l.cat === 'intermediate',
  premium: ()  => true,
};

// Renders lesson content with bold/bullet/section support
function LessonContent({ content }) {
  return (
    <div>
      {content.split('\n').map((line, i) => {
        // Section headings like EXPLAIN —, GUIDE —, PRACTICE —
        if (/^(EXPLAIN|GUIDE|PRACTICE)\s*[—-]/.test(line.trim())) {
          const parts = line.trim().split(/\s*[—-]\s*/);
          const keyword = parts[0];
          const rest    = parts.slice(1).join(' — ');
          const color   = keyword === 'EXPLAIN' ? '#60a5fa' : keyword === 'GUIDE' ? '#34d399' : '#f59e0b';
          return (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px', margin:'1.5rem 0 .5rem', padding:'6px 12px', borderRadius:'8px', background:`${color}10`, border:`1px solid ${color}25` }}>
              <span style={{ fontSize:'10px', fontWeight:800, letterSpacing:'1.5px', color, textTransform:'uppercase', flexShrink:0 }}>{keyword}</span>
              {rest && <span style={{ fontSize:'14px', fontWeight:600, color:'#e8eaf0' }}>{rest}</span>}
            </div>
          );
        }
        // Bold standalone headings
        if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
          return <p key={i} style={{ fontWeight:700, color:'#e8eaf0', margin:'.75rem 0 .2rem', fontSize:'15px' }}>{line.replace(/\*\*/g, '')}</p>;
        }
        // Inline bold
        if (line.includes('**')) {
          const parts = line.split('**');
          return (
            <p key={i} style={{ margin:'.4rem 0', fontSize:'15px', color:'#c8d0e8', lineHeight:'1.8' }}>
              {parts.map((part, pi) => pi % 2 === 1
                ? <strong key={pi} style={{ color:'#e8eaf0' }}>{part}</strong>
                : part
              )}
            </p>
          );
        }
        // Bullet points
        if (line.startsWith('- ')) {
          return (
            <p key={i} style={{ margin:'.3rem 0', paddingLeft:'1.2rem', color:'#a0aec0', fontSize:'14px', lineHeight:'1.7', position:'relative' }}>
              <span style={{ position:'absolute', left:0, color:'#10b981' }}>•</span>
              {line.slice(2)}
            </p>
          );
        }
        // Table rows (simple Markdown)
        if (line.startsWith('|')) {
          const cells = line.split('|').filter(c => c.trim() !== '');
          const isSeparator = cells.every(c => /^[-:]+$/.test(c.trim()));
          if (isSeparator) return null;
          return (
            <div key={i} style={{ display:'grid', gridTemplateColumns:`repeat(${cells.length}, 1fr)`, gap:'1px', background:'rgba(255,255,255,0.06)', borderRadius:'4px', overflow:'hidden', marginBottom:'1px' }}>
              {cells.map((cell, ci) => (
                <div key={ci} style={{ padding:'6px 10px', background:'rgba(10,14,26,0.8)', fontSize:'13px', color:'#c8d0e8', fontWeight: ci === 0 ? 500 : 400 }}>
                  {cell.trim()}
                </div>
              ))}
            </div>
          );
        }
        // Blank lines
        if (line.trim() === '') return <div key={i} style={{ height:'.4rem' }} />;
        // Normal paragraph
        return <p key={i} style={{ margin:'.4rem 0', fontSize:'15px', color:'#c8d0e8', lineHeight:'1.8' }}>{line}</p>;
      })}
    </div>
  );
}

export default function SetupLessonClient(props) {
  return (
    <AdminOnlyGate title="Revit Project Setup" backHref="/software/revit/project-setup" backLabel="← Back to Project Setup">
      <SetupLessonClientInner {...props} />
    </AdminOnlyGate>
  );
}

function SetupLessonClientInner({ lesson, allLessons }) {
  const router = useRouter();
  const [activePlan, setActivePlan] = useState('free');
  const [isComplete, setIsComplete] = useState(false);
  const [loading,    setLoading]    = useState(true);
  const [user,       setUser]       = useState(null);

  useEffect(() => {
    async function load() {
      const { data: { user: u } } = await supabase.auth.getUser();
      if (!u) { setLoading(false); return; }
      setUser(u);

      const { data: planData } = await supabase
        .from('user_plans').select('plan')
        .eq('user_id', u.id).eq('status', 'active').single();
      if (planData?.plan) setActivePlan(planData.plan);
      else {
        const { data: profile } = await supabase
          .from('profiles').select('plan').eq('id', u.id).single();
        setActivePlan(profile?.plan || 'free');
      }

      const { data: progress } = await supabase
        .from('lesson_progress').select('lesson_id')
        .eq('user_id', u.id).eq('completed', true);
      if (progress) {
        const ids = new Set(progress.map(p => String(p.lesson_id)));
        setIsComplete(ids.has(String(lesson.id)));
      }

      setLoading(false);
    }
    load();
  }, [lesson.id]);

  function canAccess(l) {
    const checker = PLAN_ACCESS[activePlan] || PLAN_ACCESS.free;
    return checker(l);
  }

  const accessible = canAccess(lesson);

  async function handleToggleComplete() {
    if (!user) { router.push('/login'); return; }
    const lessonId = String(lesson.id);
    if (isComplete) {
      await supabase.from('lesson_progress').delete()
        .eq('user_id', user.id).eq('lesson_id', lessonId);
      setIsComplete(false);
    } else {
      await supabase.from('lesson_progress').upsert({
        user_id: user.id, lesson_id: lessonId, completed: true,
      });
      setIsComplete(true);
    }
  }

  const prevLesson = lesson.prev ? allLessons.find(l => l.id === lesson.prev) : null;
  const nextLesson = lesson.next ? allLessons.find(l => l.id === lesson.next) : null;

  const catGradient = lesson.cat === 'beginner'
    ? 'rgba(34,197,94,0.08)'
    : lesson.cat === 'intermediate'
    ? 'rgba(245,158,11,0.08)'
    : 'rgba(239,68,68,0.08)';

  // Locked screen
  if (!loading && !accessible) {
    return (
      <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif" }}>
        <div style={{ maxWidth:'720px', margin:'0 auto', padding:'4rem 2rem', textAlign:'center' }}>
          <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🔒</div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.6rem', marginBottom:'.75rem' }}>{lesson.title}</h1>
          <p style={{ color:'#8892a4', fontSize:'14px', marginBottom:'2rem' }}>
            This lesson requires a <strong style={{ color:'#10b981', textTransform:'capitalize' }}>
              {lesson.cat === 'beginner' ? 'Basic' : lesson.cat === 'intermediate' ? 'Pro' : 'Premium'}
            </strong> plan to access.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/pricing" style={{ background:'#10b981', color:'#000', padding:'12px 28px', borderRadius:'8px', fontWeight:600, textDecoration:'none', fontSize:'14px' }}>
              Upgrade Now →
            </Link>
            <Link href="/software/revit/project-setup" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#e8eaf0', padding:'12px 28px', borderRadius:'8px', fontWeight:500, textDecoration:'none', fontSize:'14px' }}>
              Back to Course
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif" }}>

      {/* Top bar */}
      <div style={{ borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'.85rem 2rem', display:'flex', alignItems:'center', justifyContent:'space-between', maxWidth:'1100px', margin:'0 auto', flexWrap:'wrap', gap:'1rem' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'1.25rem', fontSize:'13px', color:'#8892a4' }}>
          <Link href="/software/revit/project-setup" style={{ color:'#8892a4', textDecoration:'none' }}>
            ← Back to Project Setup
          </Link>
          <span style={{ color:'rgba(255,255,255,0.12)' }}>|</span>
          <span>Lesson <strong style={{ color:'#e8eaf0' }}>{String(lesson.num).padStart(2,'0')}</strong> of {allLessons.length}</span>
        </div>
        <button
          onClick={handleToggleComplete}
          disabled={loading}
          style={{
            padding:'7px 18px', borderRadius:'8px', fontSize:'13px', fontWeight:600,
            cursor: loading ? 'default' : 'pointer', fontFamily:"'DM Sans',sans-serif",
            background: isComplete ? 'rgba(16,185,129,0.12)' : 'rgba(16,185,129,0.08)',
            border: `1px solid ${isComplete ? 'rgba(16,185,129,0.4)' : 'rgba(16,185,129,0.25)'}`,
            color: '#10b981',
          }}
        >
          {isComplete ? '✓ Completed' : 'Mark Complete'}
        </button>
      </div>

      <div style={{ maxWidth:'800px', margin:'0 auto', padding:'3rem 2rem 5rem' }}>

        {/* Category stripe */}
        <div style={{ height:'3px', borderRadius:'2px', background: lesson.cat === 'beginner' ? 'linear-gradient(90deg,#4ade80,#22c55e)' : lesson.cat === 'intermediate' ? 'linear-gradient(90deg,#fbbf24,#f59e0b)' : 'linear-gradient(90deg,#f87171,#ef4444)', marginBottom:'1.5rem' }} />

        {/* Meta */}
        <div style={{ display:'flex', alignItems:'center', gap:'.5rem', flexWrap:'wrap', marginBottom:'1.25rem' }}>
          <span style={{ fontSize:'11px', fontWeight:600, padding:'3px 10px', borderRadius:'5px', background:'rgba(16,185,129,0.12)', color:'#34d399', border:'1px solid rgba(16,185,129,0.2)' }}>
            {lesson.topic}
          </span>
          <span style={{
            fontSize:'10px', fontWeight:600, padding:'2px 8px', borderRadius:'4px', textTransform:'uppercase', letterSpacing:'.5px',
            background: lesson.cat==='beginner' ? 'rgba(34,197,94,0.1)' : lesson.cat==='intermediate' ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)',
            color: lesson.cat==='beginner' ? '#4ade80' : lesson.cat==='intermediate' ? '#fbbf24' : '#f87171',
          }}>
            {lesson.cat}
          </span>
          {lesson.free && (
            <span style={{ fontSize:'10px', fontWeight:600, padding:'2px 8px', borderRadius:'4px', background:'rgba(34,197,94,0.1)', color:'#4ade80', border:'1px solid rgba(34,197,94,0.2)' }}>FREE</span>
          )}
          <span style={{ fontSize:'12px', color:'#8892a4' }}>⏱ {lesson.readTime}</span>
        </div>

        {/* Title */}
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'2rem', lineHeight:'1.2', letterSpacing:'-.5px', marginBottom:'1rem' }}>
          {lesson.title}
        </h1>

        {/* Intro */}
        <div style={{ fontSize:'15px', color:'#a0aec0', lineHeight:'1.9', marginBottom:'2.5rem', paddingBottom:'2rem', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
          {lesson.intro}
        </div>

        {/* Sections */}
        {lesson.sections?.map((section, i) => (
          <div key={i} style={{ marginBottom:'2.5rem', padding:'1.5rem', background: catGradient, border:'1px solid rgba(255,255,255,0.06)', borderRadius:'14px' }}>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'1.15rem', marginBottom:'1.25rem', color:'#e8eaf0', paddingBottom:'.75rem', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
              {section.title}
            </h2>
            <LessonContent content={section.content} />
          </div>
        ))}

        {/* Key Takeaways */}
        {lesson.takeaways?.length > 0 && (
          <div style={{ background:'rgba(16,185,129,0.04)', border:'1px solid rgba(16,185,129,0.18)', borderRadius:'14px', padding:'1.5rem', marginBottom:'2rem' }}>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'1rem', color:'#10b981', marginBottom:'1rem' }}>
              ✦ Key Takeaways
            </h3>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'.6rem' }}>
              {lesson.takeaways.map((t, i) => (
                <li key={i} style={{ display:'flex', gap:'.75rem', alignItems:'flex-start', fontSize:'14px', color:'#c8d0e8', lineHeight:'1.6' }}>
                  <span style={{ color:'#10b981', flexShrink:0, marginTop:'2px' }}>✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Resource */}
        {lesson.resource && (
          <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'10px', padding:'1rem 1.25rem', marginBottom:'2rem', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem', flexWrap:'wrap' }}>
            <div>
              <div style={{ fontSize:'10px', fontWeight:600, letterSpacing:'1px', color:'#8892a4', textTransform:'uppercase', marginBottom:'3px' }}>Further Reading</div>
              <div style={{ fontSize:'14px', color:'#e8eaf0', fontWeight:500 }}>{lesson.resource.title}</div>
            </div>
            <a href={lesson.resource.url} target="_blank" rel="noopener noreferrer"
              style={{ fontSize:'12px', color:'#10b981', fontWeight:500, textDecoration:'none', whiteSpace:'nowrap' }}>
              Open Resource →
            </a>
          </div>
        )}

        {/* Quiz CTA */}
        <div style={{ background:'rgba(16,185,129,0.06)', border:'1px solid rgba(16,185,129,0.2)', borderRadius:'14px', padding:'1.5rem', marginBottom:'2rem', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem', flexWrap:'wrap' }}>
          <div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'1rem', marginBottom:'.25rem' }}>Ready to test your knowledge?</div>
            <div style={{ fontSize:'13px', color:'#8892a4' }}>10 questions · 75% to pass · Based on this lesson</div>
          </div>
          <Link href={`/software/revit/project-setup/${lesson.id}/quiz`}
            style={{ background:'#10b981', color:'#000', padding:'10px 22px', borderRadius:'8px', fontSize:'13px', fontWeight:700, textDecoration:'none', whiteSpace:'nowrap' }}>
            Start Quiz →
          </Link>
        </div>

        {/* Prev / Next */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
          {prevLesson ? (
            <Link href={`/software/revit/project-setup/${prevLesson.id}`} style={{ textDecoration:'none' }}>
              <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'1rem 1.25rem' }}
                onMouseEnter={e => e.currentTarget.style.borderColor='rgba(16,185,129,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}>
                <div style={{ fontSize:'11px', color:'#8892a4', marginBottom:'4px' }}>← Previous</div>
                <div style={{ fontSize:'13px', fontWeight:600, color:'#e8eaf0', lineHeight:'1.3' }}>{prevLesson.title}</div>
              </div>
            </Link>
          ) : <div />}

          {nextLesson ? (
            <Link href={`/software/revit/project-setup/${nextLesson.id}`} style={{ textDecoration:'none' }}>
              <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'1rem 1.25rem', textAlign:'right' }}
                onMouseEnter={e => e.currentTarget.style.borderColor='rgba(16,185,129,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}>
                <div style={{ fontSize:'11px', color:'#8892a4', marginBottom:'4px' }}>Next →</div>
                <div style={{ fontSize:'13px', fontWeight:600, color:'#e8eaf0', lineHeight:'1.3' }}>{nextLesson.title}</div>
              </div>
            </Link>
          ) : (
            <div style={{ background:'rgba(16,185,129,0.04)', border:'1px solid rgba(16,185,129,0.15)', borderRadius:'12px', padding:'1rem 1.25rem', textAlign:'right' }}>
              <div style={{ fontSize:'11px', color:'#10b981', marginBottom:'4px' }}>🎉 Course Complete!</div>
              <div style={{ fontSize:'13px', fontWeight:600, color:'#e8eaf0' }}>Your ISO 19650 template is ready.</div>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}