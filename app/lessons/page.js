'use client';
import { useState } from 'react';
import Link from 'next/link';
import lessons from '@/lib/lessonsData';

const tagStyle = {
  revit:        { bg:'rgba(37,99,235,0.12)',  color:'#60a5fa', border:'rgba(37,99,235,0.2)'  },
  standards:    { bg:'rgba(139,92,246,0.12)', color:'#a78bfa', border:'rgba(139,92,246,0.2)' },
  coordination: { bg:'rgba(20,184,166,0.12)', color:'#2dd4bf', border:'rgba(20,184,166,0.2)' },
  navisworks:   { bg:'rgba(245,158,11,0.12)', color:'#fbbf24', border:'rgba(245,158,11,0.2)' },
  bim360:       { bg:'rgba(236,72,153,0.12)', color:'#f472b6', border:'rgba(236,72,153,0.2)' },
  ifc:          { bg:'rgba(34,197,94,0.12)',  color:'#4ade80', border:'rgba(34,197,94,0.2)'  },
  general:      { bg:'rgba(107,114,128,0.12)',color:'#9ca3af', border:'rgba(107,114,128,0.2)'},
};
const tagLabel = {
  revit:'Revit', standards:'BIM Standards', coordination:'Coordination',
  navisworks:'Navisworks', bim360:'BIM 360', ifc:'IFC', general:'General BIM',
};
const catColor = {
  beginner:     { bg:'rgba(34,197,94,0.1)',  c:'#4ade80' },
  intermediate: { bg:'rgba(245,158,11,0.1)', c:'#fbbf24' },
  advanced:     { bg:'rgba(239,68,68,0.1)',  c:'#f87171' },
};

