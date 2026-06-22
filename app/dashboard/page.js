'use client';
import { useState, useEffect } from 'react';
import { useRouter }           from 'next/navigation';
import Link                    from 'next/link';
import { supabase }            from '@/lib/supabase';
import './dashboard.css';

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com'];

const lessons = [
  { id:1,  num:'01', title:'What is BIM? A Complete Introduction',            cat:'beginner',     topic:'general',      free:true  },
  { id:2,  num:'02', title:'BIM vs CAD: Key Differences Explained',           cat:'beginner',     topic:'general',      free:true  },
  { id:3,  num:'03', title:'Getting Started with Autodesk Revit',             cat:'beginner',     topic:'revit',        free:true  },
  { id:4,  num:'04', title:'Understanding LOD: Level of Development',         cat:'beginner',     topic:'standards',    free:false },
  { id:5,  num:'05', title:'BIM Execution Plan (BEP) Fundamentals',           cat:'beginner',     topic:'standards',    free:false },
  { id:6,  num:'06', title:'Revit Families: System, Loadable & In-Place',     cat:'intermediate', topic:'revit',        free:false },
  { id:7,  num:'07', title:'Clash Detection with Navisworks',                  cat:'intermediate', topic:'navisworks',   free:false },
  { id:8,  num:'08', title:'MEP Coordination in BIM Projects',                 cat:'intermediate', topic:'coordination', free:false },
  { id:9,  num:'09', title:'IFC: Open BIM Standard Explained',                 cat:'intermediate', topic:'ifc',          free:false },
  { id:10, num:'10', title:'BIM 360 for Project Collaboration',                cat:'intermediate', topic:'bim360',       free:false },
  { id:11, num:'11', title:'4D BIM: Linking Schedule to the Model',            cat:'advanced',     topic:'coordination', free:false },
  { id:12, num:'12', title:'BIM in the Philippines: Standards & Opportunities',cat:'advanced',     topic:'general',      free:false },
];

const resources = [
  { title:'BIM Glossary & Terms',      type:'PDF',  pages:'12 pages', plan:'free'    },
  { title:'LOD Reference Sheet',       type:'PDF',  pages:'4 pages',  plan:'pro'     },
  { title:'BEP Template',              type:'DOCX', pages:'Editable', plan:'pro'     },
  { title:'Clash Detection Checklist', type:'PDF',  pages:'6 pages',  plan:'pro'     },
  { title:'4D BIM Workflow Guide',     type:'PDF',  pages:'18 pages', plan:'premium' },
  { title:'PH BIM Standards Summary',  type:'PDF',  pages:'10 pages', plan:'premium' },
];

const topicClass = { revit:'tag-revit', standards:'tag-standards', coordination:'tag-coordination', navisworks:'tag-navisworks', bim360:'tag-bim360', ifc:'tag-ifc', general:'tag-general' };
const topicLabel = { revit:'Revit', standards:'BIM Standards', coordination:'Coordination', navisworks:'Navisworks', bim360:'BIM 360', ifc:'IFC', general:'General BIM' };

const planRank = { free:0, basic:1, pro:2, premium:3 };

const PLAN_ACCESS = {
  free:    (lesson) => lesson.free,
  basic:   (lesson) => lesson.cat === 'beginner',
  pro:     (lesson) => lesson.cat === 'beginner' || lesson.cat === 'intermediate',
  premium: ()       => true,
};

