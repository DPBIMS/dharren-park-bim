'use client';
import { useState, useEffect } from 'react';
import { useRouter }           from 'next/navigation';
import Link                    from 'next/link';
import { supabase }            from '@/lib/supabase';
import './dashboard.css';

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com'];
const TOTAL_LESSONS = 12;

// ── BIM Foundation Lessons (original 12) ──────────────────────────
const bimLessons = [
  { id:1,  num:'01', title:'What is BIM? A Complete Introduction',             cat:'beginner',     topic:'general',      free:true  },
  { id:2,  num:'02', title:'BIM vs CAD: Key Differences Explained',            cat:'beginner',     topic:'general',      free:true  },
  { id:3,  num:'03', title:'Getting Started with Autodesk Revit',              cat:'beginner',     topic:'revit',        free:true  },
  { id:4,  num:'04', title:'Understanding LOD: Level of Development',          cat:'beginner',     topic:'standards',    free:false },
  { id:5,  num:'05', title:'BIM Execution Plan (BEP) Fundamentals',            cat:'beginner',     topic:'standards',    free:false },
  { id:6,  num:'06', title:'Revit Families: System, Loadable & In-Place',      cat:'intermediate', topic:'revit',        free:false },
  { id:7,  num:'07', title:'Clash Detection with Navisworks',                   cat:'intermediate', topic:'navisworks',   free:false },
  { id:8,  num:'08', title:'MEP Coordination in BIM Projects',                  cat:'intermediate', topic:'coordination', free:false },
  { id:9,  num:'09', title:'IFC: Open BIM Standard Explained',                  cat:'intermediate', topic:'ifc',          free:false },
  { id:10, num:'10', title:'BIM 360 for Project Collaboration',                 cat:'intermediate', topic:'bim360',       free:false },
  { id:11, num:'11', title:'4D BIM: Linking Schedule to the Model',             cat:'advanced',     topic:'coordination', free:false },
  { id:12, num:'12', title:'BIM in the Philippines: Standards & Opportunities', cat:'advanced',     topic:'general',      free:false },
];

// ── Revit Getting Started Lessons (rv-1 to rv-24) ─────────────────
const revitLessons = [
  { id:'rv-1',  num:'01', title:'What is Revit? History & Why It Dominates BIM',   cat:'beginner',     topic:'Revit Basics',    free:true  },
  { id:'rv-2',  num:'02', title:'The Revit Interface: Every Panel Explained',       cat:'beginner',     topic:'Revit Interface', free:true  },
  { id:'rv-3',  num:'03', title:'Starting a Project: Templates & Project Setup',    cat:'beginner',     topic:'Revit Basics',    free:true  },
  { id:'rv-4',  num:'04', title:'Navigation: Views, Zoom & View Controls',          cat:'beginner',     topic:'Revit Interface', free:false },
  { id:'rv-5',  num:'05', title:'Understanding Revit File Types (.rvt .rfa .rte)',  cat:'beginner',     topic:'Revit Basics',    free:false },
  { id:'rv-6',  num:'06', title:'Project Browser & Properties Panel Deep Dive',     cat:'beginner',     topic:'Revit Interface', free:false },
  { id:'rv-7',  num:'07', title:'Grids, Levels & Datum Elements',                   cat:'beginner',     topic:'BIM Modeling',    free:false },
  { id:'rv-8',  num:'08', title:'Basic Walls, Floors & Roofs',                      cat:'beginner',     topic:'BIM Modeling',    free:false },
  { id:'rv-9',  num:'09', title:'Doors, Windows & Component Families',              cat:'intermediate', topic:'BIM Modeling',    free:false },
  { id:'rv-10', num:'10', title:'Working with Views & Visibility Graphics',         cat:'intermediate', topic:'Revit Views',     free:false },
  { id:'rv-11', num:'11', title:'Schedules & Quantities',                            cat:'intermediate', topic:'BIM Data',        free:false },
  { id:'rv-12', num:'12', title:'Sheets, Titleblocks & Printing',                   cat:'intermediate', topic:'Drawing Prod.',   free:false },
  { id:'rv-13', num:'13', title:'Dimensions, Tags & Annotations',                   cat:'intermediate', topic:'Drawing Prod.',   free:false },
  { id:'rv-14', num:'14', title:'Rooms, Areas & Color Schemes',                     cat:'intermediate', topic:'BIM Data',        free:false },
  { id:'rv-15', num:'15', title:'Materials, Appearance & Rendering Basics',         cat:'intermediate', topic:'Visualization',   free:false },
  { id:'rv-16', num:'16', title:'Phases & Design Options',                           cat:'intermediate', topic:'BIM Modeling',    free:false },
  { id:'rv-17', num:'17', title:'Groups, Assemblies & Design Reuse',                cat:'advanced',     topic:'BIM Modeling',    free:false },
  { id:'rv-18', num:'18', title:'Worksharing & Central Files',                      cat:'advanced',     topic:'Collaboration',   free:false },
  { id:'rv-19', num:'19', title:'Linked Models & Copy/Monitor',                     cat:'advanced',     topic:'Collaboration',   free:false },
  { id:'rv-20', num:'20', title:'Revit Templates & Office Standards',               cat:'advanced',     topic:'BIM Management',  free:false },
  { id:'rv-21', num:'21', title:'Custom Titleblocks & Annotation Families',         cat:'advanced',     topic:'Family Creation', free:false },
  { id:'rv-22', num:'22', title:'Parameters: Instance, Type & Shared',              cat:'advanced',     topic:'BIM Data',        free:false },
  { id:'rv-23', num:'23', title:'View Templates, Filters & Overrides',              cat:'advanced',     topic:'Revit Views',     free:false },
  { id:'rv-24', num:'24', title:'Performance, File Health & Large Projects',        cat:'advanced',     topic:'BIM Management',  free:false },
];

