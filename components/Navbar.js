'use client';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com'];

/* ─── Nav data ───────────────────────────────────────────────── */
const NAV_ITEMS = [
  {
    label: 'Learn',
    columns: [
      {
        title: 'Foundation',
        links: [
          { href: '/learn/bim-basics',      icon: '⬡', label: 'BIM basics',      sub: 'What is BIM & why it matters' },
          { href: '/learn/bim-dimensions',  icon: '◫', label: 'BIM dimensions',   sub: '3D through 8D explained' },
          { href: '/learn/lod-overview',    icon: '≡', label: 'LOD overview',     sub: 'Levels of development' },
          { href: '/learn/bim-roles',       icon: '◎', label: 'BIM roles',        sub: 'Who does what on a BIM project' },
        ],
      },
      {
        title: 'Standards',
        links: [
          { href: '/standards/iso-19650',   icon: '✦', label: 'ISO 19650',        sub: 'Parts 1–6 series',          badge: 'Updated', badgeColor: '#10b981' },
          { href: '/standards/tracker',     icon: '↻', label: 'Revision tracker', sub: 'What changed & when' },
          { href: '/standards/matrix',      icon: '⊞', label: 'Matrix & setup',   sub: 'Compliance checklists' },
        ],
      },
    ],
  },
  {
    label: 'Software',
    columns: [
      {
        title: 'Revit',
        links: [
          { href: '/software/revit/getting-started', icon: '▶', label: 'Getting started', sub: 'Interface & first model' },
          { href: '/software/revit/workflow',         icon: '⇌', label: 'Workflow',        sub: 'Collaborate & coordinate' },
          { href: '/software/revit/families',         icon: '⬙', label: 'Family creation', sub: 'Custom parametric families' },
        ],
      },
      {
        title: 'Navisworks',
        links: [
          { href: '/software/navisworks/getting-started', icon: '▶', label: 'Getting started', sub: 'Navigation & review' },
          { href: '/software/navisworks/clash',           icon: '⚡', label: 'Clash detection', sub: 'Find & resolve conflicts' },
          { href: '/software/navisworks/4d',              icon: '◷', label: '4D simulation',   sub: 'Construction sequencing' },
        ],
      },
      {
        title: 'Autodesk Cloud',
        links: [
          { href: '/software/forma', icon: '☁', label: 'Forma', sub: 'Early-stage design',   badge: 'Soon', badgeColor: '#f59e0b' },
          { href: '/software/acc',   icon: '⬡', label: 'ACC',   sub: 'Construction Cloud',   badge: 'Soon', badgeColor: '#f59e0b' },
        ],
      },
    ],
  },
  {
    label: 'Automation',
    narrow: true,
    columns: [
      {
        links: [
          { href: '/automation/dynamo',   icon: '⬡', label: 'Dynamo',    sub: 'Visual scripting for Revit' },
          { href: '/automation/pyrevit',  icon: '⌨', label: 'pyRevit',   sub: 'Python-powered Revit tools' },
          { href: '/automation/revit-api',icon: '{ }',label: 'Revit API', sub: 'C# & .NET development' },
          { href: '/automation/plugins',  icon: '⊕', label: 'Plug-ins',  sub: 'Best extensions & add-ons' },
        ],
      },
    ],
  },
  {
    label: 'AI in BIM',
    narrow: true,
    columns: [
      {
        links: [
          { href: '/ai/overview',     icon: '◈', label: 'AI overview',       sub: 'Where AI is changing AEC' },
          { href: '/ai/generative',   icon: '✦', label: 'Generative design', sub: 'AI-driven form finding' },
          { href: '/ai/prompting',    icon: '↳', label: 'Prompt engineering', sub: 'For AEC professionals' },
          { href: '/ai/tools',        icon: '⊞', label: 'AI tools directory', sub: 'Curated tools for BIM teams', badge: 'New', badgeColor: '#10b981' },
        ],
      },
    ],
  },
  {
    label: 'Case Studies',
    narrow: true,
    columns: [
      {
        links: [
          { href: '/case-studies/architecture', icon: '⬡', label: 'Architecture', sub: 'Building design projects' },
          { href: '/case-studies/structure',    icon: '◫', label: 'Structure',     sub: 'Structural engineering' },
          { href: '/case-studies/mep',          icon: '⚡', label: 'MEP',          sub: 'Mechanical, electrical, plumbing' },
          { href: '/case-studies/mixed-use',    icon: '⊞', label: 'Mixed-use',    sub: 'Multi-discipline projects' },
        ],
      },
    ],
  },
];

