import GoogleAdInFeed from './GoogleAdInFeed';
import { IN_FEED } from '@/lib/ad-config';

export default function InFeedAd({ id, style }: { id: string; style?: React.CSSProperties }) {
  if (!IN_FEED) {
    return (
      <div id={id} className="ad ad-300 fluid" style={style}>
        <span className="ad-tag">Ad</span>
        <span className="ad-dim">
          <b>In-feed ad</b>
          Pending AdSense unit
        </span>
      </div>
    );
  }

  return (
    <div id={id} style={style}>
      <span className="faint" style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Ad</span>
      <GoogleAdInFeed slot={IN_FEED.slot} layoutKey={IN_FEED.layoutKey} />
    </div>
  );
}
