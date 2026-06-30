import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="brand" href="/" data-nav style={{ marginBottom: 14 }}>
              <span className="mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="7" width="10" height="10" rx="1"/>
                  <line x1="9" y1="7" x2="9" y2="4"/><line x1="12" y1="7" x2="12" y2="4"/><line x1="15" y1="7" x2="15" y2="4"/>
                  <line x1="9" y1="17" x2="9" y2="20"/><line x1="15" y1="17" x2="15" y2="20"/>
                  <line x1="7" y1="9" x2="4" y2="9"/><line x1="7" y1="15" x2="4" y2="15"/>
                  <line x1="17" y1="12" x2="20" y2="12"/>
                </svg>
              </span>
              <span className="name">Tech<b>Pulse</b></span>
            </Link>
            <p className="muted" style={{ fontSize: 14, maxWidth: '38ch', marginTop: 6 }}>
              Independent mobile and tech journalism. Honest reviews, practical guides, and the latest news — no sponsored opinions.
            </p>
          </div>
          <div>
            <h4>Categories</h4>
            <Link href="/blog" data-nav>Android</Link>
            <Link href="/blog" data-nav>iOS</Link>
            <Link href="/blog" data-nav>Smartphones</Link>
            <Link href="/blog" data-nav>Reviews</Link>
          </div>
          <div>
            <h4>More</h4>
            <Link href="/blog" data-nav>Apps & Software</Link>
            <Link href="/blog" data-nav>Wearables</Link>
            <Link href="/blog" data-nav>Gaming</Link>
            <Link href="/blog" data-nav>Cybersecurity</Link>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Writers</a>
            <a href="#">Contact</a>
            <Link href="/app" data-nav>Get NovaPlex</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 TechPulse Media. For information only — always verify before purchasing.</span>
          <span>
            <Link href="/privacy" data-nav>Privacy</Link> · Terms · Editorial Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
