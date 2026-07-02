'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';

// ─── NAV DATA ────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  {
    label: 'Learn',
    tier: 'FOUNDATION',
    badge: null,
    description: 'Curiosity-first BIM concepts for anyone starting out.',
    columns: [
      {
        heading: 'FOUNDATION',
        items: [
          {
            icon: 'circle',
            label: 'BIM basics',
            sub: 'What is BIM & why it matters',
            href: '/learn/bim-basics',
            status: 'live',
          },
          {
            icon: 'grid',
            label: 'BIM dimensions',
            sub: '3D through 8D explained',
            href: '/learn/bim-dimensions',
          },
          {
            icon: 'list',
            label: 'LOD overview',
            sub: 'Levels of development',
            href: '/learn/lod-overview',
          },
          {
            icon: 'user',
            label: 'BIM roles',
            sub: 'Who does what on a BIM project',
            href: '/learn/bim-roles',
          },
        ],
      },
    ],
  },
  {
    label: 'Software',
    tier: 'BEGINNER',
    badge: null,
    description: 'Industry tools from Revit to Navisworks and beyond.',
    columns: [
      {
        heading: 'REVIT',
        headingIcon: 'revit',
        items: [
          {
            icon: 'play',
            label: 'Getting Started',
            sub: 'Interface & first model',
            href: '/software/revit/getting-started',
            status: 'live',
          },
          {
            icon: 'settings',
            label: 'Project Setup',
            sub: 'Templates & office standards',
            href: '/software/revit/project-setup',
            status: 'live',
          },
          {
            icon: 'grid',
            label: 'Revit Matrix',
            sub: 'Company-level BIM management',
            href: '/software/revit/matrix',
            status: 'live',
          },
        ],
      },
      {
        heading: 'REVIT FAMILIES',
        headingIcon: 'diamond',
        items: [
          {
            icon: 'diamond',
            label: 'Family Creation',
            sub: 'Custom parametric families',
            href: '/software/revit/families',
            status: 'live',
          },
          {
            icon: 'layers',
            label: 'Family Setup',
            sub: 'Family templates & standards',
            href: '/software/revit/family-setup',
            status: 'live',
          },
          {
            icon: 'grid',
            label: 'Family Matrix',
            sub: 'Company-level family management',
            href: '/software/revit/family-matrix',
            badge: 'Soon',
          },
        ],
      },
      {
        heading: 'NAVISWORKS',
        items: [
          {
            icon: 'play',
            label: 'Getting started',
            sub: 'Navigation & review',
            href: '/software/navisworks/getting-started',
            status: 'live',
          },
          {
            icon: 'zap',
            label: 'Clash detection',
            sub: 'Find & resolve conflicts',
            href: '/software/navisworks/clash-detection',
          },
          {
            icon: 'clock',
            label: '4D simulation',
            sub: 'Construction sequencing',
            href: '/software/navisworks/4d-simulation',
          },
        ],
      },
      {
        heading: 'AUTODESK CLOUD',
        items: [
          {
            icon: 'cloud',
            label: 'Forma',
            sub: 'Early-stage design analysis',
            href: '/software/forma/getting-started',
            status: 'live',
          },
          {
            icon: 'circle',
            label: 'ACC',
            sub: 'Construction Cloud',
            href: '/software/acc/getting-started',
            status: 'live',
          },
        ],
      },
    ],
  },
  {
    label: 'Standards',
    tier: 'INTERMEDIATE',
    badge: null,
    description: 'ISO norms, revision tracking and compliance frameworks.',
    columns: [
      {
        heading: 'STANDARDS',
        items: [
          {
            icon: 'plus',
            label: 'ISO 19650',
            sub: 'Standards Course',
            href: '/standards/iso-19650',
            status: 'live',
          },
          {
            icon: 'refresh',
            label: 'Revision tracker',
            sub: 'What changed & when',
            href: '/standards/revision-tracker',
          },
          {
            icon: 'grid',
            label: 'Matrix & setup',
            sub: 'Compliance checklists',
            href: '/standards/matrix-setup',
          },
        ],
      },
    ],
  },
  {
    label: 'BIM Workflow',
    tier: 'INTERMEDIATE',
    badge: null,
    description: 'The Common Data Environment — the pillar workflow behind every ISO 19650 project.',
    columns: [
      {
        heading: 'CDE WORKFLOW',
        items: [
          {
            icon: 'grid',
            label: 'CDE Foundations & Workflow',
            sub: 'States, coordination & governance',
            href: '/software/cde/getting-started',
            status: 'live',
          },
        ],
      },
    ],
  },
  {
    label: 'Automation',
    tier: 'ADVANCED',
    badge: null,
    description: 'Dynamo, pyRevit and API scripting for power users.',
    columns: [
      {
        heading: 'DYNAMO',
        items: [
          {
            icon: 'circle',
            label: 'Dynamo',
            sub: 'Getting started — visual scripting basics',
            href: '/automation/dynamo/getting-started',
            status: 'live',
          },
          {
            icon: 'zap',
            label: 'Dynamo Practice',
            sub: 'Hands-on scripts & real workflows',
            href: '/automation/dynamo/practice',
            status: 'live',
          },
        ],
      },
      {
        heading: 'PYREVIT',
        items: [
          {
            icon: 'grid',
            label: 'pyRevit',
            sub: 'Getting started — Python & the Revit API',
            href: '/automation/pyrevit/getting-started',
            status: 'live',
          },
          {
            icon: 'zap',
            label: 'pyRevit Practice',
            sub: 'Hands-on tools & real workflows',
            href: '/automation/pyrevit/practice',
            status: 'live',
          },
        ],
      },
      {
        heading: 'REVIT API & PLUG-INS',
        items: [
          {
            icon: 'code',
            label: 'Revit API',
            sub: 'C# & .NET development',
            href: '/automation/revit-api',
          },
          {
            icon: 'globe',
            label: 'Plug-ins',
            sub: 'Best extensions & add-ons',
            href: '/automation/plugins',
          },
        ],
      },
    ],
  },
  {
    label: 'AI in BIM',
    tier: 'ADVANCED',
    badge: null,
    description: 'Where artificial intelligence meets AEC workflows.',
    columns: [
      {
        heading: 'AI IN BIM',
        items: [
          {
            icon: 'diamond',
            label: 'AI overview',
            sub: 'Where AI is changing AEC',
            href: '/ai-in-bim/overview',
          },
          {
            icon: 'plus',
            label: 'Generative design',
            sub: 'AI-driven form finding',
            href: '/ai-in-bim/generative-design',
          },
          {
            icon: 'arrow',
            label: 'Prompt engineering',
            sub: 'For AEC professionals',
            href: '/ai-in-bim/prompt-engineering',
          },
          {
            icon: 'grid',
            label: 'AI tools directory',
            sub: 'Curated tools for BIM teams',
            href: '/ai-in-bim/tools-directory',
            badge: 'New',
            badgeColor: 'green',
          },
        ],
      },
    ],
  },
  {
    label: 'Case Studies',
    tier: 'ADVANCED',
    badge: null,
    description: 'Real-world BIM projects across disciplines.',
    columns: [
      {
        heading: 'CASE STUDIES',
        items: [
          {
            icon: 'circle',
            label: 'Architecture',
            sub: 'Building design projects',
            href: '/case-studies/architecture',
          },
          {
            icon: 'grid',
            label: 'Structure',
            sub: 'Structural engineering',
            href: '/case-studies/structure',
          },
          {
            icon: 'zap',
            label: 'MEP',
            sub: 'Mechanical, electrical, plumbing',
            href: '/case-studies/mep',
          },
          {
            icon: 'grid',
            label: 'Mixed-use',
            sub: 'Multi-discipline projects',
            href: '/case-studies/mixed-use',
          },
        ],
      },
    ],
  },
];

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com'];

