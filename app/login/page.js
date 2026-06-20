'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !email.includes('@')) { setError('Enter a valid email address.'); return; }
    if (!password) { setError('Password is required.'); return; }
    setError(''); setLoading(true);
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (err) { setError(err.message); return; }
    router.push('/welcome');
  };

  const handleForgotPassword = async () => {
    if (!email || !email.includes('@')) { setError('Enter your email address above first, then click "Forgot password?" again.'); return; }
    setError(''); setResetLoading(true);
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setResetLoading(false);
    if (err) { setError(err.message); return; }
    setResetSent(true);
  };

  const inp = { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '10px 14px', color: '#e8eaf0', fontSize: '14px', fontFamily: "'DM Sans',sans-serif", outline: 'none', width: '100%' };

  return (
    <main style={{ background: '#0a0e1a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', fontFamily: "'DM Sans',sans-serif", paddingTop: '80px' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '20px', color: '#fff' }}>Dharren Park <span style={{ color: '#f59e0b' }}>BIM</span></div>
          <div style={{ fontSize: '13px', color: '#8892a4', marginTop: '.25rem' }}>Welcome back — log in to continue</div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.2rem', marginBottom: '.25rem' }}>Welcome back</h2>
          <p style={{ fontSize: '13px', color: '#8892a4', marginBottom: '1.5rem' }}>Enter your credentials to access your lessons.</p>

          {error && <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: '#f87171', marginBottom: '1rem' }}>⚠ {error}</div>}
          {resetSent && <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: '#4ade80', marginBottom: '1rem' }}>✓ Password reset email sent! Check your inbox.</div>}

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '12px', fontWeight: 500, color: '#8892a4', display: 'block', marginBottom: '.35rem', letterSpacing: '.3px' }}>EMAIL ADDRESS</label>
            <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} style={inp} />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '12px', fontWeight: 500, color: '#8892a4', display: 'block', marginBottom: '.35rem', letterSpacing: '.3px' }}>PASSWORD</label>
            <div style={{ position: 'relative' }}>
              <input type={showPass ? 'text' : 'password'} placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} style={{ ...inp, paddingRight: '40px' }} />
              <button onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
                {showPass ? '🙈' : '👁'}
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'right', marginBottom: '1.25rem' }}>
            <button onClick={handleForgotPassword} disabled={resetLoading} style={{ background: 'none', border: 'none', fontSize: '12px', color: '#3b82f6', cursor: resetLoading ? 'not-allowed' : 'pointer', fontFamily: "'DM Sans',sans-serif", padding: 0 }}>
              {resetLoading ? 'Sending...' : 'Forgot password?'}
            </button>
          </div>

          <button onClick={handleLogin} disabled={loading} style={{ width: '100%', background: '#2563eb', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '15px', fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? .6 : 1, fontFamily: "'DM Sans',sans-serif" }}>
            {loading ? 'Logging in...' : 'Log In to My Account'}
          </button>
        </div>

        <div style={{ textAlign: 'center', fontSize: '13px', color: '#8892a4', marginTop: '1.25rem' }}>
          Don't have an account? <Link href="/register" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 500 }}>Create one free</Link>
        </div>
      </div>
    </main>
  );
}