// ── Revit Project Setup Lessons (ps-1 to ps-24) ───────────────────
const setupLessons = [
  { id:'ps-1',  num:'01', title:'Why Project Setup Matters',                         cat:'beginner',     topic:'Introduction',    free:true  },
  { id:'ps-2',  num:'02', title:'Choosing the Right Template',                       cat:'beginner',     topic:'Foundation',      free:true  },
  { id:'ps-3',  num:'03', title:'Units, Tolerances & Project Information',           cat:'beginner',     topic:'Foundation',      free:true  },
  { id:'ps-4',  num:'04', title:'Shared Coordinates & True North',                   cat:'beginner',     topic:'Coordinates',     free:false },
  { id:'ps-5',  num:'05', title:'Levels & Grids — Setting Up Correctly',             cat:'beginner',     topic:'Datum',           free:false },
  { id:'ps-6',  num:'06', title:'Worksets — Planning & Creating',                    cat:'beginner',     topic:'Worksharing',     free:false },
  { id:'ps-7',  num:'07', title:'File Naming & Folder Structure',                    cat:'beginner',     topic:'Standards',       free:false },
  { id:'ps-8',  num:'08', title:'Linked File Strategy',                              cat:'beginner',     topic:'Collaboration',   free:false },
  { id:'ps-9',  num:'09', title:'Line Weights, Styles & Patterns',                   cat:'intermediate', topic:'Visual Standards', free:false },
  { id:'ps-10', num:'10', title:'Object Styles — Category Defaults',                 cat:'intermediate', topic:'Visual Standards', free:false },
  { id:'ps-11', num:'11', title:'Materials Library Setup',                           cat:'intermediate', topic:'Visual Standards', free:false },
  { id:'ps-12', num:'12', title:'Text Types & Dimension Styles',                     cat:'intermediate', topic:'Annotation',       free:false },
  { id:'ps-13', num:'13', title:'View Templates — Building the Full Set',            cat:'intermediate', topic:'View Standards',   free:false },
  { id:'ps-14', num:'14', title:'Browser Organization & View Naming',                cat:'intermediate', topic:'Organization',     free:false },
  { id:'ps-15', num:'15', title:'Loading & Organizing Families',                     cat:'intermediate', topic:'Content',          free:false },
  { id:'ps-16', num:'16', title:'Sheet Setup & Titleblock Configuration',            cat:'intermediate', topic:'Sheets',           free:false },
  { id:'ps-17', num:'17', title:'Shared Parameters — Project Setup',                 cat:'advanced',     topic:'Data Standards',   free:false },
  { id:'ps-18', num:'18', title:'Project Parameters & Schedules Pre-Built',          cat:'advanced',     topic:'Data Standards',   free:false },
  { id:'ps-19', num:'19', title:'Filters — Setting Up Project-Wide Rules',           cat:'advanced',     topic:'View Standards',   free:false },
  { id:'ps-20', num:'20', title:'Phase Setup for the Project',                       cat:'advanced',     topic:'Organization',     free:false },
  { id:'ps-21', num:'21', title:'COBie & IFC Readiness',                             cat:'advanced',     topic:'Handover',         free:false },
  { id:'ps-22', num:'22', title:'Model Health Baseline',                             cat:'advanced',     topic:'Model Quality',    free:false },
  { id:'ps-23', num:'23', title:'Saving as Office Template',                         cat:'advanced',     topic:'Templates',        free:false },
  { id:'ps-24', num:'24', title:'Project Setup Checklist & Handoff',                 cat:'advanced',     topic:'Capstone',         free:false },
];

// ── Course registry ────────────────────────────────────────────────
const COURSES = [
  {
    id: 'bim',
    label: 'BIM Foundations',
    icon: '⬡',
    color: '#2563eb',
    lessons: bimLessons,
    path: '/lessons',
    quizPath: (id) => `/quizzes/${id}`,
  },
  {
    id: 'revit',
    label: 'Revit Getting Started',
    icon: '▶',
    color: '#10b981',
    lessons: revitLessons,
    path: '/software/revit/getting-started',
    quizPath: (id) => `/software/revit/getting-started/${id}/quiz`,
  },
  {
    id: 'setup',
    label: 'Revit Project Setup',
    icon: '⚙',
    color: '#f59e0b',
    lessons: setupLessons,
    path: '/software/revit/project-setup',
    quizPath: (id) => `/software/revit/project-setup/${id}/quiz`,
  },
];

