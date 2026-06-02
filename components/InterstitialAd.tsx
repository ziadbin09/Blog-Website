'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Full-screen interstitial overlay shown when an internal <Link data-nav> is clicked.
 * Mirrors the behavior in the approved app.js:
 *   - 5s countdown with a conic-gradient progress ring
 *   - skip button fades in after 3s
 *   - navigates to the destination when the countdown ends or skip is pressed
 */
export default function InterstitialAd() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(5);
  const [skipReady, setSkipReady] = useState(false);
  const [progress, setProgress] = useState(0); // 0..100 for the ring
  const pendingHref = useRef<string | null>(null);

  const navigate = useCallback(() => {
    const href = pendingHref.current;
    pendingHref.current = null;
    setShow(false);
    if (href) {
      // small delay so the fade-out is visible, matching the original
      setTimeout(() => router.push(href), 320);
    }
  }, [router]);

  // Intercept clicks on internal nav links (data-nav)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[data-nav]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      // don't interstitial a click to the page we're already on
      if (href === window.location.pathname) return;

      e.preventDefault();
      pendingHref.current = href;
      setNum(5);
      setProgress(0);
      setSkipReady(false);
      setShow(true);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Run the countdown while the overlay is shown
  useEffect(() => {
    if (!show) return;

    let remaining = 5;
    const tick = setInterval(() => {
      remaining = Math.max(0, remaining - 0.1);
      setProgress(((5 - remaining) / 5) * 100);
      setNum(Math.ceil(remaining));
      if (remaining <= 0) {
        clearInterval(tick);
        navigate();
      }
    }, 100);

    const skipTimer = setTimeout(() => setSkipReady(true), 3000);

    return () => {
      clearInterval(tick);
      clearTimeout(skipTimer);
    };
  }, [show, navigate]);

  return (
    <div className={`interstitial${show ? ' show' : ''}`} aria-hidden={!show}>
      <div className="inter-card">
        <div className="countdown">
          <span className="ring" style={{ ['--p' as string]: `${progress}%` }}></span>
          <span className="num">{num}</span>s
        </div>
        <div className="ad inter-ad">
          <span className="ad-tag">Ad</span>
          <span className="ad-dim">
            <b>Advertisement</b>400 × 300
          </span>
        </div>
        <div className="inter-bar">
          <span className="inter-label">Your content loads after this message</span>
          <button
            className={`btn btn-ghost skip-btn${skipReady ? ' ready' : ''}`}
            onClick={navigate}
            type="button"
          >
            Skip&nbsp;
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
              <line x1="19" y1="5" x2="19" y2="19"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
