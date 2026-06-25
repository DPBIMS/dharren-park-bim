'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import revitLessons from '@/lib/revitLessonsData';

const PLAN_ACCESS = {
  free:    (l) => l.free,
  basic:   (l) => l.cat === 'beginner',
  pro:     (l) => l.cat === 'beginner' || l.cat === 'intermediate',
  premium: ()  => true,
};

const catColor = {
  beginner:     { bg: 'rgba(34,197,94,0.1)',  c: '#4ade80',  label: 'Beginner'     },
  intermediate: { bg: 'rgba(245,158,11,0.1)', c: '#fbbf24',  label: 'Intermediate' },
  advanced:     { bg: 'rgba(239,68,68,0.1)',  c: '#f87171',  label: 'Advanced'     },
};

const planBadge = {
  free:    { bg: 'rgba(34,197,94,0.1)',  c: '#4ade80', label: 'FREE'    },
  basic:   { bg: 'rgba(107,114,128,0.1)',c: '#9ca3af', label: 'BASIC+'  },
  pro:     { bg: 'rgba(37,99,235,0.1)',  c: '#60a5fa', label: 'PRO+'    },
  premium: { bg: 'rgba(245,158,11,0.1)', c: '#f59e0b', label: 'PREMIUM' },
};

function getPlanRequired(lesson) {
  if (lesson.free) return 'free';
  if (lesson.cat === 'beginner') return 'basic';
  if (lesson.cat === 'intermediate') return 'pro';
  return 'premium';
}

