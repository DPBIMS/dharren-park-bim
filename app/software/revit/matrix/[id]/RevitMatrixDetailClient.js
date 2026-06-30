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

const STATUS_META = {
  compliant: { label: 'COMPLIANT', color: '#10b981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)' },
  drifting: { label: 'DRIFTING', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)' },
  noncompliant: { label: 'NON-COMPLIANT', color: '#ef4444', bg: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.3)' },
};

const RACI_COLOR = { R: '#ef4444', A: '#f59e0b', C: '#2563eb', I: '#8892a4' };

const WF_STATUS_META = {
  'done': { label: 'DONE', color: '#10b981' },
  'on-track': { label: 'ON TRACK', color: '#10b981' },
  'stalled': { label: 'STALLED', color: '#ef4444' },
  'not-started': { label: 'NOT STARTED', color: '#5a6478' },
};

function scoreColor(pct) {
  if (pct >= 85) return '#10b981';
  if (pct >= 60) return '#f59e0b';
  return '#ef4444';
}

const NAV_SECTIONS = [
  { id: 'sec-naming', label: 'Naming Convention' },
  { id: 'sec-lod', label: 'LOD Targets' },
  { id: 'sec-raci', label: 'RACI Matrix' },
  { id: 'sec-worksets', label: 'Worksets' },
  { id: 'sec-qaqc', label: 'QA/QC Checklist' },
  { id: 'sec-workflow', label: 'Workflow Status' },
];

