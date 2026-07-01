import { CSSProperties } from 'react';
import GoogleAd from './GoogleAd';

// Real AdSense slot IDs, filled in as ad units are created in the dashboard.
// Undefined => AdSlot falls back to the placeholder box below.
const SLOTS: Partial<Record<'large' | 'small', string>> = {
  small: '3347321825',
  large: '1678604247',
};

interface AdSlotProps {
  /** "large" => 970x250 leaderboard/billboard banner, "small" => 300x250 rectangle */
  size: 'large' | 'small';
  id: string;
  /** bold label shown in the placeholder, e.g. "Leaderboard", "Sidebar" */
  label?: string;
  /** dimension caption, defaults to the size's standard dims */
  dims?: string;
  /** taller leaderboard variant (large only) */
  tall?: boolean;
  /** full-width rectangle (small only) — default true */
  fluid?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function AdSlot({
  size,
  id,
  label,
  dims,
  tall = false,
  fluid = true,
  className = '',
  style,
}: AdSlotProps) {
  // Always show the placeholder box in local dev, so ad placement/sizing
  // can be previewed without waiting on AdSense approval.
  const slot = process.env.NODE_ENV === 'production' ? SLOTS[size] : undefined;

  if (size === 'large') {
    if (slot) {
      return (
        <div id={id} className={`ad ad-banner ad-live${tall ? ' tall' : ''} ${className}`.trim()} style={style}>
          <span className="ad-tag">Ad</span>
          <GoogleAd slot={slot} />
        </div>
      );
    }
    return (
      <div id={id} className={`ad ad-banner${tall ? ' tall' : ''} ${className}`.trim()} style={style}>
        <span className="ad-tag">Ad</span>
        <span className="ad-dim">
          <b>{label ?? 'Leaderboard'}</b>
          {dims ?? '970 × 250'}
        </span>
      </div>
    );
  }

  if (slot) {
    return (
      <div id={id} className={`ad ad-300 ad-live${fluid ? ' fluid' : ''} ${className}`.trim()} style={style}>
        <span className="ad-tag">Ad</span>
        <GoogleAd slot={slot} />
      </div>
    );
  }

  return (
    <div id={id} className={`ad ad-300${fluid ? ' fluid' : ''} ${className}`.trim()} style={style}>
      <span className="ad-tag">Ad</span>
      <span className="ad-dim">
        <b>{label ?? 'Medium Rectangle'}</b>
        {dims ?? '300 × 250'}
      </span>
    </div>
  );
}
