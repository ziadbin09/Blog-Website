import GoogleAdMultiplex from './GoogleAdMultiplex';
import { MULTIPLEX_SLOT } from '@/lib/ad-config';

export default function MultiplexAd({ id, style }: { id: string; style?: React.CSSProperties }) {
  if (!MULTIPLEX_SLOT) {
    return (
      <div id={id} className="ad ad-banner" style={style}>
        <span className="ad-tag">Ad</span>
        <span className="ad-dim">
          <b>Multiplex ad</b>
          Pending AdSense unit
        </span>
      </div>
    );
  }

  return (
    <div id={id} style={style}>
      <span className="faint" style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Ad</span>
      <GoogleAdMultiplex slot={MULTIPLEX_SLOT} />
    </div>
  );
}
