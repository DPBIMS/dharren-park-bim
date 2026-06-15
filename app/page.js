import Link from 'next/link';

export default function Home() {
  return (
    <main style={{background:'#0a0e1a',color:'#e8eaf0',fontFamily:"'DM Sans',sans-serif",fontSize:'15px',lineHeight:'1.7',overflowX:'hidden'}}>

      {/* HERO */}
      <section style={{minHeight:'88vh',display:'flex',alignItems:'center',position:'relative',overflow:'hidden',padding:'5rem 2rem'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(37,99,235,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(245,158,11,0.06) 0%, transparent 60%)'}}/>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center',position:'relative',zIndex:1,width:'100%'}}>
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(37,99,235,0.15)',border:'1px solid rgba(37,99,235,0.3)',borderRadius:'100px',padding:'6px 14px',fontSize:'12px',fontWeight:'500',color:'#3b82f6',marginBottom:'1.5rem'}}>
              <span style={{width:'6px',height:'6px',background:'#3b82f6',borderRadius:'50%',display:'inline-block'}}/>
              Now Enrolling Students
            </div>
            <h1 style={{fontFamily:"'Syne',sans-serif",fontSize:'clamp(2rem,4vw,3.2rem)',fontWeight:'800',lineHeight:'1.1',letterSpacing:'-1px',marginBottom:'1.25rem'}}>
              Master <span style={{color:'#f59e0b'}}>BIM</span> with a<br/>
              <span style={{color:'#3b82f6'}}>Senior Specialist</span>
            </h1>
            <p style={{color:'#8892a4',fontSize:'16px',lineHeight:'1.8',marginBottom:'2rem',maxWidth:'480px'}}>
              Learn Building Information Modeling from real-world experience. Structured lessons, professional knowledge, and hands-on resources.
            </p>
            <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
              <Link href="/pricing" style={{background:'#2563eb',color:'#fff',padding:'12px 28px',borderRadius:'8px',fontWeight:'500',textDecoration:'none',fontSize:'15px'}}>Start Learning →</Link>
              <Link href="/lessons" style={{border:'1px solid rgba(255,255,255,0.08)',color:'#e8eaf0',padding:'12px 28px',borderRadius:'8px',fontWeight:'500',textDecoration:'none',fontSize:'15px'}}>View Lessons</Link>
            </div>
            <div style={{display:'flex',gap:'2rem',marginTop:'2.5rem'}}>
              {[['10+','Years Experience'],['50+','BIM Topics'],['3','Learning Plans']].map(([num,label])=>(
                <div key={label}>
                  <div style={{fontFamily:"'Syne',sans-serif",fontSize:'1.6rem',fontWeight:'800'}}>{num}</div>
                  <div style={{fontSize:'12px',color:'#8892a4'}}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{position:'relative'}}>
            <div style={{position:'absolute',top:'-10px',right:'-10px',background:'rgba(245,158,11,0.1)',border:'1px solid rgba(245,158,11,0.25)',borderRadius:'8px',padding:'8px 12px',fontSize:'12px',fontWeight:'500',color:'#f59e0b',zIndex:2}}>
              🏗️ BIM Level 2 Certified
            </div>
            {[
              {icon:'📐',title:'BIM Fundamentals',sub:'Module 1 of 8 · Beginner',bars:[['BIM Concepts','90%'],['Revit Basics','75%']]},
              {icon:'🏛️',title:'Advanced BIM Workflows',sub:'Module 5 · Intermediate',bars:[['Clash Detection','85%']]},
            ].map((card,i)=>(
              <div key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'1.5rem',marginBottom:'1rem'}}>
                <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'1rem'}}>
                  <div style={{width:'36px',height:'36px',borderRadius:'8px',background:'rgba(37,99,235,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px'}}>{card.icon}</div>
                  <div>
                    <div style={{fontFamily:"'Syne',sans-serif",fontWeight:'700',fontSize:'14px'}}>{card.title}</div>
                    <div style={{fontSize:'12px',color:'#8892a4'}}>{card.sub}</div>
                  </div>
                </div>
                {card.bars.map(([label,pct])=>(
                  <div key={label}>
                    <div style={{display:'flex',justifyContent:'space-between',fontSize:'11px',color:'#8892a4',marginBottom:'4px'}}><span>{label}</span><span>{pct}</span></div>
                    <div style={{height:'4px',background:'rgba(255,255,255,0.08)',borderRadius:'2px',marginBottom:'8px',overflow:'hidden'}}>
                      <div style={{height:'100%',width:pct,borderRadius:'2px',background:'linear-gradient(90deg,#2563eb,#f59e0b)'}}/>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{padding:'5rem 2rem',background:'#0f1527'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{fontSize:'12px',fontWeight:'500',letterSpacing:'2px',textTransform:'uppercase',color:'#3b82f6',marginBottom:'.75rem'}}>Curriculum</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:'clamp(1.6rem,3vw,2.4rem)',fontWeight:'800',letterSpacing:'-0.5px',marginBottom:'3rem'}}>What You Will Learn</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.25rem'}}>
            {[
              ['01','BIM Fundamentals','Understand what BIM is, why it matters, and how it transforms modern construction.'],
              ['02','Revit Essentials','Master the core tools of Autodesk Revit — the industry standard BIM software.'],
              ['03','BIM Standards & LOD','Learn Level of Development standards and apply them on real projects.'],
              ['04','Clash Detection','Use Navisworks to identify and resolve clashes before construction begins.'],
              ['05','BIM Coordination','Coordinate between architectural, structural, and MEP models.'],
              ['06','BIM in the Philippines','Understand local BIM adoption, mandates, and career opportunities.'],
            ].map(([num,title,desc])=>(
              <div key={num} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'1.5rem'}}>
                <div style={{fontFamily:"'Syne',sans-serif",fontSize:'2rem',fontWeight:'800',color:'rgba(37,99,235,0.3)',marginBottom:'.75rem'}}>{num}</div>
                <h4 style={{fontFamily:"'Syne',sans-serif",fontSize:'15px',fontWeight:'700',marginBottom:'.5rem'}}>{title}</h4>
                <p style={{fontSize:'13px',color:'#8892a4',lineHeight:'1.7'}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section style={{padding:'5rem 2rem'}}>
        <div style={{maxWidth:'700px',margin:'0 auto',textAlign:'center'}}>
          <div style={{fontSize:'12px',fontWeight:'500',letterSpacing:'2px',textTransform:'uppercase',color:'#3b82f6',marginBottom:'.75rem'}}>Pricing</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:'clamp(1.6rem,3vw,2.4rem)',fontWeight:'800',marginBottom:'1rem'}}>Simple, Honest Pricing</h2>
          <p style={{color:'#8892a4',fontSize:'16px',lineHeight:'1.8',marginBottom:'2rem'}}>Start free. Upgrade when you're ready.</p>
          <Link href="/pricing" style={{display:'inline-block',background:'#2563eb',color:'#fff',padding:'14px 36px',borderRadius:'8px',fontWeight:'600',textDecoration:'none',fontSize:'16px'}}>View All Plans →</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'3rem 2rem',borderTop:'1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1rem'}}>
          <div style={{fontFamily:"'Syne',sans-serif",fontWeight:'800',fontSize:'16px'}}>Dharren Park <span style={{color:'#f59e0b'}}>BIM</span></div>
          <div style={{fontSize:'13px',color:'#8892a4'}}>© 2026 Dharren Park BIM System. All rights reserved.</div>
          <div style={{display:'flex',gap:'1.5rem'}}>
            {['Privacy','Terms','Contact'].map(l=>(
              <Link key={l} href="#" style={{fontSize:'13px',color:'#8892a4',textDecoration:'none'}}>{l}</Link>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}