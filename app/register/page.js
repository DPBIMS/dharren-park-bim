'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', phone:'', country:'PH', profession:'', howFound:'', password:'', confirm:'' });
  const [showPass,    setShowPass]    = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed,      setAgreed]      = useState(false);
  const [loading,     setLoading]     = useState(false);
  const [error,       setError]       = useState('');
  const [strength,    setStrength]    = useState(0);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const checkStrength = (val) => {
    let s = 0;
    if (val.length >= 8) s++;
    if (/[A-Z]/.test(val)) s++;
    if (/[0-9]/.test(val)) s++;
    if (/[^A-Za-z0-9]/.test(val)) s++;
    setStrength(s);
  };

  const strengthColors = ['transparent','#f87171','#fb923c','#fbbf24','#4ade80'];
  const strengthLabels = ['','Weak','Fair','Good','Strong'];

  const handleRegister = async () => {
    if (!form.firstName || !form.email || !form.password) { setError('Please fill in all required fields.'); return; }
    if (form.password !== form.confirm) { setError('Passwords do not match.'); return; }
    if (!agreed) { setError('Please agree to the Terms of Service.'); return; }
    setError(''); setLoading(true);

    // Step 1: Sign up with Supabase Auth
    const { data: authData, error: authErr } = await supabase.auth.signUp({
      email:    form.email,
      password: form.password,
      options: {
        data: {
          first_name: form.firstName,
          last_name:  form.lastName,
          phone:      form.phone,
          country:    form.country,
          profession: form.profession,
        }
      }
    });

    if (authErr) { setError(authErr.message); setLoading(false); return; }

    // Step 2: Save full profile to profiles table
    if (authData?.user?.id) {
      const { error: profileErr } = await supabase.from('profiles').upsert({
        id:         authData.user.id,
        first_name: form.firstName,
        last_name:  form.lastName,
        phone:      form.phone,
        country:    form.country,
        profession: form.profession,
        how_found:  form.howFound,
        plan:       'free',
        created_at: new Date().toISOString(),
      }, { onConflict: 'id' });

      if (profileErr) {
        console.error('Profile save error:', profileErr);
        // Don't block registration — auth was successful
      }
    }

    setLoading(false);
    router.push('/welcome');
  };

  const inp = { background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'8px', padding:'10px 14px', color:'#e8eaf0', fontSize:'14px', fontFamily:"'DM Sans',sans-serif", outline:'none', width:'100%' };
  const lbl = { fontSize:'12px', fontWeight:500, color:'#8892a4', display:'block', marginBottom:'.35rem', letterSpacing:'.3px' };

  return (
    <main style={{ background:'#0a0e1a', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem 1rem', fontFamily:"'DM Sans',sans-serif", paddingTop:'80px' }}>
      <div style={{ width:'100%', maxWidth:'480px' }}>
        <div style={{ textAlign:'center', marginBottom:'2rem' }}>
          <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'20px', color:'#fff' }}>Dharren Park <span style={{ color:'#f59e0b' }}>BIM</span></div>
          <div style={{ fontSize:'13px', color:'#8892a4', marginTop:'.25rem' }}>Your BIM learning journey starts here</div>
        </div>

        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'2rem' }}>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.2rem', marginBottom:'.25rem' }}>Create your account</h2>
          <p style={{ fontSize:'13px', color:'#8892a4', marginBottom:'1.5rem' }}>Join Dharren Park BIM System today.</p>

          {error && <div style={{ background:'rgba(248,113,113,0.1)', border:'1px solid rgba(248,113,113,0.2)', borderRadius:'8px', padding:'10px 14px', fontSize:'13px', color:'#f87171', marginBottom:'1rem' }}>⚠ {error}</div>}

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'.75rem', marginBottom:'1rem' }}>
            <div><label style={lbl}>FIRST NAME *</label><input placeholder="Juan" value={form.firstName} onChange={e => set('firstName', e.target.value)} style={inp} /></div>
            <div><label style={lbl}>LAST NAME</label><input placeholder="Dela Cruz" value={form.lastName} onChange={e => set('lastName', e.target.value)} style={inp} /></div>
          </div>

          {[['EMAIL ADDRESS *','email','you@email.com','email'],['PHONE NUMBER','phone','+63 9XX XXX XXXX','tel']].map(([label,key,ph,type]) => (
            <div key={key} style={{ marginBottom:'1rem' }}>
              <label style={lbl}>{label}</label>
              <input type={type} placeholder={ph} value={form[key]} onChange={e => set(key, e.target.value)} style={inp} />
            </div>
          ))}

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'.75rem', marginBottom:'1rem' }}>
            <div>
              <label style={lbl}>COUNTRY</label>
              <select value={form.country} onChange={e => set('country', e.target.value)} style={{ ...inp, cursor:'pointer' }}>
                {[['PH','Philippines'],['SG','Singapore'],['AE','UAE'],['AU','Australia'],['UK','United Kingdom'],['US','United States'],['other','Other']].map(([v,l]) => <option key={v} value={v}>{l}</option>)}
              </select>
            </div>
            <div>
              <label style={lbl}>PROFESSION</label>
              <select value={form.profession} onChange={e => set('profession', e.target.value)} style={{ ...inp, cursor:'pointer' }}>
                <option value="">Select...</option>
                {['Architect','Engineer','Student','BIM Manager','Contractor','Drafter / CAD Technician','Other'].map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginBottom:'1rem' }}>
            <label style={lbl}>HOW DID YOU FIND US?</label>
            <select value={form.howFound} onChange={e => set('howFound', e.target.value)} style={{ ...inp, cursor:'pointer' }}>
              <option value="">Select...</option>
              {['Google Search','Facebook','Instagram','LinkedIn','Friend / Colleague','YouTube','Other'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>

          <hr style={{ border:'none', borderTop:'1px solid rgba(255,255,255,0.08)', margin:'1.25rem 0' }} />

          <div style={{ marginBottom:'1rem' }}>
            <label style={lbl}>PASSWORD *</label>
            <div style={{ position:'relative' }}>
              <input type={showPass ? 'text' : 'password'} placeholder="Min. 8 characters" value={form.password} onChange={e => { set('password', e.target.value); checkStrength(e.target.value); }} style={{ ...inp, paddingRight:'40px' }} />
              <button onClick={() => setShowPass(!showPass)} style={{ position:'absolute', right:'12px', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', fontSize:'16px' }}>{showPass ? '🙈' : '👁'}</button>
            </div>
            <div style={{ height:'3px', borderRadius:'2px', background:'rgba(255,255,255,0.08)', marginTop:'6px', overflow:'hidden' }}>
              <div style={{ height:'100%', width:`${strength * 25}%`, borderRadius:'2px', background:strengthColors[strength], transition:'all .3s' }} />
            </div>
            {strength > 0 && <div style={{ fontSize:'11px', color:strengthColors[strength], marginTop:'3px' }}>{strengthLabels[strength]}</div>}
          </div>

          <div style={{ marginBottom:'1rem' }}>
            <label style={lbl}>CONFIRM PASSWORD *</label>
            <div style={{ position:'relative' }}>
              <input type={showConfirm ? 'text' : 'password'} placeholder="Repeat your password" value={form.confirm} onChange={e => set('confirm', e.target.value)} style={{ ...inp, paddingRight:'40px' }} />
              <button onClick={() => setShowConfirm(!showConfirm)} style={{ position:'absolute', right:'12px', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', fontSize:'16px' }}>{showConfirm ? '🙈' : '👁'}</button>
            </div>
            {form.confirm && form.password !== form.confirm && <div style={{ fontSize:'12px', color:'#f87171', marginTop:'4px' }}>⚠ Passwords do not match</div>}
          </div>

          <div style={{ display:'flex', alignItems:'flex-start', gap:'.5rem', marginBottom:'1rem' }}>
            <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{ width:'16px', height:'16px', marginTop:'2px', accentColor:'#2563eb', flexShrink:0, cursor:'pointer' }} />
            <label style={{ fontSize:'12px', color:'#8892a4', lineHeight:'1.5', cursor:'pointer' }}>
              I agree to the <a href="#" style={{ color:'#3b82f6', textDecoration:'none' }}>Terms of Service</a> and <a href="#" style={{ color:'#3b82f6', textDecoration:'none' }}>Privacy Policy</a>
            </label>
          </div>

          <button onClick={handleRegister} disabled={loading} style={{ width:'100%', background:'#2563eb', color:'#fff', border:'none', padding:'12px', borderRadius:'8px', fontSize:'15px', fontWeight:500, cursor:loading ? 'not-allowed' : 'pointer', opacity:loading ? .6 : 1, fontFamily:"'DM Sans',sans-serif" }}>
            {loading ? 'Creating account...' : 'Create My Account'}
          </button>
        </div>

        <div style={{ textAlign:'center', fontSize:'13px', color:'#8892a4', marginTop:'1.25rem' }}>
          Already have an account? <Link href="/login" style={{ color:'#3b82f6', textDecoration:'none', fontWeight:500 }}>Log in here</Link>
        </div>
      </div>
    </main>
  );
}