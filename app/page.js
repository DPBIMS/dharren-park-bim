import Link from 'next/link';

export default function Home() {
  return (
    <main style={{background:'#0a0e1a',color:'#e8eaf0',fontFamily:"'DM Sans',sans-serif",fontSize:'15px',lineHeight:'1.7',overflowX:'hidden'}}>

      {/* HERO */}
      <section style={{minHeight:'88vh',display:'flex',alignItems:'center',position:'relative',overflow:'hidden',padding:'5rem 2rem'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(37,99,235,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(245,158,11,0.06) 0%, transparent 60%)'}}/>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',backgroundSize:'48px 48px'}}/>
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
              Learn Building Information Modeling from real-world experience. Structured lessons, professional knowledge, and hands-on resources — built for serious learners.
            </p>
            <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
              <Link href="/pricing" style={{background:'#2563eb',color:'#fff',padding:'12px 28px',borderRadius:'8px',fontWeight:'500',textDecoration:'none',fontSize:'15px'}}>
                Start Learning →
              </Link>
              <Link href="/lessons" style={{border:'1px solid rgba(255,255,255,0.08)',color:'#e8eaf0',padding:'12px 28px',borderRadius:'8px',fontWeight:'500',textDecoration:'none',fontSize:'15px'}}>
                View Lessons
              </Link>
            </div>
            <div style={{display:'flex',gap:'2rem',marginTop:'2.5rem'}}>
              {[['10+','Years Experience'],['50+','BIM Topics'],['3','Learning Plans']].map(([num,label])=>(
                <div key={label}>
                  <div style={{fontFamily:"'Syne',sans-serif",fontSize:'1.6rem',fontWeight:'800',color:'#fff'}}>{num}</div>
                  <div style={{fontSize:'12px',color:'#8892a4'}}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div style={{position:'relative'}}>
            <div style={{position:'absolute',top:'-10px',right:'-10px',background:'rgba(245,158,11,0.1)',border:'1px solid rgba(245,158,11,0.25)',borderRadius:'8px',padding:'8px 12px',fontSize:'12px',fontWeight:'500',color:'#f59e0b',zIndex:2}}>
              🏗️ BIM Level 2 Certified
            </div>
            {[
              {icon:'📐',title:'BIM Fundamentals',sub:'Module 1 of 8 · Beginner',bars:[['BIM Concepts','90%'],['Revit Basics','75%'],['Coordination','60%']]},
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
            <div style={{position:'absolute',bottom:'40px',left:'-20px',background:'rgba(245,158,11,0.1)',border:'1px solid rgba(245,158,11,0.25)',borderRadius:'8px',padding:'8px 12px',fontSize:'12px',fontWeight:'500',color:'#f59e0b'}}>
              📊 Real Project Cases
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{padding:'5rem 2rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{fontSize:'12px',fontWeight:'500',letterSpacing:'2px',textTransform:'uppercase',color:'#3b82f6',marginBottom:'.75rem'}}>About the Instructor</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:'clamp(1.6rem,3vw,2.4rem)',fontWeight:'800',letterSpacing:'-0.5px',marginBottom:'3rem'}}>Meet Dharren Park</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',aspectRatio:'1',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'6rem',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 30% 30%, rgba(37,99,235,0.15),transparent 70%)'}}/>
              👷
            </div>
            <div>
              <div style={{fontFamily:"'Syne',sans-serif",fontSize:'1.8rem',fontWeight:'800',marginBottom:'.25rem'}}>Dharren Park</div>
              <div style={{color:'#f59e0b',fontSize:'14px',fontWeight:'500',marginBottom:'1rem'}}>Senior BIM Specialist</div>
              <p style={{color:'#8892a4',lineHeight:'1.85',marginBottom:'1rem'}}>With years of hands-on experience in the BIM industry, I've worked across architecture, engineering, and construction projects. My goal is to make BIM education accessible, practical, and career-ready for every student.</p>
              <p style={{color:'#8892a4',lineHeight:'1.85',marginBottom:'1.5rem'}}>This platform is built from real project experience — not textbooks. Every lesson reflects what actually works in the industry.</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'.5rem'}}>
                {['Revit','Navisworks','BIM 360','Clash Detection','LOD Standards','IFC','4D/5D BIM','MEP Coordination'].map(tag=>(
                  <span key={tag} style={{background:'rgba(37,99,235,0.1)',border:'1px solid rgba(37,99,235,0.2)',borderRadius:'6px',padding:'4px 12px',fontSize:'12px',color:'#3b82f6',fontWeight:'500'}}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU LEARN */}
      <section style={{padding:'5rem 2rem',background:'#0f1527'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{fontSize:'12px',fontWeight:'500',letterSpacing:'2px',textTransform:'uppercase',color:'#3b82f6',marginBottom:'.75rem'}}>Curriculum</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:'clamp(1.6rem,3vw,2.4rem)',fontWeight:'800',letterSpacing:'-0.5px',marginBottom:'1rem'}}>What You Will Learn</h2>
          <p style={{color:'#8892a4',fontSize:'16px',maxWidth:'560px',lineHeight:'1.8',marginBottom:'3rem'}}>From foundations to advanced workflows — structured lessons built on real industry experience.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.25rem'}}>
            {[
              ['01','BIM Fundamentals','Understand what BIM is, why it matters, and how it transforms modern construction projects.'],
              ['02','Revit Essentials','Master the core tools of Autodesk Revit — the industry standard BIM authoring software.'],
              ['03','BIM Standards & LOD','Learn Level of Development standards and how to apply them correctly on real projects.'],
              ['04','Clash Detection','Use Navisworks to identify and resolve clashes before construction begins.'],
              ['05','BIM Coordination','Coordinate between architectural, structural, and MEP models like a senior specialist.'],
              ['06','BIM in the Philippines','Understand local BIM adoption, government mandates, and opportunities in the PH market.'],
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

      {/* PRICING */}
      <section style={{padding:'5rem 2rem',background:'#0f1527'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{fontSize:'12px',fontWeight:'500',letterSpacing:'2px',textTransform:'uppercase',color:'#3b82f6',marginBottom:'.75rem'}}>Enrollment Plans</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:'clamp(1.6rem,3vw,2.4rem)',fontWeight:'800',letterSpacing:'-0.5px',marginBottom:'1rem'}}>Simple, Honest Pricing</h2>
          <p style={{color:'#8892a4',fontSize:'16px',maxWidth:'560px',lineHeight:'1.8',marginBottom:'3rem'}}>Choose the plan that fits your learning goals. Upgrade anytime as you grow.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.25rem'}}>
            {[
              {name:'Basic',desc:'For beginners starting their BIM journey.',price:'₱299',features:['Full access to BIM articles','Core lessons & topics','Beginner learning path'],unavail:['Downloadable PDFs','Quizzes & assessments','Video lessons'],featured:false,btn:'Get Started'},
              {name:'Pro',desc:'For students serious about BIM careers.',price:'₱599',features:['Everything in Basic','Downloadable PDFs','Quizzes & assessments','Intermediate lessons'],unavail:['Video lessons','3D model resources'],featured:true,btn:'Enroll Now'},
              {name:'Premium',desc:'Full access to everything, now and future.',price:'₱999',features:['Everything in Pro','Video lessons (coming soon)','3D model resources','Priority support','Early access to new content','Certificate of completion'],unavail:[],featured:false,btn:'Get Premium'},
            ].map(plan=>(
              <div key={plan.name} style={{background:plan.featured?'rgba(37,99,235,0.08)':'rgba(255,255,255,0.04)',border:plan.featured?'1px solid #2563eb':'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'2rem',position:'relative'}}>
                {plan.featured && <div style={{position:'absolute',top:'-12px',left:'50%',transform:'translateX(-50%)',background:'#2563eb',color:'#fff',fontSize:'11px',fontWeight:'600',padding:'4px 14px',borderRadius:'100px',whiteSpace:'nowrap'}}>Most Popular</div>}
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:'700',fontSize:'16px',marginBottom:'.25rem'}}>{plan.name}</div>
                <div style={{fontSize:'13px',color:'#8892a4',marginBottom:'1.5rem'}}>{plan.desc}</div>
                <div style={{display:'flex',alignItems:'baseline',gap:'4px',marginBottom:'1.5rem'}}>
                  <span style={{fontFamily:"'Syne',sans-serif",fontSize:'2.2rem',fontWeight:'800'}}>{plan.price}</span>
                  <span style={{fontSize:'13px',color:'#8892a4'}}>/month</span>
                </div>
                <ul style={{listStyle:'none',marginBottom:'1.75rem'}}>
                  {plan.features.map(f=><li key={f} style={{fontSize:'13px',color:'#8892a4',padding:'5px 0',display:'flex',alignItems:'center',gap:'8px'}}><span style={{color:'#3b82f6',fontWeight:'700'}}>✓</span>{f}</li>)}
                  {plan.unavail.map(f=><li key={f} style={{fontSize:'13px',color:'#8892a4',padding:'5px 0',display:'flex',alignItems:'center',gap:'8px',opacity:'.4'}}><span>—</span>{f}</li>)}
                </ul>
                <Link href="/pricing" style={{display:'block',textAlign:'center',padding:'10px',borderRadius:'8px',fontWeight:'500',fontSize:'14px',textDecoration:'none',background:plan.featured?'#2563eb':'transparent',color:plan.featured?'#fff':'#e8eaf0',border:plan.featured?'none':'1px solid rgba(255,255,255,0.08)'}}>
                  {plan.btn}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{padding:'5rem 2rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{fontSize:'12px',fontWeight:'500',letterSpacing:'2px',textTransform:'uppercase',color:'#3b82f6',marginBottom:'.75rem'}}>Student Feedback</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:'clamp(1.6rem,3vw,2.4rem)',fontWeight:'800',letterSpacing:'-0.5px',marginBottom:'1rem'}}>What Students Say</h2>
          <p style={{color:'#8892a4',fontSize:'16px',maxWidth:'560px',lineHeight:'1.8',marginBottom:'3rem'}}>Real feedback from learners who started their BIM journey here.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.25rem'}}>
            {[
              {quote:'The lessons are explained in a way that\'s easy to understand. Finally, BIM content that\'s practical and not just theoretical.',name:'Juan Reyes',role:'Architecture Student, Manila',init:'JR'},
              {quote:'I learned more here in one month than I did in a whole semester. The real project examples make all the difference.',name:'Maria Cruz',role:'Civil Engineer, Cebu',init:'MC'},
              {quote:'As someone transitioning into BIM from CAD, this platform gave me the confidence and skills I needed to land my first BIM role.',name:'Anton Lim',role:'BIM Technician, BGC',init:'AL'},
            ].map(t=>(
              <div key={t.name} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'1.5rem'}}>
                <p style={{fontSize:'14px',color:'#8892a4',lineHeight:'1.8',marginBottom:'1.25rem'}}>"{t.quote}"</p>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'rgba(37,99,235,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Syne',sans-serif",fontWeight:'700',fontSize:'13px',color:'#3b82f6',flexShrink:0}}>{t.init}</div>
                  <div>
                    <div style={{fontWeight:'500',fontSize:'13px'}}>{t.name}</div>
                    <div style={{fontSize:'12px',color:'#8892a4'}}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{padding:'5rem 2rem',background:'#0f1527'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{fontSize:'12px',fontWeight:'500',letterSpacing:'2px',textTransform:'uppercase',color:'#3b82f6',marginBottom:'.75rem'}}>Get in Touch</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:'clamp(1.6rem,3vw,2.4rem)',fontWeight:'800',letterSpacing:'-0.5px',marginBottom:'3rem'}}>Contact Us</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'start'}}>
            <div>
              <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:'1.4rem',fontWeight:'800',marginBottom:'1rem'}}>Have questions?<br/>We're here to help.</h3>
              <p style={{color:'#8892a4',lineHeight:'1.85',marginBottom:'1.5rem'}}>Whether you want to know more about the platform, need help choosing a plan, or have BIM questions — reach out and we'll respond within 24 hours.</p>
              {[['📧','Email','hello@dharrenparkbim.com'],['📍','Location','Philippines'],['⏱️','Response Time','Within 24 hours']].map(([icon,label,val])=>(
                <div key={label} style={{display:'flex',alignItems:'center',gap:'.75rem',marginBottom:'.75rem',fontSize:'14px',color:'#8892a4'}}>
                  <span>{icon}</span>
                  <div><strong style={{color:'#e8eaf0'}}>{label}</strong><br/>{val}</div>
                </div>
              ))}
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
                {['First Name','Last Name'].map(p=>(
                  <div key={p} style={{display:'flex',flexDirection:'column',gap:'.4rem'}}>
                    <label style={{fontSize:'13px',color:'#8892a4',fontWeight:'500'}}>{p}</label>
                    <input placeholder={p==='First Name'?'Juan':'Dela Cruz'} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'8px',padding:'10px 14px',color:'#e8eaf0',fontSize:'14px',fontFamily:"'DM Sans',sans-serif",outline:'none'}}/>
                  </div>
                ))}
              </div>
              {[['Email Address','juan@email.com','email'],['Subject','I want to learn about BIM...','text']].map(([label,ph,type])=>(
                <div key={label} style={{display:'flex',flexDirection:'column',gap:'.4rem'}}>
                  <label style={{fontSize:'13px',color:'#8892a4',fontWeight:'500'}}>{label}</label>
                  <input type={type} placeholder={ph} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'8px',padding:'10px 14px',color:'#e8eaf0',fontSize:'14px',fontFamily:"'DM Sans',sans-serif",outline:'none'}}/>
                </div>
              ))}
              <div style={{display:'flex',flexDirection:'column',gap:'.4rem'}}>
                <label style={{fontSize:'13px',color:'#8892a4',fontWeight:'500'}}>Message</label>
                <textarea placeholder="Tell us what you need..." rows={4} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'8px',padding:'10px 14px',color:'#e8eaf0',fontSize:'14px',fontFamily:"'DM Sans',sans-serif",outline:'none',resize:'vertical'}}/>
              </div>
              <button style={{background:'#2563eb',color:'#fff',border:'none',padding:'12px',borderRadius:'8px',fontWeight:'500',fontSize:'15px',cursor:'pointer',fontFamily:"'DM Sans',sans-serif"}}>
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'3rem 2rem',borderTop:'1px solid rgba(255,255,255,0.08)'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1rem'}}>
          <div style={{fontFamily:"'Syne',sans-serif",fontWeight:'800',fontSize:'16px'}}>Dharren Park <span style={{color:'#f59e0b'}}>BIM</span> System</div>
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