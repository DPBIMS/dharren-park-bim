'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setReady(true);
    });
  }, []);

  const handleReset = async () => {
    if (!password || password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    if (password !== confirm) { setError('Passwords do not match.'); return; }
    setError(''); setLoading(true);

    const { error: err } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (err) { setError(err.message); return; }
    setSuccess(true);
    setTimeout(() => router.push('/login'), 2500);
  };

  const inp = { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '10px 14px', color: '#e8eaf0', fontSize: '14px', fontFamily: "'DM Sans',sans-serif", outline: 'none', width: '100%' };

  return (
    <main style={{ background: '#0a0e1a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', fontFamily: "'DM Sans',sans-serif", paddingTop: '80px' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '20px', color: '#fff' }}>Dharren Park <span style={{ color: '#f59e0b' }}>BIM</span></div>
          <div style={{ fontSize: '13px', color: '#8892a4', marginTop: '.25rem' }}>Set a new password</div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem' }}>
          {!success ? (
            <>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.2rem', marginBottom: '.25rem' }}>Choose a new password</h2>
              <p style={{ fontSize: '13px', color: '#8892a4', marginBottom: '1.5rem' }}>Enter and confirm your new password below.</p>

              {error && <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: '#f87171', marginBottom: '1rem' }}>⚠ {error}</div>}

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '12px', fontWeight: 500, color: '#8892a4', display: 'block', marginBottom: '.35rem', letterSpacing: '.3px' }}>NEW PASSWORD</label>
                <div style={{ position: 'relative' }}>
                  <input type={showPass ? 'text' : 'password'} placeholder="Min. 6 characters" value={password} onChange={e => setPassword(e.target.value)} style={{ ...inp, paddingRight: '40px' }} />
                  <button onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>{showPass ? '🙈' : '👁'}</button>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '12px', fontWeight: 500, color: '#8892a4', display: 'block', marginBottom: '.35rem', letterSpacing: '.3px' }}>CONFIRM NEW PASSWORD</label>
                <input type={showPass ? 'text' : 'password'} placeholder="Repeat new password" value={confirm} onChange={e => setConfirm(e.target.value)} style={inp} />
              </div>

              <button onClick={handleReset} disabled={loading || !ready} style={{ width: '100%', background: '#2563eb', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '15px', fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? .6 : 1, fontFamily: "'DM Sans',sans-serif" }}>
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.3rem', marginBottom: '.5rem' }}>Password Updated!</h2>
              <p style={{ fontSize: '13px', color: '#8892a4' }}>Redirecting you to login...</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}