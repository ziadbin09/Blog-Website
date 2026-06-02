import { CSSProperties } from 'react';

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
  if (size === 'large') {
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
