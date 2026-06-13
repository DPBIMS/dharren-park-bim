'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/lessons', label: 'Lessons' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(10,14,26,0.92)' : '#0a0e1a',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      transition: 'all 0.3s',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <Link href="/" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '17px', color: '#fff', textDecoration: 'none', letterSpacing: '-0.3px' }}>
          Dharren Park <span style={{ color: '#f59e0b' }}>BIM</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: pathname === l.href ? '#fff' : '#8892a4',
              fontSize: '13px', fontWeight: 500, textDecoration: 'none',
              borderBottom: pathname === l.href ? '1.5px solid #2563eb' : 'none',
              paddingBottom: pathname === l.href ? '2px' : '0',
              fontFamily: "'DM Sans',sans-serif",
            }}>{l.label}</Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link href="/login" style={{ color: '#8892a4', fontSize: '13px', fontWeight: 500, textDecoration: 'none', padding: '8px 14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', fontFamily: "'DM Sans',sans-serif" }}>
            Log In
          </Link>
          <Link href="/register" style={{ background: '#2563eb', color: '#fff', padding: '8px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, textDecoration: 'none', fontFamily: "'DM Sans',sans-serif" }}>
            Get Started
          </Link>
          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', marginLeft: '8px' }} className="hamburger">
            <div style={{ width: '20px', height: '2px', background: '#8892a4', borderRadius: '2px', marginBottom: '4px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <div style={{ width: '14px', height: '2px', background: '#8892a4', borderRadius: '2px', marginBottom: '4px', opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: '20px', height: '2px', background: '#8892a4', borderRadius: '2px', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none', transition: 'all 0.2s' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#0a0e1a', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1rem 1.25rem' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', color: pathname === l.href ? '#fff' : '#8892a4',
              fontSize: '14px', fontWeight: 500, textDecoration: 'none',
              padding: '10px 12px', borderRadius: '7px', marginBottom: '2px',
              background: pathname === l.href ? 'rgba(37,99,235,0.1)' : 'transparent',
              borderLeft: pathname === l.href ? '2px solid #2563eb' : 'none',
            }}>{l.label}</Link>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '8px', paddingTop: '12px', display: 'flex', gap: '8px' }}>
            <Link href="/login" onClick={() => setMenuOpen(false)} style={{ flex: 1, textAlign: 'center', color: '#8892a4', fontSize: '13px', fontWeight: 500, textDecoration: 'none', padding: '9px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '7px' }}>Log In</Link>
            <Link href="/register" onClick={() => setMenuOpen(false)} style={{ flex: 1, textAlign: 'center', background: '#2563eb', color: '#fff', fontSize: '13px', fontWeight: 500, textDecoration: 'none', padding: '9px', borderRadius: '7px' }}>Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}