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
  const isWatch = pathname.startsWith('/watch');

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="wrap nav">
        {/* Brand — not clickable in watch mode */}
        {isWatch ? (
          <span className="brand" style={{ cursor: 'default' }}>
            <BrandMark />
            <span className="name">Vita<b>lis</b></span>
          </span>
        ) : (
          <Link className="brand" href="/" data-nav>
            <BrandMark />
            <span className="name">Vita<b>lis</b></span>
          </Link>
        )}

        {/* Nav links — disabled in watch mode */}
        <nav className="nav-links">
          {LINKS.map((l) => (
            isWatch ? (
              <span
                key={l.href}
                style={{ opacity: 0.35, cursor: 'not-allowed', userSelect: 'none', fontSize: 14 }}
              >
                {l.label}
              </span>
            ) : (
              <Link key={l.href} href={l.href} data-nav className={isActive(l.href) ? 'active' : undefined}>
                {l.label}
              </Link>
            )
          ))}
        </nav>

        <div className="nav-cta">
          {isWatch ? (
            <span
              className="btn btn-primary"
              style={{ opacity: 0.35, cursor: 'not-allowed', userSelect: 'none' }}
            >
              Get the App
            </span>
          ) : (
            <Link className="btn btn-primary" href="/app" data-nav>
              Get the App
            </Link>
          )}
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => !isWatch && setMenuOpen((v) => !v)}
            style={isWatch ? { opacity: 0.35, cursor: 'not-allowed' } : {}}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
