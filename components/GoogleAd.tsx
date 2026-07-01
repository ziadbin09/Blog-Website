'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface GoogleAdProps {
  slot: string;
  format?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

export default function GoogleAd({
  slot,
  format = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' },
}: GoogleAdProps) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense script not ready yet (e.g. blocked by an ad blocker) — safe to ignore.
    }
  }, []);

  return (
    <ins
      ref={insRef}
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-2083629374546177"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
    />
  );
}
