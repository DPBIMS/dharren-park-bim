import Link from 'next/link';

export default function Page() {
  return (
    <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif", display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ maxWidth:'720px', width:'100%', padding:'2rem 1.5rem', textAlign:'center' }}>
        <div style={{ width:'72px', height:'72px', borderRadius:'18px', background:'rgba(37,99,235,0.12)', border:'1px solid rgba(37,99,235,0.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'32px', margin:'0 auto 1.5rem' }}>
          ⌨
        </div>
        <div style={{ fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase', color:'#3b82f6', marginBottom:'.75rem' }}>Automation</div>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'2rem', fontWeight:800, letterSpacing:'-.5px', marginBottom:'.75rem' }}>pyRevit</h1>
        <p style={{ color:'#8892a4', fontSize:'14px', lineHeight:'1.7', maxWidth:'480px', margin:'0 auto 2rem' }}>Python-powered tools for Revit — build custom buttons, scripts, and panels that supercharge your workflow. Two courses: start with the fundamentals, then build real production tools.</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1.25rem', marginBottom:'1.5rem', textAlign:'left' }}>
          <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'14px', padding:'1.5rem', display:'flex', flexDirection:'column' }}>
            <div style={{ fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:'#eab308', marginBottom:'.5rem' }}>Course 1 · Beginner → Advanced</div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'17px', marginBottom:'.5rem' }}>pyRevit Getting Started</div>
            <p style={{ color:'#8892a4', fontSize:'13px', lineHeight:'1.6', marginBottom:'1.25rem', flex:1 }}>The Revit API, transactions, element selection, and your first custom ribbon buttons — the fundamentals every tool builds on.</p>
            <div style={{ fontSize:'12px', color:'#8892a4', marginBottom:'1rem' }}>24 lessons · 3 free previews</div>
            <Link href="/automation/pyrevit/getting-started" style={{ display:'inline-block', textAlign:'center', background:'#2563eb', color:'#fff', padding:'10px 20px', borderRadius:'8px', fontSize:'13px', fontWeight:700, textDecoration:'none' }}>Start the Course →</Link>
          </div>

          <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'14px', padding:'1.5rem', display:'flex', flexDirection:'column' }}>
            <div style={{ fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:'#facc15', marginBottom:'.5rem' }}>Course 2 · Beginner → Advanced</div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'17px', marginBottom:'.5rem' }}>pyRevit for BIM — Hands-On Practice</div>
            <p style={{ color:'#8892a4', fontSize:'13px', lineHeight:'1.6', marginBottom:'1.25rem', flex:1 }}>24 real, production-grade tools built step by step against one recurring practice project — room tagging, sheets, QA, COBie checks, and a deployable office toolkit capstone.</p>
            <div style={{ fontSize:'12px', color:'#8892a4', marginBottom:'1rem' }}>24 lessons · 3 free previews</div>
            <Link href="/automation/pyrevit/practice" style={{ display:'inline-block', textAlign:'center', background:'rgba(234,179,8,0.15)', border:'1px solid rgba(234,179,8,0.4)', color:'#facc15', padding:'10px 20px', borderRadius:'8px', fontSize:'13px', fontWeight:700, textDecoration:'none' }}>Start the Course →</Link>
          </div>
        </div>

        <Link href="/" style={{ display:'inline-block', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)', color:'#e8eaf0', padding:'11px 24px', borderRadius:'8px', fontSize:'13px', fontWeight:500, textDecoration:'none' }}>Back to Home</Link>
      </div>
    </main>
  );
}
