'use client';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';

export default function CertificatePage() {
  const params  = useRef(useParams());
  const [cert,  setCert]    = useState(null);
  const [error, setError]   = useState('');
  const [loading,setLoading]= useState(true);

  useEffect(() => {
    async function load() {
      const certId = params.current?.id;
      if (!certId) { setError('Invalid certificate link.'); setLoading(false); return; }
      const res  = await fetch(`/api/generate-certificate?id=${certId}`);
      const data = await res.json();
      if (data.certificate) setCert(data.certificate);
      else setError('Certificate not found.');
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', background:'#f5f0e8', fontFamily:'Georgia,serif', color:'#666' }}>
      Loading certificate...
    </div>
  );

  if (error) return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100vh', background:'#f5f0e8', fontFamily:'Georgia,serif', color:'#666', gap:'1rem' }}>
      <div style={{ fontSize:'3rem' }}>❌</div>
      <div>{error}</div>
    </div>
  );

  const issuedDate = new Date(cert.issued_at).toLocaleDateString('en-PH', { year:'numeric', month:'long', day:'numeric' });

  return (
    <div style={{ background:'#e8e0d0', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'2rem', fontFamily:'Georgia,serif' }}>

      {/* Print button */}
      <div style={{ marginBottom:'1.5rem', display:'flex', gap:'1rem' }} className="no-print">
        <button onClick={() => window.print()}
          style={{ background:'#1a3a5c', color:'#fff', border:'none', padding:'10px 24px', borderRadius:'6px', fontSize:'14px', cursor:'pointer', fontFamily:'Georgia,serif' }}>
          🖨 Print / Save as PDF
        </button>
        <button onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert('Certificate link copied!');
        }} style={{ background:'transparent', color:'#1a3a5c', border:'2px solid #1a3a5c', padding:'10px 24px', borderRadius:'6px', fontSize:'14px', cursor:'pointer', fontFamily:'Georgia,serif' }}>
          🔗 Copy Link
        </button>
      </div>

      {/* Certificate */}
      <div id="certificate" style={{
        width:'900px', maxWidth:'100%',
        background:'linear-gradient(135deg, #fefefe 0%, #faf6ee 100%)',
        border:'2px solid #c8a84b',
        borderRadius:'4px',
        boxShadow:'0 8px 40px rgba(0,0,0,0.15)',
        padding:'0',
        position:'relative',
        overflow:'hidden',
      }}>

        {/* Outer decorative border */}
        <div style={{ position:'absolute', inset:'12px', border:'1px solid #c8a84b', borderRadius:'2px', pointerEvents:'none', zIndex:1 }} />
        <div style={{ position:'absolute', inset:'16px', border:'1px solid rgba(200,168,75,0.4)', borderRadius:'1px', pointerEvents:'none', zIndex:1 }} />

        {/* Corner ornaments */}
        {['top:8px;left:8px', 'top:8px;right:8px', 'bottom:8px;left:8px', 'bottom:8px;right:8px'].map((pos, i) => (
          <div key={i} style={{
            position:'absolute',
            ...(Object.fromEntries(pos.split(';').map(p => p.split(':')))),
            width:'40px', height:'40px',
            background:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath d='M0,0 L15,0 L15,2 L2,2 L2,15 L0,15 Z' fill='%23c8a84b'/%3E%3C/svg%3E")`,
            backgroundSize:'contain',
            transform: i === 1 ? 'scaleX(-1)' : i === 2 ? 'scaleY(-1)' : i === 3 ? 'scale(-1,-1)' : 'none',
            zIndex:2,
          }} />
        ))}

        {/* Content */}
        <div style={{ padding:'56px 72px', position:'relative', zIndex:2 }}>

          {/* Header */}
          <div style={{ textAlign:'center', marginBottom:'32px' }}>
            <div style={{ fontSize:'13px', fontWeight:400, letterSpacing:'4px', textTransform:'uppercase', color:'#8b6914', marginBottom:'8px', fontFamily:"'DM Sans',sans-serif" }}>
              Dharren Park BIM System
            </div>
            <div style={{ width:'120px', height:'1px', background:'linear-gradient(90deg, transparent, #c8a84b, transparent)', margin:'0 auto 16px' }} />
            <h1 style={{ fontSize:'42px', fontWeight:400, color:'#1a2a3a', letterSpacing:'2px', margin:'0 0 4px', fontFamily:'Georgia,serif', lineHeight:1.2 }}>
              Certificate
            </h1>
            <h2 style={{ fontSize:'16px', fontWeight:400, color:'#8b6914', letterSpacing:'3px', margin:0, fontFamily:"'DM Sans',sans-serif", textTransform:'uppercase' }}>
              of Completion
            </h2>
          </div>

          {/* Divider */}
          <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'28px' }}>
            <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg, transparent, #c8a84b)' }} />
            <div style={{ fontSize:'18px', color:'#c8a84b' }}>✦</div>
            <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg, #c8a84b, transparent)' }} />
          </div>

          {/* Body text */}
          <div style={{ textAlign:'center', marginBottom:'24px' }}>
            <p style={{ fontSize:'15px', color:'#5a4a3a', letterSpacing:'1px', margin:'0 0 20px', fontStyle:'italic' }}>
              This is to certify that
            </p>
            <div style={{ fontSize:'38px', color:'#1a2a3a', fontStyle:'italic', margin:'0 0 20px', fontFamily:'Georgia,serif', letterSpacing:'1px', borderBottom:'2px solid #c8a84b', display:'inline-block', paddingBottom:'8px', minWidth:'300px' }}>
              {cert.full_name}
            </div>
            <p style={{ fontSize:'15px', color:'#5a4a3a', margin:'20px 0 0', lineHeight:'1.7', maxWidth:'500px', marginLeft:'auto', marginRight:'auto' }}>
              has successfully completed the
            </p>
          </div>

          {/* Course name */}
          <div style={{ textAlign:'center', margin:'0 0 28px' }}>
            <div style={{ background:'linear-gradient(135deg, #1a3a5c, #2563eb)', color:'#fff', display:'inline-block', padding:'14px 40px', borderRadius:'3px', marginBottom:'8px' }}>
              <div style={{ fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', marginBottom:'4px', opacity:.8, fontFamily:"'DM Sans',sans-serif" }}>
                Full Program
              </div>
              <div style={{ fontSize:'20px', fontWeight:400, letterSpacing:'1px', fontFamily:'Georgia,serif' }}>
                BIM Fundamentals Program
              </div>
            </div>
            <p style={{ fontSize:'13px', color:'#8b6914', margin:'8px 0 0', fontStyle:'italic' }}>
              12 Lessons · Quizzes &amp; Assessments · Building Information Modeling
            </p>
          </div>

          {/* Divider */}
          <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'32px' }}>
            <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg, transparent, #c8a84b)' }} />
            <div style={{ fontSize:'18px', color:'#c8a84b' }}>✦</div>
            <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg, #c8a84b, transparent)' }} />
          </div>

          {/* Footer — signature + date + cert ID */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'end', gap:'24px' }}>

            {/* Issued date */}
            <div style={{ textAlign:'center' }}>
              <div style={{ fontSize:'15px', color:'#1a2a3a', fontStyle:'italic', marginBottom:'4px' }}>{issuedDate}</div>
              <div style={{ width:'140px', height:'1px', background:'#c8a84b', margin:'0 auto 6px' }} />
              <div style={{ fontSize:'11px', color:'#8b6914', letterSpacing:'2px', textTransform:'uppercase', fontFamily:"'DM Sans',sans-serif" }}>Date Issued</div>
            </div>

            {/* Center seal */}
            <div style={{ textAlign:'center' }}>
              <div style={{ width:'80px', height:'80px', borderRadius:'50%', border:'2px solid #c8a84b', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', margin:'0 auto', background:'rgba(200,168,75,0.06)' }}>
                <div style={{ fontSize:'20px' }}>🏗️</div>
                <div style={{ fontSize:'8px', color:'#8b6914', letterSpacing:'1px', textTransform:'uppercase', fontFamily:"'DM Sans',sans-serif", lineHeight:1.2, marginTop:'2px' }}>DP BIM</div>
              </div>
            </div>

            {/* Signature */}
            <div style={{ textAlign:'center' }}>
              <div style={{ fontSize:'22px', fontStyle:'italic', color:'#1a2a3a', marginBottom:'4px', fontFamily:'Georgia,serif' }}>Dharren Park</div>
              <div style={{ width:'140px', height:'1px', background:'#c8a84b', margin:'0 auto 6px' }} />
              <div style={{ fontSize:'11px', color:'#8b6914', letterSpacing:'2px', textTransform:'uppercase', fontFamily:"'DM Sans',sans-serif" }}>Course Instructor</div>
            </div>
          </div>

          {/* Certificate ID */}
          <div style={{ textAlign:'center', marginTop:'24px', paddingTop:'16px', borderTop:'1px solid rgba(200,168,75,0.3)' }}>
            <div style={{ fontSize:'11px', color:'#aaa', letterSpacing:'2px', fontFamily:"'DM Sans',sans-serif" }}>
              CERTIFICATE ID: <span style={{ color:'#8b6914', fontWeight:600 }}>{cert.certificate_id}</span>
              <span style={{ margin:'0 12px', color:'#ddd' }}>·</span>
              Verify at <span style={{ color:'#2563eb' }}>dharren-park-bim.vercel.app/certificate/{cert.certificate_id}</span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; margin: 0; }
          #certificate { box-shadow: none !important; width: 100% !important; border-radius: 0 !important; }
        }
      `}</style>
    </div>
  );
}