const resources = [
  { title:'BIM Glossary & Terms',      type:'PDF',  pages:'12 pages', plan:'free'    },
  { title:'LOD Reference Sheet',       type:'PDF',  pages:'4 pages',  plan:'pro'     },
  { title:'BEP Template',              type:'DOCX', pages:'Editable', plan:'pro'     },
  { title:'Clash Detection Checklist', type:'PDF',  pages:'6 pages',  plan:'pro'     },
  { title:'4D BIM Workflow Guide',     type:'PDF',  pages:'18 pages', plan:'premium' },
  { title:'PH BIM Standards Summary',  type:'PDF',  pages:'10 pages', plan:'premium' },
];

const planRank   = { free:0, basic:1, pro:2, premium:3 };
const PLAN_ACCESS = {
  free:    (l) => l.free,
  basic:   (l) => l.cat === 'beginner',
  pro:     (l) => l.cat === 'beginner' || l.cat === 'intermediate',
  premium: ()  => true,
};

export default function DashboardPage() {
  const router = useRouter();
  const [activePanel,    setActivePanel]    = useState('overview');
  const [activeCourse,   setActiveCourse]   = useState('bim');
  const [profile,        setProfile]        = useState(null);
  const [userPlan,       setUserPlan]       = useState(null);
  const [completed,      setCompleted]      = useState(new Set());
  const [quizAttempts,   setQuizAttempts]   = useState([]);
  const [certificate,    setCertificate]    = useState(null);
  const [certLoading,    setCertLoading]    = useState(false);
  const [certError,      setCertError]      = useState('');
  const [loading,        setLoading]        = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/login'); return; }

      const { data: profileData } = await supabase
        .from('profiles').select('*').eq('id', user.id).single();
      setProfile({ ...profileData, email: user.email, id: user.id });

      const { data: planData } = await supabase
        .from('user_plans').select('*')
        .eq('user_id', user.id).eq('status', 'active').single();
      setUserPlan(planData || null);

      const { data: progress } = await supabase
        .from('lesson_progress').select('lesson_id')
        .eq('user_id', user.id).eq('completed', true);
      if (progress) setCompleted(new Set(progress.map(p => String(p.lesson_id))));

      const { data: attempts } = await supabase
        .from('quiz_attempts').select('*')
        .eq('user_id', user.id).order('created_at', { ascending: false });
      if (attempts) setQuizAttempts(attempts);

      const { data: cert } = await supabase
        .from('certificates').select('*').eq('user_id', user.id).single();
      if (cert) setCertificate(cert);

      setLoading(false);
    }
    load();
  }, []);

  async function toggleLesson(lessonId) {
    const { data: { user } } = await supabase.auth.getUser();
    const key = String(lessonId);
    const isCompleted = completed.has(key);
    const next = new Set(completed);
    if (isCompleted) {
      next.delete(key);
      await supabase.from('lesson_progress').delete()
        .eq('user_id', user.id).eq('lesson_id', lessonId);
    } else {
      next.add(key);
      await supabase.from('lesson_progress').upsert({
        user_id: user.id, lesson_id: lessonId, completed: true,
      });
    }
    setCompleted(next);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/login');
  }

  async function generateCertificate() {
    setCertLoading(true);
    setCertError('');
    try {
      const fullName = `${profile.first_name || ''} ${profile.last_name || ''}`.trim() || profile.email;
      const res  = await fetch('/api/generate-certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: profile.id, fullName }),
      });
      const data = await res.json();
      if (data.certificate) setCertificate(data.certificate);
      else setCertError(data.error || 'Failed to generate certificate.');
    } catch {
      setCertError('Something went wrong. Please try again.');
    }
    setCertLoading(false);
  }

  if (loading) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', background:'#0a0e1a', color:'#8892a4' }}>
      Loading your dashboard...
    </div>
  );

  const activePlanName = userPlan?.plan || profile?.plan || 'free';
  const planBilling    = userPlan?.billing || 'monthly';
  const planExpiry     = userPlan?.expires_at
    ? new Date(userPlan.expires_at).toLocaleDateString('en-PH', { dateStyle:'medium' })
    : null;
  const planAmount = activePlanName === 'pro'
    ? (planBilling === 'annual' ? '479' : '599')
    : activePlanName === 'premium'
    ? (planBilling === 'annual' ? '799' : '999')
    : activePlanName === 'basic'
    ? (planBilling === 'annual' ? '239' : '299')
    : 'Free';

  function canAccessLesson(lesson) {
    const checker = PLAN_ACCESS[activePlanName] || PLAN_ACCESS.free;
    return checker(lesson);
  }

  // BIM Foundation specific stats
  const bimUnlocked   = bimLessons.filter(l => canAccessLesson(l)).length;
  const bimCompleted  = bimLessons.filter(l => completed.has(String(l.id))).length;

  // Total across all courses
  const allLessons     = [...bimLessons, ...revitLessons, ...setupLessons];
  const totalUnlocked  = allLessons.filter(l => canAccessLesson(l)).length;
  const totalCompleted = allLessons.filter(l => completed.has(String(l.id))).length;

  const bestScoreByLesson = quizAttempts.reduce((acc, a) => {
    if (!acc[a.lesson_id] || a.score > acc[a.lesson_id].score) acc[a.lesson_id] = a;
    return acc;
  }, {});

// ── Quiz stats across ALL courses ─────────────────────
const allQuizRows = allLessons.map(lesson => {
  const best = bestScoreByLesson[String(lesson.id)];
  return {
    lessonId: lesson.id,
    taken: !!best,
    score: best?.score ?? null,
    passed: best?.passed ?? false,
    locked: !canAccessLesson(lesson),
  };
});

