'use client';

import { useAdTimer } from './AdTimerProvider';

export default function AdTimerNotice() {
  const { ready, secondsLeft } = useAdTimer();

  return (
    <section className="wrap" style={{ padding: '20px 28px', textAlign: 'center' }}>
      {ready ? (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            color: 'var(--accent-text)',
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent-line)',
            borderRadius: 100,
            padding: '8px 18px',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Scroll down to continue
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
            <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
          </svg>
        </span>
      ) : (
        <span
          className="faint"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            border: '1px solid var(--border)',
            borderRadius: 100,
            padding: '8px 18px',
            fontSize: 14,
          }}
        >
          Loading ads&hellip; {secondsLeft}s
        </span>
      )}
    </section>
  );
}
