'use client';

import Link from 'next/link';
import { useAdTimer } from './AdTimerProvider';

export default function AdTimerNextButton({ href }: { href: string }) {
  const { ready } = useAdTimer();

  if (!ready) return null;

  return (
    <section className="wrap" style={{ padding: '0 28px 60px', textAlign: 'center' }}>
      <Link className="btn btn-primary" href={href} data-nav style={{ display: 'inline-flex' }}>
        Next
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </section>
  );
}