export default function RevitGettingStartedPage() {
  const [activePlan,   setActivePlan]   = useState('free');
  const [completed,    setCompleted]    = useState(new Set());
  const [loading,      setLoading]      = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const byCategory = (cat) => revitLessons.filter(l => l.cat === cat);
  const unlockedCount = revitLessons.filter(l => canAccess(l)).length;
  const completedCount = revitLessons.filter(l => completed.has(l.id)).length;

  const filtered = activeFilter === 'all'
    ? revitLessons
    : revitLessons.filter(l => l.cat === activeFilter);

  return (
    <main style={{ background: '#0a0e1a', color: '#e8eaf0', minHeight: '100vh', paddingTop: '80px', fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: '#8892a4', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
          <Link href="/software" style={{ color: '#8892a4', textDecoration: 'none' }}>Software</Link>
          <span>›</span>
          <Link href="/software/revit" style={{ color: '#8892a4', textDecoration: 'none' }}>Revit</Link>
          <span>›</span>
          <span style={{ color: '#e8eaf0' }}>Getting Started</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>▶</div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#3b82f6', marginBottom: '.25rem' }}>Software · Revit</div>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: '2rem', fontWeight: 800, letterSpacing: '-.5px', margin: 0 }}>Getting Started with Revit</h1>
            </div>
          </div>
          <p style={{ color: '#8892a4', fontSize: '15px', maxWidth: '700px', lineHeight: '1.7' }}>
            The most comprehensive Revit course in the Philippines — from interface basics to advanced professional workflows. Master Revit the right way, from the ground up.
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total Lessons',    value: revitLessons.length,   sub: 'in this course'         },
            { label: 'Unlocked',         value: unlockedCount,          sub: `on your ${activePlan} plan` },
            { label: 'Completed',        value: completedCount,         sub: 'lessons done'           },
            { label: 'Course Progress',  value: `${revitLessons.length > 0 ? Math.round((completedCount/revitLessons.length)*100) : 0}%`, sub: 'of full course' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem 1.25rem' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px', color: '#8892a4', marginBottom: '.25rem' }}>{s.label.toUpperCase()}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.6rem', color: '#e8eaf0' }}>{loading ? '...' : s.value}</div>
              <div style={{ fontSize: '11px', color: '#8892a4', marginTop: '2px' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Plan access banner */}
        {!loading && activePlan === 'free' && (
          <div style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: '10px', padding: '.875rem 1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
            <span style={{ color: '#93c5fd' }}>🔒 You have access to <strong>{revitLessons.filter(l=>l.free).length} free lessons</strong>. Upgrade to unlock the full Revit course.</span>
            <Link href="/pricing" style={{ color: '#3b82f6', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>Upgrade Now →</Link>
          </div>
        )}

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '.5rem', marginBottom: '2rem' }}>
          {[['all','All Levels'],['beginner','Beginner'],['intermediate','Intermediate'],['advanced','Advanced']].map(([val, label]) => (
            <button key={val} onClick={() => setActiveFilter(val)} style={{
              padding: '6px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 500,
              cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
              background: activeFilter === val ? '#2563eb' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${activeFilter === val ? '#2563eb' : 'rgba(255,255,255,0.08)'}`,
              color: activeFilter === val ? '#fff' : '#8892a4',
            }}>{label}</button>
          ))}
        </div>

        {/* Lesson list by category */}
        {['beginner', 'intermediate', 'advanced'].map(cat => {
          const catLessons = filtered.filter(l => l.cat === cat);
          if (catLessons.length === 0) return null;
          const cs = catColor[cat];
          const catCompleted = catLessons.filter(l => completed.has(l.id)).length;
          return (
            <div key={cat} style={{ marginBottom: '2.5rem' }}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', paddingBottom: '.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '5px', background: cs.bg, color: cs.c, textTransform: 'uppercase', letterSpacing: '.5px' }}>{cs.label}</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#e8eaf0' }}>
                  {cat === 'beginner' ? 'Foundation' : cat === 'intermediate' ? 'Deeper Skills' : 'Professional Level'}
                </span>
                <span style={{ fontSize: '12px', color: '#8892a4', marginLeft: 'auto' }}>{catCompleted} of {catLessons.length} completed</span>
              </div>

              {/* Lesson cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
                {catLessons.map((lesson, idx) => {
                  const accessible = canAccess(lesson);
                  const isDone = completed.has(lesson.id);
                  const planReq = getPlanRequired(lesson);
                  const pb = planBadge[planReq];
                  return (
                    <div key={lesson.id} style={{
                      background: accessible ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${isDone ? 'rgba(34,197,94,0.2)' : accessible ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)'}`,
                      borderRadius: '12px', padding: '1rem 1.25rem',
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      opacity: accessible ? 1 : 0.6,
                      transition: 'all .15s',
                    }}>
                      {/* Status circle */}
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', background: isDone ? 'rgba(34,197,94,0.15)' : accessible ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)', border: `1px solid ${isDone ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.1)'}` }}>
                        {isDone ? <span style={{ color: '#4ade80' }}>✓</span> : accessible ? <span style={{ color: '#8892a4', fontSize: '11px', fontWeight: 700 }}>{lesson.num}</span> : '🔒'}
                      </div>

                      {/* Lesson info */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: accessible ? '#e8eaf0' : '#6b7280', marginBottom: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {lesson.title}
                        </div>
                        <div style={{ fontSize: '12px', color: '#8892a4', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                          <span>⏱ {lesson.readTime}</span>
                          {lesson.quiz && <span>📝 Quiz included</span>}
                        </div>
                      </div>

                      {/* Plan badge */}
                      <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 9px', borderRadius: '100px', background: pb.bg, color: pb.c, whiteSpace: 'nowrap', flexShrink: 0 }}>
                        {pb.label}
                      </span>

                      {/* Action */}
                      {accessible ? (
                        <Link href={`/software/revit/getting-started/${lesson.id}`} style={{ background: isDone ? 'rgba(34,197,94,0.1)' : '#2563eb', color: isDone ? '#4ade80' : '#fff', padding: '7px 18px', borderRadius: '7px', fontSize: '12px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, border: isDone ? '1px solid rgba(34,197,94,0.2)' : 'none' }}>
                          {isDone ? '✓ Review' : idx === 0 && completedCount === 0 ? 'Start →' : 'Read →'}
                        </Link>
                      ) : (
                        <Link href="/pricing" style={{ background: 'rgba(255,255,255,0.04)', color: '#8892a4', padding: '7px 18px', borderRadius: '7px', fontSize: '12px', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, border: '1px solid rgba(255,255,255,0.08)' }}>
                          Upgrade →
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* More lessons coming soon */}
        {revitLessons.length < 24 && (
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '13px', color: '#8892a4', marginBottom: '.5rem' }}>
              More lessons being added — {24 - revitLessons.length} more lessons coming soon
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '100px', padding: '4px 14px', fontSize: '12px', color: '#f59e0b', fontWeight: 500 }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#f59e0b' }} />
              In Development
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
