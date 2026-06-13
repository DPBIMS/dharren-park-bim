'use client';
import { useState, useEffect } from 'react';
import { useRouter }           from 'next/navigation';
import Link                    from 'next/link';
import { supabase }            from '@/lib/supabase';
import './dashboard.css';

const lessons = [
  { id:1,  num:'01', title:'What is BIM? A Complete Introduction',       cat:'beginner',     topic:'general',      free:true  },
  { id:2,  num:'02', title:'BIM vs CAD: Key Differences Explained',       cat:'beginner',     topic:'general',      free:true  },
  { id:3,  num:'03', title:'Getting Started with Autodesk Revit',          cat:'beginner',     topic:'revit',        free:true  },
  { id:4,  num:'04', title:'Understanding LOD: Level of Development',      cat:'beginner',     topic:'standards',    free:false },
  { id:5,  num:'05', title:'BIM Execution Plan (BEP) Fundamentals',        cat:'beginner',     topic:'standards',    free:false },
  { id:6,  num:'06', title:'Revit Families: System, Loadable & In-Place',  cat:'intermediate', topic:'revit',        free:false },
  { id:7,  num:'07', title:'Clash Detection with Navisworks',               cat:'intermediate', topic:'navisworks',   free:false },
  { id:8,  num:'08', title:'MEP Coordination in BIM Projects',              cat:'intermediate', topic:'coordination', free:false },
  { id:9,  num:'09', title:'IFC: Open BIM Standard Explained',              cat:'intermediate', topic:'ifc',          free:false },
  { id:10, num:'10', title:'BIM 360 for Project Collaboration',             cat:'intermediate', topic:'bim360',       free:false },
  { id:11, num:'11', title:'4D BIM: Linking Schedule to the Model',         cat:'advanced',     topic:'coordination', free:false },
  { id:12, num:'12', title:'BIM in the Philippines: Standards & Opportunities',cat:'advanced', topic:'general',      free:false },
];

const resources = [
  { title:'BIM Glossary & Terms',      type:'PDF',  pages:'12 pages', plan:'free',    locked:false },
  { title:'LOD Reference Sheet',       type:'PDF',  pages:'4 pages',  plan:'pro',     locked:false },
  { title:'BEP Template',              type:'DOCX', pages:'Editable', plan:'pro',     locked:false },
  { title:'Clash Detection Checklist', type:'PDF',  pages:'6 pages',  plan:'pro',     locked:false },
  { title:'4D BIM Workflow Guide',     type:'PDF',  pages:'18 pages', plan:'premium', locked:true  },
  { title:'PH BIM Standards Summary',  type:'PDF',  pages:'10 pages', plan:'premium', locked:true  },
];

const quizzes = [
  { title:'BIM Fundamentals Quiz',  lesson:'Lesson 01', date:'Jun 1, 2026',  score:90,  taken:true  },
  { title:'BIM vs CAD Assessment',  lesson:'Lesson 02', date:'Jun 3, 2026',  score:74,  taken:true  },
  { title:'Revit Essentials Quiz',  lesson:'Lesson 03', date:null,           score:null, taken:false },
  { title:'LOD Standards Assessment',lesson:'Lesson 04', date:null,          score:null, taken:false, locked:true },
];

const topicClass = { revit:'tag-revit', standards:'tag-standards', coordination:'tag-coordination', navisworks:'tag-navisworks', bim360:'tag-bim360', ifc:'tag-ifc', general:'tag-general' };
const topicLabel = { revit:'Revit', standards:'BIM Standards', coordination:'Coordination', navisworks:'Navisworks', bim360:'BIM 360', ifc:'IFC', general:'General BIM' };

