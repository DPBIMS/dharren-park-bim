import Link from 'next/link';

export default function ACCPage() {
  return (
    <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif" }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'3rem 2rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize:'12px', color:'#8892a4', marginBottom:'1.5rem', display:'flex', alignItems:'center', gap:'.5rem' }}>
          <Link href="/" style={{ color:'#8892a4', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <Link href="/software" style={{ color:'#8892a4', textDecoration:'none' }}>Software</Link>
          <span>›</span>
          <span style={{ color:'#e8eaf0' }}>Autodesk Construction Cloud</span>
        </div>

        {/* Hero */}
        <div style={{ marginBottom:'3rem' }}>
          <div style={{ fontSize:'11px', fontWeight:500, letterSpacing:'2px', textTransform:'uppercase', color:'#3b82f6', marginBottom:'.5rem' }}>Software · Autodesk Cloud</div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'2.5rem', fontWeight:800, letterSpacing:'-.5px', marginBottom:'1rem', lineHeight:1.1 }}>Autodesk Construction Cloud</h1>
          <p style={{ color:'#8892a4', fontSize:'15px', lineHeight:'1.75', maxWidth:'680px', marginBottom:'2rem' }}>
            The unified platform for project delivery — connecting teams, workflows, and data across design, construction, and operations. Learn ACC from first login to ISO 19650-compliant handover.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
            <Link href="/software/acc/getting-started" style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:'#2563eb', color:'#fff', padding:'12px 28px', borderRadius:'9px', fontSize:'14px', fontWeight:700, textDecoration:'none' }}>
              Start Learning ACC →
            </Link>
            <Link href="/pricing" style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#e8eaf0', padding:'12px 28px', borderRadius:'9px', fontSize:'14px', fontWeight:500, textDecoration:'none' }}>
              View Plans
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1rem', marginBottom:'3rem' }}>
          {[
            { num:'24',    label:'Lessons' },
            { num:'3',     label:'Tiers' },
            { num:'240+',  label:'Quiz Questions' },
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
              { icon:'📁', label:'ACC Docs & CDE',          desc:'Upload, version, and permission-control every project document across WIP, Shared, and Published states.' },
              { icon:'🔗', label:'Model Coordination',       desc:'Set up Coordination Spaces, run cloud clash detection, and manage the full resolve cycle inside ACC Coordinate.' },
              { icon:'📋', label:'Issues, RFIs & Submittals',desc:'Log site issues, manage the ball-in-court RFI workflow, and track submittals from opening to closure.' },
              { icon:'💰', label:'Cost Management',          desc:'Build budgets, issue contracts, manage change orders, and track real-time budget vs actuals in ACC Cost.' },
              { icon:'📅', label:'Schedule & 4D',            desc:'Link Revit/NWC models to the construction programme for 4D sequencing and progress tracking.' },
              { icon:'📊', label:'Reporting & Handover',     desc:'Build Insights dashboards, produce ISO 19650 transmittals, and deliver COBie-compliant as-built packages.' },
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
          <Link href="/software/acc/getting-started" style={{ background:'#2563eb', color:'#fff', padding:'11px 28px', borderRadius:'8px', fontSize:'14px', fontWeight:700, textDecoration:'none', whiteSpace:'nowrap' }}>
            Browse All 24 Lessons →
          </Link>
        </div>

      </div>
    </main>
  );
}
