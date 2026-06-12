'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1rem 2rem', background: '#0a0a0a', borderBottom: '1px solid #222'
    }}>
      <Link href="/" style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' }}>
        Dharren Park BIM
      </Link>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link href="/lessons" style={{ color: '#ccc', textDecoration: 'none' }}>Lessons</Link>
        <Link href="/pricing" style={{ color: '#ccc', textDecoration: 'none' }}>Pricing</Link>
        <Link href="/login" style={{ color: '#ccc', textDecoration: 'none' }}>Login</Link>
        <Link href="/register" style={{ 
          color: '#000', background: '#fff', padding: '0.3rem 1rem', 
          borderRadius: '4px', textDecoration: 'none', fontWeight: '500' 
        }}>Register</Link>
      </div>
    </nav>
  );
}