export default function LessonsPage() {
  const [activeCat,   setActiveCat]   = useState('all');
  const [activeTopic, setActiveTopic] = useState('all');
  const [search,      setSearch]      = useState('');

  const filtered = lessons.filter(l => {
    const matchCat   = activeCat   === 'all' || l.cat   === activeCat;
    const matchTopic = activeTopic === 'all' || l.topic === activeTopic;
    const matchSearch = l.title.toLowerCase().includes(search.toLowerCase()) ||
                        l.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchTopic && matchSearch;
  });

  return (
    <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif" }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'3rem 2rem' }}>

        {/* Header */}
        <div style={{ marginBottom:'2.5rem' }}>
          <div style={{ fontSize:'11px', fontWeight:500, letterSpacing:'2px', textTransform:'uppercase', color:'#3b82f6', marginBottom:'.5rem' }}>Knowledge Library</div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'2.2rem', fontWeight:800, letterSpacing:'-0.5px', marginBottom:'.5rem' }}>BIM Lessons</h1>
          <p style={{ color:'#8892a4', fontSize:'15px' }}>Browse all lessons. Subscribe to unlock full content.</p>
        </div>

        {/* Filter Bar */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', marginBottom:'1.5rem', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem' }}>
            {[['all','All Levels'],['beginner','Beginner'],['intermediate','Intermediate'],['advanced','Advanced']].map(([val, label]) => (
              <button key={val} onClick={() => setActiveCat(val)} style={{
                background: activeCat === val
                  ? val === 'beginner' ? 'rgba(34,197,94,0.12)' : val === 'intermediate' ? 'rgba(245,158,11,0.12)' : val === 'advanced' ? 'rgba(239,68,68,0.12)' : 'rgba(37,99,235,0.15)'
                  : 'rgba(255,255,255,0.04)',
                border: `1px solid ${activeCat === val
                  ? val === 'beginner' ? 'rgba(34,197,94,0.3)' : val === 'intermediate' ? 'rgba(245,158,11,0.3)' : val === 'advanced' ? 'rgba(239,68,68,0.3)' : 'rgba(37,99,235,0.4)'
                  : 'rgba(255,255,255,0.08)'}`,
                borderRadius:'100px', padding:'6px 16px', fontSize:'13px', cursor:'pointer', fontFamily:"'DM Sans',sans-serif",
                color: activeCat === val
                  ? val === 'beginner' ? '#4ade80' : val === 'intermediate' ? '#fbbf24' : val === 'advanced' ? '#f87171' : '#fff'
                  : '#8892a4',
              }}>{label}</button>
            ))}
          </div>
          <input
            type="text" placeholder="🔍  Search lessons..."
            value={search} onChange={e => setSearch(e.target.value)}
            style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'8px', padding:'8px 14px', color:'#e8eaf0', fontSize:'13px', fontFamily:"'DM Sans',sans-serif", outline:'none', width:'220px' }}
          />
        </div>

        {/* Topic Tabs */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem', marginBottom:'1.5rem' }}>
          {[['all','All Topics'],['revit','Revit'],['standards','BIM Standards'],['coordination','Coordination'],['navisworks','Navisworks'],['bim360','BIM 360'],['ifc','IFC'],['general','General BIM']].map(([val, label]) => (
            <button key={val} onClick={() => setActiveTopic(val)} style={{
              background: activeTopic === val ? 'rgba(255,255,255,0.06)' : 'transparent',
              border: `1px solid ${activeTopic === val ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius:'6px', padding:'4px 12px', fontSize:'12px',
              color: activeTopic === val ? '#e8eaf0' : '#8892a4',
              cursor:'pointer', fontFamily:"'DM Sans',sans-serif",
            }}>{label}</button>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display:'flex', gap:'1.5rem', marginBottom:'2rem', flexWrap:'wrap', alignItems:'center', fontSize:'13px', color:'#8892a4' }}>
          <span><strong style={{ color:'#e8eaf0' }}>{filtered.length}</strong> lessons</span>
          <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'rgba(255,255,255,0.08)', display:'inline-block' }}/>
          <span><strong style={{ color:'#e8eaf0' }}>{lessons.filter(l => l.free).length}</strong> free previews</span>
          <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'rgba(255,255,255,0.08)', display:'inline-block' }}/>
          <span>Updated <strong style={{ color:'#e8eaf0' }}>June 2026</strong></span>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign:'center', padding:'4rem 2rem', color:'#8892a4' }}>
            <div style={{ fontSize:'2rem', marginBottom:'.5rem' }}>🔍</div>
            <div>No lessons match your filters.</div>
          </div>
        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.25rem' }}>
            {filtered.map(l => {
              const ts = tagStyle[l.topic];
              const cs = catColor[l.cat];
              return (
                <div key={l.id} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', overflow:'hidden', display:'flex', flexDirection:'column' }}>
                  <div style={{ padding:'1.25rem 1.25rem .75rem', flex:1 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:'.4rem', marginBottom:'.75rem', flexWrap:'wrap' }}>
                      <span style={{ fontSize:'11px', fontWeight:500, padding:'3px 10px', borderRadius:'5px', background:ts.bg, color:ts.color, border:`1px solid ${ts.border}` }}>{tagLabel[l.topic]}</span>
                      <span style={{ fontSize:'10px', fontWeight:600, padding:'2px 8px', borderRadius:'4px', background:cs.bg, color:cs.c, textTransform:'uppercase', letterSpacing:'.5px' }}>{l.cat}</span>
                      {l.free && <span style={{ fontSize:'10px', fontWeight:600, padding:'2px 8px', borderRadius:'4px', background:'rgba(34,197,94,0.1)', color:'#4ade80', border:'1px solid rgba(34,197,94,0.2)' }}>FREE</span>}
                    </div>
                    <div style={{ fontSize:'11px', color:'#8892a4', marginBottom:'.4rem' }}>Lesson {l.num}</div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'15px', lineHeight:'1.35', marginBottom:'.5rem' }}>{l.title}</div>
                    {l.free && <div style={{ fontSize:'13px', color:'#8892a4', lineHeight:'1.65' }}>{l.desc}</div>}
                  </div>
                  {l.free ? (
                    <Link href={`/lessons/${l.id}`} style={{ padding:'.75rem 1.25rem', borderTop:'1px solid rgba(255,255,255,0.08)', display:'flex', alignItems:'center', justifyContent:'space-between', textDecoration:'none' }}>
                      <span style={{ fontSize:'12px', color:'#3b82f6', fontWeight:500 }}>Read lesson</span>
                      <span style={{ fontSize:'14px', color:'#8892a4' }}>→</span>
                    </Link>
                  ) : (
                    <div style={{ padding:'.75rem 1.25rem', borderTop:'1px solid rgba(255,255,255,0.08)', display:'flex', alignItems:'center', gap:'.5rem' }}>
                      <span>🔒</span>
                      <span style={{ fontSize:'12px', color:'#8892a4' }}>Subscribe to unlock — <Link href="/pricing" style={{ color:'#3b82f6', textDecoration:'none' }}>View Plans</Link></span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}