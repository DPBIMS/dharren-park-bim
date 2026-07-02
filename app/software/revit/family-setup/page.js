'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { revitFamilySetupLessons } from '@/lib/revitFamilySetupLessonsData';

const PLAN_ACCESS = {
  free:    (l) => l.free,
  basic:   (l) => l.cat === 'beginner',
  pro:     (l) => l.cat === 'beginner' || l.cat === 'intermediate',
  premium: ()  => true,
};

const catColor = {
  beginner:     { bg:'rgba(34,197,94,0.1)',  c:'#4ade80' },
  intermediate: { bg:'rgba(245,158,11,0.1)', c:'#fbbf24' },
  advanced:     { bg:'rgba(239,68,68,0.1)',  c:'#f87171' },
};

const topicColor = {
  Foundation:     { bg:'rgba(37,99,235,0.12)',  color:'#60a5fa', border:'rgba(37,99,235,0.2)'  },
  Standards:      { bg:'rgba(245,158,11,0.12)', color:'#fbbf24', border:'rgba(245,158,11,0.2)' },
  Parameters:     { bg:'rgba(139,92,246,0.12)', color:'#a78bfa', border:'rgba(139,92,246,0.2)' },
  Architecture:   { bg:'rgba(99,102,241,0.12)', color:'#818cf8', border:'rgba(99,102,241,0.2)' },
  Organization:   { bg:'rgba(107,114,128,0.12)',color:'#9ca3af', border:'rgba(107,114,128,0.2)' },
  Management:     { bg:'rgba(20,184,166,0.12)', color:'#2dd4bf', border:'rgba(20,184,166,0.2)' },
  'Quality Control': { bg:'rgba(239,68,68,0.12)', color:'#f87171', border:'rgba(239,68,68,0.2)' },
  Workflow:       { bg:'rgba(6,182,212,0.12)',  color:'#22d3ee', border:'rgba(6,182,212,0.2)'  },
  Capstone:       { bg:'rgba(245,158,11,0.15)', color:'#f59e0b', border:'rgba(245,158,11,0.3)' },
};

const planLabel = { free:'FREE', basic:'BASIC+', pro:'PRO+', premium:'PREMIUM' };
const planBadgeStyle = {
  free:    { bg:'rgba(34,197,94,0.1)',  c:'#4ade80' },
  basic:   { bg:'rgba(107,114,128,0.1)',c:'#9ca3af' },
  pro:     { bg:'rgba(37,99,235,0.1)',  c:'#60a5fa' },
  premium: { bg:'rgba(245,158,11,0.1)', c:'#f59e0b' },
};

function getPlanRequired(lesson) {
  if (lesson.free) return 'free';
  if (lesson.cat === 'beginner') return 'basic';
  if (lesson.cat === 'intermediate') return 'pro';
  return 'premium';
}