const takenQuizzes = allQuizRows.filter(q => q.taken);
const avgScore     = takenQuizzes.length
  ? Math.round(takenQuizzes.reduce((a, q) => a + q.score, 0) / takenQuizzes.length)
  : null;
const passedCount  = takenQuizzes.filter(q => q.passed).length;

  const isPremium         = activePlanName === 'premium';
  const allBimComplete    = bimCompleted >= TOTAL_LESSONS;
  const canGetCert        = isPremium && allBimComplete;
  const bimRemaining      = TOTAL_LESSONS - bimCompleted;

  const firstName = profile?.first_name || 'Student';
  const initials  = (firstName[0] + (profile?.last_name?.[0] || '')).toUpperCase();
  const isAdmin   = ADMIN_EMAILS.includes(profile?.email);

  const mainNavItems = [
    { id:'overview',     icon:'🏠', label:'Overview'     },
    { id:'lessons',      icon:'📚', label:'My Lessons'   },
    { id:'quizzes',      icon:'📝', label:'Quiz Scores'  },
    { id:'resources',    icon:'📁', label:'Resources'    },
    ...(isPremium ? [{ id:'certificate', icon:'🎓', label:'Certificate' }] : []),
  ];

  // Active course data for lessons panel
  const currentCourse = COURSES.find(c => c.id === activeCourse) || COURSES[0];
  const courseLessons = currentCourse.lessons;
  const byCategory    = (cat) => courseLessons.filter(l => l.cat === cat);

  return (
    <div className="dash-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-text">Dharren <span>BIM</span></div>
          <div className="logo-sub">Student Portal</div>
        </div>
        <nav className="nav-section">
          <div className="nav-label">Main</div>
          {mainNavItems.map(item => (
            <div
              key={item.id}
              className={`nav-item ${activePanel === item.id ? 'active' : ''}`}
              onClick={() => setActivePanel(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>{item.label}
            </div>
          ))}
        </nav>
        <nav className="nav-section">
          <div className="nav-label">Account</div>
          {[
            { id:'billing',  icon:'💳', label:'Plan & Billing'   },
            { id:'profile',  icon:'⚙️', label:'Profile Settings' },
          ].map(item => (
            <div
              key={item.id}
              className={`nav-item ${activePanel === item.id ? 'active' : ''}`}
              onClick={() => setActivePanel(item.id)}
            >
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

      <main className="dash-main">

        {/* ── OVERVIEW ───────────────────────────────────────────── */}
        {activePanel === 'overview' && (
          <div>
            <h1 className="panel-title">Welcome back, {firstName}! 👋</h1>
            <p className="panel-sub">Here is your BIM learning progress at a glance.</p>

            {activePlanName === 'free' ? (
              <div className="announcement" style={{ borderColor:'rgba(37,99,235,0.3)', background:'rgba(37,99,235,0.06)' }}>
                <span className="ann-icon">🚀</span>
                <div>
                  <div className="ann-title" style={{ color:'#60a5fa' }}>Unlock All Lessons</div>
                  <div className="ann-text">You are on the Free plan. <Link href="/pricing" style={{ color:'#3b82f6', fontWeight:600 }}>Upgrade to Pro or Premium</Link> to access all lessons across every course.</div>
                </div>
              </div>
            ) : canGetCert ? (
              <div className="announcement" style={{ borderColor:'rgba(245,158,11,0.3)', background:'rgba(245,158,11,0.06)' }}>
                <span className="ann-icon">🎓</span>
                <div>
                  <div className="ann-title" style={{ color:'#f59e0b' }}>Certificate Ready!</div>
                  <div className="ann-text">You have completed all BIM Foundation lessons! <button onClick={() => setActivePanel('certificate')} style={{ color:'#f59e0b', fontWeight:600, background:'none', border:'none', cursor:'pointer', padding:0, fontSize:'inherit' }}>Claim your certificate →</button></div>
                </div>
              </div>
            ) : (
              <div className="announcement">
                <span className="ann-icon">📢</span>
                <div>
                  <div className="ann-title">Revit Project Setup Course Now Available</div>
                  <div className="ann-text">24 lessons covering professional Revit project configuration. Check it out in My Lessons!</div>
                </div>
              </div>
            )}

            <div className="stats-row">
              <div className="stat-card highlight">
                <div className="stat-label">Total Completed</div>
                <div className="stat-value">{totalCompleted}</div>
                <div className="stat-sub">of {totalUnlocked} unlocked lessons</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Current Plan</div>
                <div className="stat-value" style={{ fontSize:'1.1rem', marginTop:'4px', textTransform:'capitalize' }}>{activePlanName}</div>
                <div className="stat-sub">{userPlan ? 'Active' : 'Free tier'}</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Quiz Average</div>
                <div className="stat-value">{avgScore !== null ? `${avgScore}%` : '—'}</div>
                <div className="stat-sub">{takenQuizzes.length} quizzes · {passedCount} passed</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Courses</div>
                <div className="stat-value">{COURSES.length}</div>
                <div className="stat-sub">available to explore</div>
              </div>
            </div>

            {/* Course progress cards */}
            <div style={{ marginTop:'1.5rem' }}>
              <div style={{ fontSize:'12px', fontWeight:600, letterSpacing:'1px', color:'#8892a4', textTransform:'uppercase', marginBottom:'1rem' }}>Course Progress</div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'1rem' }}>
                {COURSES.map(course => {
                  const unlocked  = course.lessons.filter(l => canAccessLesson(l)).length;
                  const done      = course.lessons.filter(l => completed.has(String(l.id))).length;
                  const pct       = unlocked > 0 ? Math.round((done / unlocked) * 100) : 0;
                  return (
                    <div
                      key={course.id}
                      onClick={() => { setActivePanel('lessons'); setActiveCourse(course.id); }}
                      style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'1.25rem', cursor:'pointer', transition:'border-color .2s' }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = course.color + '55'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                    >
                      <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'0.75rem' }}>
                        <span style={{ fontSize:'18px' }}>{course.icon}</span>
                        <span style={{ fontSize:'13px', fontWeight:600, color:'#e8eaf0' }}>{course.label}</span>
                      </div>
                      <div style={{ height:'6px', background:'rgba(255,255,255,0.06)', borderRadius:'3px', overflow:'hidden', marginBottom:'0.5rem' }}>
                        <div style={{ height:'100%', width:`${pct}%`, background:course.color, borderRadius:'3px', transition:'width .5s' }} />
                      </div>
                      <div style={{ display:'flex', justifyContent:'space-between', fontSize:'11px', color:'#8892a4' }}>
                        <span>{done} / {unlocked} lessons</span>
                        <span style={{ color:course.color, fontWeight:600 }}>{pct}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── MY LESSONS ─────────────────────────────────────────── */}
        {activePanel === 'lessons' && (
          <div>
            <h1 className="panel-title">My Lessons</h1>
            <p className="panel-sub">Select a course below to view its lessons.</p>

            {/* Course tabs */}
            <div style={{ display:'flex', gap:'0.5rem', marginBottom:'1.5rem', flexWrap:'wrap' }}>
              {COURSES.map(course => (
                <button
                  key={course.id}
                  onClick={() => setActiveCourse(course.id)}
                  style={{
                    display:'flex', alignItems:'center', gap:'6px',
                    padding:'8px 16px', borderRadius:'8px', fontSize:'13px',
                    fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif",
                    border:`1px solid ${activeCourse === course.id ? course.color : 'rgba(255,255,255,0.08)'}`,
                    background: activeCourse === course.id ? `${course.color}22` : 'rgba(255,255,255,0.04)',
                    color: activeCourse === course.id ? course.color : '#8892a4',
                    transition:'all .2s',
                  }}
                >
                  <span>{course.icon}</span>
                  {course.label}
                  <span style={{
                    background:'rgba(255,255,255,0.1)', borderRadius:'100px',
                    padding:'1px 7px', fontSize:'11px', marginLeft:'2px',
                  }}>
                    {course.lessons.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Plan banner */}
            <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'10px', padding:'.75rem 1rem', marginBottom:'1.5rem', fontSize:'12px', color:'#8892a4', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <span>
                📋 Your plan: <strong style={{ color:'#e8eaf0', textTransform:'capitalize' }}>{activePlanName}</strong>
                {' · '}{courseLessons.filter(l => canAccessLesson(l)).length} of {courseLessons.length} lessons unlocked in this course
              </span>
              {activePlanName !== 'premium' && (
                <Link href="/pricing" style={{ color:'#3b82f6', fontSize:'12px', fontWeight:500 }}>Upgrade for more →</Link>
              )}
            </div>

            {/* Lesson groups */}
            {['beginner', 'intermediate', 'advanced'].map(cat => {
              const catLessons = byCategory(cat);
              if (catLessons.length === 0) return null;
              const catDone = catLessons.filter(l => completed.has(String(l.id))).length;
              const catLabel = cat === 'beginner' ? 'Foundations' : cat === 'intermediate' ? 'Intermediate' : 'Advanced';
              return (
                <div key={cat} className="cat-group">
                  <div className="cat-header">
                    <span className={`cat-badge cat-${cat}`}>{cat}</span>
                    <span className="cat-title">{catLabel}</span>
                    <span className="cat-count">{catDone} of {catLessons.length} completed</span>
                  </div>
                  <div className="lesson-list">
                    {catLessons.map(lesson => {
                      const isLocked = !canAccessLesson(lesson);
                      const isDone   = completed.has(String(lesson.id));
                      const lessonUrl = `${currentCourse.path}/${lesson.id}`;
                      return (
                        <div
                          key={lesson.id}
                          className={`lesson-row ${isLocked ? 'locked-row' : ''}`}
                          onClick={() => !isLocked && toggleLesson(lesson.id)}
                        >
                          <div className={`lesson-status ${isLocked ? 'status-lock' : isDone ? 'status-done' : 'status-not'}`}>
                            {isLocked ? '🔒' : isDone ? '✓' : ''}
                          </div>
                          <div className="lesson-num">{lesson.num}</div>
                          <div className="lesson-title-text">{lesson.title}</div>
                          {lesson.free && <span className="free-tag">FREE</span>}
                          <span style={{
                            fontSize:'11px', padding:'2px 8px', borderRadius:'5px', whiteSpace:'nowrap',
                            background:`${currentCourse.color}20`, color:currentCourse.color,
                            border:`1px solid ${currentCourse.color}40`,
                          }}>
                            {lesson.topic}
                          </span>
                          {!isLocked && (
                            <Link
                              href={lessonUrl}
                              onClick={e => e.stopPropagation()}
                              style={{ fontSize:'12px', color:'#3b82f6', whiteSpace:'nowrap', textDecoration:'none' }}
                            >
                              Open →
                            </Link>
                          )}
                          {isLocked && (
                            <Link
                              href="/pricing"
                              onClick={e => e.stopPropagation()}
                              style={{ fontSize:'11px', color:'#3b82f6', whiteSpace:'nowrap' }}
                            >
                              Upgrade →
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── QUIZ SCORES ── */}
{activePanel === 'quizzes' && (
  <div>
    <h1 className="panel-title">Quiz Scores</h1>
    <p className="panel-sub">Your performance across all quizzes — live from your attempts.</p>

    {/* Course tabs */}
    <div style={{ display:'flex', gap:'0.5rem', marginBottom:'1.5rem', flexWrap:'wrap' }}>
      {COURSES.map(course => (
        <button
          key={course.id}
          onClick={() => setActiveCourse(course.id)}
          style={{
            display:'flex', alignItems:'center', gap:'6px',
            padding:'8px 16px', borderRadius:'8px', fontSize:'13px',
            fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif",
            border:`1px solid ${activeCourse === course.id ? course.color : 'rgba(255,255,255,0.08)'}`,
            background: activeCourse === course.id ? `${course.color}22` : 'rgba(255,255,255,0.04)',
            color: activeCourse === course.id ? course.color : '#8892a4',
          }}
        >
          <span>{course.icon}</span>
          {course.label}
        </button>
      ))}
    </div>

    {/* Stats */}
    {(() => {
      const courseQuizRows = currentCourse.lessons.map(lesson => {
        const best = bestScoreByLesson[lesson.id];
        return {
          lessonId: lesson.id, lessonNum: lesson.num,
          lessonTitle: lesson.title,
          taken: !!best, score: best?.score ?? null,
          passed: best?.passed ?? false,
          date: best ? new Date(best.created_at).toLocaleDateString('en-PH', { dateStyle:'medium' }) : null,
          attempts: quizAttempts.filter(a => String(a.lesson_id) === String(lesson.id)).length,
          locked: !canAccessLesson(lesson),
        };
      });
      const takenRows  = courseQuizRows.filter(q => q.taken);
      const avg        = takenRows.length ? Math.round(takenRows.reduce((a,q) => a+q.score, 0) / takenRows.length) : null;
      const passed     = takenRows.filter(q => q.passed).length;

      return (
        <>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1rem', marginBottom:'1.5rem' }}>
            {[
              { label:'Quizzes Taken',  value:takenRows.length, sub:`of ${currentCourse.lessons.length} total` },
              { label:'Average Score',  value:avg !== null ? `${avg}%` : '—', sub:'across all attempts' },
              { label:'Quizzes Passed', value:passed, sub:`${takenRows.length - passed} to retry` },
            ].map(s => (
              <div key={s.label} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'1rem 1.25rem' }}>
                <div style={{ fontSize:'10px', fontWeight:600, letterSpacing:'1px', color:'#8892a4', marginBottom:'.3rem' }}>{s.label.toUpperCase()}</div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.5rem' }}>{s.value}</div>
                <div style={{ fontSize:'11px', color:'#8892a4', marginTop:'2px' }}>{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="quiz-list">
            {courseQuizRows.map(q => {
              const scoreColor = q.score >= 85 ? '#4ade80' : q.score >= 60 ? '#f59e0b' : q.score !== null ? '#f87171' : '#8892a4';
              const quizUrl    = currentCourse.quizPath(q.lessonId);
              return (
                <div key={q.lessonId} className="quiz-row" style={{ opacity:q.locked ? 0.45 : 1 }}>
                  <div className="quiz-info">
                    <div className="quiz-title">Lesson {q.lessonNum} — <span style={{ color:'#8892a4', fontWeight:400 }}>{q.lessonTitle}</span></div>
                    <div className="quiz-sub">
                      {q.locked ? '🔒 Upgrade to unlock'
                        : q.taken ? `✓ Last taken ${q.date} · ${q.attempts} attempt${q.attempts !== 1 ? 's' : ''} · ${q.passed ? '✅ Passed' : '❌ Not passed'}`
                        : 'Not yet taken'}
                    </div>
                  </div>
                  <div style={{ color:scoreColor, background:q.score !== null ? `${scoreColor}18` : 'transparent', border:q.score !== null ? `1px solid ${scoreColor}33` : 'none', borderRadius:'8px', padding:'4px 12px', fontSize:'14px', fontWeight:700, whiteSpace:'nowrap' }}>
                    {q.score !== null ? `${q.score}%` : '—'}
                  </div>
                  {!q.locked
                    ? <Link href={quizUrl} className="quiz-btn" style={{ textDecoration:'none', textAlign:'center' }}>{q.taken ? 'Retake' : 'Start'}</Link>
                    : <Link href="/pricing" className="quiz-btn" style={{ textDecoration:'none', textAlign:'center', opacity:.6 }}>Unlock</Link>
                  }
                </div>
              );
            })}
          </div>
        </>
      );
    })()}
  </div>
)}

        {/* ── RESOURCES ──────────────────────────────────────────── */}
        {activePanel === 'resources' && (
          <div>
            <h1 className="panel-title">Downloadable Resources</h1>
            <p className="panel-sub">PDFs and reference materials for your BIM journey.</p>
            <div className="resources-grid">
              {resources.map((r, i) => {
                const isLocked = planRank[activePlanName] < planRank[r.plan];
                return (
                  <div key={i} className={`resource-card ${isLocked ? 'locked-res' : ''}`}>
                    <div className={`res-icon ${r.type === 'PDF' ? 'res-pdf' : 'res-doc'}`}>{r.type === 'PDF' ? '📄' : '📋'}</div>
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

        {/* ── CERTIFICATE ────────────────────────────────────────── */}
        {activePanel === 'certificate' && (
          <div>
            <h1 className="panel-title">Your Certificate 🎓</h1>
            <p className="panel-sub">Complete all 12 BIM Foundation lessons on the Premium plan to earn your certificate.</p>

            {!isPremium ? (
              <div style={{ background:'rgba(245,158,11,0.06)', border:'1px solid rgba(245,158,11,0.2)', borderRadius:'14px', padding:'2.5rem', textAlign:'center' }}>
                <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🔒</div>
                <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.4rem', marginBottom:'.5rem' }}>Premium Plan Required</h2>
                <p style={{ color:'#8892a4', fontSize:'14px', marginBottom:'1.5rem' }}>The certificate of completion is exclusively available for Premium plan students.</p>
                <Link href="/pricing" style={{ display:'inline-block', background:'#f59e0b', color:'#000', padding:'12px 28px', borderRadius:'8px', fontSize:'14px', fontWeight:600, textDecoration:'none' }}>Upgrade to Premium →</Link>
              </div>
            ) : certificate ? (
              <div>
                <div style={{ background:'rgba(34,197,94,0.06)', border:'1px solid rgba(34,197,94,0.2)', borderRadius:'14px', padding:'2rem', marginBottom:'1.5rem' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.25rem' }}>
                    <div style={{ fontSize:'2.5rem' }}>🎓</div>
                    <div>
                      <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.3rem', margin:'0 0 .25rem' }}>Certificate Issued!</h2>
                      <p style={{ color:'#8892a4', fontSize:'13px', margin:0 }}>Your certificate has been generated and is ready to download.</p>
                    </div>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'.75rem', marginBottom:'1.25rem' }}>
                    {[
                      ['Certificate ID', certificate.certificate_id],
                      ['Issued To',      certificate.full_name],
                      ['Issue Date',     new Date(certificate.issued_at).toLocaleDateString('en-PH', { dateStyle:'long' })],
                      ['Course',         'BIM Fundamentals Program'],
                    ].map(([l, v]) => (
                      <div key={l} style={{ background:'rgba(255,255,255,0.03)', borderRadius:'8px', padding:'.75rem 1rem' }}>
                        <div style={{ fontSize:'10px', color:'#8892a4', fontWeight:600, letterSpacing:'1px', marginBottom:'4px' }}>{l.toUpperCase()}</div>
                        <div style={{ fontSize:'13px', color:'#e8eaf0', fontWeight:500, fontFamily:l === 'Certificate ID' ? "'Courier New',monospace" : 'inherit' }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display:'flex', gap:'.75rem', flexWrap:'wrap' }}>
                    <Link href={`/certificate/${certificate.certificate_id}`} target="_blank"
                      style={{ display:'inline-block', background:'#2563eb', color:'#fff', padding:'11px 24px', borderRadius:'8px', fontSize:'13px', fontWeight:600, textDecoration:'none' }}>
                      🖨 View &amp; Print Certificate
                    </Link>
                    <button
                      onClick={() => { navigator.clipboard.writeText(`${window.location.origin}/certificate/${certificate.certificate_id}`); alert('Link copied!'); }}
                      style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#e8eaf0', padding:'11px 24px', borderRadius:'8px', fontSize:'13px', fontWeight:500, cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
                      🔗 Copy Certificate Link
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', padding:'1.75rem', marginBottom:'1.5rem' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem' }}>
                    <div>
                      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'15px', marginBottom:'.2rem' }}>BIM Foundation Progress</div>
                      <div style={{ fontSize:'13px', color:'#8892a4' }}>{bimCompleted} of {TOTAL_LESSONS} lessons completed</div>
                    </div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'2rem', color:canGetCert ? '#4ade80' : '#3b82f6' }}>
                      {Math.round((bimCompleted / TOTAL_LESSONS) * 100)}%
                    </div>
                  </div>
                  <div style={{ height:'8px', background:'rgba(255,255,255,0.08)', borderRadius:'4px', overflow:'hidden', marginBottom:'1rem' }}>
                    <div style={{ height:'100%', width:`${(bimCompleted / TOTAL_LESSONS) * 100}%`, background:canGetCert ? 'linear-gradient(90deg,#4ade80,#22c55e)' : 'linear-gradient(90deg,#2563eb,#3b82f6)', borderRadius:'4px', transition:'width .5s' }} />
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'.4rem' }}>
                    {bimLessons.map(l => (
                      <div key={l.id} style={{ display:'flex', alignItems:'center', gap:'.4rem', fontSize:'12px', color:completed.has(String(l.id)) ? '#4ade80' : '#8892a4' }}>
                        <span>{completed.has(String(l.id)) ? '✅' : '⬜'}</span>
                        <span style={{ overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>Lesson {l.num}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {canGetCert ? (
                  <div style={{ textAlign:'center', background:'rgba(245,158,11,0.06)', border:'1px solid rgba(245,158,11,0.2)', borderRadius:'14px', padding:'2.5rem' }}>
                    <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🎉</div>
                    <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.4rem', marginBottom:'.5rem' }}>All Lessons Complete!</h2>
                    <p style={{ color:'#8892a4', fontSize:'14px', marginBottom:'1.5rem' }}>Congratulations! You have completed all 12 BIM lessons. Generate your certificate now.</p>
                    {certError && <div style={{ color:'#f87171', fontSize:'13px', marginBottom:'1rem' }}>⚠ {certError}</div>}
                    <button onClick={generateCertificate} disabled={certLoading}
                      style={{ background:'linear-gradient(135deg,#f59e0b,#d97706)', color:'#fff', border:'none', padding:'14px 36px', borderRadius:'8px', fontSize:'15px', fontWeight:700, cursor:certLoading ? 'not-allowed' : 'pointer', fontFamily:"'DM Sans',sans-serif", opacity:certLoading ? .7 : 1 }}>
                      {certLoading ? 'Generating...' : '🎓 Generate My Certificate'}
                    </button>
                  </div>
                ) : (
                  <div style={{ textAlign:'center', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'14px', padding:'2rem' }}>
                    <div style={{ fontSize:'2rem', marginBottom:'.75rem' }}>📚</div>
                    <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'1.1rem', marginBottom:'.4rem' }}>
                      {bimRemaining} lesson{bimRemaining !== 1 ? 's' : ''} remaining
                    </h3>
                    <p style={{ color:'#8892a4', fontSize:'13px', marginBottom:'1.25rem' }}>Complete all 12 BIM Foundation lessons to unlock your certificate.</p>
                    <button onClick={() => { setActivePanel('lessons'); setActiveCourse('bim'); }}
                      style={{ background:'#2563eb', color:'#fff', border:'none', padding:'10px 24px', borderRadius:'8px', fontSize:'13px', fontWeight:500, cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
                      Continue Learning →
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── BILLING ────────────────────────────────────────────── */}
        {activePanel === 'billing' && (
          <div>
            <h1 className="panel-title">Plan &amp; Billing</h1>
            <p className="panel-sub">Manage your subscription and payment history.</p>
            <div className="plan-card-dash">
              <div className="plan-header">
                <div className="plan-name-dash" style={{ textTransform:'capitalize' }}>{activePlanName} Plan</div>
                <div className="plan-status">{userPlan ? 'Active' : 'Free Tier'}</div>
              </div>
              <div className="plan-details">
                <div className="plan-detail-item"><div className="detail-label">Billing Cycle</div><div className="detail-val" style={{ textTransform:'capitalize' }}>{userPlan ? planBilling : '—'}</div></div>
                <div className="plan-detail-item"><div className="detail-label">Amount</div><div className="detail-val">{planAmount !== 'Free' ? `₱${planAmount}/mo` : 'Free'}</div></div>
                <div className="plan-detail-item"><div className="detail-label">Status</div><div className="detail-val">{userPlan?.status ? userPlan.status.charAt(0).toUpperCase() + userPlan.status.slice(1) : 'Free'}</div></div>
                {planExpiry && <div className="plan-detail-item"><div className="detail-label">Expires</div><div className="detail-val">{planExpiry}</div></div>}
              </div>
              {activePlanName !== 'premium' && <Link href="/pricing" className="upgrade-btn" style={{ textDecoration:'none', display:'inline-block' }}>{activePlanName === 'free' ? 'Get a Plan →' : 'Upgrade Plan →'}</Link>}
              {activePlanName === 'premium' && <div style={{ fontSize:'13px', color:'#4ade80', marginTop:'1rem' }}>✓ You have full access to all content.</div>}
            </div>
          </div>
        )}

        {/* ── PROFILE ────────────────────────────────────────────── */}
        {activePanel === 'profile' && (
          <div>
            <h1 className="panel-title">Profile Settings</h1>
            <p className="panel-sub">Update your personal information and account details.</p>
            <div className="profile-grid">
              <div className="profile-card">
                <div className="profile-card-title">Personal Information</div>
                <div className="form-group"><label>FIRST NAME</label><input defaultValue={profile?.first_name} /></div>
                <div className="form-group"><label>LAST NAME</label><input defaultValue={profile?.last_name} /></div>
                <div className="form-group"><label>PHONE</label><input defaultValue={profile?.phone} /></div>
                <div className="form-group"><label>PROFESSION</label><input defaultValue={profile?.profession} /></div>
                <button className="save-btn">Save Changes</button>
              </div>
              <div>
                <div className="profile-card" style={{ marginBottom:'1rem' }}>
                  <div className="profile-card-title">Change Password</div>
                  <div className="form-group"><label>CURRENT PASSWORD</label><input type="password" placeholder="••••••••" /></div>
                  <div className="form-group"><label>NEW PASSWORD</label><input type="password" placeholder="Min. 8 characters" /></div>
                  <div className="form-group"><label>CONFIRM PASSWORD</label><input type="password" placeholder="Repeat new password" /></div>
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