export default function DashboardPage() {
  const router  = useRouter();
  const [activePanel, setActivePanel] = useState('overview');
  const [profile,     setProfile]     = useState(null);
  const [completed,   setCompleted]   = useState(new Set([1, 2]));
  const [loading,     setLoading]     = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/login'); return; }
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      setProfile(data);

      const { data: progress } = await supabase
        .from('lesson_progress').select('lesson_id').eq('user_id', user.id).eq('completed', true);
      if (progress) setCompleted(new Set(progress.map(p => p.lesson_id)));
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

  const byCategory = (cat) => lessons.filter(l => l.cat === cat);
  const unlockedCount = lessons.filter(l => l.free || profile?.plan !== 'free').length;
  const avgScore = quizzes.filter(q => q.taken).reduce((a,q) => a + q.score, 0) /
                   quizzes.filter(q => q.taken).length || 0;

  if (loading) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', background:'#0a0e1a', color:'#8892a4' }}>
      Loading your dashboard...
    </div>
  );

  const firstName = profile?.first_name || 'Student';
  const initials  = (firstName[0] + (profile?.last_name?.[0] || '')).toUpperCase();

  return (
    <div className="dash-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-text">Dharren Park <span>BIM</span></div>
          <div className="logo-sub">Student Portal</div>
        </div>

        <nav className="nav-section">
          <div className="nav-label">Main</div>
          {[
            { id:'overview',   icon:'🏠', label:'Overview'         },
            { id:'lessons',    icon:'📚', label:'My Lessons'       },
            { id:'quizzes',    icon:'📝', label:'Quiz Scores'      },
            { id:'resources',  icon:'📁', label:'Resources'        },
          ].map(item => (
            <div
              key={item.id}
              className={`nav-item ${activePanel === item.id ? 'active' : ''}`}
              onClick={() => setActivePanel(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>

        <nav className="nav-section">
          <div className="nav-label">Account</div>
          {[
            { id:'billing',  icon:'💳', label:'Plan & Billing'    },
            { id:'profile',  icon:'⚙️', label:'Profile Settings'  },
          ].map(item => (
            <div
              key={item.id}
              className={`nav-item ${activePanel === item.id ? 'active' : ''}`}
              onClick={() => setActivePanel(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-chip">
            <div className="avatar">{initials}</div>
            <div>
              <div className="user-name">{firstName} {profile?.last_name}</div>
              <div className="user-plan">{profile?.plan || 'Free'} Plan</div>
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
            <div className="announcement">
              <span className="ann-icon">📢</span>
              <div>
                <div className="ann-title">New Lesson Available</div>
                <div className="ann-text">BIM in the Philippines has just been published. Check it out in My Lessons!</div>
              </div>
            </div>
            <div className="stats-row">
              <div className="stat-card highlight">
                <div className="stat-label">Lessons Completed</div>
                <div className="stat-value">{completed.size}</div>
                <div className="stat-sub">of {unlockedCount} unlocked</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Current Plan</div>
                <div className="stat-value" style={{fontSize:'1.1rem',marginTop:'4px'}}>{profile?.plan || 'Free'}</div>
                <div className="stat-sub">Active</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Quiz Average</div>
                <div className="stat-value">{avgScore ? `${Math.round(avgScore)}%` : '—'}</div>
                <div className="stat-sub">{quizzes.filter(q=>q.taken).length} quizzes taken</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Resources</div>
                <div className="stat-value">{resources.filter(r=>!r.locked).length}</div>
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
            {['beginner','intermediate','advanced'].map(cat => (
              <div key={cat} className="cat-group">
                <div className="cat-header">
                  <span className={`cat-badge cat-${cat}`}>{cat}</span>
                  <span className="cat-title">
                    {cat==='beginner'?'Foundations':cat==='intermediate'?'Deeper Skills':'Professional Level'}
                  </span>
                  <span className="cat-count">
                    {byCategory(cat).filter(l => completed.has(l.id)).length} of {byCategory(cat).length} completed
                  </span>
                </div>
                <div className="lesson-list">
                  {byCategory(cat).map(lesson => {
                    const isLocked  = cat === 'advanced' && profile?.plan === 'free';
                    const isDone    = completed.has(lesson.id);
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
                        <span className={`lesson-tag ${topicClass[lesson.topic]}`}>{topicLabel[lesson.topic]}</span>
                        {!isLocked && <div className="lesson-arrow">→</div>}
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
            <p className="panel-sub">Track your performance across all BIM quizzes.</p>
            <div className="quiz-list">
              {quizzes.map((q, i) => (
                <div key={i} className="quiz-row" style={q.locked ? {opacity:.5} : {}}>
                  <div className="quiz-info">
                    <div className="quiz-title">{q.title}</div>
                    <div className="quiz-sub">{q.lesson} {q.date ? `· Taken ${q.date}` : q.locked ? '· Complete lesson first' : '· Not yet taken'}</div>
                  </div>
                  <div className={`quiz-score ${q.score >= 85 ? 'score-pass' : q.score ? 'score-avg' : 'score-na'}`}>
                    {q.score ? `${q.score}%` : '—'}
                  </div>
                  <button className="quiz-btn" disabled={q.locked}>
                    {q.locked ? 'Locked' : q.taken ? 'Retake' : 'Start'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESOURCES */}
        {activePanel === 'resources' && (
          <div>
            <h1 className="panel-title">Downloadable Resources</h1>
            <p className="panel-sub">PDFs and reference materials for your BIM journey.</p>
            <div className="resources-grid">
              {resources.map((r, i) => (
                <div key={i} className={`resource-card ${r.locked ? 'locked-res' : ''}`}>
                  <div className={`res-icon ${r.type === 'PDF' ? 'res-pdf' : 'res-doc'}`}>
                    {r.type === 'PDF' ? '📄' : '📋'}
                  </div>
                  <div style={{flex:1}}>
                    <div className="res-title">{r.title}</div>
                    <div className="res-sub">{r.type} · {r.pages}</div>
                    <span className={`res-badge ${r.plan === 'free' ? 'res-free' : r.plan === 'premium' ? 'res-premium' : 'res-pro'}`}>
                      {r.plan.charAt(0).toUpperCase() + r.plan.slice(1)}
                    </span>
                  </div>
                  <div className="res-lock">{r.locked ? '🔒' : '↓'}</div>
                </div>
              ))}
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
                <div className="plan-name-dash">{profile?.plan || 'Free'} Plan</div>
                <div className="plan-status">Active</div>
              </div>
              <div className="plan-details">
                <div className="plan-detail-item"><div className="detail-label">Billing Cycle</div><div className="detail-val">Monthly</div></div>
                <div className="plan-detail-item"><div className="detail-label">Amount</div><div className="detail-val">{profile?.plan==='pro'?'₱599':profile?.plan==='premium'?'₱999':'Free'}/mo</div></div>
                <div className="plan-detail-item"><div className="detail-label">Status</div><div className="detail-val">Active</div></div>
              </div>
              <Link href="/pricing" className="upgrade-btn" style={{textDecoration:'none',display:'inline-block'}}>
                Upgrade Plan →
              </Link>
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
                <div className="profile-card" style={{marginBottom:'1rem'}}>
                  <div className="profile-card-title">Change Password</div>
                  <div className="form-group"><label>CURRENT PASSWORD</label><input type="password" placeholder="••••••••"/></div>
                  <div className="form-group"><label>NEW PASSWORD</label><input type="password" placeholder="Min. 8 characters"/></div>
                  <div className="form-group"><label>CONFIRM PASSWORD</label><input type="password" placeholder="Repeat new password"/></div>
                  <button className="save-btn">Update Password</button>
                </div>
                <div className="profile-card">
                  <div className="profile-card-title" style={{color:'#f87171'}}>Danger Zone</div>
                  <p style={{fontSize:'12px',color:'#8892a4',marginBottom:'1rem',lineHeight:'1.65'}}>Deleting your account is permanent and cannot be undone.</p>
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