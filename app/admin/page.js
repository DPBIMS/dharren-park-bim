'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com'];

const planColor = {
  free:    { bg:'rgba(107,114,128,0.15)', c:'#9ca3af' },
  basic:   { bg:'rgba(34,197,94,0.15)',   c:'#4ade80' },
  pro:     { bg:'rgba(37,99,235,0.15)',   c:'#60a5fa' },
  premium: { bg:'rgba(245,158,11,0.15)',  c:'#f59e0b' },
};
const statusColor = {
  pending:   { bg:'rgba(245,158,11,0.12)', c:'#fbbf24' },
  confirmed: { bg:'rgba(34,197,94,0.12)',  c:'#4ade80' },
  rejected:  { bg:'rgba(239,68,68,0.12)',  c:'#f87171' },
};
const methodIcon = { gcash:'💙', maya:'💚', bank:'🏦', paypal:'🔵' };

// Simple bar chart component
function BarChart({ data, valueKey, labelKey, color = '#2563eb', maxValue, formatValue }) {
  const max = maxValue || Math.max(...data.map(d => d[valueKey] || 0), 1);
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
      {data.map((item, i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px' }}>
          <div style={{ fontSize:'11px', color:'#8892a4', width:'120px', flexShrink:0, textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap' }}>
            {item[labelKey]}
          </div>
          <div style={{ flex:1, height:'20px', background:'rgba(255,255,255,0.04)', borderRadius:'4px', overflow:'hidden' }}>
            <div style={{
              height:'100%',
              width:`${Math.round(((item[valueKey]||0)/max)*100)}%`,
              background: color,
              borderRadius:'4px',
              transition:'width .5s',
              minWidth: item[valueKey] > 0 ? '4px' : '0',
            }}/>
          </div>
          <div style={{ fontSize:'12px', fontWeight:600, color:'#e8eaf0', width:'60px', textAlign:'right', flexShrink:0 }}>
            {formatValue ? formatValue(item[valueKey]) : item[valueKey]}
          </div>
        </div>
      ))}
    </div>
  );
}

// Donut chart using SVG
function DonutChart({ data }) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  let offset  = 0;
  const r     = 50;
  const circ  = 2 * Math.PI * r;
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'1.5rem' }}>
      <svg width="120" height="120" viewBox="0 0 120 120">
        {data.map((d, i) => {
          const pct  = d.value / total;
          const dash = pct * circ;
          const gap  = circ - dash;
          const rot  = offset * 360 - 90;
          offset    += pct;
          return (
            <circle key={i} cx="60" cy="60" r={r}
              fill="none" stroke={d.color} strokeWidth="18"
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={0}
              transform={`rotate(${rot} 60 60)`}
            />
          );
        })}
        <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fill="#e8eaf0" fontSize="14" fontWeight="bold">
          {total}
        </text>
        <text x="60" y="74" textAnchor="middle" fill="#8892a4" fontSize="9">total</text>
      </svg>
      <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
        {data.map((d, i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'12px' }}>
            <div style={{ width:'10px', height:'10px', borderRadius:'2px', background:d.color, flexShrink:0 }}/>
            <span style={{ color:'#8892a4', textTransform:'capitalize' }}>{d.label}</span>
            <span style={{ color:'#e8eaf0', fontWeight:600, marginLeft:'auto', paddingLeft:'8px' }}>{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const router = useRouter();
  const [loading,          setLoading]          = useState(true);
  const [authorized,       setAuthorized]       = useState(false);
  const [adminEmail,       setAdminEmail]       = useState('');
  const [activeTab,        setActiveTab]        = useState('payments');
  const [payments,         setPayments]         = useState([]);
  const [students,         setStudents]         = useState([]);
  const [analytics,        setAnalytics]        = useState(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [studentsLoading,  setStudentsLoading]  = useState(false);
  const [filter,           setFilter]           = useState('pending');
  const [studentFilter,    setStudentFilter]    = useState('all');
  const [studentSearch,    setStudentSearch]    = useState('');
  const [expandedStudent,  setExpandedStudent]  = useState(null);
  const [stats,            setStats]            = useState({ pending:0, confirmed:0, rejected:0, total:0 });
  const [actionLoading,    setActionLoading]    = useState(null);
  const [notes,            setNotes]            = useState({});
  const [toast,            setToast]            = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchPayments = useCallback(async () => {
    const { data } = await supabase.from('payment_submissions').select('*').order('submitted_at', { ascending:false });
    if (data) {
      setPayments(data);
      setStats({ pending:data.filter(p=>p.status==='pending').length, confirmed:data.filter(p=>p.status==='confirmed').length, rejected:data.filter(p=>p.status==='rejected').length, total:data.length });
    }
  }, []);

  const fetchStudents = useCallback(async (email) => {
    setStudentsLoading(true);
    try {
      const res  = await fetch('/api/admin-students', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ adminEmail:email }) });
      const data = await res.json();
      if (data.students) setStudents(data.students);
    } catch { showToast('Failed to load students', 'error'); }
    setStudentsLoading(false);
  }, []);

  const fetchAnalytics = useCallback(async (email) => {
    setAnalyticsLoading(true);
    try {
      const res  = await fetch('/api/admin-analytics', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ adminEmail:email }) });
      const data = await res.json();
      if (data.revenue) setAnalytics(data);
      else showToast(data.error || 'Failed to load analytics', 'error');
    } catch { showToast('Failed to load analytics', 'error'); }
    setAnalyticsLoading(false);
  }, []);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data?.user) { router.push('/login'); return; }
      if (!ADMIN_EMAILS.includes(data.user.email)) { router.push('/'); return; }
      setAdminEmail(data.user.email);
      setAuthorized(true);
      setLoading(false);
      fetchPayments();
    });
  }, [router, fetchPayments]);

  const handleAction = async (paymentId, action) => {
    setActionLoading(paymentId + action);
    try {
      const res  = await fetch('/api/confirm-payment', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ paymentId, action, adminEmail, notes:notes[paymentId]||'' }) });
      const data = await res.json();
      if (data.error) showToast(data.error, 'error');
      else { showToast(data.message); fetchPayments(); }
    } catch { showToast('Something went wrong.', 'error'); }
    setActionLoading(null);
  };

  const filteredPayments = payments.filter(p => filter === 'all' || p.status === filter);
  const filteredStudents = students.filter(s => {
    const matchPlan   = studentFilter === 'all' || s.plan === studentFilter;
    const q           = studentSearch.toLowerCase();
    const matchSearch = !q || s.email.toLowerCase().includes(q) || `${s.firstName} ${s.lastName}`.toLowerCase().includes(q);
    return matchPlan && matchSearch;
  });

  if (loading) return <main style={{ background:'#0a0e1a', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', color:'#8892a4', fontFamily:"'DM Sans',sans-serif" }}>Loading admin panel...</main>;
  if (!authorized) return null;

  const tabs = [
    { id:'payments',  label:'💳 Payments', badge:stats.total },
    { id:'students',  label:'👥 Students', badge:students.length },
    { id:'analytics', label:'📊 Analytics', badge:null },
  ];

  return (
    <main style={{ background:'#0a0e1a', minHeight:'100vh', color:'#e8eaf0', fontFamily:"'DM Sans',sans-serif", paddingTop:'80px' }}>

      {toast && (
        <div style={{ position:'fixed', top:'90px', right:'24px', zIndex:200, background:toast.type==='error'?'rgba(239,68,68,0.15)':'rgba(34,197,94,0.15)', border:`1px solid ${toast.type==='error'?'rgba(239,68,68,0.3)':'rgba(34,197,94,0.3)'}`, borderRadius:'10px', padding:'12px 18px', fontSize:'13px', color:toast.type==='error'?'#f87171':'#4ade80', fontWeight:500 }}>
          {toast.type==='error'?'⚠ ':'✓ '}{toast.msg}
        </div>
      )}

      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'2rem 1.5rem 4rem' }}>

        {/* Header */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'2rem', flexWrap:'wrap', gap:'1rem' }}>
          <div>
            <div style={{ fontSize:'11px', fontWeight:500, letterSpacing:'2px', textTransform:'uppercase', color:'#3b82f6', marginBottom:'.4rem' }}>Admin Panel</div>
            <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.6rem', letterSpacing:'-0.3px' }}>
              {activeTab==='payments'?'Payment Management':activeTab==='students'?'Student Management':'Analytics Dashboard'}
            </h1>
            <p style={{ fontSize:'13px', color:'#8892a4', marginTop:'.25rem' }}>Logged in as <span style={{ color:'#3b82f6' }}>{adminEmail}</span></p>
          </div>
          <button onClick={() => activeTab==='payments'?fetchPayments():activeTab==='students'?fetchStudents(adminEmail):fetchAnalytics(adminEmail)}
            style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'8px', padding:'8px 16px', color:'#8892a4', fontSize:'13px', cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
            ↻ Refresh
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display:'flex', gap:'.5rem', marginBottom:'2rem' }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => {
              setActiveTab(tab.id);
              if (tab.id==='students'  && students.length===0)  fetchStudents(adminEmail);
              if (tab.id==='analytics' && !analytics)           fetchAnalytics(adminEmail);
            }} style={{
              padding:'8px 20px', borderRadius:'8px', fontSize:'13px', fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif",
              background: activeTab===tab.id?'#2563eb':'rgba(255,255,255,0.04)',
              border:`1px solid ${activeTab===tab.id?'#2563eb':'rgba(255,255,255,0.08)'}`,
              color: activeTab===tab.id?'#fff':'#8892a4',
            }}>
              {tab.label}
              {tab.badge > 0 && <span style={{ background:'rgba(255,255,255,0.15)', borderRadius:'100px', padding:'1px 7px', fontSize:'11px', marginLeft:'4px' }}>{tab.badge}</span>}
            </button>
          ))}
        </div>

        {/* ── PAYMENTS TAB ── */}
        {activeTab === 'payments' && (
          <>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1rem', marginBottom:'2rem' }}>
              {[{label:'TOTAL SUBMISSIONS',value:stats.total,color:'#e8eaf0'},{label:'PENDING',value:stats.pending,color:'#fbbf24'},{label:'CONFIRMED',value:stats.confirmed,color:'#4ade80'},{label:'REJECTED',value:stats.rejected,color:'#f87171'}].map(s=>(
                <div key={s.label} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'1.1rem 1.25rem' }}>
                  <div style={{ fontSize:'10px', fontWeight:600, letterSpacing:'1px', color:'#8892a4', marginBottom:'.4rem' }}>{s.label}</div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.8rem', color:s.color }}>{s.value}</div>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', gap:'.5rem', marginBottom:'1.5rem' }}>
              {['all','pending','confirmed','rejected'].map(f=>(
                <button key={f} onClick={()=>setFilter(f)} style={{ padding:'6px 16px', borderRadius:'100px', fontSize:'13px', fontWeight:500, cursor:'pointer', fontFamily:"'DM Sans',sans-serif", background:filter===f?'#2563eb':'rgba(255,255,255,0.04)', border:`1px solid ${filter===f?'#2563eb':'rgba(255,255,255,0.08)'}`, color:filter===f?'#fff':'#8892a4' }}>
                  {f.charAt(0).toUpperCase()+f.slice(1)} {f!=='all'&&`(${stats[f]??0})`}
                </button>
              ))}
            </div>
            {filteredPayments.length===0?(
              <div style={{ textAlign:'center', padding:'4rem', color:'#8892a4' }}><div style={{ fontSize:'2rem', marginBottom:'.75rem' }}>📭</div><div>No {filter} payments found.</div></div>
            ):(
              <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
                {filteredPayments.map(p=>{
                  const pc=planColor[p.plan]||planColor.free;
                  const sc=statusColor[p.status]||statusColor.pending;
                  const isLoading=actionLoading===p.id+'confirm'||actionLoading===p.id+'reject';
                  return(
                    <div key={p.id} style={{ background:'rgba(255,255,255,0.04)', border:`1px solid ${p.status==='pending'?'rgba(245,158,11,0.2)':'rgba(255,255,255,0.08)'}`, borderRadius:'14px', padding:'1.5rem' }}>
                      <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:'1rem', alignItems:'start' }}>
                        <div>
                          <div style={{ display:'flex', alignItems:'center', gap:'.6rem', marginBottom:'.75rem', flexWrap:'wrap' }}>
                            <span style={{ fontSize:'11px', fontWeight:600, padding:'3px 10px', borderRadius:'5px', background:pc.bg, color:pc.c, textTransform:'uppercase' }}>{p.plan}</span>
                            <span style={{ fontSize:'11px', fontWeight:500, padding:'3px 10px', borderRadius:'5px', background:'rgba(255,255,255,0.06)', color:'#8892a4' }}>{p.billing}</span>
                            <span style={{ fontSize:'11px', fontWeight:600, padding:'3px 10px', borderRadius:'5px', background:sc.bg, color:sc.c, textTransform:'uppercase' }}>{p.status}</span>
                          </div>
                          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'.5rem 2rem', fontSize:'13px', marginBottom:'.75rem' }}>
                            {[['Student',p.full_name||'N/A'],['Email',p.email],['Amount',`₱${p.amount?.toLocaleString()}`],['Method',`${methodIcon[p.payment_method]||'💳'} ${p.payment_method?.toUpperCase()}`],['Reference',p.reference_number],['Submitted',new Date(p.submitted_at).toLocaleString('en-PH',{dateStyle:'medium',timeStyle:'short'})]].map(([label,val])=>(
                              <div key={label}>
                                <div style={{ fontSize:'10px', color:'#8892a4', fontWeight:600, letterSpacing:'.5px', marginBottom:'2px' }}>{label.toUpperCase()}</div>
                                <div style={{ color:'#e8eaf0', fontWeight:label==='Reference'?600:400, fontFamily:label==='Reference'?"'Courier New',monospace":'inherit' }}>{val}</div>
                              </div>
                            ))}
                          </div>
                          {p.status==='confirmed'&&p.confirmed_at&&<div style={{ fontSize:'12px', color:'#4ade80' }}>✓ Confirmed by {p.confirmed_by} on {new Date(p.confirmed_at).toLocaleString('en-PH',{dateStyle:'medium',timeStyle:'short'})}</div>}
                          {p.status==='rejected'&&p.notes&&<div style={{ fontSize:'12px', color:'#f87171' }}>✗ Rejected: {p.notes}</div>}
                        </div>
                        {p.status==='pending'&&(
                          <div style={{ display:'flex', flexDirection:'column', gap:'.5rem', minWidth:'180px' }}>
                            <textarea placeholder="Admin notes (optional)" value={notes[p.id]||''} onChange={e=>setNotes(n=>({...n,[p.id]:e.target.value}))} rows={2} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'8px', padding:'8px 10px', color:'#e8eaf0', fontSize:'12px', fontFamily:"'DM Sans',sans-serif", outline:'none', resize:'none', width:'100%' }}/>
                            <button onClick={()=>handleAction(p.id,'confirm')} disabled={isLoading} style={{ background:'rgba(34,197,94,0.12)', border:'1px solid rgba(34,197,94,0.3)', borderRadius:'8px', padding:'9px 16px', color:'#4ade80', fontSize:'13px', fontWeight:600, cursor:isLoading?'not-allowed':'pointer', fontFamily:"'DM Sans',sans-serif" }}>{actionLoading===p.id+'confirm'?'Confirming...':'✓ Confirm Payment'}</button>
                            <button onClick={()=>handleAction(p.id,'reject')} disabled={isLoading} style={{ background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.2)', borderRadius:'8px', padding:'9px 16px', color:'#f87171', fontSize:'13px', fontWeight:500, cursor:isLoading?'not-allowed':'pointer', fontFamily:"'DM Sans',sans-serif" }}>{actionLoading===p.id+'reject'?'Rejecting...':'✗ Reject'}</button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* ── STUDENTS TAB ── */}
        {activeTab === 'students' && (
          <>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1rem', marginBottom:'2rem' }}>
              {[{label:'TOTAL STUDENTS',value:students.length,color:'#e8eaf0'},{label:'FREE',value:students.filter(s=>s.plan==='free').length,color:'#9ca3af'},{label:'PRO',value:students.filter(s=>s.plan==='pro').length,color:'#60a5fa'},{label:'PREMIUM',value:students.filter(s=>s.plan==='premium').length,color:'#f59e0b'}].map(s=>(
                <div key={s.label} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'1.1rem 1.25rem' }}>
                  <div style={{ fontSize:'10px', fontWeight:600, letterSpacing:'1px', color:'#8892a4', marginBottom:'.4rem' }}>{s.label}</div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.8rem', color:s.color }}>{studentsLoading?'...':s.value}</div>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', gap:'.75rem', marginBottom:'1.5rem', flexWrap:'wrap', alignItems:'center' }}>
              <input placeholder="🔍 Search by name or email..." value={studentSearch} onChange={e=>setStudentSearch(e.target.value)}
                style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'8px', padding:'8px 14px', color:'#e8eaf0', fontSize:'13px', fontFamily:"'DM Sans',sans-serif", outline:'none', width:'260px' }}/>
              <div style={{ display:'flex', gap:'.4rem' }}>
                {['all','free','pro','premium'].map(f=>(
                  <button key={f} onClick={()=>setStudentFilter(f)} style={{ padding:'6px 14px', borderRadius:'100px', fontSize:'12px', fontWeight:500, cursor:'pointer', fontFamily:"'DM Sans',sans-serif", textTransform:'capitalize', background:studentFilter===f?'#2563eb':'rgba(255,255,255,0.04)', border:`1px solid ${studentFilter===f?'#2563eb':'rgba(255,255,255,0.08)'}`, color:studentFilter===f?'#fff':'#8892a4' }}>{f}</button>
                ))}
              </div>
            </div>
            {studentsLoading?(
              <div style={{ textAlign:'center', padding:'4rem', color:'#8892a4' }}>Loading students...</div>
            ):filteredStudents.length===0?(
              <div style={{ textAlign:'center', padding:'4rem', color:'#8892a4' }}><div style={{ fontSize:'2rem', marginBottom:'.75rem' }}>👥</div><div>No students found.</div></div>
            ):(
              <div style={{ display:'flex', flexDirection:'column', gap:'.75rem' }}>
                {filteredStudents.map(s=>{
                  const pc=planColor[s.plan]||planColor.free;
                  const isExpanded=expandedStudent===s.id;
                  const fullName=`${s.firstName} ${s.lastName}`.trim()||'No name';
                  const initials=((s.firstName?.[0]||'')+(s.lastName?.[0]||'')).toUpperCase()||s.email[0].toUpperCase();
                  return(
                    <div key={s.id} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', overflow:'hidden' }}>
                      <div style={{ padding:'1.1rem 1.5rem', display:'grid', gridTemplateColumns:'auto 1fr auto auto auto auto', gap:'1rem', alignItems:'center', cursor:'pointer' }} onClick={()=>setExpandedStudent(isExpanded?null:s.id)}>
                        <div style={{ width:'38px', height:'38px', borderRadius:'50%', background:'rgba(37,99,235,0.2)', border:'1px solid rgba(37,99,235,0.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'13px', fontWeight:700, color:'#60a5fa', flexShrink:0 }}>{initials}</div>
                        <div><div style={{ fontSize:'14px', fontWeight:600, color:'#e8eaf0' }}>{fullName}</div><div style={{ fontSize:'12px', color:'#8892a4' }}>{s.email}</div></div>
                        <span style={{ fontSize:'11px', fontWeight:600, padding:'3px 10px', borderRadius:'5px', background:pc.bg, color:pc.c, textTransform:'uppercase', whiteSpace:'nowrap' }}>{s.plan}</span>
                        <div style={{ textAlign:'center', minWidth:'60px' }}><div style={{ fontSize:'13px', fontWeight:700, color:'#e8eaf0' }}>{s.lessonsCompleted}</div><div style={{ fontSize:'10px', color:'#8892a4' }}>lessons</div></div>
                        <div style={{ textAlign:'center', minWidth:'60px' }}><div style={{ fontSize:'13px', fontWeight:700, color:s.avgScore>=85?'#4ade80':s.avgScore?'#f59e0b':'#8892a4' }}>{s.avgScore!==null?`${s.avgScore}%`:'—'}</div><div style={{ fontSize:'10px', color:'#8892a4' }}>avg score</div></div>
                        <div style={{ fontSize:'12px', color:'#8892a4', transition:'transform .2s', transform:isExpanded?'rotate(180deg)':'none' }}>▼</div>
                      </div>
                      {isExpanded&&(
                        <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)', padding:'1.25rem 1.5rem', background:'rgba(0,0,0,0.15)' }}>
                          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.25rem' }}>
                            <div>
                              <div style={{ fontSize:'11px', fontWeight:600, letterSpacing:'1px', color:'#6b7280', textTransform:'uppercase', marginBottom:'.75rem' }}>Profile</div>
                              {[['Phone',s.phone||'—'],['Country',s.country||'—'],['Profession',s.profession||'—'],['Joined',new Date(s.joinedAt).toLocaleDateString('en-PH',{dateStyle:'medium'})],['Last Login',s.lastLogin?new Date(s.lastLogin).toLocaleDateString('en-PH',{dateStyle:'medium'}):'—']].map(([label,val])=>(
                                <div key={label} style={{ display:'flex', justifyContent:'space-between', fontSize:'12px', padding:'4px 0', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
                                  <span style={{ color:'#8892a4' }}>{label}</span><span style={{ color:'#e8eaf0', fontWeight:500 }}>{val}</span>
                                </div>
                              ))}
                            </div>
                            <div>
                              <div style={{ fontSize:'11px', fontWeight:600, letterSpacing:'1px', color:'#6b7280', textTransform:'uppercase', marginBottom:'.75rem' }}>Subscription</div>
                              {[['Plan',s.plan.charAt(0).toUpperCase()+s.plan.slice(1)],['Status',s.planStatus||'Free'],['Billing',s.planBilling||'—'],['Expires',s.planExpiry?new Date(s.planExpiry).toLocaleDateString('en-PH',{dateStyle:'medium'}):'—']].map(([label,val])=>(
                                <div key={label} style={{ display:'flex', justifyContent:'space-between', fontSize:'12px', padding:'4px 0', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
                                  <span style={{ color:'#8892a4' }}>{label}</span><span style={{ color:'#e8eaf0', fontWeight:500 }}>{val}</span>
                                </div>
                              ))}
                              <div style={{ marginTop:'.75rem', display:'flex', gap:'1rem' }}>
                                {[{v:s.lessonsCompleted,l:'lessons',c:'#60a5fa'},{v:s.quizzesPassed,l:'passed',c:'#4ade80'},{v:s.avgScore!==null?`${s.avgScore}%`:'—',l:'avg score',c:s.avgScore>=85?'#4ade80':'#f59e0b'}].map(({v,l,c})=>(
                                  <div key={l} style={{ textAlign:'center' }}><div style={{ fontSize:'18px', fontWeight:800, color:c }}>{v}</div><div style={{ fontSize:'10px', color:'#8892a4' }}>{l}</div></div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <div style={{ fontSize:'11px', fontWeight:600, letterSpacing:'1px', color:'#6b7280', textTransform:'uppercase', marginBottom:'.75rem' }}>Payment History</div>
                              {s.payments.length===0?<div style={{ fontSize:'12px', color:'#8892a4' }}>No payments yet.</div>:s.payments.slice(0,4).map((pay,i)=>{
                                const sc=statusColor[pay.status]||statusColor.pending;
                                return(
                                  <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'12px', padding:'5px 0', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
                                    <div><div style={{ color:'#e8eaf0', fontWeight:500, textTransform:'capitalize' }}>{pay.plan} — ₱{pay.amount?.toLocaleString()}</div><div style={{ color:'#8892a4', fontSize:'11px' }}>{new Date(pay.submitted_at).toLocaleDateString('en-PH',{dateStyle:'medium'})}</div></div>
                                    <span style={{ fontSize:'10px', fontWeight:600, padding:'2px 8px', borderRadius:'4px', background:sc.bg, color:sc.c, textTransform:'uppercase' }}>{pay.status}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* ── ANALYTICS TAB ── */}
        {activeTab === 'analytics' && (
          analyticsLoading ? (
            <div style={{ textAlign:'center', padding:'4rem', color:'#8892a4' }}>
              <div style={{ fontSize:'2rem', marginBottom:'1rem' }}>📊</div>
              Loading analytics...
            </div>
          ) : !analytics ? (
            <div style={{ textAlign:'center', padding:'4rem', color:'#8892a4' }}>
              <button onClick={()=>fetchAnalytics(adminEmail)} style={{ background:'#2563eb', color:'#fff', border:'none', padding:'12px 28px', borderRadius:'8px', fontSize:'14px', cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>Load Analytics</button>
            </div>
          ) : (
            <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>

              {/* Top KPI cards */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1rem' }}>
                {[
                  { label:'TOTAL REVENUE',    value:`₱${analytics.revenue.total.toLocaleString()}`,  sub:`₱${analytics.revenue.pending.toLocaleString()} pending`, color:'#4ade80', icon:'💰' },
                  { label:'TOTAL STUDENTS',   value:analytics.students.total,                         sub:`${analytics.students.byPlan.pro||0} pro · ${analytics.students.byPlan.premium||0} premium`, color:'#60a5fa', icon:'👥' },
                  { label:'QUIZ PASS RATE',   value:`${analytics.quizzes.passRate}%`,                 sub:`${analytics.quizzes.totalPassed} passed · ${analytics.quizzes.totalFailed} failed`, color:'#f59e0b', icon:'📝' },
                  { label:'CERTIFICATES',     value:analytics.certificates,                           sub:'issued to students', color:'#a78bfa', icon:'🎓' },
                ].map(k=>(
                  <div key={k.label} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', padding:'1.25rem' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'.5rem' }}>
                      <div style={{ fontSize:'10px', fontWeight:600, letterSpacing:'1px', color:'#8892a4' }}>{k.label}</div>
                      <span style={{ fontSize:'18px' }}>{k.icon}</span>
                    </div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'2rem', color:k.color, marginBottom:'.25rem' }}>{k.value}</div>
                    <div style={{ fontSize:'11px', color:'#8892a4' }}>{k.sub}</div>
                  </div>
                ))}
              </div>

              {/* Revenue + Plan distribution */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem' }}>

                {/* Revenue by plan */}
                <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', padding:'1.5rem' }}>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'14px', marginBottom:'1.25rem', paddingBottom:'.75rem', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>💰 Revenue by Plan</div>
                  <BarChart
                    data={Object.entries(analytics.revenue.byPlan).map(([plan,amount])=>({ label:plan.charAt(0).toUpperCase()+plan.slice(1), value:amount }))}
                    labelKey="label" valueKey="value"
                    color="linear-gradient(90deg,#2563eb,#3b82f6)"
                    formatValue={v=>`₱${v?.toLocaleString()}`}
                  />
                  <div style={{ marginTop:'1rem', paddingTop:'1rem', borderTop:'1px solid rgba(255,255,255,0.06)', display:'flex', justifyContent:'space-between', fontSize:'13px' }}>
                    <span style={{ color:'#8892a4' }}>Total Confirmed</span>
                    <span style={{ color:'#4ade80', fontWeight:700 }}>₱{analytics.revenue.total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Student plan distribution */}
                <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', padding:'1.5rem' }}>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'14px', marginBottom:'1.25rem', paddingBottom:'.75rem', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>👥 Students by Plan</div>
                  <DonutChart data={[
                    { label:'Free',    value:analytics.students.byPlan.free||0,    color:'#6b7280' },
                    { label:'Basic',   value:analytics.students.byPlan.basic||0,   color:'#4ade80' },
                    { label:'Pro',     value:analytics.students.byPlan.pro||0,     color:'#3b82f6' },
                    { label:'Premium', value:analytics.students.byPlan.premium||0, color:'#f59e0b' },
                  ].filter(d=>d.value>0)} />
                </div>
              </div>

              {/* Quiz performance + Lesson completions */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem' }}>

                {/* Quiz scores by lesson */}
                <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', padding:'1.5rem' }}>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'14px', marginBottom:'.5rem', paddingBottom:'.75rem', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>📝 Avg Quiz Score by Lesson</div>
                  <div style={{ fontSize:'11px', color:'#8892a4', marginBottom:'1rem' }}>Overall avg: <strong style={{ color:'#f59e0b' }}>{analytics.quizzes.avgScore}%</strong> · {analytics.quizzes.totalAttempts} total attempts</div>
                  <BarChart
                    data={analytics.quizzes.byLesson}
                    labelKey="title" valueKey="avgScore"
                    color="#f59e0b"
                    formatValue={v=>`${v}%`}
                    maxValue={100}
                  />
                </div>

                {/* Lesson completion rates */}
                <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', padding:'1.5rem' }}>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'14px', marginBottom:'.5rem', paddingBottom:'.75rem', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>📚 Lesson Completions</div>
                  <div style={{ fontSize:'11px', color:'#8892a4', marginBottom:'1rem' }}>Total completions: <strong style={{ color:'#60a5fa' }}>{analytics.lessons.totalCompleted}</strong></div>
                  <BarChart
                    data={analytics.lessons.completions}
                    labelKey="title" valueKey="count"
                    color="#2563eb"
                    formatValue={v=>`${v} student${v!==1?'s':''}`}
                  />
                </div>
              </div>

              {/* Payment submission overview */}
              <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', padding:'1.5rem' }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'14px', marginBottom:'1.25rem', paddingBottom:'.75rem', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>💳 Payment Submission Overview</div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1rem' }}>
                  {[
                    { label:'Total Submissions', value:analytics.payments.total,     color:'#e8eaf0' },
                    { label:'Confirmed',          value:analytics.payments.confirmed, color:'#4ade80' },
                    { label:'Pending Review',     value:analytics.payments.pending,   color:'#fbbf24' },
                    { label:'Rejected',           value:analytics.payments.rejected,  color:'#f87171' },
                  ].map(s=>(
                    <div key={s.label} style={{ background:'rgba(255,255,255,0.03)', borderRadius:'10px', padding:'1rem', textAlign:'center' }}>
                      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.75rem', color:s.color }}>{s.value}</div>
                      <div style={{ fontSize:'11px', color:'#8892a4', marginTop:'4px' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop:'1rem', paddingTop:'1rem', borderTop:'1px solid rgba(255,255,255,0.06)', fontSize:'13px', color:'#8892a4', display:'flex', justifyContent:'space-between' }}>
                  <span>Conversion rate (confirmed / total)</span>
                  <span style={{ color:'#4ade80', fontWeight:600 }}>{analytics.payments.total?Math.round((analytics.payments.confirmed/analytics.payments.total)*100):0}%</span>
                </div>
              </div>

            </div>
          )
        )}

      </div>
    </main>
  );
}