'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

const PLAN_ACCESS = {
  free:    (l) => l.free,
  basic:   (l) => l.cat === 'beginner',
  pro:     (l) => l.cat === 'beginner' || l.cat === 'intermediate',
  premium: ()  => true,
};

const catColors = {
  beginner:     { bg: 'rgba(34,197,94,0.1)',  c: '#4ade80' },
  intermediate: { bg: 'rgba(245,158,11,0.1)', c: '#fbbf24' },
  advanced:     { bg: 'rgba(239,68,68,0.1)',  c: '#f87171' },
};

// ─── Inline markdown: **bold**, `code`, *italic* ───────────────────────────
function inline(str) {
  if (!str) return null;
  return String(str).split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g).filter(p => p !== '').map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: '#f1f5f9', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px', fontFamily: "'Courier New',monospace", fontSize: '0.9em', color: '#fbbf24' }}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} style={{ color: '#9ca3af' }}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

// ─── Callout label themes — keyword-matched, colored box like a "formula" callout ──
const CALLOUT_THEMES = [
  { test: /mistake|warning|never\b|caution|disaster/i,            color: '#f87171', bg: 'rgba(239,68,68,0.07)',  border: 'rgba(239,68,68,0.22)',  icon: '⚠' },
  { test: /important|critical|rule\b/i,                           color: '#fbbf24', bg: 'rgba(245,158,11,0.07)', border: 'rgba(245,158,11,0.22)', icon: '❗' },
  { test: /best practice|standard|convention/i,                   color: '#34d399', bg: 'rgba(34,197,94,0.07)',  border: 'rgba(34,197,94,0.22)',  icon: '✓' },
  { test: /why (this|it) matters|honest assessment|distinction/i, color: '#a78bfa', bg: 'rgba(139,92,246,0.07)', border: 'rgba(139,92,246,0.22)', icon: '★' },
  { test: /tip\b/i,                                               color: '#60a5fa', bg: 'rgba(37,99,235,0.07)',  border: 'rgba(37,99,235,0.22)',  icon: '💡' },
];
const calloutTheme = (label) => CALLOUT_THEMES.find(t => t.test.test(label)) || null;

// A line that starts its own block (table row, bullet, numbered item, or standalone bold label)
function isSpecialLine(line) {
  const t = line.trim();
  return t === '' || t.startsWith('|') || /^-\s/.test(t) || /^\d+\.\s/.test(t) || /^\*\*[^*]+\*\*:?$/.test(t);
}

