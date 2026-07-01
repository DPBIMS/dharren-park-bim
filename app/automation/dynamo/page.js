import Link from 'next/link';

export default function Page() {
  return (
    <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif", display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ maxWidth:'560px', width:'100%', padding:'2rem 1.5rem', textAlign:'center' }}>
        <div style={{ width:'72px', height:'72px', borderRadius:'18px', background:'rgba(37,99,235,0.12)', border:'1px solid rgba(37,99,235,0.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'32px', margin:'0 auto 1.5rem' }}>
          ⬡
        </div>
        <div style={{ fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase', color:'#3b82f6', marginBottom:'.75rem' }}>Automation</div>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'2rem', fontWeight:800, letterSpacing:'-.5px', marginBottom:'.75rem' }}>Dynamo</h1>
        <p style={{ color:'#8892a4', fontSize:'14px', lineHeight:'1.7', maxWidth:'400px', margin:'0 auto 2rem' }}>Visual scripting for Revit — automate repetitive tasks, generate geometry, and connect data without writing code.</p>
        <div style={{ display:'flex', gap:'.75rem', justifyContent:'center', flexWrap:'wrap', marginBottom:'2rem' }}>
          <Link href="/automation/dynamo/getting-started" style={{ display:'inline-block', background:'#2563eb', color:'#fff', padding:'11px 28px', borderRadius:'8px', fontSize:'14px', fontWeight:700, textDecoration:'none' }}>Start the Course →</Link>
          <Link href="/" style={{ display:'inline-block', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)', color:'#e8eaf0', padding:'11px 24px', borderRadius:'8px', fontSize:'13px', fontWeight:500, textDecoration:'none' }}>Back to Home</Link>
        </div>
        <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'14px', padding:'1.25rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1rem', fontSize:'13px' }}>
            {[
              { label:'Lessons', value:'24' },
              { label:'Skill Level', value:'All Levels' },
              { label:'Free Preview', value:'3 Lessons' },
            ].map(s => (
              <div key={s.label} style={{ textAlign:'center' }}>
                <div style={{ fontWeight:700, color:'#e8eaf0', fontSize:'16px' }}>{s.value}</div>
                <div style={{ color:'#8892a4', fontSize:'11px', marginTop:'2px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
