'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const BrandMark = () => (
  <span className="mark">
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="1"/>
      <line x1="9" y1="7" x2="9" y2="4"/><line x1="12" y1="7" x2="12" y2="4"/><line x1="15" y1="7" x2="15" y2="4"/>
      <line x1="9" y1="17" x2="9" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/><line x1="15" y1="17" x2="15" y2="20"/>
      <line x1="7" y1="9" x2="4" y2="9"/><line x1="7" y1="12" x2="4" y2="12"/><line x1="7" y1="15" x2="4" y2="15"/>
      <line x1="17" y1="9" x2="20" y2="9"/><line x1="17" y1="12" x2="20" y2="12"/><line x1="17" y1="15" x2="20" y2="15"/>
    </svg>
  </span>
);

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Reviews' },
  { href: '/blog/android-16-features', label: 'Latest' },
  { href: '/app', label: 'Get the App' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isWatch = pathname.startsWith('/watch');

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className="site-header">
      <div className="wrap nav">
        {isWatch ? (
          <span className="brand" style={{ cursor: 'default' }}>
            <BrandMark />
            <span className="name">Tech<b>Pulse</b></span>
          </span>
        ) : (
          <Link className="brand" href="/" data-nav>
            <BrandMark />
            <span className="name">Tech<b>Pulse</b></span>
          </Link>
        )}

        <nav className="nav-links">
          {LINKS.map((l) => (
            <span key={l.href} className={`nav-link${isActive(l.href) ? ' active' : ''}`}>
              {l.label}
            </span>
          ))}
        </nav>

        <div className="nav-cta">
          {isWatch ? (
            <span className="btn btn-primary" style={{ opacity: 0.35, cursor: 'not-allowed', userSelect: 'none' }}>Get the App</span>
          ) : (
            <Link className="btn btn-primary" href="/app" data-nav>Get the App</Link>
          )}
          <button
            type="button" className="nav-toggle" aria-label="Toggle menu" aria-expanded={menuOpen}
            onClick={() => !isWatch && setMenuOpen((v) => !v)}
            style={isWatch ? { opacity: 0.35, cursor: 'not-allowed' } : {}}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="wrap">
          {LINKS.filter((l) => l.href !== '/app').map((l) => (
            <span key={l.href} className={`nav-link${isActive(l.href) ? ' active' : ''}`}>{l.label}</span>
          ))}
          <Link className="btn btn-primary" href="/app" data-nav>Get the App</Link>
        </div>
      </div>
    </header>
  );
}
