'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const ADMIN_EMAIL = 'dharrenpark2024@gmail.com';

const PLAN_ACCESS = {
  free:    () => false,
  basic:   () => false,
  pro:     () => false,
  premium: () => false,
  master:  () => true,
};

export default function RevitMatrixWorkflowClient({ workflows }) {
  const [activePlan, setActivePlan] = useState('free');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(workflows[0].id);

  useEffect(() => {
    async function load() {
      const { data: { user: u } } = await supabase.auth.getUser();
      if (!u) { setLoading(false); return; }

      if (u.email === ADMIN_EMAIL) {
        setIsAdmin(true);
        setLoading(false);
        return;
      }

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

  function canAccess() {
    if (isAdmin) return true;
    const checker = PLAN_ACCESS[activePlan] || PLAN_ACCESS.free;
    return checker();
  }

  const accessible = canAccess();

  // ── LOCK SCREEN ──────────────────────────────────────────
  if (!loading && !accessible) {
    return (
      <main style={{ background: '#0a0e1a', color: '#e8eaf0', minHeight: '100vh', paddingTop: '80px', fontFamily: "'DM Sans',sans-serif" }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.6rem', marginBottom: '.75rem' }}>
            Workflow & Process Flow
          </h1>
          <p style={{ color: '#8892a4', fontSize: '14px', marginBottom: '2rem' }}>
            This is a practice-level governance tool, available exclusively on the{' '}
            <strong style={{ color: '#2563eb' }}>Master</strong> plan.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pricing" style={{ background: '#2563eb', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
              Upgrade to Master →
            </Link>
            <Link href="/software/revit/matrix" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#e8eaf0', padding: '12px 28px', borderRadius: '8px', fontWeight: 500, textDecoration: 'none', fontSize: '14px' }}>
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const active = workflows.find(w => w.id === activeId) || workflows[0];

  return (
    <main style={{ background: '#0a0e1a', color: '#e8eaf0', minHeight: '100vh', paddingTop: '80px', fontFamily: "'DM Sans',sans-serif" }}>

      {/* Top bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '.85rem clamp(1.5rem, 4vw, 4rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '13px', color: '#8892a4' }}>
          <Link href="/software/revit/matrix" style={{ color: '#8892a4', textDecoration: 'none' }}>
            ← Back to Portfolio
          </Link>
        </div>
        {isAdmin && (
          <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 9px', borderRadius: '20px', background: 'rgba(245,158,11,0.12)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' }}>
            ADMIN VIEW
          </span>
        )}
      </div>

      {/* Hero */}
      <div style={{ width: '100%', margin: '0 auto', padding: '2.5rem clamp(1.5rem, 4vw, 4rem) 2rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
          <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', color: '#2563eb', textTransform: 'uppercase' }}>
            Practice-Level BIM Governance
          </span>
          <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 9px', borderRadius: '20px', background: 'rgba(37,99,235,0.12)', color: '#5b8cf0', border: '1px solid rgba(37,99,235,0.3)' }}>
            MASTER TIER
          </span>
        </div>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '2.25rem', lineHeight: '1.15', letterSpacing: '-.5px', marginBottom: '.75rem' }}>
          Workflow & Process Flow
        </h1>
        <p style={{ fontSize: '14px', color: '#a0aec0', lineHeight: '1.8', maxWidth: '720px' }}>
          The studio-standard sequence for five core BIM processes — not a checklist of pass/fail items, but the actual step-by-step a BIM Manager runs. Use this as the reference for how a process should go; the project dashboard tells you whether it did.
        </p>
      </div>

      <div style={{ width: '100%', margin: '0 auto', padding: '2rem clamp(1.5rem, 4vw, 4rem) 5rem' }}>

        {/* Workflow tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {workflows.map(w => {
            const isActive = w.id === activeId;
            return (
              <button
                key={w.id}
                onClick={() => setActiveId(w.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  fontSize: '12.5px', fontWeight: 500, padding: '9px 16px', borderRadius: '10px', cursor: 'pointer',
                  fontFamily: "'DM Sans',sans-serif",
                  background: isActive ? `${w.color}1f` : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isActive ? `${w.color}55` : 'rgba(255,255,255,0.08)'}`,
                  color: isActive ? '#e8eaf0' : '#a0aec0',
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: w.color, flexShrink: 0 }} />
                {w.label}
              </button>
            );
          })}
        </div>

        {/* Active workflow */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.3rem', marginBottom: '.4rem' }}>
            {active.label}
          </h2>
          <p style={{ fontSize: '13px', color: '#8892a4', maxWidth: '600px' }}>{active.description}</p>
        </div>

        {/* Vertical stage flow */}
        <div style={{ position: 'relative' }}>
          {active.stages.map((stage, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', position: 'relative' }}>

              {/* Connector column */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '32px' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                  background: `${active.color}1f`, border: `1.5px solid ${active.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '13px', color: active.color,
                }}>
                  {i + 1}
                </div>
                {i < active.stages.length - 1 && (
                  <div style={{ width: '2px', flex: 1, background: 'rgba(255,255,255,0.08)', minHeight: '40px' }} />
                )}
              </div>

              {/* Stage card */}
              <div style={{
                flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '20px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#e8eaf0' }}>
                    {stage.title}
                  </h3>
                  <span style={{ fontSize: '10px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', color: '#a0aec0', whiteSpace: 'nowrap' }}>
                    {stage.role}
                  </span>
                </div>

                <p style={{ fontSize: '13.5px', color: '#c8d0e8', lineHeight: '1.7', marginBottom: '14px' }}>
                  {stage.action}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '8px', padding: '10px 12px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '.8px', color: '#10b981', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Checkpoint
                    </div>
                    <div style={{ fontSize: '12px', color: '#a0d9c0', lineHeight: '1.5' }}>{stage.checkpoint}</div>
                  </div>
                  <div style={{ background: 'rgba(37,99,235,0.05)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: '8px', padding: '10px 12px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '.8px', color: '#5b8cf0', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Output
                    </div>
                    <div style={{ fontSize: '12px', color: '#aac4f0', lineHeight: '1.5' }}>{stage.output}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
