import Link from 'next/link';

export default function CDEPage() {
  return (
    <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif" }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'3rem 2rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize:'12px', color:'#8892a4', marginBottom:'1.5rem', display:'flex', alignItems:'center', gap:'.5rem' }}>
          <Link href="/" style={{ color:'#8892a4', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <Link href="/software" style={{ color:'#8892a4', textDecoration:'none' }}>Software</Link>
          <span>›</span>
          <span style={{ color:'#e8eaf0' }}>Common Data Environment</span>
        </div>

        {/* Hero */}
        <div style={{ marginBottom:'3rem' }}>
          <div style={{ fontSize:'11px', fontWeight:500, letterSpacing:'2px', textTransform:'uppercase', color:'#3b82f6', marginBottom:'.5rem' }}>BIM Workflow · Pillar of CDE Workflow</div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'2.5rem', fontWeight:800, letterSpacing:'-.5px', marginBottom:'1rem', lineHeight:1.1 }}>Common Data Environment (CDE)</h1>
          <p style={{ color:'#8892a4', fontSize:'15px', lineHeight:'1.75', maxWidth:'680px', marginBottom:'2rem' }}>
            The pillar workflow behind every ISO 19650 project — states, containers, naming, suitability, coordination, and handover. Learn the CDE from first principles to a full DPC2025 capstone delivery.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
            <Link href="/software/cde/getting-started" style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:'#2563eb', color:'#fff', padding:'12px 28px', borderRadius:'9px', fontSize:'14px', fontWeight:700, textDecoration:'none' }}>
              Start Learning CDE →
            </Link>
            <Link href="/pricing" style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#e8eaf0', padding:'12px 28px', borderRadius:'9px', fontSize:'14px', fontWeight:500, textDecoration:'none' }}>
              View Plans
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1rem', marginBottom:'3rem' }}>
          {[
            { num:'32',    label:'Lessons' },
            { num:'3',     label:'Tiers' },
            { num:'320+',  label:'Quiz Questions' },
            { num:'ISO 19650', label:'Compliant Content' },
          ].map(s => (
            <div key={s.label} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'1.5rem 1.25rem', textAlign:'center' }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.75rem', fontWeight:800, color:'#e8eaf0', marginBottom:'.25rem' }}>{s.num}</div>
              <div style={{ fontSize:'12px', color:'#8892a4', textTransform:'uppercase', letterSpacing:'1px', fontWeight:500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Module Overview */}
        <div style={{ marginBottom:'3rem' }}>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.25rem', fontWeight:700, marginBottom:'1.25rem' }}>What You'll Learn</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1rem' }}>
            {[
              { icon:'🗂',  label:'CDE Foundations',       desc:'Information containers, the ISO 19650 naming convention, metadata, roles, and suitability codes from S0 to C.' },
              { icon:'🔄',  label:'CDE States & Workflow', desc:'Master WIP, Shared, Published, and Archived — and the authorisation gates that govern every transition between them.' },
              { icon:'🔗',  label:'Federation & Coordination', desc:'Combine discipline models, run clash detection, and manage the weekly coordination cycle at project scale.' },
              { icon:'📨',  label:'Transmittals, RFIs & Submittals', desc:'Issue formal transmittals, resolve RFIs and site issues, and manage contractor submittal approval workflows.' },
              { icon:'🏛',  label:'Governance & Security',  desc:'Connect the BEP to the CDE, run health checks, and apply the ISO 19650-5 security-minded approach.' },
              { icon:'🎓',  label:'Handover & Capstone',    desc:'Deliver COBie data and as-built record models, then bring it all together in the DPC2025 capstone project.' },
            ].map(m => (
              <div key={m.label} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'1.25rem' }}>
                <div style={{ fontSize:'1.5rem', marginBottom:'.5rem' }}>{m.icon}</div>
                <div style={{ fontWeight:700, fontSize:'14px', marginBottom:'.4rem' }}>{m.label}</div>
                <div style={{ fontSize:'13px', color:'#8892a4', lineHeight:'1.65' }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background:'rgba(37,99,235,0.06)', border:'1px solid rgba(37,99,235,0.15)', borderRadius:'16px', padding:'2rem', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'2rem', flexWrap:'wrap' }}>
          <div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.1rem', fontWeight:700, marginBottom:'.4rem' }}>Ready to start?</div>
            <div style={{ fontSize:'13px', color:'#8892a4' }}>Lesson 1 is free — no account needed to preview.</div>
          </div>
          <Link href="/software/cde/getting-started" style={{ background:'#2563eb', color:'#fff', padding:'11px 28px', borderRadius:'8px', fontSize:'14px', fontWeight:700, textDecoration:'none', whiteSpace:'nowrap' }}>
            Browse All 32 Lessons →
          </Link>
        </div>

      </div>
    </main>
  );
}
