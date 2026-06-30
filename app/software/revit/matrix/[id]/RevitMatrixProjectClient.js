'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const PLAN_ACCESS = {
  free:    () => false,
  basic:   () => false,
  pro:     () => false,
  premium: () => false,
  master:  () => true,
};

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com'];

const STATUS_META = {
  compliant: { label: 'COMPLIANT', color: '#10b981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)' },
  drifting: { label: 'DRIFTING', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)' },
  noncompliant: { label: 'NON-COMPLIANT', color: '#ef4444', bg: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.3)' },
};

function barColor(pct) {
  if (pct >= 85) return '#10b981';
  if (pct >= 60) return '#f59e0b';
  return '#ef4444';
}

export default function RevitMatrixProjectClient({ project }) {
  const [activePlan, setActivePlan] = useState('free');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user: u } } = await supabase.auth.getUser();
      if (!u) { setLoading(false); return; }

      setIsAdmin(ADMIN_EMAILS.includes(u.email));

      const { data: planData } = await supabase
        .from('user_plans').select('plan')
        .eq('user_id', u.id).eq('status', 'active').single();
      if (planData?.plan) setActivePlan(planData.plan);
      else {
        const { data: profile } = await supabase
          .from('profiles').select('plan').eq('id', u.id).single();
        setActivePlan(profile?.plan || 'free');
      }
      setLoading(false);
    }
    load();
  }, []);

  // TEMPORARY: Revit Matrix is admin-only while under review, regardless of plan.
  // To reopen to Master-plan subscribers, change this back to:
  //   if (isAdmin) return true;
  //   const checker = PLAN_ACCESS[activePlan] || PLAN_ACCESS.free;
  //   return checker();
  function canAccess() {
    return isAdmin;
  }

  const accessible = canAccess();

  if (!loading && !accessible) {
    return (
      <main style={{ background: '#0a0e1a', color: '#e8eaf0', minHeight: '100vh', paddingTop: '80px', fontFamily: "'DM Sans',sans-serif" }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚧</div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.6rem', marginBottom: '.75rem' }}>
            Revit Matrix
          </h1>
          <p style={{ color: '#8892a4', fontSize: '14px', marginBottom: '2rem' }}>
            We're putting the finishing touches on this tool before opening it up. Check back soon!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/software/revit/matrix" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#e8eaf0', padding: '12px 28px', borderRadius: '8px', fontWeight: 500, textDecoration: 'none', fontSize: '14px' }}>
              Back to Matrix
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const meta = STATUS_META[project.status];

  return (
    <main style={{ background: '#0a0e1a', color: '#e8eaf0', minHeight: '100vh', paddingTop: '80px', fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: '880px', margin: '0 auto', padding: '0 2rem 5rem' }}>

        <Link href="/software/revit/matrix" style={{ display: 'inline-block', fontSize: '12.5px', color: '#8892a4', textDecoration: 'none', margin: '1.5rem 0 1.25rem' }}>
          ← Back to Portfolio
        </Link>

        {/* Header */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1.75rem', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.8rem', marginBottom: '.4rem' }}>{project.name}</h1>
              <div style={{ fontSize: '12.5px', color: '#5a6478' }}>{project.code} · {project.sector} · Stage {project.stage}</div>
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, padding: '6px 14px', borderRadius: '6px', whiteSpace: 'nowrap', background: meta.bg, color: meta.color, border: `1px solid ${meta.border}` }}>
              {meta.label}
            </span>
          </div>
        </div>

        {/* Summary strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px 16px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px', color: '#8892a4', textTransform: 'uppercase', marginBottom: '6px' }}>BEP</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.1rem', color: project.bepFiled ? '#10b981' : '#ef4444' }}>
              {project.bepFiled ? project.bep : 'Not Filed'}
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px 16px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px', color: '#8892a4', textTransform: 'uppercase', marginBottom: '6px' }}>Last Audit</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.1rem' }}>{project.lastAuditDaysAgo}d ago</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px 16px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px', color: '#8892a4', textTransform: 'uppercase', marginBottom: '6px' }}>Open Flags</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.1rem', color: project.flags.length ? '#f59e0b' : '#10b981' }}>{project.flags.length}</div>
          </div>
        </div>

        {/* Score breakdown */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem' }}>
          Setup Matrix Score
        </h2>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {Object.entries(project.scores).map(([key, val]) => (
            <div key={key}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', color: '#a0aec0', textTransform: 'capitalize' }}>{key}</span>
                <span style={{ fontSize: '13px', color: barColor(val), fontWeight: 600 }}>{val}%</span>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: '4px', width: `${val}%`, background: barColor(val) }} />
              </div>
            </div>
          ))}
        </div>

        {/* Flags */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem' }}>
          Audit Flags
        </h2>
        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
          {project.flags.length === 0 ? (
            <div style={{ padding: '1.25rem 1.5rem', fontSize: '13px', color: '#a0aec0' }}>
              <span style={{ color: '#10b981', marginRight: '8px' }}>●</span>No open flags — this project is fully aligned with the studio standard.
            </div>
          ) : (
            project.flags.map((flag, i) => (
              <div key={i} style={{ padding: '1.1rem 1.5rem', fontSize: '13px', color: '#e8eaf0', borderBottom: i === project.flags.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: '#f59e0b', marginRight: '8px' }}>⚠</span>{flag}
              </div>
            ))
          )}
        </div>

      </div>
    </main>
  );
}
