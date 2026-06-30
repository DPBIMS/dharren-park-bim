'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const ADMIN_EMAIL = 'dharrenpark2024@gmail.com';

// ── PLAN ACCESS ──────────────────────────────────────────────
// Extends the existing PLAN_ACCESS convention with a 'master' tier.
// Revit Matrix is master-only — no free/basic/pro/premium fallthrough.
// Admin bypasses this entirely (see canAccess below).
const PLAN_ACCESS = {
  free:    () => false,
  basic:   () => false,
  pro:     () => false,
  premium: () => false,
  master:  () => true,
};

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

export default function RevitMatrixClient({ projects }) {
  const [activePlan, setActivePlan] = useState('free');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

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

  // TEMPORARY: Revit Matrix is admin-only while under review, regardless of plan.
  // To reopen to Master-plan subscribers, change this back to:
  //   if (isAdmin) return true;
  //   const checker = PLAN_ACCESS[activePlan] || PLAN_ACCESS.free;
  //   return checker();
  function canAccess() {
    return isAdmin;
  }

  const accessible = canAccess();

  // ── LOCK SCREEN ──────────────────────────────────────────
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
            <Link href="/software/revit" style={{ background: '#2563eb', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
              Back to Revit
            </Link>
            <Link href="/dashboard" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#e8eaf0', padding: '12px 28px', borderRadius: '8px', fontWeight: 500, textDecoration: 'none', fontSize: '14px' }}>
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── DERIVED STATS ────────────────────────────────────────
  const total = projects.length;
  const compliant = projects.filter(p => p.status === 'compliant').length;
  const drifting = projects.filter(p => p.status === 'drifting').length;
  const noncompliant = projects.filter(p => p.status === 'noncompliant').length;
  const openFlags = projects.reduce((sum, p) => sum + p.flags.length, 0);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.status === filter);

  const FILTERS = [
    { key: 'all', label: `All (${total})` },
    { key: 'compliant', label: `Compliant (${compliant})` },
    { key: 'drifting', label: `Drifting (${drifting})` },
    { key: 'noncompliant', label: `Non-Compliant (${noncompliant})` },
  ];

  return (
    <main style={{ background: '#0a0e1a', color: '#e8eaf0', minHeight: '100vh', paddingTop: '80px', fontFamily: "'DM Sans',sans-serif" }}>

      {/* Hero */}
      <div style={{ width: '100%', margin: '0 auto', padding: '0 clamp(1.5rem, 4vw, 4rem) 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
          <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', color: '#2563eb', textTransform: 'uppercase', fontFamily: "'DM Sans',sans-serif" }}>
            Practice-Level BIM Governance
          </span>
          <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 9px', borderRadius: '20px', background: 'rgba(37,99,235,0.12)', color: '#5b8cf0', border: '1px solid rgba(37,99,235,0.3)' }}>
            MASTER TIER
          </span>
          {isAdmin && (
            <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 9px', borderRadius: '20px', background: 'rgba(245,158,11,0.12)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' }}>
              ADMIN VIEW
            </span>
          )}
        </div>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '2.25rem', lineHeight: '1.15', letterSpacing: '-.5px', marginBottom: '.75rem' }}>
          Portfolio Compliance Dashboard
        </h1>
        <p style={{ fontSize: '14px', color: '#a0aec0', lineHeight: '1.8', maxWidth: '720px', marginBottom: '2rem' }}>
          A live, studio-wide view of every active project's BIM compliance against your practice standard. Click into any project for its full Setup Matrix, or scan the comparison table below to spot drift across the portfolio.
        </p>

        {/* Health strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          {[
            { label: 'Active Projects', value: total, color: '#e8eaf0', sub: `${new Set(projects.map(p => p.sector)).size} sectors` },
            { label: 'Compliant', value: compliant, color: '#10b981', sub: `${Math.round((compliant / total) * 100)}% of portfolio` },
            { label: 'Drifting', value: drifting, color: '#f59e0b', sub: 'Needs attention' },
            { label: 'Non-Compliant', value: noncompliant, color: '#ef4444', sub: 'Action required' },
            { label: 'Open Flags', value: openFlags, color: '#f59e0b', sub: 'Studio-wide total' },
          ].map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px', color: '#8892a4', textTransform: 'uppercase', marginBottom: '6px' }}>{s.label}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.7rem', color: s.color, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '10.5px', color: '#5a6478', marginTop: '4px' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', margin: '0 auto', padding: '2.5rem clamp(1.5rem, 4vw, 4rem) 5rem' }}>

        {/* Section header + filters */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          <div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.15rem', marginBottom: '.4rem' }}>
              Project Compliance Cards
            </h2>
            <p style={{ fontSize: '12.5px', color: '#8892a4', maxWidth: '520px' }}>
              Each card is a snapshot of one project's audit score against the studio standard.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  fontSize: '11px', fontWeight: 500, padding: '6px 13px', borderRadius: '20px', cursor: 'pointer',
                  fontFamily: "'DM Sans',sans-serif",
                  background: filter === f.key ? 'rgba(37,99,235,0.15)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${filter === f.key ? 'rgba(37,99,235,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  color: filter === f.key ? '#5b8cf0' : '#a0aec0',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '16px', marginBottom: '3.5rem' }}>
          {filtered.map(p => {
            const meta = STATUS_META[p.status];
            return (
              <Link key={p.id} href={`/software/revit/matrix/${p.id}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                    borderLeft: `3px solid ${meta.color}`, borderRadius: '14px', padding: '1.25rem', cursor: 'pointer',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#e8eaf0' }}>{p.name}</div>
                      <div style={{ fontSize: '11px', color: '#5a6478', marginTop: '2px' }}>{p.code} · {p.sector} · Stage {p.stage}</div>
                    </div>
                    <span style={{ fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', background: meta.bg, color: meta.color, border: `1px solid ${meta.border}` }}>
                      {meta.label}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', fontSize: '11px', color: '#5a6478', marginBottom: '14px' }}>
                    <span>BEP: {p.bepFiled ? p.bep : 'Not Filed'}</span>
                    <span>Last Audit: {p.lastAuditDaysAgo}d ago</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {Object.entries(p.scores).map(([key, val]) => (
                      <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '11px', color: '#a0aec0', width: '90px', flexShrink: 0, textTransform: 'capitalize' }}>{key}</span>
                        <div style={{ flex: 1, height: '5px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', borderRadius: '3px', width: `${val}%`, background: barColor(val) }} />
                        </div>
                        <span style={{ fontSize: '10.5px', color: '#5a6478', width: '32px', textAlign: 'right' }}>{val}%</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '11.5px', color: '#a0aec0' }}>
                    {p.flags.length === 0 ? (
                      <span><span style={{ color: '#10b981', marginRight: '6px' }}>●</span>No open flags</span>
                    ) : (
                      <span><span style={{ color: '#f59e0b', marginRight: '6px' }}>⚠</span>{p.flags[0]}</span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Cross-project comparison */}
        <div style={{ marginBottom: '1.25rem' }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.15rem', marginBottom: '.4rem' }}>
            Cross-Project Comparison
          </h2>
          <p style={{ fontSize: '12.5px', color: '#8892a4', maxWidth: '600px' }}>
            Every active project lined up against the same standard, so drift is visible at a glance instead of buried in separate files.
          </p>
        </div>

        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12.5px', minWidth: '700px' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                {['Project', 'Naming', 'LOD Targets', 'Worksets', 'BEP Filed', 'Last Audit'].map(h => (
                  <th key={h} style={{ padding: '10px 16px', fontSize: '10px', fontWeight: 600, letterSpacing: '1px', color: '#8892a4', textTransform: 'uppercase', textAlign: 'left' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={p.id} style={{ borderBottom: i === projects.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '11px 16px', color: '#e8eaf0', fontWeight: 500 }}>{p.name}</td>
                  {['naming', 'lod', 'worksets'].map(key => {
                    const val = p.scores[key];
                    const color = barColor(val);
                    return (
                      <td key={key} style={{ padding: '11px 16px', color }}>
                        {val >= 85 ? '✓' : val >= 60 ? '⚠' : '✕'} {val}%
                      </td>
                    );
                  })}
                  <td style={{ padding: '11px 16px', color: p.bepFiled ? '#10b981' : '#ef4444' }}>
                    {p.bepFiled ? '✓ Yes' : '✕ Not filed'}
                  </td>
                  <td style={{ padding: '11px 16px', color: '#a0aec0' }}>{p.lastAuditDaysAgo}d ago</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}