import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="brand" href="/" data-nav style={{ marginBottom: 14 }}>
              <span className="mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h3l2 6 4-14 2 8h2l2-3h3" />
                </svg>
              </span>
              <span className="name">
                Vita<b>lis</b>
              </span>
            </Link>
            <p className="muted" style={{ fontSize: 14, maxWidth: '38ch', marginTop: 6 }}>
              Independent medical research journalism. Sourced, reviewed, and written by people who practice.
            </p>
          </div>
          <div>
            <h4>Sections</h4>
            <Link href="/blog" data-nav>Clinical Trials</Link>
            <Link href="/blog" data-nav>Genomics</Link>
            <Link href="/blog" data-nav>Neuroscience</Link>
            <Link href="/blog" data-nav>Cardiology</Link>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contributors</a>
            <a href="#">Standards</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <h4>Get it</h4>
            <Link href="/app" data-nav>Android app</Link>
            <a href="#">Newsletter</a>
            <a href="#">RSS</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Vitalis Media. For information only — not medical advice.</span>
          <span>
            <Link href="/privacy" data-nav>Privacy</Link> · Terms · Editorial Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
