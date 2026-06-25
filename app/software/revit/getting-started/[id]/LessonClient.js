'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const PLAN_ACCESS = {
  free:    (l) => l.free,
  basic:   (l) => l.cat === 'beginner',
  pro:     (l) => l.cat === 'beginner' || l.cat === 'intermediate',
  premium: ()  => true,
};

const topicColors = {
  revit:        { bg: 'rgba(37,99,235,0.12)',  color: '#60a5fa', border: 'rgba(37,99,235,0.2)'  },
  standards:    { bg: 'rgba(139,92,246,0.12)', color: '#a78bfa', border: 'rgba(139,92,246,0.2)' },
  coordination: { bg: 'rgba(20,184,166,0.12)', color: '#2dd4bf', border: 'rgba(20,184,166,0.2)' },
  general:      { bg: 'rgba(107,114,128,0.12)',color: '#9ca3af', border: 'rgba(107,114,128,0.2)' },
};

const catColors = {
  beginner:     { bg: 'rgba(34,197,94,0.1)',  c: '#4ade80' },
  intermediate: { bg: 'rgba(245,158,11,0.1)', c: '#fbbf24' },
  advanced:     { bg: 'rgba(239,68,68,0.1)',  c: '#f87171' },
};

export default function RevitLessonClient({ lesson, allLessons }) {
  const router = useRouter();
  const [completed,     setCompleted]     = useState(false);
  const [activePlan,    setActivePlan]    = useState('free');
  const [planLoaded,    setPlanLoaded]    = useState(false);
  const [activeSection, setActiveSection] = useState(lesson.sections?.[0]?.id || '');
  const [authChecked,   setAuthChecked]   = useState(false);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setAuthChecked(true); setPlanLoaded(true); return; }

      const { data: planData } = await supabase
        .from('user_plans').select('plan')
        .eq('user_id', user.id).eq('status', 'active').single();
      if (planData?.plan) setActivePlan(planData.plan);
      else {
        const { data: profile } = await supabase
          .from('profiles').select('plan').eq('id', user.id).single();
        setActivePlan(profile?.plan || 'free');
      }

      const { data } = await supabase
        .from('lesson_progress').select('completed')
        .eq('user_id', user.id).eq('lesson_id', lesson.id).single();
      if (data?.completed) setCompleted(true);

      setAuthChecked(true);
      setPlanLoaded(true);
    }
    load();
  }, [lesson.id]);

  async function toggleComplete() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push('/login'); return; }
    if (completed) {
      await supabase.from('lesson_progress').delete()
        .eq('user_id', user.id).eq('lesson_id', lesson.id);
      setCompleted(false);
    } else {
      await supabase.from('lesson_progress').upsert({
        user_id: user.id, lesson_id: lesson.id, completed: true,
      });
      setCompleted(true);
    }
  }

  function canAccess(l) {
    const checker = PLAN_ACCESS[activePlan] || PLAN_ACCESS.free;
    return checker(l);
  }

  function renderContent(text) {
    if (!text) return null;
    return text.split('**').map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
  }

  const tc = topicColors[lesson.topic] || topicColors.general;
  const cc = catColors[lesson.cat] || catColors.beginner;
  const nextLesson = lesson.next ? allLessons.find(l => l.id === lesson.next.id) : null;
  const nextIsLocked = planLoaded && nextLesson && !canAccess(nextLesson);

  return (
    <div style={{ paddingTop: '64px', fontFamily: "'DM Sans',sans-serif" }}>

      {/* Top bar */}
      <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 90, background: 'rgba(10,14,26,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.07)', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '13px' }}>
          <Link href="/software/revit/getting-started" style={{ color: '#8892a4', textDecoration: 'none' }}>← Back to Revit</Link>
          <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ color: '#8892a4' }}>Lesson <strong style={{ color: '#e8eaf0' }}>{lesson.num}</strong> of {allLessons.length}</span>
        </div>
        <button
          onClick={toggleComplete}
          style={{ display: 'flex', alignItems: 'center', gap: '.4rem', padding: '5px 14px', borderRadius: '7px', border: `1px solid ${completed ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.1)'}`, background: completed ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.04)', color: completed ? '#4ade80' : '#8892a4', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
          <span>{completed ? '✓' : '○'}</span>
          <span>{completed ? 'Completed' : 'Mark Complete'}</span>
        </button>
      </div>

      {/* Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem 4rem', gap: '2.5rem', paddingTop: 'calc(48px + 2rem)' }}>

        {/* Main content */}
        <div>
          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '5px', background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>Revit</span>
            <span style={{ fontSize: '10px', fontWeight: 600, padding: '2px 8px', borderRadius: '4px', background: cc.bg, color: cc.c, textTransform: 'uppercase', letterSpacing: '.5px' }}>{lesson.cat}</span>
            <span style={{ fontSize: '12px', color: '#8892a4' }}>⏱ {lesson.readTime}</span>
            {lesson.free && <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.2)' }}>FREE</span>}
          </div>

          <div style={{ fontSize: '13px', color: '#8892a4', marginBottom: '.4rem' }}>Lesson {lesson.num}</div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '2rem', letterSpacing: '-.5px', marginBottom: '1rem', lineHeight: 1.2 }}>{lesson.title}</h1>
          <p style={{ fontSize: '15px', color: '#8892a4', lineHeight: '1.75', marginBottom: '2.5rem', maxWidth: '680px' }}>{lesson.intro}</p>

          {/* Sections */}
          <div style={{ maxWidth: '720px' }}>
            {lesson.sections?.map(section => (
              <div key={section.id} id={section.id} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.35rem', marginBottom: '1rem', color: '#e8eaf0' }}>{section.heading}</h2>

                {section.content && (
                  <p style={{ fontSize: '14px', color: '#c8d0de', lineHeight: '1.8', marginBottom: '1rem' }}>
                    {renderContent(section.content)}
                  </p>
                )}

                {section.subsections?.map((sub, i) => (
                  <div key={i} style={{ marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#3b82f6', letterSpacing: '.3px', marginBottom: '.5rem', textTransform: 'uppercase' }}>{sub.heading}</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {sub.items.map((item, j) => (
                        <li key={j} style={{ fontSize: '14px', color: '#8892a4', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.6' }}>
                          <span style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }}>✓</span>
                          <span>{renderContent(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {section.items && (
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1rem' }}>
                    {section.items.map((item, i) => (
                      <li key={i} style={{ fontSize: '14px', color: '#8892a4', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.6' }}>
                        <span style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }}>✓</span>
                        <span>{renderContent(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.formula && (
                  <div style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0' }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#3b82f6', textTransform: 'uppercase', marginBottom: '.4rem' }}>{section.formula.label}</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#f59e0b', fontFamily: "'Courier New',monospace" }}>{section.formula.text}</div>
                  </div>
                )}

                {section.code && (
                  <div style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1.25rem', margin: '1.25rem 0', overflow: 'auto' }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#f59e0b', textTransform: 'uppercase', marginBottom: '.75rem' }}>{section.code.label}</div>
                    <pre style={{ margin: 0, fontSize: '13px', color: '#c8d0de', lineHeight: '1.7', fontFamily: "'Courier New',monospace", whiteSpace: 'pre-wrap' }}>
                      {section.code.lines.join('\n')}
                    </pre>
                  </div>
                )}
              </div>
            ))}

            {/* Key Takeaways */}
            {lesson.takeaways && (
              <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '14px', padding: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '14px', color: '#f59e0b', marginBottom: '1rem' }}>💡 Key Takeaways</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {lesson.takeaways.map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#d1d5db', lineHeight: '1.6' }}>
                      <span style={{ color: '#f59e0b', flexShrink: 0 }}>✓</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quiz CTA */}
            {lesson.quiz && (
              <div style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: '14px', padding: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '15px', marginBottom: '.25rem' }}>Ready to test your knowledge?</div>
                  <div style={{ fontSize: '13px', color: '#8892a4' }}>Take the {lesson.quiz.label} — {lesson.quiz.questions} questions, about {lesson.quiz.time}.</div>
                </div>
                <Link href={`/software/revit/getting-started/${lesson.id}/quiz`} style={{ background: '#f59e0b', color: '#000', padding: '10px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  Take Quiz →
                </Link>
              </div>
            )}

            {/* Prev/Next navigation */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
              {lesson.prev ? (
                <Link href={`/software/revit/getting-started/${lesson.prev.id}`} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem 1.25rem', textDecoration: 'none', display: 'block' }}>
                  <div style={{ fontSize: '11px', color: '#8892a4', marginBottom: '.3rem' }}>← Previous</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#e8eaf0' }}>{lesson.prev.title}</div>
                </Link>
              ) : <div />}

              {lesson.next ? (
                nextIsLocked ? (
                  <Link href="/pricing" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '12px', padding: '1rem 1.25rem', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontSize: '11px', color: '#f59e0b', marginBottom: '.3rem' }}>🔒 Upgrade to unlock</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#8892a4' }}>{lesson.next.title}</div>
                    <div style={{ fontSize: '11px', color: '#f59e0b', marginTop: '4px' }}>View Plans →</div>
                  </Link>
                ) : (
                  <Link href={`/software/revit/getting-started/${lesson.next.id}`} style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: '12px', padding: '1rem 1.25rem', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontSize: '11px', color: '#3b82f6', marginBottom: '.3rem' }}>Next →</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#e8eaf0' }}>{lesson.next.title}</div>
                  </Link>
                )
              ) : (
                <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '12px', padding: '1rem 1.25rem' }}>
                  <div style={{ fontSize: '11px', color: '#4ade80', marginBottom: '.3rem' }}>🎉 Course Complete</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#e8eaf0' }}>You finished this section!</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: 'calc(64px + 48px + 1.5rem)', alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Table of contents */}
          {lesson.sections?.length > 0 && (
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '.75rem' }}>📋 In This Lesson</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {lesson.sections.map(s => (
                  <div
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }); }}
                    style={{ fontSize: '12px', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer', color: activeSection === s.id ? '#60a5fa' : '#8892a4', background: activeSection === s.id ? 'rgba(37,99,235,0.08)' : 'transparent', transition: 'all .15s', lineHeight: '1.4' }}
                  >{s.heading}</div>
                ))}
              </div>
            </div>
          )}

          {/* All lessons in this course */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '.75rem' }}>📚 All Revit Lessons</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {allLessons.slice(0, 8).map(l => (
                <Link key={l.id} href={`/software/revit/getting-started/${l.id}`} style={{ fontSize: '12px', padding: '5px 8px', borderRadius: '6px', textDecoration: 'none', color: l.id === lesson.id ? '#60a5fa' : '#8892a4', background: l.id === lesson.id ? 'rgba(37,99,235,0.08)' : 'transparent', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: l.id === lesson.id ? '#3b82f6' : '#4a5568', width: '20px', flexShrink: 0 }}>{l.num}</span>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.title.split(':')[0].split('?')[0].trim()}</span>
                </Link>
              ))}
              {allLessons.length > 8 && (
                <Link href="/software/revit/getting-started" style={{ fontSize: '12px', color: '#3b82f6', padding: '5px 8px', textDecoration: 'none' }}>
                  + {allLessons.length - 8} more lessons →
                </Link>
              )}
            </div>
          </div>

          {/* Resource */}
          {lesson.resource && (
            <div style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '.5rem' }}>📄 Lesson Resource</div>
              <div style={{ fontSize: '12px', color: '#8892a4', marginBottom: '.75rem' }}>Download the {lesson.resource.label} for this lesson.</div>
              <button style={{ width: '100%', background: '#2563eb', color: '#fff', border: 'none', padding: '8px', borderRadius: '7px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
                Download {lesson.resource.type} ↓
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
