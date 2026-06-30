'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const BrandMark = () => (
  <span className="mark">
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h3l2 6 4-14 2 8h2l2-3h3" />
    </svg>
  </span>
);

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Research' },
  { href: '/blog/first-post', label: 'Latest Study' },
  { href: '/app', label: 'Get the App' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  if (pathname.startsWith('/watch')) return null;

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" href="/" data-nav>
          <BrandMark />
          <span className="name">
            Vita<b>lis</b>
          </span>
        </Link>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} data-nav className={isActive(l.href) ? 'active' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <Link className="btn btn-primary" href="/app" data-nav>
            Get the App
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* mobile slide-down menu (Get the App is the CTA button below, so skip it as a link) */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="wrap">
          {LINKS.filter((l) => l.href !== '/app').map((l) => (
            <Link key={l.href} href={l.href} data-nav className={isActive(l.href) ? 'active' : undefined}>
              {l.label}
            </Link>
          ))}
          <Link className="btn btn-primary" href="/app" data-nav>
            Get the App
          </Link>
        </div>
      </div>
    </header>
  );
}