export default function RevitMatrixDetailClient({ project, detail, workflows, status }) {
  const [activePlan, setActivePlan] = useState('free');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [checklist, setChecklist] = useState(() =>
    detail.qaqcGroups.flatMap(g => g.items.map(i => i.checked))
  );
  const [expandedWorkflow, setExpandedWorkflow] = useState(null);

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

  function toggleChecklistItem(flatIndex) {
    setChecklist(prev => prev.map((v, i) => (i === flatIndex ? !v : v)));
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // ── LOCK SCREEN ──────────────────────────────────────────
  if (!loading && !accessible) {
    return (
      <main style={{ background: '#0a0e1a', color: '#e8eaf0', minHeight: '100vh', paddingTop: '80px', fontFamily: "'DM Sans',sans-serif" }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.6rem', marginBottom: '.75rem' }}>
            {project.name} — Setup Matrix
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

  const meta = STATUS_META[project.status];
  let flatIdx = -1;
  const checkedCount = checklist.filter(Boolean).length;
  const totalChecks = checklist.length;
  const checklistPct = totalChecks > 0 ? Math.round((checkedCount / totalChecks) * 100) : 0;

  return (
    <main style={{ background: '#0a0e1a', color: '#e8eaf0', minHeight: '100vh', paddingTop: '80px', fontFamily: "'DM Sans',sans-serif" }}>

      {/* Top bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '.85rem clamp(1.5rem, 4vw, 4rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '13px', color: '#8892a4' }}>
          <Link href="/software/revit/matrix" style={{ color: '#8892a4', textDecoration: 'none' }}>
            ← Back to Portfolio
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.12)' }}>|</span>
          <span>{project.code} · {project.sector} · Stage {project.stage}</span>
        </div>
        {isAdmin && (
          <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 9px', borderRadius: '20px', background: 'rgba(245,158,11,0.12)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' }}>
            ADMIN VIEW
          </span>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '0' }}>

        {/* Sidebar nav */}
        <aside style={{ borderRight: '1px solid rgba(255,255,255,0.06)', padding: '2rem 0', position: 'sticky', top: '80px', alignSelf: 'start', height: 'calc(100vh - 80px)' }}>
          <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '1.5px', color: '#5a6478', textTransform: 'uppercase', padding: '0 20px 10px' }}>
            Setup Matrix
          </div>
          {NAV_SECTIONS.map(s => (
            <div
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              style={{ padding: '9px 20px', fontSize: '12.5px', color: '#a0aec0', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.color = '#e8eaf0'}
              onMouseLeave={e => e.currentTarget.style.color = '#a0aec0'}
            >
              {s.label}
            </div>
          ))}
        </aside>

        {/* Content */}
        <div style={{ padding: '2.5rem clamp(1.5rem, 4vw, 4rem) 5rem' }}>

          {/* Header */}
          <div style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '.75rem' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '4px', background: meta.bg, color: meta.color, border: `1px solid ${meta.border}` }}>
                {meta.label}
              </span>
              <span style={{ fontSize: '11.5px', color: '#5a6478' }}>
                BEP: {project.bepFiled ? project.bep : 'Not Filed'} · Last Audit: {project.lastAuditDaysAgo}d ago
              </span>
            </div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '2rem', letterSpacing: '-.5px', marginBottom: '.5rem' }}>
              {project.name}
            </h1>
            <p style={{ fontSize: '13.5px', color: '#a0aec0', maxWidth: '680px' }}>
              Live audit record for this project against the studio's ISO 19650-2 standard. Sections below mirror the Setup Matrix template used at project kickoff — use this as the reference for what's correct and what's drifted.
            </p>
          </div>

          {/* NAMING */}
          <section id="sec-naming" style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.2rem' }}>Naming Convention</h2>
                <p style={{ fontSize: '12.5px', color: '#8892a4', marginTop: '.3rem' }}>Studio-standard file naming, checked against this project's actual files.</p>
              </div>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.4rem', color: scoreColor(detail.namingScore) }}>{detail.namingScore}%</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${detail.namingFields.length}, 1fr)`, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden', marginBottom: '14px' }}>
              {detail.namingFields.map((f, i) => (
                <div key={i} style={{ padding: '12px 14px', borderRight: i === detail.namingFields.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ fontSize: '9px', color: '#5a6478', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>{f.label}</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#5b8cf0' }}>{f.field}</div>
                  <div style={{ fontSize: '11px', color: '#a0aec0', marginTop: '4px' }}>{f.example}</div>
                  <div style={{ fontSize: '9px', color: '#5a6478', marginTop: '2px' }}>{f.max}</div>
                </div>
              ))}
            </div>

            {detail.namingDeviations.length > 0 ? (
              detail.namingDeviations.map((d, i) => (
                <div key={i} style={{ fontSize: '12px', color: '#f0c96a', display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '6px' }}>
                  <span>⚠</span><span>{d}</span>
                </div>
              ))
            ) : (
              <div style={{ fontSize: '12px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>✓</span><span>All files conform to the naming convention</span>
              </div>
            )}
          </section>

          {/* LOD */}
          <section id="sec-lod" style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.2rem' }}>LOD Targets</h2>
                <p style={{ fontSize: '12.5px', color: '#8892a4', marginTop: '.3rem' }}>Level of Development expected per discipline at the current stage.</p>
              </div>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.4rem', color: scoreColor(detail.lodScore) }}>{detail.lodScore}%</span>
            </div>

            <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', minWidth: '640px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                    {['Discipline', 'LOD 100', 'LOD 200', 'LOD 300', 'LOD 350', 'LOD 400'].map(h => (
                      <th key={h} style={{ padding: '9px 14px', fontSize: '10px', fontWeight: 600, letterSpacing: '.8px', color: '#8892a4', textTransform: 'uppercase', textAlign: 'left' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {detail.lodRows.map((r, i) => (
                    <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <td style={{ padding: '9px 14px', color: '#e8eaf0', fontWeight: 500, background: 'rgba(255,255,255,0.015)' }}>{r.discipline}</td>
                      <td style={{ padding: '9px 14px', color: '#a0aec0' }}>{r.lod100}</td>
                      <td style={{ padding: '9px 14px', color: '#a0aec0' }}>{r.lod200}</td>
                      <td style={{ padding: '9px 14px', color: '#a0aec0' }}>{r.lod300}</td>
                      <td style={{ padding: '9px 14px', color: '#a0aec0' }}>{r.lod350}</td>
                      <td style={{ padding: '9px 14px', color: '#a0aec0' }}>{r.lod400}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* RACI */}
          <section id="sec-raci" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.2rem', marginBottom: '.3rem' }}>RACI Matrix</h2>
            <p style={{ fontSize: '12.5px', color: '#8892a4', marginBottom: '1.25rem' }}>Responsible, Accountable, Consulted, Informed — by task and discipline.</p>

            <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12.5px', minWidth: '600px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                    {['Task', 'Architect', 'Structural', 'Mechanical', 'Electrical', 'BIM Manager'].map(h => (
                      <th key={h} style={{ padding: '9px 14px', fontSize: '10px', fontWeight: 600, letterSpacing: '.8px', color: '#8892a4', textTransform: 'uppercase', textAlign: 'left' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {detail.raciRows.map((r, i) => (
                    <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <td style={{ padding: '9px 14px', color: '#e8eaf0', fontWeight: 500 }}>{r.task}</td>
                      {['architect', 'structural', 'mechanical', 'electrical', 'bimManager'].map(k => (
                        <td key={k} style={{ padding: '9px 14px', fontWeight: 700, color: RACI_COLOR[r[k]] || '#5a6478' }}>{r[k]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '10px', fontSize: '11px', color: '#5a6478' }}>
              <span><strong style={{ color: RACI_COLOR.R }}>R</strong> Responsible</span>
              <span><strong style={{ color: RACI_COLOR.A }}>A</strong> Accountable</span>
              <span><strong style={{ color: RACI_COLOR.C }}>C</strong> Consulted</span>
              <span><strong style={{ color: RACI_COLOR.I }}>I</strong> Informed</span>
            </div>
          </section>

          {/* WORKSETS */}
          <section id="sec-worksets" style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.2rem' }}>Worksets</h2>
                <p style={{ fontSize: '12.5px', color: '#8892a4', marginTop: '.3rem' }}>Workset structure as defined in the BEP, grouped by discipline.</p>
              </div>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.4rem', color: scoreColor(detail.worksetScore) }}>{detail.worksetScore}%</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
              {detail.worksets.map((w, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#5b8cf0', marginBottom: '8px' }}>{w.title}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {w.items.map((it, ii) => (
                      <li key={ii} style={{ fontSize: '11.5px', color: '#a0aec0', padding: '3px 0', borderBottom: ii === w.items.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)' }}>
                        — {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* QA/QC CHECKLIST */}
          <section id="sec-qaqc" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.2rem' }}>QA/QC Sign-off Checklist</h2>
                <p style={{ fontSize: '12.5px', color: '#8892a4', marginTop: '.3rem' }}>Click items to toggle. This reflects the current state of this project only.</p>
              </div>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.4rem', color: scoreColor(checklistPct) }}>
                {checkedCount} / {totalChecks}
              </span>
            </div>

            {detail.qaqcGroups.map((g, gi) => (
              <div key={gi} style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#8892a4', letterSpacing: '.5px', marginBottom: '8px' }}>{g.group}</div>
                {g.items.map((item) => {
                  flatIdx += 1;
                  const idx = flatIdx;
                  const isChecked = checklist[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleChecklistItem(idx)}
                      style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', borderRadius: '8px', cursor: 'pointer', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: '6px' }}
                    >
                      <div style={{ width: '18px', height: '18px', borderRadius: '4px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', background: isChecked ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.1)', color: isChecked ? '#10b981' : '#ef4444', border: `1px solid ${isChecked ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.3)'}` }}>
                        {isChecked ? '✓' : '✕'}
                      </div>
                      <div style={{ fontSize: '13px', color: '#c8d0e8', flex: 1 }}>{item.text}</div>
                      <span style={{ fontSize: '9.5px', fontWeight: 600, padding: '2px 8px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', color: '#5a6478', whiteSpace: 'nowrap' }}>{item.tag}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </section>

          {/* WORKFLOW STATUS */}
          <section id="sec-workflow" style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.2rem' }}>Workflow Status</h2>
              <p style={{ fontSize: '12.5px', color: '#8892a4', marginTop: '.3rem' }}>
                Where this project sits in each of the five studio-standard processes. Click a row to see the full stage-by-stage detail.{' '}
                <Link href="/software/revit/matrix/workflow" style={{ color: '#5b8cf0' }}>View the reference flows →</Link>
              </p>
            </div>

            {status ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {workflows.map(wf => {
                  const wfStatus = status[wf.id];
                  if (!wfStatus) return null;
                  const meta = WF_STATUS_META[wfStatus.status] || WF_STATUS_META['not-started'];
                  const isExpanded = expandedWorkflow === wf.id;
                  const currentStage = wf.stages[Math.min(wfStatus.currentStageIndex, wf.stages.length - 1)];

                  return (
                    <div key={wf.id} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
                      <div
                        onClick={() => setExpandedWorkflow(isExpanded ? null : wf.id)}
                        style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px', cursor: 'pointer', background: 'rgba(255,255,255,0.02)' }}
                      >
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: wf.color, flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#e8eaf0' }}>{wf.label}</div>
                          <div style={{ fontSize: '11.5px', color: '#8892a4', marginTop: '2px' }}>
                            {wfStatus.status === 'done' ? 'Complete' : `Stage ${Math.min(wfStatus.currentStageIndex + 1, wf.stages.length)} of ${wf.stages.length} — ${currentStage.title}`}
                            {wfStatus.waitingOn && <span> · Waiting on {wfStatus.waitingOn}</span>}
                          </div>
                        </div>
                        <span style={{ fontSize: '9.5px', fontWeight: 700, padding: '3px 10px', borderRadius: '4px', background: `${meta.color}1f`, color: meta.color, border: `1px solid ${meta.color}55`, whiteSpace: 'nowrap' }}>
                          {meta.label}
                        </span>
                        <span style={{ color: '#5a6478', fontSize: '12px', transform: isExpanded ? 'rotate(180deg)' : 'none' }}>▾</span>
                      </div>

                      {isExpanded && (
                        <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                          {wfStatus.note && (
                            <div style={{ fontSize: '12.5px', color: '#a0aec0', marginBottom: '16px', fontStyle: 'italic' }}>{wfStatus.note}</div>
                          )}
                          {wf.stages.map((stage, si) => {
                            const stageState = si < wfStatus.currentStageIndex ? 'done' : si === wfStatus.currentStageIndex ? 'current' : 'upcoming';
                            const stageColor = stageState === 'done' ? '#10b981' : stageState === 'current' ? (wfStatus.status === 'stalled' ? '#ef4444' : wf.color) : '#3a4258';
                            return (
                              <div key={si} style={{ display: 'flex', gap: '14px', position: 'relative' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '26px' }}>
                                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0, background: `${stageColor}1f`, border: `1.5px solid ${stageColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: stageColor, fontWeight: 700 }}>
                                    {stageState === 'done' ? '✓' : si + 1}
                                  </div>
                                  {si < wf.stages.length - 1 && (
                                    <div style={{ width: '2px', flex: 1, background: 'rgba(255,255,255,0.08)', minHeight: '28px' }} />
                                  )}
                                </div>
                                <div style={{ flex: 1, paddingBottom: '16px' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2px' }}>
                                    <span style={{ fontSize: '12.5px', fontWeight: 600, color: stageState === 'upcoming' ? '#5a6478' : '#e8eaf0' }}>{stage.title}</span>
                                    {stageState === 'current' && (
                                      <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 7px', borderRadius: '8px', background: `${stageColor}1f`, color: stageColor }}>
                                        {wfStatus.status === 'stalled' ? 'STALLED HERE' : 'CURRENT'}
                                      </span>
                                    )}
                                  </div>
                                  <div style={{ fontSize: '11px', color: '#5a6478' }}>{stage.role}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ fontSize: '13px', color: '#5a6478', fontStyle: 'italic' }}>No workflow status recorded for this project yet.</div>
            )}
          </section>

        </div>
      </div>
    </main>
  );
}