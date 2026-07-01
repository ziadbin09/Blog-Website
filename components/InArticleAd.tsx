import GoogleAdInArticle from './GoogleAdInArticle';
import { IN_ARTICLE_SLOT } from '@/lib/ad-config';

export default function InArticleAd({ id }: { id: string }) {
  if (!IN_ARTICLE_SLOT) {
    return (
      <div id={id} className="ad ad-banner" style={{ margin: '28px 0' }}>
        <span className="ad-tag">Ad</span>
        <span className="ad-dim">
          <b>In-article ad</b>
          Pending AdSense unit
        </span>
      </div>
    );
  }

  return (
    <div id={id} style={{ margin: '28px 0' }}>
      <span className="faint" style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Ad</span>
      <GoogleAdInArticle slot={IN_ARTICLE_SLOT} />
    </div>
  );
}