export default function RevitFamilySetupPage() {
  const [activePlan,  setActivePlan]  = useState('free');
  const [completed,   setCompleted]   = useState(new Set());
  const [loading,     setLoading]     = useState(true);
  const [activeCat,   setActiveCat]   = useState('all');
  const [search,      setSearch]      = useState('');

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }

      const { data: planData } = await supabase
        .from('user_plans').select('plan')
        .eq('user_id', user.id).eq('status', 'active').single();
      if (planData?.plan) setActivePlan(planData.plan);
      else {
        const { data: profile } = await supabase
          .from('profiles').select('plan').eq('id', user.id).single();
        setActivePlan(profile?.plan || 'free');
      }

      const { data: progress } = await supabase
        .from('lesson_progress').select('lesson_id')
        .eq('user_id', user.id).eq('completed', true);
      if (progress) setCompleted(new Set(progress.map(p => String(p.lesson_id))));

      setLoading(false);
    }
    load();
  }, []);

  function canAccess(lesson) {
    const checker = PLAN_ACCESS[activePlan] || PLAN_ACCESS.free;
    return checker(lesson);
  }

  const filtered = revitFamilySetupLessons.filter(l => {
    const matchCat    = activeCat === 'all' || l.cat === activeCat;
    const matchSearch = !search ||
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const unlockedCount  = revitFamilySetupLessons.filter(l => canAccess(l)).length;
  const completedCount = revitFamilySetupLessons.filter(l => completed.has(l.id)).length;
  const freeCount      = revitFamilySetupLessons.filter(l => l.free).length;

  return (
    <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif" }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'3rem 2rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize:'12px', color:'#8892a4', marginBottom:'1.5rem', display:'flex', alignItems:'center', gap:'.5rem' }}>
          <Link href="/" style={{ color:'#8892a4', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <Link href="/software" style={{ color:'#8892a4', textDecoration:'none' }}>Software</Link>
          <span>›</span>
          <Link href="/software/revit/getting-started" style={{ color:'#8892a4', textDecoration:'none' }}>Revit</Link>
          <span>›</span>
          <span style={{ color:'#e8eaf0' }}>Family Setup</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom:'2.5rem' }}>
          <div style={{ fontSize:'11px', fontWeight:500, letterSpacing:'2px', textTransform:'uppercase', color:'#f59e0b', marginBottom:'.5rem' }}>
            Software · Revit
          </div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'2.2rem', fontWeight:800, letterSpacing:'-.5px', marginBottom:'.5rem' }}>
            Revit Family Setup
          </h1>
          <p style={{ color:'#8892a4', fontSize:'15px', maxWidth:'680px' }}>
            Build an office family library infrastructure from scratch — shared parameter file, base family templates, type catalogue standards, folder architecture, version control, and QA protocol every family in your office should follow.
          </p>
        </div>

        {/* Course stats strip */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'1.5rem', marginBottom:'2rem', padding:'1rem 1.5rem', background:'rgba(245,158,11,0.04)', border:'1px solid rgba(245,158,11,0.12)', borderRadius:'12px', fontSize:'13px' }}>
          {[
            { label:'Total Lessons',  value:'24' },
            { label:'Quiz Questions', value:'240' },
            { label:'Format',         value:'Hands-on Build' },
            { label:'Plan Required',  value:'Basic+' },
            { label:'Last Updated',   value:'June 2026' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize:'10px', fontWeight:600, letterSpacing:'1px', color:'#8892a4', textTransform:'uppercase', marginBottom:'2px' }}>{s.label}</div>
              <div style={{ fontWeight:600, color:'#e8eaf0' }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Plan access banner */}
        {!loading && activePlan !== 'free' && (
          <div style={{ background:'rgba(37,99,235,0.06)', border:'1px solid rgba(37,99,235,0.2)', borderRadius:'10px', padding:'.75rem 1.25rem', marginBottom:'1.5rem', fontSize:'13px', color:'#93c5fd', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <span>✓ Logged in as <strong style={{ textTransform:'capitalize' }}>{activePlan} Plan</strong> — {unlockedCount} of {revitFamilySetupLessons.length} lessons unlocked · {completedCount} completed</span>
            <Link href="/dashboard" style={{ color:'#3b82f6', fontSize:'12px', fontWeight:500, textDecoration:'none' }}>Go to Dashboard →</Link>
          </div>
        )}
        {!loading && activePlan === 'free' && (
          <div style={{ background:'rgba(245,158,11,0.06)', border:'1px solid rgba(245,158,11,0.2)', borderRadius:'10px', padding:'.75rem 1.25rem', marginBottom:'1.5rem', fontSize:'13px', color:'#fbbf24', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <span>🔒 Family Setup starts at Basic plan. Upgrade to access all 24 lessons.</span>
            <Link href="/pricing" style={{ color:'#f59e0b', fontSize:'12px', fontWeight:600, textDecoration:'none' }}>Upgrade Now →</Link>
          </div>
        )}

        {/* Filter Bar */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', marginBottom:'1.5rem', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem' }}>
            {[['all','All Levels'],['beginner','Beginner'],['intermediate','Intermediate'],['advanced','Advanced']].map(([val, label]) => (
              <button key={val} onClick={() => setActiveCat(val)} style={{
                background: activeCat === val
                  ? val==='beginner' ? 'rgba(34,197,94,0.12)' : val==='intermediate' ? 'rgba(245,158,11,0.12)' : val==='advanced' ? 'rgba(239,68,68,0.12)' : 'rgba(245,158,11,0.15)'
                  : 'rgba(255,255,255,0.04)',
                border: `1px solid ${activeCat === val
                  ? val==='beginner' ? 'rgba(34,197,94,0.3)' : val==='intermediate' ? 'rgba(245,158,11,0.3)' : val==='advanced' ? 'rgba(239,68,68,0.3)' : 'rgba(245,158,11,0.4)'
                  : 'rgba(255,255,255,0.08)'}`,
                borderRadius:'100px', padding:'6px 16px', fontSize:'13px', cursor:'pointer', fontFamily:"'DM Sans',sans-serif",
                color: activeCat === val
                  ? val==='beginner' ? '#4ade80' : val==='intermediate' ? '#fbbf24' : val==='advanced' ? '#f87171' : '#fff'
                  : '#8892a4',
              }}>{label}</button>
            ))}
          </div>
          <input
            type="text" placeholder="🔍  Search lessons..." value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'8px', padding:'8px 14px', color:'#e8eaf0', fontSize:'13px', fontFamily:"'DM Sans',sans-serif", outline:'none', width:'220px' }}
          />
        </div>

        {/* Stats row */}
        <div style={{ display:'flex', gap:'1.5rem', marginBottom:'2rem', flexWrap:'wrap', alignItems:'center', fontSize:'13px', color:'#8892a4' }}>
          <span><strong style={{ color:'#e8eaf0' }}>{filtered.length}</strong> lessons</span>
          <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'rgba(255,255,255,0.08)', display:'inline-block' }}/>
          <span><strong style={{ color:'#e8eaf0' }}>{freeCount}</strong> free previews</span>
          <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'rgba(255,255,255,0.08)', display:'inline-block' }}/>
          <span>Updated <strong style={{ color:'#e8eaf0' }}>June 2026</strong></span>
        </div>

        {/* Lesson Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign:'center', padding:'4rem 2rem', color:'#8892a4' }}>
            <div style={{ fontSize:'2rem', marginBottom:'.5rem' }}>🔍</div>
            <div>No lessons match your filters.</div>
          </div>
        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.25rem' }}>
            {filtered.map(l => {
              const ts         = topicColor[l.topic] || topicColor.Foundation;
              const cs         = catColor[l.cat]     || catColor.beginner;
              const accessible = canAccess(l);
              const isDone     = completed.has(l.id);
              const planReq    = getPlanRequired(l);
              const pb         = planBadgeStyle[planReq];
              return (
                <div key={l.id} style={{
                  background:'rgba(255,255,255,0.04)',
                  border:`1px solid ${isDone ? 'rgba(245,158,11,0.25)' : accessible ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)'}`,
                  borderRadius:'14px', overflow:'hidden', display:'flex', flexDirection:'column',
                  opacity: accessible ? 1 : 0.75,
                  transition:'border-color .2s',
                }}>
                  <div style={{ padding:'1.25rem 1.25rem .75rem', flex:1 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:'.4rem', marginBottom:'.75rem', flexWrap:'wrap' }}>
                      <span style={{ fontSize:'11px', fontWeight:500, padding:'3px 10px', borderRadius:'5px', background:ts.bg, color:ts.color, border:`1px solid ${ts.border}` }}>
                        {l.topic}
                      </span>
                      <span style={{ fontSize:'10px', fontWeight:600, padding:'2px 8px', borderRadius:'4px', background:cs.bg, color:cs.c, textTransform:'uppercase', letterSpacing:'.5px' }}>
                        {l.cat}
                      </span>
                      {l.free && (
                        <span style={{ fontSize:'10px', fontWeight:600, padding:'2px 8px', borderRadius:'4px', background:'rgba(34,197,94,0.1)', color:'#4ade80', border:'1px solid rgba(34,197,94,0.2)' }}>
                          FREE
                        </span>
                      )}
                      {isDone && (
                        <span style={{ fontSize:'10px', fontWeight:600, padding:'2px 8px', borderRadius:'4px', background:'rgba(245,158,11,0.1)', color:'#fbbf24' }}>
                          ✓ Done
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize:'11px', color:'#8892a4', marginBottom:'.4rem' }}>Lesson {l.num}</div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'15px', lineHeight:'1.35', marginBottom:'.5rem' }}>
                      {l.title}
                    </div>
                    {accessible && (
                      <div style={{ fontSize:'13px', color:'#8892a4', lineHeight:'1.65' }}>{l.desc}</div>
                    )}
                    {!accessible && (
                      <div style={{ display:'flex', alignItems:'center', gap:'6px', marginTop:'.25rem' }}>
                        <span style={{ fontSize:'11px', fontWeight:600, padding:'2px 9px', borderRadius:'100px', background:pb.bg, color:pb.c }}>
                          {planLabel[planReq]}
                        </span>
                        <span style={{ fontSize:'12px', color:'#6b7280' }}>required to unlock</span>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div style={{ padding:'.75rem 1.25rem', borderTop:'1px solid rgba(255,255,255,0.06)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <span style={{ fontSize:'11px', color:'#8892a4' }}>⏱ {l.readTime}</span>
                    {accessible ? (
                      <Link href={`/software/revit/family-setup/${l.id}`} style={{ fontSize:'12px', color:'#f59e0b', fontWeight:500, textDecoration:'none', display:'flex', alignItems:'center', gap:'4px' }}>
                        {isDone ? '✓ Review' : 'Read lesson'} <span>→</span>
                      </Link>
                    ) : (
                      <div style={{ display:'flex', alignItems:'center', gap:'.5rem' }}>
                        <span>🔒</span>
                        <Link href="/pricing" style={{ fontSize:'12px', color:'#f59e0b', textDecoration:'none' }}>View Plans</Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}
