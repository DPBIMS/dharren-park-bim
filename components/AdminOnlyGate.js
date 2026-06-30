'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com'];

export default function AdminOnlyGate({ children, title, backHref = '/software', backLabel = '← Back to Software' }) {
  const [status, setStatus] = useState('loading'); // loading | admin | blocked

  useEffect(() => {
    let active = true;
    supabase.auth.getUser().then(({ data }) => {
      if (!active) return;
      setStatus(ADMIN_EMAILS.includes(data?.user?.email) ? 'admin' : 'blocked');
    });
    return () => { active = false; };
  }, []);

  if (status === 'loading') {
    return (
      <main style={{ background: '#0a0e1a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8892a4', fontFamily: "'DM Sans',sans-serif" }}>
        Loading...
      </main>
    );
  }

  if (status === 'blocked') {
    return (
      <main style={{ background: '#0a0e1a', color: '#e8eaf0', minHeight: '100vh', paddingTop: '80px', fontFamily: "'DM Sans',sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '560px', width: '100%', padding: '2rem 1.5rem', textAlign: 'center' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '18px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', margin: '0 auto 1.5rem' }}>
            🚧
          </div>
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#f59e0b', marginBottom: '.75rem' }}>In Review</div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-.5px', marginBottom: '.75rem' }}>{title || 'This Course'}</h1>
          <p style={{ color: '#8892a4', fontSize: '14px', lineHeight: '1.7', maxWidth: '400px', margin: '0 auto 2rem' }}>
            We're putting the finishing touches on this course before opening it up. Check back soon!
          </p>
          <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={backHref} style={{ display: 'inline-block', background: '#2563eb', color: '#fff', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
              {backLabel}
            </Link>
            <Link href="/dashboard" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: '#e8eaf0', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return children;
}