export default function DashboardPage() {
  const router = useRouter();
  const [activePanel,  setActivePanel]  = useState('overview');
  const [profile,      setProfile]      = useState(null);
  const [userPlan,     setUserPlan]     = useState(null);
  const [completed,    setCompleted]    = useState(new Set());
  const [quizAttempts, setQuizAttempts] = useState([]);
  const [loading,      setLoading]      = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/login'); return; }

      const { data: profileData } = await supabase
        .from('profiles').select('*').eq('id', user.id).single();
      setProfile({ ...profileData, email: user.email });

      const { data: planData } = await supabase
        .from('user_plans').select('*')
        .eq('user_id', user.id).eq('status', 'active').single();
      setUserPlan(planData || null);

      const { data: progress } = await supabase
        .from('lesson_progress').select('lesson_id')
        .eq('user_id', user.id).eq('completed', true);
      if (progress) setCompleted(new Set(progress.map(p => p.lesson_id)));

      const { data: attempts } = await supabase
        .from('quiz_attempts').select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (attempts) setQuizAttempts(attempts);

      setLoading(false);
    }
    load();
  }, []);

  async function toggleLesson(lessonId) {
    const { data: { user } } = await supabase.auth.getUser();
    const isCompleted = completed.has(lessonId);
    const next = new Set(completed);
    if (isCompleted) {
      next.delete(lessonId);
      await supabase.from('lesson_progress').delete()
        .eq('user_id', user.id).eq('lesson_id', lessonId);
    } else {
      next.add(lessonId);
      await supabase.from('lesson_progress').upsert({
        user_id: user.id, lesson_id: lessonId, completed: true
      });
    }
    setCompleted(next);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/login');
  }

  if (loading) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', background:'#0a0e1a', color:'#8892a4' }}>
      Loading your dashboard...
    </div>
  );

  // ── Derived values — all defined AFTER loading, before any JSX ──
  const activePlanName = userPlan?.plan || profile?.plan || 'free';
  const planBilling    = userPlan?.billing || 'monthly';
  const planExpiry     = userPlan?.expires_at
    ? new Date(userPlan.expires_at).toLocaleDateString('en-PH', { dateStyle: 'medium' })
    : null;
  const planAmount     = activePlanName === 'pro'     ? (planBilling === 'annual' ? '₱479' : '₱599')
                       : activePlanName === 'premium' ? (planBilling === 'annual' ? '₱799' : '₱999')
                       : activePlanName === 'basic'   ? (planBilling === 'annual' ? '₱239' : '₱299')
                       : 'Free';

  // canAccessLesson defined here — after activePlanName is set
  function canAccessLesson(lesson) {
    const checker = PLAN_ACCESS[activePlanName] || PLAN_ACCESS.free;
    return checker(lesson);
  }

  const byCategory    = (cat) => lessons.filter(l => l.cat === cat);
  const unlockedCount = lessons.filter(l => canAccessLesson(l)).length;

  // Best score per lesson
  const bestScoreByLesson = quizAttempts.reduce((acc, attempt) => {
    const lid = attempt.lesson_id;
    if (!acc[lid] || attempt.score > acc[lid].score) acc[lid] = attempt;
    return acc;
  }, {});

  // Quiz rows with real data
  const quizRows = lessons.map(lesson => {
    const best = bestScoreByLesson[lesson.id];
    return {
      lessonId:    lesson.id,
      lessonNum:   lesson.num,
      title:       `Lesson ${lesson.num} Quiz`,
      lessonTitle: lesson.title,
      taken:       !!best,
      score:       best?.score ?? null,
      passed:      best?.passed ?? false,
      date:        best ? new Date(best.created_at).toLocaleDateString('en-PH', { dateStyle: 'medium' }) : null,
      attempts:    quizAttempts.filter(a => a.lesson_id === lesson.id).length,
      locked:      !canAccessLesson(lesson),
    };
  });

  const takenQuizzes = quizRows.filter(q => q.taken);
  const avgScore     = takenQuizzes.length
    ? Math.round(takenQuizzes.reduce((a, q) => a + q.score, 0) / takenQuizzes.length)
    : null;
  const passedCount  = takenQuizzes.filter(q => q.passed).length;

  const firstName = profile?.first_name || 'Student';
  const initials  = (firstName[0] + (profile?.last_name?.[0] || '')).toUpperCase();
  const isAdmin   = ADMIN_EMAILS.includes(profile?.email);

  return (
    <div className="dash-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-text">Dharren <span>BIM</span></div>
          <div className="logo-sub">Student Portal</div>
        </div>

        <nav className="nav-section">
          <div className="nav-label">Main</div>
          {[
            { id:'overview',  icon:'🏠', label:'Overview'    },
            { id:'lessons',   icon:'📚', label:'My Lessons'  },
            { id:'quizzes',   icon:'📝', label:'Quiz Scores' },
            { id:'resources', icon:'📁', label:'Resources'   },
          ].map(item => (
            <div key={item.id} className={`nav-item ${activePanel === item.id ? 'active' : ''}`} onClick={() => setActivePanel(item.id)}>
              <span className="nav-icon">{item.icon}</span>{item.label}
            </div>
          ))}
        </nav>

        <nav className="nav-section">
          <div className="nav-label">Account</div>
          {[
            { id:'billing', icon:'💳', label:'Plan & Billing'   },
            { id:'profile', icon:'⚙️', label:'Profile Settings' },
          ].map(item => (
            <div key={item.id} className={`nav-item ${activePanel === item.id ? 'active' : ''}`} onClick={() => setActivePanel(item.id)}>
              <span className="nav-icon">{item.icon}</span>{item.label}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-chip">
            <div className="avatar">{initials}</div>
            <div>
              <div className="user-name">{firstName} {profile?.last_name}</div>
              <div className="user-plan" style={{ color: isAdmin ? '#f59e0b' : undefined }}>
                {isAdmin ? '⚙ Admin' : `${activePlanName.charAt(0).toUpperCase() + activePlanName.slice(1)} Plan`}
              </div>
            </div>
          </div>
          <div className="logout-btn" onClick={handleLogout}>🚪 Log Out</div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="dash-main">

        {/* OVERVIEW */}
        {activePanel === 'overview' && (
          <div>
            <h1 className="panel-title">Welcome back, {firstName}! 👋</h1>
            <p className="panel-sub">Here's your BIM learning progress at a glance.</p>

            {activePlanName === 'free' ? (
              <div className="announcement" style={{ borderColor:'rgba(37,99,235,0.3)', background:'rgba(37,99,235,0.06)' }}>
                <span className="ann-icon">🚀</span>
                <div>
                  <div className="ann-title" style={{ color:'#60a5fa' }}>Unlock All Lessons</div>
                  <div className="ann-text">You're on the Free plan. <Link href="/pricing" style={{ color:'#3b82f6', fontWeight:600 }}>Upgrade to Pro or Premium</Link> to access all 12 BIM lessons.</div>
                </div>
              </div>
            ) : (
              <div className="announcement">
                <span className="ann-icon">📢</span>
                <div>
                  <div className="ann-title">New Lesson Available</div>
                  <div className="ann-text">BIM in the Philippines has just been published. Check it out in My Lessons!</div>
                </div>
              </div>
            )}

            <div className="stats-row">
              <div className="stat-card highlight">
                <div className="stat-label">Lessons Completed</div>
                <div className="stat-value">{completed.size}</div>
                <div className="stat-sub">of {unlockedCount} unlocked</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Current Plan</div>
                <div className="stat-value" style={{ fontSize:'1.1rem', marginTop:'4px', textTransform:'capitalize' }}>{activePlanName}</div>
                <div className="stat-sub">{userPlan ? 'Active' : 'Free tier'}</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Quiz Average</div>
                <div className="stat-value">{avgScore !== null ? `${avgScore}%` : '—'}</div>
                <div className="stat-sub">{takenQuizzes.length} quiz{takenQuizzes.length !== 1 ? 'zes' : ''} taken · {passedCount} passed</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Resources</div>
                <div className="stat-value">{resources.filter(r => planRank[activePlanName] >= planRank[r.plan]).length}</div>
                <div className="stat-sub">files available</div>
              </div>
            </div>
          </div>
        )}

        {/* LESSONS */}
        {activePanel === 'lessons' && (
          <div>
            <h1 className="panel-title">My Lessons</h1>
            <p className="panel-sub">Grouped by level. Click a lesson to mark it complete.</p>

            <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'10px', padding:'.75rem 1rem', marginBottom:'1.5rem', fontSize:'12px', color:'#8892a4', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <span>📋 Your plan: <strong style={{ color:'#e8eaf0', textTransform:'capitalize' }}>{activePlanName}</strong> · {unlockedCount} of {lessons.length} lessons unlocked</span>
              {activePlanName !== 'premium' && <Link href="/pricing" style={{ color:'#3b82f6', fontSize:'12px', fontWeight:500 }}>Upgrade for more →</Link>}
            </div>

            {['beginner','intermediate','advanced'].map(cat => (
              <div key={cat} className="cat-group">
                <div className="cat-header">
                  <span className={`cat-badge cat-${cat}`}>{cat}</span>
                  <span className="cat-title">{cat==='beginner'?'Foundations':cat==='intermediate'?'Deeper Skills':'Professional Level'}</span>
                  <span className="cat-count">{byCategory(cat).filter(l => completed.has(l.id)).length} of {byCategory(cat).length} completed</span>
                </div>
                <div className="lesson-list">
                  {byCategory(cat).map(lesson => {
                    const isLocked = !canAccessLesson(lesson);
                    const isDone   = completed.has(lesson.id);
                    return (
                      <div key={lesson.id} className={`lesson-row ${isLocked ? 'locked-row' : ''}`} onClick={() => !isLocked && toggleLesson(lesson.id)}>
                        <div className={`lesson-status ${isLocked ? 'status-lock' : isDone ? 'status-done' : 'status-not'}`}>
                          {isLocked ? '🔒' : isDone ? '✓' : ''}
                        </div>
                        <div className="lesson-num">{lesson.num}</div>
                        <div className="lesson-title-text">{lesson.title}</div>
                        {lesson.free && <span className="free-tag">FREE</span>}
                        <span className={`lesson-tag ${topicClass[lesson.topic]}`}>{topicLabel[lesson.topic]}</span>
                        {!isLocked && <div className="lesson-arrow">→</div>}
                        {isLocked && (
                          <Link href="/pricing" onClick={e => e.stopPropagation()} style={{ fontSize:'11px', color:'#3b82f6', whiteSpace:'nowrap' }}>
                            Upgrade →
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* QUIZZES */}
        {activePanel === 'quizzes' && (
          <div>
            <h1 className="panel-title">Quiz Scores</h1>
            <p className="panel-sub">Your performance across all BIM quizzes — live from your attempts.</p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1rem', marginBottom:'1.5rem' }}>
              {[
                { label:'Quizzes Taken',  value: takenQuizzes.length,                   sub: `of ${lessons.length} total`               },
                { label:'Average Score',  value: avgScore !== null ? `${avgScore}%`:'—', sub: 'across all attempts'                      },
                { label:'Quizzes Passed', value: passedCount,                            sub: `${takenQuizzes.length - passedCount} to retry` },
              ].map(s => (
                <div key={s.label} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'1rem 1.25rem' }}>
                  <div style={{ fontSize:'10px', fontWeight:600, letterSpacing:'1px', color:'#8892a4', marginBottom:'.3rem' }}>{s.label.toUpperCase()}</div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.5rem' }}>{s.value}</div>
                  <div style={{ fontSize:'11px', color:'#8892a4', marginTop:'2px' }}>{s.sub}</div>
                </div>
              ))}
            </div>

            <div className="quiz-list">
              {quizRows.map(q => {
                const scoreColor = q.score >= 85 ? '#4ade80' : q.score >= 60 ? '#f59e0b' : q.score !== null ? '#f87171' : '#8892a4';
                return (
                  <div key={q.lessonId} className="quiz-row" style={{ opacity: q.locked ? .45 : 1 }}>
                    <div className="quiz-info">
                      <div className="quiz-title">
                        Lesson {q.lessonNum} — <span style={{ color:'#8892a4', fontWeight:400 }}>{q.lessonTitle}</span>
                      </div>
                      <div className="quiz-sub">
                        {q.locked
                          ? '🔒 Upgrade to unlock this quiz'
                          : q.taken
                            ? `✓ Last taken ${q.date} · ${q.attempts} attempt${q.attempts !== 1 ? 's' : ''} · ${q.passed ? '✅ Passed' : '❌ Not passed yet'}`
                            : '· Not yet taken'}
                      </div>
                    </div>
                    <div style={{ color: scoreColor, background: q.score !== null ? `${scoreColor}18` : 'transparent', border: q.score !== null ? `1px solid ${scoreColor}33` : 'none', borderRadius:'8px', padding:'4px 12px', fontSize:'14px', fontWeight:700, whiteSpace:'nowrap' }}>
                      {q.score !== null ? `${q.score}%` : '—'}
                    </div>
                    {!q.locked ? (
                      <Link href={`/quizzes/${q.lessonId}`} className="quiz-btn" style={{ textDecoration:'none', textAlign:'center' }}>
                        {q.taken ? 'Retake' : 'Start'}
                      </Link>
                    ) : (
                      <Link href="/pricing" className="quiz-btn" style={{ textDecoration:'none', textAlign:'center', opacity:.6 }}>
                        Unlock
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* RESOURCES */}
        {activePanel === 'resources' && (
          <div>
            <h1 className="panel-title">Downloadable Resources</h1>
            <p className="panel-sub">PDFs and reference materials for your BIM journey.</p>
            <div className="resources-grid">
              {resources.map((r, i) => {
                const isLocked = planRank[activePlanName] < planRank[r.plan];
                return (
                  <div key={i} className={`resource-card ${isLocked ? 'locked-res' : ''}`}>
                    <div className={`res-icon ${r.type === 'PDF' ? 'res-pdf' : 'res-doc'}`}>
                      {r.type === 'PDF' ? '📄' : '📋'}
                    </div>
                    <div style={{ flex:1 }}>
                      <div className="res-title">{r.title}</div>
                      <div className="res-sub">{r.type} · {r.pages}</div>
                      <span className={`res-badge ${r.plan === 'free' ? 'res-free' : r.plan === 'premium' ? 'res-premium' : 'res-pro'}`}>
                        {r.plan.charAt(0).toUpperCase() + r.plan.slice(1)}
                      </span>
                    </div>
                    <div className="res-lock">{isLocked ? '🔒' : '↓'}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* BILLING */}
        {activePanel === 'billing' && (
          <div>
            <h1 className="panel-title">Plan & Billing</h1>
            <p className="panel-sub">Manage your subscription and payment history.</p>
            <div className="plan-card-dash">
              <div className="plan-header">
                <div className="plan-name-dash" style={{ textTransform:'capitalize' }}>{activePlanName} Plan</div>
                <div className="plan-status">{userPlan ? 'Active' : 'Free Tier'}</div>
              </div>
              <div className="plan-details">
                <div className="plan-detail-item"><div className="detail-label">Billing Cycle</div><div className="detail-val" style={{ textTransform:'capitalize' }}>{userPlan ? planBilling : '—'}</div></div>
                <div className="plan-detail-item"><div className="detail-label">Amount</div><div className="detail-val">{planAmount}{userPlan ? '/mo' : ''}</div></div>
                <div className="plan-detail-item"><div className="detail-label">Status</div><div className="detail-val">{userPlan?.status ? userPlan.status.charAt(0).toUpperCase() + userPlan.status.slice(1) : 'Free'}</div></div>
                {planExpiry && <div className="plan-detail-item"><div className="detail-label">Expires</div><div className="detail-val">{planExpiry}</div></div>}
              </div>
              {activePlanName !== 'premium' && (
                <Link href="/pricing" className="upgrade-btn" style={{ textDecoration:'none', display:'inline-block' }}>
                  {activePlanName === 'free' ? 'Get a Plan →' : 'Upgrade Plan →'}
                </Link>
              )}
              {activePlanName === 'premium' && (
                <div style={{ fontSize:'13px', color:'#4ade80', marginTop:'1rem' }}>✓ You have full access to all content.</div>
              )}
            </div>
          </div>
        )}

        {/* PROFILE */}
        {activePanel === 'profile' && (
          <div>
            <h1 className="panel-title">Profile Settings</h1>
            <p className="panel-sub">Update your personal information and account details.</p>
            <div className="profile-grid">
              <div className="profile-card">
                <div className="profile-card-title">Personal Information</div>
                <div className="form-group"><label>FIRST NAME</label><input defaultValue={profile?.first_name}/></div>
                <div className="form-group"><label>LAST NAME</label><input defaultValue={profile?.last_name}/></div>
                <div className="form-group"><label>PHONE</label><input defaultValue={profile?.phone}/></div>
                <div className="form-group"><label>PROFESSION</label><input defaultValue={profile?.profession}/></div>
                <button className="save-btn">Save Changes</button>
              </div>
              <div>
                <div className="profile-card" style={{ marginBottom:'1rem' }}>
                  <div className="profile-card-title">Change Password</div>
                  <div className="form-group"><label>CURRENT PASSWORD</label><input type="password" placeholder="••••••••"/></div>
                  <div className="form-group"><label>NEW PASSWORD</label><input type="password" placeholder="Min. 8 characters"/></div>
                  <div className="form-group"><label>CONFIRM PASSWORD</label><input type="password" placeholder="Repeat new password"/></div>
                  <button className="save-btn">Update Password</button>
                </div>
                <div className="profile-card">
                  <div className="profile-card-title" style={{ color:'#f87171' }}>Danger Zone</div>
                  <p style={{ fontSize:'12px', color:'#8892a4', marginBottom:'1rem', lineHeight:'1.65' }}>Deleting your account is permanent and cannot be undone.</p>
                  <button className="danger-btn">Delete My Account</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}