// ─── TIER CONFIG ─────────────────────────────────────────────────────────────

const TIER_CONFIG = {
  FOUNDATION:   { label: 'FOUNDATION',   bg: '#1a2744', color: '#60a5fa' },
  BEGINNER:     { label: 'BEGINNER',     bg: '#0f2d1f', color: '#34d399' },
  INTERMEDIATE: { label: 'INTERMEDIATE', bg: '#2d1f0a', color: '#fbbf24' },
  ADVANCED:     { label: 'ADVANCED',     bg: '#2d0a0a', color: '#f87171' },
};

// ─── ICON HELPER ─────────────────────────────────────────────────────────────

function NavIcon({ type }) {
  const base = {
    width: 14, height: 14, stroke: 'currentColor', fill: 'none',
    strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  const icons = {
    circle:  <svg {...base}><circle cx="7" cy="7" r="5" /></svg>,
    grid:    <svg {...base}><rect x="2" y="2" width="4" height="4" rx="0.5"/><rect x="8" y="2" width="4" height="4" rx="0.5"/><rect x="2" y="8" width="4" height="4" rx="0.5"/><rect x="8" y="8" width="4" height="4" rx="0.5"/></svg>,
    list:    <svg {...base}><line x1="3" y1="5" x2="11" y2="5"/><line x1="3" y1="7" x2="11" y2="7"/><line x1="3" y1="9" x2="11" y2="9"/></svg>,
    user:    <svg {...base}><circle cx="7" cy="5" r="2.5"/><path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5"/></svg>,
    play:    <svg {...base}><polygon points="4,2 12,7 4,12" fill="currentColor" stroke="none"/></svg>,
    arrows:  <svg {...base}><path d="M4 6h6M4 8h6M7 4l-3 2 3 2M7 10l3-2-3-2" /></svg>,
    diamond: <svg {...base}><polygon points="7,2 12,7 7,12 2,7"/></svg>,
    zap:     <svg {...base}><polygon points="7,1 1,8 6,8 5,13 13,6 8,6" fill="currentColor" stroke="none"/></svg>,
    clock:   <svg {...base}><circle cx="7" cy="7" r="5"/><polyline points="7,4 7,7 9,9"/></svg>,
    cloud:   <svg {...base}><path d="M4 10a3 3 0 010-6 4 4 0 018 1 2.5 2.5 0 010 5H4z"/></svg>,
    plus:    <svg {...base}><line x1="7" y1="3" x2="7" y2="11"/><line x1="3" y1="7" x2="11" y2="7"/></svg>,
    refresh: <svg {...base}><path d="M4 7a3 3 0 105.7-1.3"/><polyline points="9,3 9,6 12,6"/></svg>,
    code:    <svg {...base}><polyline points="4,5 1,7 4,9"/><polyline points="10,5 13,7 10,9"/><line x1="8" y1="3" x2="6" y2="11"/></svg>,
    globe:    <svg {...base}><circle cx="7" cy="7" r="5"/><path d="M2 7h10M7 2a8 8 0 000 10"/></svg>,
    arrow:    <svg {...base}><line x1="3" y1="7" x2="11" y2="7"/><polyline points="8,4 11,7 8,10"/></svg>,
    layers:   <svg {...base}><polygon points="7,1 13,4.5 7,8 1,4.5"/><polyline points="1,7.5 7,11 13,7.5"/><polyline points="1,10.5 7,14 13,10.5"/></svg>,
    settings: <svg {...base}><circle cx="7" cy="7" r="2"/><path d="M7 1v2M7 11v2M1 7h2M11 7h2M2.9 2.9l1.4 1.4M9.7 9.7l1.4 1.4M2.9 11.1l1.4-1.4M9.7 4.3l1.4-1.4"/></svg>,
  };
  return icons[type] || icons.circle;
}

// ─── BADGE ───────────────────────────────────────────────────────────────────

function Badge({ text, color = 'amber' }) {
  const colors = {
    amber: { bg: 'rgba(245,158,11,0.15)', text: '#fbbf24', border: 'rgba(245,158,11,0.3)' },
    green: { bg: 'rgba(52,211,153,0.12)', text: '#34d399',  border: 'rgba(52,211,153,0.25)' },
    blue:  { bg: 'rgba(96,165,250,0.12)', text: '#60a5fa',  border: 'rgba(96,165,250,0.25)' },
    gray:  { bg: 'rgba(107,114,128,0.12)', text: '#9ca3af', border: 'rgba(107,114,128,0.2)' },
  };
  const c = colors[color] || colors.amber;
  return (
    <span style={{
      fontSize: 10, fontWeight: 600, letterSpacing: '0.06em',
      padding: '2px 7px', borderRadius: 4,
      background: c.bg, color: c.text, border: `1px solid ${c.border}`,
      whiteSpace: 'nowrap', fontFamily: 'DM Sans, sans-serif',
    }}>
      {text}
    </span>
  );
}

// ─── DROPDOWN ────────────────────────────────────────────────────────────────

function Dropdown({ item, onClose }) {
  const tier = TIER_CONFIG[item.tier] || TIER_CONFIG.FOUNDATION;
  const colCount = item.columns.length;

  return (
    <div style={{
      position: 'absolute',
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#0d1120',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12,
      boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(37,99,235,0.1)',
      minWidth: colCount <= 1 ? 260 : colCount === 2 ? 460 : colCount === 3 ? 660 : 860,
      zIndex: 100,
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '14px 20px 12px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
          padding: '3px 8px', borderRadius: 5,
          background: tier.bg, color: tier.color,
          border: `1px solid ${tier.color}30`,
          fontFamily: 'DM Sans, sans-serif',
        }}>
          {tier.label}
        </span>
        <span style={{
          fontSize: 15, fontWeight: 700, color: '#fff',
          fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em',
        }}>
          {item.label}
        </span>
      </div>

      {/* Columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${colCount}, 1fr)`,
        gap: 0,
      }}>
        {item.columns.map((col, ci) => {
          const isRevit      = col.heading === 'REVIT';
          const isFamily     = col.heading === 'REVIT FAMILIES';
          const isNavisworks = col.heading === 'NAVISWORKS';
          const isCloud      = col.heading === 'AUTODESK CLOUD';
          const isStandards  = col.heading === 'STANDARDS';
          const isCDE        = col.heading === 'CDE WORKFLOW';
          const isFoundation = col.heading === 'FOUNDATION';
          const isDynamo     = col.heading === 'DYNAMO';
          const isPyrevit    = col.heading === 'PYREVIT';
          const isApiPlugins = col.heading === 'REVIT API & PLUG-INS';
          const isHighlight  = isRevit || isFamily || isNavisworks || isCloud || isStandards || isCDE || isFoundation || isDynamo || isPyrevit || isApiPlugins;
          const accentColor = isRevit ? '#2563eb' : isFamily ? '#f59e0b' : isNavisworks ? '#10b981' : isCloud ? '#8b5cf6' : isStandards ? '#06b6d4' : isCDE ? '#6366f1' : isDynamo ? '#14b8a6' : isPyrevit ? '#eab308' : isApiPlugins ? '#64748b' : '#ec4899';
          const accentText  = isRevit ? '#60a5fa'  : isFamily ? '#f59e0b' : isNavisworks ? '#34d399' : isCloud ? '#a78bfa' : isStandards ? '#22d3ee' : isCDE ? '#818cf8' : isDynamo ? '#2dd4bf' : isPyrevit ? '#facc15' : isApiPlugins ? '#94a3b8' : '#f472b6';

          return (
            <div key={ci} style={{
              padding: '16px 20px 18px',
              borderRight: ci < colCount - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              background: isHighlight ? `${accentColor}08` : 'transparent',
            }}>
              {/* Column heading */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                {isHighlight && (
                  <div style={{
                    width: 16, height: 16, borderRadius: 4, flexShrink: 0,
                    background: accentColor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      {isRevit ? (
                        <>
                          <rect x="1" y="1" width="3" height="3" rx="0.5" fill="white" opacity="0.9"/>
                          <rect x="5" y="1" width="3" height="3" rx="0.5" fill="white" opacity="0.6"/>
                          <rect x="1" y="5" width="3" height="3" rx="0.5" fill="white" opacity="0.6"/>
                          <rect x="5" y="5" width="3" height="3" rx="0.5" fill="#f59e0b"/>
                        </>
                      ) : isFamily ? (
                        <polygon points="4.5,1 8,4.5 4.5,8 1,4.5" fill="white" opacity="0.9"/>
                      ) : isNavisworks ? (
                        <>
                          <circle cx="3.2" cy="4.5" r="2.4" fill="white" opacity="0.65"/>
                          <circle cx="5.8" cy="4.5" r="2.4" fill="white" opacity="0.9"/>
                        </>
                      ) : isCloud ? (
                        <path d="M2.6 6.8a1.7 1.7 0 01-.2-3.39 2 2 0 013.86-.9 1.55 1.55 0 011.94 1.5 1.55 1.55 0 01-1.55 1.55 1.7 1.7 0 01-.25 1.24z" fill="white" opacity="0.9"/>
                      ) : isStandards ? (
                        <path d="M1.5 4.6l2 2 4-4.2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95"/>
                      ) : isCDE ? (
                        <circle cx="4.5" cy="4.5" r="3.2" fill="none" stroke="white" strokeWidth="1.3" opacity="0.9"/>
                      ) : isDynamo ? (
                        <>
                          <circle cx="2" cy="2.2" r="1.2" fill="white" opacity="0.9"/>
                          <circle cx="7" cy="2.2" r="1.2" fill="white" opacity="0.9"/>
                          <circle cx="4.5" cy="6.8" r="1.2" fill="white" opacity="0.9"/>
                          <path d="M2.9 3L4 5.8M6.1 3L5 5.8" stroke="white" strokeWidth="0.8" opacity="0.7"/>
                        </>
                      ) : isPyrevit ? (
                        <polygon points="4.5,1 7.5,2.75 7.5,6.25 4.5,8 1.5,6.25 1.5,2.75" fill="white" opacity="0.9"/>
                      ) : isApiPlugins ? (
                        <>
                          <polyline points="2.6,3.2 0.6,4.5 2.6,5.8" stroke="white" strokeWidth="1" fill="none" opacity="0.9"/>
                          <polyline points="6.4,3.2 8.4,4.5 6.4,5.8" stroke="white" strokeWidth="1" fill="none" opacity="0.9"/>
                          <line x1="5.1" y1="1.9" x2="3.9" y2="7.1" stroke="white" strokeWidth="1" opacity="0.9"/>
                        </>
                      ) : (
                        <path d="M4.5 1L5.7 3.6 8.5 4 6.5 6 7 8.7 4.5 7.4 2 8.7 2.5 6 0.5 4 3.3 3.6z" fill="white" opacity="0.9"/>
                      )}
                    </svg>
                  </div>
                )}
                <p style={{
                  fontSize: isHighlight ? 11 : 10,
                  fontWeight: isHighlight ? 800 : 700,
                  letterSpacing: isHighlight ? '0.06em' : '0.12em',
                  color: isHighlight ? accentText : '#3d4a6b',
                  margin: 0,
                  fontFamily: 'DM Sans, sans-serif',
                  textTransform: 'uppercase',
                }}>
                  {col.heading}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {col.items.map((link, li) => {
                  const isLive = link.status === 'live';
                  const isSoon = link.badge === 'Soon';
                  return (
                    <Link
                      key={li}
                      href={isSoon ? '#' : link.href}
                      onClick={isSoon ? (e) => e.preventDefault() : onClose}
                      style={{ textDecoration: 'none', opacity: isSoon ? 0.5 : 1 }}
                    >
                      <div
                        style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '8px 10px', borderRadius: 8,
                          transition: 'background 0.15s',
                          cursor: isSoon ? 'default' : 'pointer',
                        }}
                        onMouseEnter={e => { if (!isSoon) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        {/* Icon box */}
                        <div style={{
                          width: 30, height: 30, borderRadius: 7, flexShrink: 0,
                          background: isHighlight && isLive
                            ? `${accentColor}22`
                            : 'rgba(255,255,255,0.04)',
                          border: `1px solid ${isHighlight && isLive
                            ? `${accentColor}44`
                            : 'rgba(255,255,255,0.07)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: isHighlight && isLive ? accentText : '#5a6fa8',
                        }}>
                          <NavIcon type={link.icon} />
                        </div>

                        {/* Text */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontSize: 13.5,
                            fontWeight: isLive ? 600 : 500,
                            color: isLive ? '#e2e8f0' : '#6b7280',
                            fontFamily: 'DM Sans, sans-serif',
                            lineHeight: 1.2,
                            display: 'flex', alignItems: 'center', gap: 6,
                          }}>
                            {link.label}
                            {/* Live indicator dot for Revit courses */}
                            {isHighlight && isLive && (
                              <span style={{
                                width: 5, height: 5, borderRadius: '50%',
                                background: accentColor, flexShrink: 0,
                                boxShadow: `0 0 4px ${accentColor}`,
                              }} />
                            )}
                          </div>
                          <div style={{
                            fontSize: 11.5, color: '#4a5a80',
                            fontFamily: 'DM Sans, sans-serif', lineHeight: 1.3, marginTop: 1,
                          }}>
                            {link.sub}
                          </div>
                        </div>

                        {/* Badge */}
                        {link.badge && (
                          <Badge
                            text={link.badge}
                            color={isSoon ? 'gray' : (link.badgeColor || 'amber')}
                          />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [user,           setUser]           = useState(null);
  const [isAdmin,        setIsAdmin]        = useState(false);
  const [activeMenu,     setActiveMenu]     = useState(null);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled,       setScrolled]       = useState(false);
  const navRef      = useRef(null);
  const closeTimer  = useRef(null);
  const router      = useRouter();
  const pathname    = usePathname();

  // ── Auth ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsAdmin(ADMIN_EMAILS.includes(session?.user?.email));
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
      setIsAdmin(ADMIN_EMAILS.includes(session?.user?.email));
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push('/');
  }

  // ── Scroll shadow ─────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Click outside ─────────────────────────────────────────────────────────
  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // ── Hover helpers ─────────────────────────────────────────────────────────
  function handleNavEnter(label) {
    clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }
  function handleNavLeave() {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }
  function handleDropdownEnter() {
    clearTimeout(closeTimer.current);
  }

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .dpbim-nav-link {
          display: flex; align-items: center; gap: 4px;
          padding: 6px 11px; border-radius: 6px;
          font-size: 13.5px; font-weight: 500;
          color: #8b95b8; cursor: pointer;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
          background: none; border: none; outline: none;
          position: relative;
          user-select: none;
        }
        .dpbim-nav-link:hover,
        .dpbim-nav-link.active {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        .dpbim-nav-link .chev {
          opacity: 0.45;
          transition: transform 0.2s, opacity 0.15s;
        }
        .dpbim-nav-link:hover .chev,
        .dpbim-nav-link.active .chev {
          opacity: 0.8;
          transform: rotate(180deg);
        }

        /* Mobile drawer */
        .dpbim-mobile-drawer {
          position: fixed; inset: 0; top: 60px;
          background: #080c1a;
          border-top: 1px solid rgba(255,255,255,0.06);
          z-index: 90; overflow-y: auto;
          padding: 16px 0 40px;
          animation: slideDown 0.2s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .dpbim-mobile-section { border-bottom: 1px solid rgba(255,255,255,0.05); }
        .dpbim-mobile-trigger {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 14px 20px; background: none; border: none; cursor: pointer;
          font-size: 14px; font-weight: 600; color: #c8d0e8;
          font-family: 'DM Sans', sans-serif;
        }
        .dpbim-mobile-trigger:hover { background: rgba(255,255,255,0.03); }
        .dpbim-mobile-items { padding: 4px 0 12px 20px; }
        .dpbim-mobile-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 16px; text-decoration: none;
          border-radius: 8px; margin: 2px 12px 2px 0;
          transition: background 0.15s;
        }
        .dpbim-mobile-item:hover { background: rgba(255,255,255,0.05); }
        .dpbim-mobile-item-label {
          font-size: 13.5px; font-weight: 600; color: #e2e8f0;
          font-family: 'DM Sans', sans-serif;
        }
        .dpbim-mobile-item-sub {
          font-size: 11.5px; color: #4a5a80;
          font-family: 'DM Sans', sans-serif; margin-top: 1px;
        }
      `}</style>

      <nav
        ref={navRef}
        style={{
          position: 'sticky', top: 0, zIndex: 80,
          background: scrolled ? 'rgba(10,14,26,0.92)' : '#0a0e1a',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          transition: 'background 0.25s, backdrop-filter 0.25s',
        }}
      >
        {/* Gradient underline */}
        <div style={{
          height: 2,
          background: 'linear-gradient(90deg, transparent 0%, #2563eb 35%, #f59e0b 65%, transparent 100%)',
          opacity: 0.55,
        }} />

        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '0 24px', height: 60,
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 16,
        }}>

          {/* ── Logo ── */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: 30, height: 30, background: '#2563eb', borderRadius: 7,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
                <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
                <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
                <rect x="9" y="9" width="5" height="5" rx="1" fill="#f59e0b"/>
              </svg>
            </div>
            <span style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700,
              fontSize: 16, color: '#fff', letterSpacing: '-0.02em',
            }}>
              Dharren Park <span style={{ color: '#f59e0b' }}>BIM</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, justifyContent: 'center' }}
            className="dpbim-desktop-nav"
          >
            {NAV_ITEMS.map(item => {
              const basePath = '/' + item.label.toLowerCase().replace(/\s+/g, '-');
              const isActive = pathname.startsWith(basePath);
              return (
                <div
                  key={item.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => handleNavEnter(item.label)}
                  onMouseLeave={handleNavLeave}
                >
                  <button
                    className={`dpbim-nav-link${activeMenu === item.label || isActive ? ' active' : ''}`}
                    style={isActive ? { color: '#fff', background: 'rgba(37,99,235,0.1)' } : {}}
                  >
                    {item.label}
                    <svg className="chev" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {isActive && (
                      <span style={{
                        position: 'absolute', bottom: -1, left: '50%',
                        transform: 'translateX(-50%)',
                        width: 20, height: 2, borderRadius: 2, background: '#2563eb',
                      }} />
                    )}
                  </button>
                  {activeMenu === item.label && (
                    <div
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleNavLeave}
                    >
                      <Dropdown item={item} onClose={() => setActiveMenu(null)} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Right Actions ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>

            {/* Pricing */}
            <Link
              href="/pricing"
              style={{
                padding: '7px 13px', borderRadius: 7,
                fontSize: 13, fontWeight: pathname === '/pricing' ? 600 : 500,
                color: pathname === '/pricing' ? '#fff' : '#8b95b8',
                textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
                background: pathname === '/pricing' ? 'rgba(37,99,235,0.15)' : 'transparent',
                border: pathname === '/pricing' ? '1px solid rgba(37,99,235,0.35)' : '1px solid transparent',
                transition: 'color 0.15s, background 0.15s, border-color 0.15s',
                position: 'relative',
              }}
              onMouseEnter={e => {
                if (pathname !== '/pricing') {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={e => {
                if (pathname !== '/pricing') {
                  e.currentTarget.style.color = '#8b95b8';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              Pricing
              {pathname === '/pricing' && (
                <span style={{
                  position: 'absolute', bottom: -1, left: '50%',
                  transform: 'translateX(-50%)',
                  width: 20, height: 2, borderRadius: 2, background: '#2563eb',
                }} />
              )}
            </Link>

            {user ? (
              <>
                {/* Dashboard */}
                <Link
                  href="/dashboard"
                  style={{
                    padding: '7px 13px',
                    background: pathname === '/dashboard' ? 'rgba(37,99,235,0.2)' : 'rgba(37,99,235,0.12)',
                    border: '1px solid rgba(37,99,235,0.3)',
                    borderRadius: 7,
                    fontSize: 13, fontWeight: 500, color: '#60a5fa',
                    textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,99,235,0.22)'}
                  onMouseLeave={e => e.currentTarget.style.background = pathname === '/dashboard' ? 'rgba(37,99,235,0.2)' : 'rgba(37,99,235,0.12)'}
                >
                  Dashboard
                </Link>

                {/* ── Admin Panel button — only for admin ── */}
                {isAdmin && (
                  <Link
                    href="/admin"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      padding: '7px 14px',
                      background: pathname.startsWith('/admin') ? 'rgba(245,158,11,0.2)' : 'rgba(245,158,11,0.1)',
                      border: '1px solid rgba(245,158,11,0.35)',
                      borderRadius: 7,
                      fontSize: 13, fontWeight: 600,
                      color: '#f59e0b', textDecoration: 'none',
                      fontFamily: 'DM Sans, sans-serif',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,158,11,0.22)'}
                    onMouseLeave={e => e.currentTarget.style.background = pathname.startsWith('/admin') ? 'rgba(245,158,11,0.2)' : 'rgba(245,158,11,0.1)'}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="5" stroke="#f59e0b" strokeWidth="1.5"/>
                      <circle cx="6" cy="6" r="2" fill="#f59e0b"/>
                    </svg>
                    Admin Panel
                  </Link>
                )}
              </>
            ) : (
              <>
                {/* Log in */}
                <Link
                  href="/login"
                  style={{
                    padding: '7px 13px', borderRadius: 7,
                    fontSize: 13, fontWeight: 500, color: '#8b95b8',
                    textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'color 0.15s, border-color 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#8b95b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  Log in
                </Link>

                {/* Get Started */}
                <Link
                  href="/register"
                  style={{
                    padding: '7px 14px', background: '#2563eb', borderRadius: 7,
                    fontSize: 13, fontWeight: 600, color: '#fff',
                    textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
                  onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}
                >
                  Get Started
                </Link>
              </>
            )}

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              style={{
                display: 'none',
                width: 36, height: 36, borderRadius: 7,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#8b95b8',
              }}
              className="dpbim-burger"
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              }
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        {mobileOpen && (
          <div className="dpbim-mobile-drawer">
            {NAV_ITEMS.map(item => (
              <div key={item.label} className="dpbim-mobile-section">
                <button
                  className="dpbim-mobile-trigger"
                  onClick={() => setMobileExpanded(e => e === item.label ? null : item.label)}
                >
                  <span>{item.label}</span>
                  <svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    style={{
                      transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s', color: '#4a5a80',
                    }}
                  >
                    <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                {mobileExpanded === item.label && (
                  <div className="dpbim-mobile-items">
                    {item.columns.flatMap(col => col.items).map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="dpbim-mobile-item"
                        onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                      >
                        <div style={{
                          width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.07)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#5a6fa8',
                        }}>
                          <NavIcon type={link.icon} />
                        </div>
                        <div>
                          <div className="dpbim-mobile-item-label">{link.label}</div>
                          <div className="dpbim-mobile-item-sub">{link.sub}</div>
                        </div>
                        {link.badge && <Badge text={link.badge} color={link.badgeColor || 'amber'} />}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* ── Mobile auth buttons ── */}
            <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link
                href="/pricing"
                style={{
                  textAlign: 'center', padding: '11px', borderRadius: 8,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  fontSize: 14, fontWeight: 500, color: '#8b95b8',
                  textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Pricing
              </Link>

              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    style={{
                      textAlign: 'center', padding: '11px', borderRadius: 8,
                      background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)',
                      fontSize: 14, fontWeight: 600, color: '#60a5fa',
                      textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    Dashboard
                  </Link>

                  {/* Mobile Admin Panel — only for admin */}
                  {isAdmin && (
                    <Link
                      href="/admin"
                      onClick={() => setMobileOpen(false)}
                      style={{
                        textAlign: 'center', padding: '11px', borderRadius: 8,
                        background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                        fontSize: 14, fontWeight: 600, color: '#f59e0b',
                        textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" stroke="#f59e0b" strokeWidth="1.5"/>
                        <circle cx="6" cy="6" r="2" fill="#f59e0b"/>
                      </svg>
                      Admin Panel
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    style={{
                      textAlign: 'center', padding: '11px', borderRadius: 8,
                      background: 'transparent', border: '1px solid rgba(255,255,255,0.1)',
                      fontSize: 14, fontWeight: 500, color: '#8b95b8',
                      textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/register"
                    style={{
                      textAlign: 'center', padding: '11px', borderRadius: 8,
                      background: '#2563eb', fontSize: 14, fontWeight: 600,
                      color: '#fff', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          .dpbim-desktop-nav { display: none !important; }
          .dpbim-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}