/* ─── Styles (inline so no extra CSS file needed) ──────────────── */
const S = {
  nav: (scrolled) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: scrolled ? 'rgba(10,14,26,0.95)' : '#0a0e1a',
    backdropFilter: scrolled ? 'blur(14px)' : 'none',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    transition: 'all 0.3s',
    fontFamily: "'DM Sans', sans-serif",
  }),
  inner: {
    maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px',
  },
  logo: {
    fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '17px',
    color: '#fff', textDecoration: 'none', letterSpacing: '-0.3px',
    display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0,
  },
  logoIcon: {
    width: '30px', height: '30px', borderRadius: '7px',
    background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.35)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '14px', color: '#60a5fa',
  },
  navLinks: {
    display: 'flex', alignItems: 'center', gap: '2px',
  },
  navBtn: (active) => ({
    display: 'flex', alignItems: 'center', gap: '4px',
    padding: '6px 11px', borderRadius: '7px', border: 'none',
    background: active ? 'rgba(255,255,255,0.07)' : 'transparent',
    color: active ? '#fff' : '#8892a4',
    fontSize: '13px', fontWeight: 500, cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'all 0.15s', whiteSpace: 'nowrap',
  }),
  chevron: (open) => ({
    fontSize: '9px', opacity: 0.5,
    transition: 'transform 0.2s',
    transform: open ? 'rotate(180deg)' : 'none',
    display: 'inline-block',
  }),
  megaWrap: {
    position: 'absolute', top: 'calc(100% + 6px)',
    background: '#0f1527',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: '14px',
    overflow: 'hidden',
    zIndex: 999,
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    minWidth: '220px',
  },
  megaHeader: {
    padding: '13px 16px 10px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    display: 'flex', alignItems: 'center', gap: '8px',
  },
  tag: (color = '#3b82f6') => ({
    fontSize: '10px', fontWeight: 600, padding: '2px 8px',
    borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px',
    background: `${color}22`, color: color, border: `1px solid ${color}33`,
  }),
  megaTitle: {
    fontSize: '13px', fontWeight: 500, color: '#e8eaf0',
  },
  megaBody: {
    display: 'flex', padding: '10px',
  },
  megaCol: {
    flex: 1, minWidth: '170px',
  },
  colTitle: {
    fontSize: '10px', fontWeight: 600, textTransform: 'uppercase',
    letterSpacing: '0.6px', color: '#4a5568', padding: '4px 10px 8px',
  },
  megaLink: {
    display: 'flex', alignItems: 'center', gap: '10px',
    padding: '8px 10px', borderRadius: '8px', cursor: 'pointer',
    textDecoration: 'none', transition: 'background 0.12s',
  },
  megaIcon: {
    width: '30px', height: '30px', borderRadius: '7px', flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '13px', background: 'rgba(255,255,255,0.05)', color: '#8892a4',
  },
  megaLinkLabel: { fontSize: '13px', color: '#d1d8e8', lineHeight: 1.3 },
  megaLinkSub: { fontSize: '11px', color: '#4a5568', lineHeight: 1.4 },
  divider: { width: '1px', background: 'rgba(255,255,255,0.05)', margin: '6px 4px', flexShrink: 0 },
  badge: (color) => ({
    fontSize: '10px', fontWeight: 600, padding: '2px 7px', borderRadius: '10px',
    background: `${color}22`, color: color, border: `1px solid ${color}33`,
    whiteSpace: 'nowrap', marginLeft: 'auto',
  }),
  navRight: { display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 },
  btnLogin: {
    color: '#8892a4', fontSize: '13px', fontWeight: 500,
    textDecoration: 'none', padding: '7px 14px',
    border: '1px solid rgba(255,255,255,0.08)', borderRadius: '7px',
    fontFamily: "'DM Sans', sans-serif",
  },
  btnCta: {
    background: '#2563eb', color: '#fff', padding: '7px 18px',
    borderRadius: '7px', fontSize: '13px', fontWeight: 500,
    textDecoration: 'none', fontFamily: "'DM Sans', sans-serif",
  },
  btnDash: {
    color: '#8892a4', fontSize: '13px', fontWeight: 500,
    textDecoration: 'none', padding: '7px 14px',
    border: '1px solid rgba(255,255,255,0.08)', borderRadius: '7px',
    fontFamily: "'DM Sans', sans-serif",
  },
  btnAdmin: {
    color: '#f59e0b', fontSize: '13px', fontWeight: 500,
    textDecoration: 'none', padding: '7px 14px',
    border: '1px solid rgba(245,158,11,0.25)', borderRadius: '7px',
    background: 'rgba(245,158,11,0.07)', fontFamily: "'DM Sans', sans-serif",
  },
  // Mobile
  hamburger: {
    display: 'none', background: 'none', border: 'none',
    cursor: 'pointer', padding: '4px', marginLeft: '8px',
    flexDirection: 'column', gap: '5px',
  },
  bar: (transform) => ({
    width: '20px', height: '2px', background: '#8892a4',
    borderRadius: '2px', transition: 'all 0.2s',
    transform,
  }),
  mobileMenu: {
    background: '#0a0e1a',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '0.75rem 1.25rem 1.25rem',
    maxHeight: '85vh', overflowY: 'auto',
  },
  mobileSection: {
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    paddingBottom: '8px', marginBottom: '8px',
  },
  mobileSectionBtn: {
    width: '100%', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', background: 'none', border: 'none',
    color: '#e8eaf0', fontSize: '14px', fontWeight: 500,
    fontFamily: "'DM Sans', sans-serif", cursor: 'pointer',
    padding: '10px 4px',
  },
  mobileSubLink: {
    display: 'block', color: '#8892a4', fontSize: '13px',
    textDecoration: 'none', padding: '8px 12px',
    borderRadius: '7px', transition: 'background 0.12s',
  },
  mobileCtas: {
    display: 'flex', gap: '8px', marginTop: '12px',
    paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)',
  },
};