// ─── Rich content renderer — turns the free-text lesson copy into tables, numbered
// step boxes, checklists, and colored callouts (amber accent, matching Family Creation) ──
function RichContent({ text }) {
  if (!text) return null;
  const lines = text.split('\n');
  const blocks = [];
  let i = 0, key = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const t = raw.trim();

    if (t === '') { i++; continue; }

    // Markdown table
    if (t.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) { rows.push(lines[i].trim()); i++; }
      const dataRows = rows.filter(r => r.replace(/[|:\-\s]/g, '') !== '');
      blocks.push(
        <div key={key++} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden', margin: '1.1rem 0' }}>
          {dataRows.map((r, ri) => {
            const cells = r.split('|').slice(1, -1).map(c => c.trim());
            return (
              <div key={ri} style={{
                display: 'grid', gridTemplateColumns: `repeat(${cells.length}, 1fr)`,
                background: ri === 0 ? 'rgba(245,158,11,0.1)' : ri % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                borderBottom: ri < dataRows.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                {cells.map((c, ci) => (
                  <div key={ci} style={{
                    padding: '8px 12px',
                    fontSize: ri === 0 ? '11px' : '13px',
                    fontWeight: ri === 0 ? 700 : 400,
                    color: ri === 0 ? '#fbbf24' : '#c8d0de',
                    textTransform: ri === 0 ? 'uppercase' : 'none',
                    letterSpacing: ri === 0 ? '.4px' : 'normal',
                  }}>
                    {inline(c)}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      );
      continue;
    }

    // Numbered list → step badges
    if (/^\d+\.\s/.test(t)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ''));
        i++;
      }
      blocks.push(
        <div key={key++} style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '1.1rem 0' }}>
          {items.map((it, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '9px 12px' }}>
              <span style={{ flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(245,158,11,0.18)', color: '#fbbf24', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>{idx + 1}</span>
              <span style={{ fontSize: '14px', color: '#c8d0de', lineHeight: '1.6' }}>{inline(it)}</span>
            </div>
          ))}
        </div>
      );
      continue;
    }

    // Bullet list → checklist
    if (/^-\s/.test(t)) {
      const items = [];
      while (i < lines.length && /^-\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push(
        <ul key={key++} style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', margin: '1.1rem 0', padding: 0 }}>
          {items.map((it, idx) => (
            <li key={idx} style={{ fontSize: '14px', color: '#a8b0c4', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.6' }}>
              <span style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }}>✓</span>
              <span>{inline(it)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Standalone bold label — either a colored callout box, or a plain sub-heading
    const labelMatch = t.match(/^\*\*([^*]+)\*\*:?$/);
    if (labelMatch) {
      const label = labelMatch[1].replace(/:$/, '');
      i++;
      const bodyLines = [];
      while (i < lines.length && !isSpecialLine(lines[i])) { bodyLines.push(lines[i]); i++; }
      const body = bodyLines.join(' ').trim();
      const theme = calloutTheme(label);
      if (theme) {
        blocks.push(
          <div key={key++} style={{ background: theme.bg, border: `1px solid ${theme.border}`, borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.5px', color: theme.color, textTransform: 'uppercase', marginBottom: body ? '.4rem' : 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>{theme.icon}</span><span>{label}</span>
            </div>
            {body && <div style={{ fontSize: '14px', color: '#c8d0de', lineHeight: '1.7' }}>{inline(body)}</div>}
          </div>
        );
      } else {
        blocks.push(<h3 key={key++} style={{ fontSize: '13px', fontWeight: 700, color: '#f59e0b', letterSpacing: '.3px', textTransform: 'uppercase', margin: '1.25rem 0 .5rem' }}>{label}</h3>);
        if (body) blocks.push(<p key={key++} style={{ fontSize: '14px', color: '#c8d0de', lineHeight: '1.8', margin: '0 0 1rem' }}>{inline(body)}</p>);
      }
      continue;
    }

    // Default paragraph
    const paraLines = [raw];
    i++;
    while (i < lines.length && !isSpecialLine(lines[i])) { paraLines.push(lines[i]); i++; }
    blocks.push(<p key={key++} style={{ fontSize: '14px', color: '#c8d0de', lineHeight: '1.8', margin: '0 0 1rem' }}>{inline(paraLines.join(' '))}</p>);
  }

  return <div>{blocks}</div>;
}

export default function FamilyLessonClient({ lesson, allLessons }) {
  const router = useRouter();
  const [activePlan,    setActivePlan]    = useState('free');
  const [isComplete,    setIsComplete]    = useState(false);
  const [loading,       setLoading]       = useState(true);
  const [user,          setUser]          = useState(null);
  const [activeSection, setActiveSection] = useState(lesson.sections?.[0]?.id || 's1');

  const normalizedSections = lesson.sections?.map((s, i) => ({
    ...s,
    id: s.id || `s${i + 1}`,
    heading: s.heading || s.title,
  })) || [];

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
  const nextIsLocked = !loading && nextLesson && !canAccess(nextLesson);

  // Locked screen
  if (!loading && !accessible) {
    return (
      <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif" }}>
        <div style={{ maxWidth:'720px', margin:'0 auto', padding:'4rem 2rem', textAlign:'center' }}>
          <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🔒</div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.6rem', marginBottom:'.75rem' }}>{lesson.title}</h1>
          <p style={{ color:'#8892a4', fontSize:'14px', marginBottom:'2rem' }}>
            This lesson requires a <strong style={{ color:'#f59e0b', textTransform:'capitalize' }}>
              {lesson.cat === 'beginner' ? 'Basic' : lesson.cat === 'intermediate' ? 'Pro' : 'Premium'}
            </strong> plan to access.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/pricing" style={{ background:'#f59e0b', color:'#000', padding:'12px 28px', borderRadius:'8px', fontWeight:600, textDecoration:'none', fontSize:'14px' }}>
              Upgrade Now →
            </Link>
            <Link href="/software/revit/families" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#e8eaf0', padding:'12px 28px', borderRadius:'8px', fontWeight:500, textDecoration:'none', fontSize:'14px' }}>
              Back to Course
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif" }}>

      {/* Top bar */}
      <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 90, background: 'rgba(10,14,26,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.07)', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '13px' }}>
          <Link href="/software/revit/families" style={{ color: '#8892a4', textDecoration: 'none' }}>← Back to Family Creation</Link>
          <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ color: '#8892a4' }}>Lesson <strong style={{ color: '#e8eaf0' }}>{lesson.num}</strong> of {allLessons.length}</span>
        </div>
        <button
          onClick={handleToggleComplete}
          disabled={loading}
          style={{ display: 'flex', alignItems: 'center', gap: '.4rem', padding: '5px 14px', borderRadius: '7px', border: `1px solid ${isComplete ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.1)'}`, background: isComplete ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.04)', color: isComplete ? '#4ade80' : '#8892a4', fontSize: '12px', fontWeight: 600, cursor: loading ? 'default' : 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
          <span>{isComplete ? '✓' : '○'}</span>
          <span>{isComplete ? 'Completed' : 'Mark Complete'}</span>
        </button>
      </div>

      {/* Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem 4rem', gap: '2.5rem', paddingTop: 'calc(48px + 1rem)' }}>

        {/* Main content */}
        <div>
          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '5px', background: 'rgba(245,158,11,0.12)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)' }}>{lesson.topic}</span>
            <span style={{ fontSize: '10px', fontWeight: 600, padding: '2px 8px', borderRadius: '4px', background: (catColors[lesson.cat] || catColors.beginner).bg, color: (catColors[lesson.cat] || catColors.beginner).c, textTransform: 'uppercase', letterSpacing: '.5px' }}>{lesson.cat}</span>
            <span style={{ fontSize: '12px', color: '#8892a4' }}>⏱ {lesson.readTime}</span>
            {lesson.free && <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.2)' }}>FREE</span>}
          </div>

          <div style={{ fontSize: '13px', color: '#8892a4', marginBottom: '.4rem' }}>Lesson {lesson.num}</div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '2rem', letterSpacing: '-.5px', marginBottom: '1rem', lineHeight: 1.2 }}>{lesson.title}</h1>
          <p style={{ fontSize: '15px', color: '#8892a4', lineHeight: '1.75', marginBottom: '2.5rem', maxWidth: '680px' }}>{inline(lesson.intro)}</p>

          {/* Sections */}
          <div style={{ maxWidth: '720px' }}>
            {normalizedSections.map(section => (
              <div key={section.id} id={section.id} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.35rem', marginBottom: '1rem', color: '#f59e0b' }}>{section.heading}</h2>

                {section.content && <RichContent text={section.content} />}
              </div>
            ))}

            {/* Key Takeaways */}
            {lesson.takeaways?.length > 0 && (
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
            <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '14px', padding: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '15px', marginBottom: '.25rem' }}>Ready to test your knowledge?</div>
                <div style={{ fontSize: '13px', color: '#8892a4' }}>Take the quiz for this lesson — 10 questions, 75% to pass.</div>
              </div>
              <Link href={`/software/revit/families/${lesson.id}/quiz`} style={{ background: '#f59e0b', color: '#000', padding: '10px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Take Quiz →
              </Link>
            </div>

            {/* Prev/Next navigation */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
              {prevLesson ? (
                <Link href={`/software/revit/families/${prevLesson.id}`} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem 1.25rem', textDecoration: 'none', display: 'block' }}>
                  <div style={{ fontSize: '11px', color: '#8892a4', marginBottom: '.3rem' }}>← Previous</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#e8eaf0' }}>{prevLesson.title}</div>
                </Link>
              ) : <div />}

              {nextLesson ? (
                nextIsLocked ? (
                  <Link href="/pricing" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '12px', padding: '1rem 1.25rem', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontSize: '11px', color: '#f59e0b', marginBottom: '.3rem' }}>🔒 Upgrade to unlock</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#8892a4' }}>{nextLesson.title}</div>
                    <div style={{ fontSize: '11px', color: '#f59e0b', marginTop: '4px' }}>View Plans →</div>
                  </Link>
                ) : (
                  <Link href={`/software/revit/families/${nextLesson.id}`} style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '12px', padding: '1rem 1.25rem', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontSize: '11px', color: '#f59e0b', marginBottom: '.3rem' }}>Next →</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#e8eaf0' }}>{nextLesson.title}</div>
                  </Link>
                )
              ) : (
                <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '12px', padding: '1rem 1.25rem' }}>
                  <div style={{ fontSize: '11px', color: '#4ade80', marginBottom: '.3rem' }}>🎉 Course Complete</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#e8eaf0' }}>You finished Revit Family Creation!</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: 'calc(64px + 48px + 1.5rem)', alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Table of contents */}
          {normalizedSections.length > 0 && (
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '.75rem' }}>📋 In This Lesson</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {normalizedSections.map(s => (
                  <div
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }); }}
                    style={{ fontSize: '12px', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer', color: activeSection === s.id ? '#fbbf24' : '#8892a4', background: activeSection === s.id ? 'rgba(245,158,11,0.08)' : 'transparent', transition: 'all .15s', lineHeight: '1.4' }}
                  >{s.heading}</div>
                ))}
              </div>
            </div>
          )}

          {/* All lessons in this course */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '.75rem' }}>📚 All Family Creation Lessons</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {allLessons.slice(0, 8).map(l => (
                <Link key={l.id} href={`/software/revit/families/${l.id}`} style={{ fontSize: '12px', padding: '5px 8px', borderRadius: '6px', textDecoration: 'none', color: l.id === lesson.id ? '#fbbf24' : '#8892a4', background: l.id === lesson.id ? 'rgba(245,158,11,0.08)' : 'transparent', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: l.id === lesson.id ? '#f59e0b' : '#4a5568', width: '20px', flexShrink: 0 }}>{l.num}</span>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.title.split(':')[0].split('?')[0].trim()}</span>
                </Link>
              ))}
              {allLessons.length > 8 && (
                <Link href="/software/revit/families" style={{ fontSize: '12px', color: '#f59e0b', padding: '5px 8px', textDecoration: 'none' }}>
                  + {allLessons.length - 8} more lessons →
                </Link>
              )}
            </div>
          </div>

          {/* Further Reading */}
          {lesson.resource && (
            <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '.5rem' }}>📄 Further Reading</div>
              <div style={{ fontSize: '12px', color: '#8892a4', marginBottom: '.75rem' }}>{lesson.resource.title}</div>
              <a href={lesson.resource.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', boxSizing: 'border-box', background: '#f59e0b', color: '#000', border: 'none', padding: '8px', borderRadius: '7px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", textAlign: 'center', textDecoration: 'none' }}>
                Open Resource ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
