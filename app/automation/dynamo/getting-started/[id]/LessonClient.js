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
  'Dynamo Basics':          { bg:'rgba(37,99,235,0.12)',  color:'#60a5fa', border:'rgba(37,99,235,0.2)'  },
  'Data & Geometry':        { bg:'rgba(139,92,246,0.12)', color:'#a78bfa', border:'rgba(139,92,246,0.2)' },
  'Revit Connection':       { bg:'rgba(16,185,129,0.12)', color:'#34d399', border:'rgba(16,185,129,0.2)' },
  'Lists & Placement':      { bg:'rgba(245,158,11,0.12)', color:'#fbbf24', border:'rgba(245,158,11,0.2)' },
  'Parameters & Logic':     { bg:'rgba(20,184,166,0.12)', color:'#2dd4bf', border:'rgba(20,184,166,0.2)' },
  'Data Exchange':          { bg:'rgba(239,68,68,0.12)',  color:'#f87171', border:'rgba(239,68,68,0.2)'  },
  'Families & Sheets':      { bg:'rgba(234,179,8,0.12)',  color:'#facc15', border:'rgba(234,179,8,0.2)'  },
  'Custom Nodes & Python':  { bg:'rgba(14,165,233,0.12)', color:'#38bdf8', border:'rgba(14,165,233,0.2)' },
  'Families & Debugging':   { bg:'rgba(99,102,241,0.12)', color:'#818cf8', border:'rgba(99,102,241,0.2)' },
  'QA & Standards':         { bg:'rgba(168,85,247,0.12)', color:'#c084fc', border:'rgba(168,85,247,0.2)' },
  'Team Workflows':         { bg:'rgba(236,72,153,0.12)', color:'#f472b6', border:'rgba(236,72,153,0.2)' },
  'Capstone':               { bg:'rgba(245,158,11,0.12)', color:'#f59e0b', border:'rgba(245,158,11,0.2)' },
  general:                  { bg:'rgba(107,114,128,0.12)',color:'#9ca3af', border:'rgba(107,114,128,0.2)' },
};

const catColors = {
  beginner:     { bg:'rgba(34,197,94,0.1)',  c:'#4ade80' },
  intermediate: { bg:'rgba(245,158,11,0.1)', c:'#fbbf24' },
  advanced:     { bg:'rgba(239,68,68,0.1)',  c:'#f87171' },
};

function inline(str) {
  if (!str) return null;
  return String(str).split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g).filter(p => p !== '').map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color:'#f1f5f9', fontWeight:700 }}>{part.slice(2,-2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} style={{ background:'rgba(255,255,255,0.08)', padding:'2px 6px', borderRadius:'4px', fontFamily:"'Courier New',monospace", fontSize:'0.9em', color:'#fbbf24' }}>{part.slice(1,-1)}</code>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} style={{ color:'#9ca3af' }}>{part.slice(1,-1)}</em>;
    }
    return part;
  });
}

const CALLOUT_THEMES = [
  { test: /mistake|warning|never\b|caution|disaster/i,            color:'#f87171', bg:'rgba(239,68,68,0.07)',  border:'rgba(239,68,68,0.22)',  icon:'⚠' },
  { test: /important|critical|rule\b/i,                           color:'#fbbf24', bg:'rgba(245,158,11,0.07)', border:'rgba(245,158,11,0.22)', icon:'❗' },
  { test: /best practice|standard|convention/i,                   color:'#34d399', bg:'rgba(34,197,94,0.07)',  border:'rgba(34,197,94,0.22)',  icon:'✓' },
  { test: /why (this|it) matters|honest assessment|distinction/i, color:'#a78bfa', bg:'rgba(139,92,246,0.07)', border:'rgba(139,92,246,0.22)', icon:'★' },
  { test: /tip\b/i,                                               color:'#60a5fa', bg:'rgba(37,99,235,0.07)',  border:'rgba(37,99,235,0.22)',  icon:'💡' },
];
const calloutTheme = (label) => CALLOUT_THEMES.find(t => t.test.test(label)) || null;

function isSpecialLine(line) {
  const t = line.trim();
  return t === '' || t.startsWith('|') || /^-\s/.test(t) || /^\d+\.\s/.test(t) || /^\*\*[^*]+\*\*:?$/.test(t);
}

