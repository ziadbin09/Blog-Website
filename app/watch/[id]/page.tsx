'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import AdSlot from '@/components/AdSlot';

const TIMER = 15;
const NOVAPLEX_DOMAIN = 'novaplex-links.pages.dev';

// ─── Rewarded-ad trigger ────────────────────────────────────────────────────
// When you get your PropellerAds Zone ID, replace the body of this function:
//
//   (function(d,z,s){
//     s.src='https://'+d+'/401/'+YOUR_ZONE_ID;
//     try{(document.body||document.documentElement).appendChild(s)}catch(e){}
//   })('groleegni.net', YOUR_ZONE_ID, document.createElement('script'));
//
// PropellerAds calls window.__rewarded_done() when the ad completes — set
// that callback before triggering the ad, then open NovaPlex inside it.
// ────────────────────────────────────────────────────────────────────────────
function showRewardedAd(onComplete: () => void) {
  // PLACEHOLDER — no ad network connected yet.
  // Replace this with your PropellerAds / AdSense rewarded script.
  onComplete();
}

export default function WatchPage() {
  const { id } = useParams<{ id: string }>();
  const [timeLeft, setTimeLeft] = useState(TIMER);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  // Countdown
  useEffect(() => {
    if (timeLeft <= 0) { setReady(true); return; }
    const t = setTimeout(() => setTimeLeft((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  const handleWatch = useCallback(() => {
    setLoading(true);
    showRewardedAd(() => {
      window.location.href = `https://${NOVAPLEX_DOMAIN}/watch/${id}`;
    });
  }, [id]);

  // Arc math for the SVG countdown ring
  const radius = 52;
  const circ = 2 * Math.PI * radius;
  const progress = timeLeft / TIMER;
  const dash = circ * progress;

  return (
    <>
      {/* TOP BANNER */}
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="watch-top-banner" tall />
      </div>

      {/* MAIN LAYOUT */}
      <div className="wrap" style={{ padding: '40px 28px 60px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 32, alignItems: 'start' }}>

        {/* CENTER CARD */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: 24,
          padding: '56px 48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 0,
        }}>
          {/* Icon */}
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent) 0%, #2a1758 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 28,
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>

          <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', lineHeight: 1.1, marginBottom: 10 }}>
            Your video is ready
          </h1>
          <p className="muted" style={{ fontSize: 16, maxWidth: '36ch', lineHeight: 1.6, marginBottom: 40 }}>
            {ready
              ? 'Click the button below to watch on NovaPlex.'
              : 'Please wait a moment while we prepare your link.'}
          </p>

          {/* COUNTDOWN RING or BUTTON */}
          {!ready ? (
            <div style={{ position: 'relative', width: 120, height: 120, marginBottom: 32 }}>
              <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
                {/* track */}
                <circle cx="60" cy="60" r={radius} fill="none" stroke="var(--border)" strokeWidth="6" />
                {/* fill */}
                <circle
                  cx="60" cy="60" r={radius}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${dash} ${circ}`}
                  style={{ transition: 'stroke-dasharray 0.9s linear' }}
                />
              </svg>
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 36, lineHeight: 1 }}>{timeLeft}</span>
                <span className="faint" style={{ fontSize: 11, marginTop: 2 }}>seconds</span>
              </div>
            </div>
          ) : (
            <button
              onClick={handleWatch}
              disabled={loading}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                background: loading ? 'var(--muted)' : 'linear-gradient(135deg, var(--accent) 0%, #2a1758 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: 14,
                padding: '18px 40px',
                fontSize: 18,
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                marginBottom: 32,
                transition: 'opacity 0.2s',
                minWidth: 240,
              }}
            >
              {loading ? (
                <>
                  <span style={{
                    width: 20, height: 20, border: '2px solid rgba(255,255,255,0.3)',
                    borderTopColor: '#fff', borderRadius: '50%',
                    animation: 'spin 0.7s linear infinite', display: 'inline-block',
                  }} />
                  Loading ad...
                </>
              ) : (
                <>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch on NovaPlex
                </>
              )}
            </button>
          )}

          {/* Info line */}
          <p className="faint" style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            A short ad plays before your video opens
          </p>

          {/* Divider */}
          <div style={{ width: '100%', height: 1, background: 'var(--border)', margin: '32px 0' }} />

          {/* How it works */}
          <div style={{ display: 'flex', gap: 28, justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
            {[
              { n: '1', label: 'Wait for timer' },
              { n: '2', label: 'Watch short ad' },
              { n: '3', label: 'Open in NovaPlex' },
            ].map((s) => (
              <div key={s.n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--accent)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700,
                }}>{s.n}</span>
                <span className="muted" style={{ fontSize: 13 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR ADS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <AdSlot size="small" id="watch-side-1" label="Sidebar" />
          <AdSlot size="small" id="watch-side-2" label="Sidebar" />
          <AdSlot size="small" id="watch-side-3" label="Sidebar" />
        </div>
      </div>

      {/* BOTTOM BANNER */}
      <div className="wrap ad-zone" style={{ padding: '0 28px 40px' }}>
        <AdSlot size="large" id="watch-bottom-banner" />
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 700px) {
          .watch-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
