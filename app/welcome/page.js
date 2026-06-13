'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import '../login/auth.css';

export default function WelcomePage() {
  const router = useRouter();
  const [name, setName] = useState('');

  useEffect(() => {
    async function getProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/login'); return; }
      const { data: profile } = await supabase
        .from('profiles').select('first_name').eq('id', user.id).single();
      setName(profile?.first_name || user.email.split('@')[0]);
    }
    getProfile();
  }, []);

  return (
    <main className="auth-page">
      <div className="auth-wrap">
        <div className="auth-card" style={{ textAlign:'center', padding:'2.5rem 2rem' }}>
          <div style={{ fontSize:'3.5rem', marginBottom:'1rem' }}>🎉</div>
          <h1 className="auth-title">Welcome, {name}!</h1>
          <p className="auth-sub" style={{ marginBottom:'1.75rem' }}>
            Your account is ready. You now have access to free BIM lessons.
            Upgrade anytime to unlock the full library.
          </p>
          <div className="welcome-chips">
            <span className="chip">✓ Account Created</span>
            <span className="chip">✓ Free Lessons Unlocked</span>
            <span className="chip">✓ BIM Journey Begins</span>
          </div>
          <Link href="/dashboard" className="submit-btn" style={{ display:'inline-block', marginTop:'1.5rem', textDecoration:'none', padding:'12px 32px', width:'auto' }}>
            Go to My Dashboard →
          </Link>
        </div>
      </div>
    </main>
  );
}