function RichContent({ text }) {
  if (!text) return null;
  const lines = text.split('\n');
  const blocks = [];
  let i = 0, key = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const t = raw.trim();

    if (t === '') { i++; continue; }

    if (t.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) { rows.push(lines[i].trim()); i++; }
      const dataRows = rows.filter(r => r.replace(/[|:\-\s]/g,'') !== '');
      blocks.push(
        <div key={key++} style={{ border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', overflow:'hidden', margin:'1.1rem 0' }}>
          {dataRows.map((r,ri) => {
            const cells = r.split('|').slice(1,-1).map(c => c.trim());
            return (
              <div key={ri} style={{ display:'grid', gridTemplateColumns:`repeat(${cells.length},1fr)`, background:ri===0?'rgba(37,99,235,0.1)':ri%2===0?'rgba(255,255,255,0.02)':'transparent', borderBottom:ri<dataRows.length-1?'1px solid rgba(255,255,255,0.06)':'none' }}>
                {cells.map((c,ci) => (
                  <div key={ci} style={{ padding:'8px 12px', fontSize:ri===0?'11px':'13px', fontWeight:ri===0?700:400, color:ri===0?'#60a5fa':'#c8d0de', textTransform:ri===0?'uppercase':'none', letterSpacing:ri===0?'.4px':'normal' }}>{inline(c)}</div>
                ))}
              </div>
            );
          })}
        </div>
      );
      continue;
    }

    if (/^\d+\.\s/.test(t)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) { items.push(lines[i].trim().replace(/^\d+\.\s/,'')); i++; }
      blocks.push(
        <div key={key++} style={{ display:'flex', flexDirection:'column', gap:'8px', margin:'1.1rem 0' }}>
          {items.map((it,idx) => (
            <div key={idx} style={{ display:'flex', gap:'12px', alignItems:'flex-start', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'8px', padding:'9px 12px' }}>
              <span style={{ flexShrink:0, width:'20px', height:'20px', borderRadius:'50%', background:'rgba(37,99,235,0.18)', color:'#60a5fa', fontSize:'11px', fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', marginTop:'1px' }}>{idx+1}</span>
              <span style={{ fontSize:'14px', color:'#c8d0de', lineHeight:'1.6' }}>{inline(it)}</span>
            </div>
          ))}
        </div>
      );
      continue;
    }

    if (/^-\s/.test(t)) {
      const items = [];
      while (i < lines.length && /^-\s/.test(lines[i].trim())) { items.push(lines[i].trim().slice(2)); i++; }
      blocks.push(
        <ul key={key++} style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'7px', margin:'1.1rem 0', padding:0 }}>
          {items.map((it,idx) => (
            <li key={idx} style={{ fontSize:'14px', color:'#a8b0c4', display:'flex', alignItems:'flex-start', gap:'8px', lineHeight:'1.6' }}>
              <span style={{ color:'#3b82f6', flexShrink:0, marginTop:'2px' }}>✓</span>
              <span>{inline(it)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    const labelMatch = t.match(/^\*\*([^*]+)\*\*:?$/);
    if (labelMatch) {
      const label = labelMatch[1].replace(/:$/,'');
      i++;
      const bodyLines = [];
      while (i < lines.length && !isSpecialLine(lines[i])) { bodyLines.push(lines[i]); i++; }
      const body = bodyLines.join(' ').trim();
      const theme = calloutTheme(label);
      if (theme) {
        blocks.push(
          <div key={key++} style={{ background:theme.bg, border:`1px solid ${theme.border}`, borderRadius:'10px', padding:'1rem 1.25rem', margin:'1.25rem 0' }}>
            <div style={{ fontSize:'11px', fontWeight:700, letterSpacing:'.5px', color:theme.color, textTransform:'uppercase', marginBottom:body?'.4rem':0, display:'flex', alignItems:'center', gap:'6px' }}>
              <span>{theme.icon}</span><span>{label}</span>
            </div>
            {body && <div style={{ fontSize:'14px', color:'#c8d0de', lineHeight:'1.7' }}>{inline(body)}</div>}
          </div>
        );
      } else {
        blocks.push(<h3 key={key++} style={{ fontSize:'13px', fontWeight:700, color:'#3b82f6', letterSpacing:'.3px', textTransform:'uppercase', margin:'1.25rem 0 .5rem' }}>{label}</h3>);
        if (body) blocks.push(<p key={key++} style={{ fontSize:'14px', color:'#c8d0de', lineHeight:'1.8', margin:'0 0 1rem' }}>{inline(body)}</p>);
      }
      continue;
    }

    const paraLines = [raw];
    i++;
    while (i < lines.length && !isSpecialLine(lines[i])) { paraLines.push(lines[i]); i++; }
    blocks.push(<p key={key++} style={{ fontSize:'14px', color:'#c8d0de', lineHeight:'1.8', margin:'0 0 1rem' }}>{inline(paraLines.join(' '))}</p>);
  }

  return <div>{blocks}</div>;
}

export default function DynamoLessonClient({ lesson, allLessons }) {
  const router = useRouter();
  const [completed,     setCompleted]     = useState(false);
  const [activePlan,    setActivePlan]    = useState('free');
  const [planLoaded,    setPlanLoaded]    = useState(false);
  const [activeSection, setActiveSection] = useState(lesson.sections?.[0]?.id || '');
  const [authChecked,   setAuthChecked]   = useState(false);

  const normalizedSections = lesson.sections?.map((s, i) => ({
    ...s,
    id: s.id || `s${i + 1}`,
    heading: s.heading || s.title,
  })) || [];

  const normalizeNav = (nav) => {
    if (!nav) return null;
    if (typeof nav === 'string') {
      const found = allLessons.find(l => l.id === nav);
      return found ? { id: nav, title: found.title } : { id: nav, title: '' };
    }
    return nav;
  };
  const prevNav = normalizeNav(lesson.prev);
  const nextNav = normalizeNav(lesson.next);

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

  const tc = topicColors[lesson.topic] || topicColors.general;
  const cc = catColors[lesson.cat] || catColors.beginner;
  const nextLesson = nextNav ? allLessons.find(l => l.id === nextNav.id) : null;
  const nextIsLocked = planLoaded && nextLesson && !canAccess(nextLesson);

  return (
    <div style={{ fontFamily:"'DM Sans',sans-serif" }}>

      {/* Top bar */}
      <div style={{ position:'fixed', top:'64px', left:0, right:0, zIndex:90, background:'rgba(10,14,26,0.95)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(255,255,255,0.07)', height:'48px', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 1.5rem' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'1rem', fontSize:'13px' }}>
          <Link href="/automation/dynamo/getting-started" style={{ color:'#8892a4', textDecoration:'none' }}>← Back to Dynamo</Link>
          <div style={{ width:'1px', height:'16px', background:'rgba(255,255,255,0.1)' }} />
          <span style={{ color:'#8892a4' }}>Lesson <strong style={{ color:'#e8eaf0' }}>{lesson.num}</strong> of {allLessons.length}</span>
        </div>
        <button
          onClick={toggleComplete}
          style={{ display:'flex', alignItems:'center', gap:'.4rem', padding:'5px 14px', borderRadius:'7px', border:`1px solid ${completed?'rgba(34,197,94,0.3)':'rgba(255,255,255,0.1)'}`, background:completed?'rgba(34,197,94,0.1)':'rgba(255,255,255,0.04)', color:completed?'#4ade80':'#8892a4', fontSize:'12px', fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
          <span>{completed?'✓':'○'}</span>
          <span>{completed?'Completed':'Mark Complete'}</span>
        </button>
      </div>

      {/* Layout */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 280px', maxWidth:'1200px', margin:'0 auto', padding:'2rem 1.5rem 4rem', gap:'2.5rem', paddingTop:'calc(48px + 1rem)' }}>

        {/* Main content */}
        <div>
          {/* Meta */}
          <div style={{ display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'1rem', flexWrap:'wrap' }}>
            <span style={{ fontSize:'11px', fontWeight:600, padding:'3px 10px', borderRadius:'5px', background:tc.bg, color:tc.color, border:`1px solid ${tc.border}` }}>{lesson.topic}</span>
            <span style={{ fontSize:'10px', fontWeight:600, padding:'2px 8px', borderRadius:'4px', background:cc.bg, color:cc.c, textTransform:'uppercase', letterSpacing:'.5px' }}>{lesson.cat}</span>
            <span style={{ fontSize:'12px', color:'#8892a4' }}>⏱ {lesson.readTime}</span>
            {lesson.free && <span style={{ fontSize:'10px', fontWeight:700, padding:'2px 8px', borderRadius:'4px', background:'rgba(34,197,94,0.1)', color:'#4ade80', border:'1px solid rgba(34,197,94,0.2)' }}>FREE</span>}
          </div>

          <div style={{ fontSize:'13px', color:'#8892a4', marginBottom:'.4rem' }}>Lesson {lesson.num}</div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'2rem', letterSpacing:'-.5px', marginBottom:'1rem', lineHeight:1.2 }}>{lesson.title}</h1>
          <p style={{ fontSize:'15px', color:'#8892a4', lineHeight:'1.75', marginBottom:'2.5rem', maxWidth:'680px' }}>{inline(lesson.intro)}</p>

          {/* Sections */}
          <div style={{ maxWidth:'720px' }}>
            {normalizedSections.map(section => (
              <div key={section.id} id={section.id} style={{ marginBottom:'2.5rem' }}>
                <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'1.35rem', marginBottom:'1rem', color:'#e8eaf0' }}>{section.heading}</h2>

                {section.content && <RichContent text={section.content} />}

                {section.subsections?.map((sub, i) => (
                  <div key={i} style={{ marginBottom:'1rem' }}>
                    <h3 style={{ fontSize:'13px', fontWeight:700, color:'#3b82f6', letterSpacing:'.3px', marginBottom:'.5rem', textTransform:'uppercase' }}>{sub.heading}</h3>
                    <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'6px' }}>
                      {sub.items.map((item, j) => (
                        <li key={j} style={{ fontSize:'14px', color:'#8892a4', display:'flex', alignItems:'flex-start', gap:'8px', lineHeight:'1.6' }}>
                          <span style={{ color:'#3b82f6', flexShrink:0, marginTop:'2px' }}>✓</span>
                          <span>{inline(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {section.items && (
                  <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px', marginBottom:'1rem' }}>
                    {section.items.map((item, i) => (
                      <li key={i} style={{ fontSize:'14px', color:'#8892a4', display:'flex', alignItems:'flex-start', gap:'8px', lineHeight:'1.6' }}>
                        <span style={{ color:'#3b82f6', flexShrink:0, marginTop:'2px' }}>✓</span>
                        <span>{inline(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.formula && (
                  <div style={{ background:'rgba(37,99,235,0.08)', border:'1px solid rgba(37,99,235,0.2)', borderRadius:'10px', padding:'1rem 1.25rem', margin:'1.25rem 0' }}>
                    <div style={{ fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', color:'#3b82f6', textTransform:'uppercase', marginBottom:'.4rem' }}>{section.formula.label}</div>
                    <div style={{ fontSize:'14px', fontWeight:600, color:'#f59e0b', fontFamily:"'Courier New',monospace" }}>{section.formula.text}</div>
                  </div>
                )}

                {section.code && (
                  <div style={{ background:'#0d1117', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', padding:'1.25rem', margin:'1.25rem 0', overflow:'auto' }}>
                    <div style={{ fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', color:'#f59e0b', textTransform:'uppercase', marginBottom:'.75rem' }}>{section.code.label}</div>
                    <pre style={{ margin:0, fontSize:'13px', color:'#c8d0de', lineHeight:'1.7', fontFamily:"'Courier New',monospace", whiteSpace:'pre-wrap' }}>
                      {section.code.lines.join('\n')}
                    </pre>
                  </div>
                )}
              </div>
            ))}

            {/* Key Takeaways */}
            {lesson.takeaways && (
              <div style={{ background:'rgba(37,99,235,0.06)', border:'1px solid rgba(37,99,235,0.2)', borderRadius:'14px', padding:'1.5rem', marginBottom:'2rem' }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'14px', color:'#60a5fa', marginBottom:'1rem' }}>💡 Key Takeaways</div>
                <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                  {lesson.takeaways.map((t, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'8px', fontSize:'13px', color:'#d1d5db', lineHeight:'1.6' }}>
                      <span style={{ color:'#3b82f6', flexShrink:0 }}>✓</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quiz CTA */}
            {lesson.quiz && (
              <div style={{ background:'rgba(37,99,235,0.06)', border:'1px solid rgba(37,99,235,0.2)', borderRadius:'14px', padding:'1.5rem', marginBottom:'2rem', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem', flexWrap:'wrap' }}>
                <div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'15px', marginBottom:'.25rem' }}>Ready to test your knowledge?</div>
                  <div style={{ fontSize:'13px', color:'#8892a4' }}>Take the {lesson.quiz.label} — {lesson.quiz.questions} questions, about {lesson.quiz.time}.</div>
                </div>
                <Link href={`/automation/dynamo/getting-started/${lesson.id}/quiz`} style={{ background:'#3b82f6', color:'#fff', padding:'10px 24px', borderRadius:'8px', fontSize:'13px', fontWeight:700, textDecoration:'none', whiteSpace:'nowrap' }}>
                  Take Quiz →
                </Link>
              </div>
            )}

            {/* Prev/Next navigation */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginTop:'2rem' }}>
              {prevNav ? (
                <Link href={`/automation/dynamo/getting-started/${prevNav.id}`} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'1rem 1.25rem', textDecoration:'none', display:'block' }}>
                  <div style={{ fontSize:'11px', color:'#8892a4', marginBottom:'.3rem' }}>← Previous</div>
                  <div style={{ fontSize:'13px', fontWeight:600, color:'#e8eaf0' }}>{prevNav.title}</div>
                </Link>
              ) : <div />}

              {nextNav ? (
                nextIsLocked ? (
                  <Link href="/pricing" style={{ background:'rgba(37,99,235,0.06)', border:'1px solid rgba(37,99,235,0.2)', borderRadius:'12px', padding:'1rem 1.25rem', textDecoration:'none', display:'block' }}>
                    <div style={{ fontSize:'11px', color:'#60a5fa', marginBottom:'.3rem' }}>🔒 Upgrade to unlock</div>
                    <div style={{ fontSize:'13px', fontWeight:600, color:'#8892a4' }}>{nextNav.title}</div>
                    <div style={{ fontSize:'11px', color:'#3b82f6', marginTop:'4px' }}>View Plans →</div>
                  </Link>
                ) : (
                  <Link href={`/automation/dynamo/getting-started/${nextNav.id}`} style={{ background:'rgba(37,99,235,0.06)', border:'1px solid rgba(37,99,235,0.2)', borderRadius:'12px', padding:'1rem 1.25rem', textDecoration:'none', display:'block' }}>
                    <div style={{ fontSize:'11px', color:'#3b82f6', marginBottom:'.3rem' }}>Next →</div>
                    <div style={{ fontSize:'13px', fontWeight:600, color:'#e8eaf0' }}>{nextNav.title}</div>
                  </Link>
                )
              ) : (
                <div style={{ background:'rgba(34,197,94,0.06)', border:'1px solid rgba(34,197,94,0.2)', borderRadius:'12px', padding:'1rem 1.25rem' }}>
                  <div style={{ fontSize:'11px', color:'#4ade80', marginBottom:'.3rem' }}>🎉 Course Complete</div>
                  <div style={{ fontSize:'13px', fontWeight:600, color:'#e8eaf0' }}>You finished the Dynamo course!</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ position:'sticky', top:'calc(64px + 48px + 1.5rem)', alignSelf:'start', display:'flex', flexDirection:'column', gap:'1rem' }}>

          {/* Table of contents */}
          {normalizedSections.length > 0 && (
            <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'1.25rem' }}>
              <div style={{ fontSize:'11px', fontWeight:700, letterSpacing:'1px', color:'#6b7280', textTransform:'uppercase', marginBottom:'.75rem' }}>📋 In This Lesson</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'2px' }}>
                {normalizedSections.map(s => (
                  <div
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); document.getElementById(s.id)?.scrollIntoView({ behavior:'smooth' }); }}
                    style={{ fontSize:'12px', padding:'5px 8px', borderRadius:'6px', cursor:'pointer', color:activeSection===s.id?'#60a5fa':'#8892a4', background:activeSection===s.id?'rgba(37,99,235,0.08)':'transparent', transition:'all .15s', lineHeight:'1.4' }}
                  >{s.heading}</div>
                ))}
              </div>
            </div>
          )}

          {/* All lessons in this course */}
          <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'1.25rem' }}>
            <div style={{ fontSize:'11px', fontWeight:700, letterSpacing:'1px', color:'#6b7280', textTransform:'uppercase', marginBottom:'.75rem' }}>📚 All Dynamo Lessons</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'2px' }}>
              {allLessons.slice(0, 8).map(l => (
                <Link key={l.id} href={`/automation/dynamo/getting-started/${l.id}`} style={{ fontSize:'12px', padding:'5px 8px', borderRadius:'6px', textDecoration:'none', color:l.id===lesson.id?'#60a5fa':'#8892a4', background:l.id===lesson.id?'rgba(37,99,235,0.08)':'transparent', display:'flex', alignItems:'center', gap:'6px' }}>
                  <span style={{ fontSize:'10px', fontWeight:700, color:l.id===lesson.id?'#3b82f6':'#4a5568', width:'20px', flexShrink:0 }}>{l.num}</span>
                  <span style={{ overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{l.title.split(':')[0].split('?')[0].trim()}</span>
                </Link>
              ))}
              {allLessons.length > 8 && (
                <Link href="/automation/dynamo/getting-started" style={{ fontSize:'12px', color:'#3b82f6', padding:'5px 8px', textDecoration:'none' }}>
                  + {allLessons.length - 8} more lessons →
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