/* ─── MegaMenu dropdown ─────────────────────────────────────────── */
function MegaMenu({ item, closeAll }) {
  const isNarrow = item.narrow;
  return (
    <div style={{ ...S.megaWrap, width: isNarrow ? '260px' : item.columns.length >= 3 ? '640px' : '460px' }}>
      <div style={S.megaHeader}>
        <span style={S.tag('#3b82f6')}>{item.columns.length > 1 ? 'Topics' : 'Advanced'}</span>
        <span style={S.megaTitle}>{item.label}</span>
      </div>
      <div style={S.megaBody}>
        {item.columns.map((col, ci) => (
          <div key={ci} style={{ display: 'contents' }}>
            {ci > 0 && <div style={S.divider} />}
            <div style={S.megaCol}>
              {col.title && <div style={S.colTitle}>{col.title}</div>}
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  style={S.megaLink}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={S.megaIcon}>{link.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={S.megaLinkLabel}>{link.label}</div>
                    {link.sub && <div style={S.megaLinkSub}>{link.sub}</div>}
                  </div>
                  {link.badge && <span style={S.badge(link.badgeColor)}>{link.badge}</span>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Navbar ────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [openMenu,    setOpenMenu]    = useState(null);  // label of open mega
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [mobileExpand,setMobileExpand]= useState(null);  // label of expanded mobile section
  const [userEmail,   setUserEmail]   = useState('');
  const [authReady,   setAuthReady]   = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  /* Scroll listener */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* Auth */
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserEmail(data?.user?.email || '');
      setAuthReady(true);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUserEmail(session?.user?.email || '');
      setAuthReady(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  /* Close on outside click */
  useEffect(() => {
    const fn = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  /* Close menus on route change */
  useEffect(() => { setOpenMenu(null); setMobileOpen(false); }, [pathname]);

  const isAdmin   = authReady && ADMIN_EMAILS.includes(userEmail);
  const isLoggedIn= authReady && !!userEmail;

  const closeAll = () => { setOpenMenu(null); setMobileOpen(false); };

  /* Calculate left offset for mega-menus so they don't go off-screen */
  const getMenuStyle = (idx) => {
    // First two items: anchor left. Last two: anchor right.
    if (idx >= 3) return { right: 0 };
    return { left: 0 };
  };

  return (
    <nav style={S.nav(scrolled)} ref={navRef}>
      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
        .mega-link:hover { background: rgba(255,255,255,0.05); }
      `}</style>

      <div style={S.inner}>
        {/* Logo */}
        <Link href="/" style={S.logo}>
          <div style={S.logoIcon}>⬡</div>
          Dharren Park <span style={{ color: '#f59e0b' }}>BIM</span>
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2px', position: 'relative' }}>
          {NAV_ITEMS.map((item, idx) => (
            <div key={item.label} style={{ position: 'relative' }}>
              <button
                style={S.navBtn(openMenu === item.label)}
                onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
              >
                {item.label}
                <span style={S.chevron(openMenu === item.label)}>▾</span>
              </button>
              {openMenu === item.label && (
                <div style={{ position: 'absolute', top: 'calc(100% + 6px)', ...getMenuStyle(idx) }}>
                  <MegaMenu item={item} closeAll={closeAll} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right CTAs */}
        <div style={S.navRight} className="nav-desktop">
          {isAdmin && <Link href="/admin" style={S.btnAdmin}>⚙ Admin</Link>}
          {isLoggedIn
            ? <Link href="/dashboard" style={S.btnDash}>Dashboard</Link>
            : <>
                <Link href="/login"    style={S.btnLogin}>Log in</Link>
                <Link href="/register" style={S.btnCta}>Get started →</Link>
              </>
          }
        </div>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          style={{ ...S.hamburger, display: 'none' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div style={S.bar(mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none')} />
          <div style={{ ...S.bar('none'), opacity: mobileOpen ? 0 : 1 }} />
          <div style={S.bar(mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none')} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu" style={S.mobileMenu}>
          {NAV_ITEMS.map((item) => (
            <div key={item.label} style={S.mobileSection}>
              <button
                style={S.mobileSectionBtn}
                onClick={() => setMobileExpand(mobileExpand === item.label ? null : item.label)}
              >
                <span>{item.label}</span>
                <span style={{ fontSize: '12px', opacity: 0.4, transition: 'transform 0.2s', display: 'inline-block', transform: mobileExpand === item.label ? 'rotate(180deg)' : 'none' }}>▾</span>
              </button>
              {mobileExpand === item.label && (
                <div style={{ paddingLeft: '4px' }}>
                  {item.columns.map((col, ci) => (
                    <div key={ci}>
                      {col.title && (
                        <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#3a4455', padding: '4px 12px 4px' }}>{col.title}</div>
                      )}
                      {col.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeAll}
                          style={S.mobileSubLink}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          <span style={{ marginRight: '8px', opacity: 0.5 }}>{link.icon}</span>
                          {link.label}
                          {link.badge && <span style={{ ...S.badge(link.badgeColor), marginLeft: '8px' }}>{link.badge}</span>}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile auth CTAs */}
          <div style={S.mobileCtas}>
            {isAdmin && <Link href="/admin" onClick={closeAll} style={{ ...S.btnAdmin, flex: 1, textAlign: 'center' }}>⚙ Admin</Link>}
            {isLoggedIn
              ? <Link href="/dashboard" onClick={closeAll} style={{ ...S.btnDash, flex: 1, textAlign: 'center' }}>Dashboard</Link>
              : <>
                  <Link href="/login"    onClick={closeAll} style={{ ...S.btnLogin, flex: 1, textAlign: 'center' }}>Log in</Link>
                  <Link href="/register" onClick={closeAll} style={{ ...S.btnCta,   flex: 1, textAlign: 'center' }}>Get started →</Link>
                </>
            }
          </div>
        </div>
      )}
    </nav>
  );
}