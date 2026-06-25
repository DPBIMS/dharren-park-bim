import Link from 'next/link';

export default function Page() {
  return (
    <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif", display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ maxWidth:'560px', width:'100%', padding:'2rem 1.5rem', textAlign:'center' }}>
        <div style={{ width:'72px', height:'72px', borderRadius:'18px', background:'rgba(37,99,235,0.12)', border:'1px solid rgba(37,99,235,0.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'32px', margin:'0 auto 1.5rem' }}>
          { }
        </div>
        <div style={{ fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase', color:'#3b82f6', marginBottom:'.75rem' }}>Automation</div>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'2rem', fontWeight:800, letterSpacing:'-.5px', marginBottom:'.75rem' }}>Revit API</h1>
        <p style={{ color:'#8892a4', fontSize:'14px', lineHeight:'1.7', maxWidth:'400px', margin:'0 auto 2rem' }}>Go deeper with C# and .NET development — build full Revit add-ins and automate complex workflows programmatically.</p>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:'rgba(245,158,11,0.08)', border:'1px solid rgba(245,158,11,0.2)', borderRadius:'100px', padding:'8px 20px', marginBottom:'2rem' }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#f59e0b' }} />
          <span style={{ fontSize:'13px', fontWeight:600, color:'#f59e0b' }}>Coming Soon — In Development</span>
        </div>
        <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'14px', padding:'1.5rem', marginBottom:'1.5rem' }}>
          <div style={{ fontSize:'13px', color:'#8892a4', lineHeight:'1.7' }}>This section is currently being developed. Check back soon or explore our existing BIM lessons while you wait.</div>
        </div>
        <div style={{ display:'flex', gap:'.75rem', justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/lessons" style={{ display:'inline-block', background:'#2563eb', color:'#fff', padding:'11px 24px', borderRadius:'8px', fontSize:'13px', fontWeight:600, textDecoration:'none' }}>Browse BIM Lessons →</Link>
          <Link href="/" style={{ display:'inline-block', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)', color:'#e8eaf0', padding:'11px 24px', borderRadius:'8px', fontSize:'13px', fontWeight:500, textDecoration:'none' }}>Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
