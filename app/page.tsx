import AdSlot from '@/components/AdSlot';
import Link from 'next/link';
import { POST_IMAGES } from '@/lib/post-images';

export const metadata = {
  title: 'TechPulse — Mobile & Tech, Explained Simply',
};

export default function Home() {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="home-top-banner" tall />
      </div>

      {/* HERO */}
      <section className="wrap" style={{ padding: '48px 28px 24px' }}>
        <span className="eyebrow">Android · iOS · Reviews · How-To</span>
        <h1 style={{ fontSize: 'clamp(44px,7vw,84px)', maxWidth: '14ch', margin: '20px 0 22px' }}>
          Mobile tech, explained simply.
        </h1>
        <p className="muted" style={{ fontSize: 19, maxWidth: '60ch', lineHeight: 1.6 }}>
          TechPulse covers the phones, apps, and gadgets that matter — with honest reviews and no sponsored opinions.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" href="/blog" data-nav>
            Browse reviews
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
          <Link className="btn btn-ghost" href="/app" data-nav>Get the App</Link>
        </div>
        <div style={{ display: 'flex', gap: 40, marginTop: 48, flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: 26 }}>
          {[['1,200+','reviews & guides'],['24','tech writers'],['daily','news updates'],['4.8★','reader rating']].map(([n,l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 34 }}>{n}</div>
              <div className="faint" style={{ fontSize: 13 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="wrap section" style={{ paddingTop: 40 }}>
        <div className="section-head">
          <div><span className="eyebrow">Latest</span><h2 style={{ marginTop: 14 }}>This week in mobile tech</h2></div>
          <p className="sub">New phone reviews, software breakdowns, and what the specs actually mean for real users.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.85fr 1fr', gap: 28, alignItems: 'start' }}>
          <Link className="card" href="/blog/android-16-features" data-nav>
            <div className="thumb tone-1" style={{ aspectRatio: '16/10' }}>
              <img src={POST_IMAGES['android-16-features']} alt="Android 16 on Pixel phone" />
              <span className="cat">Android</span>
            </div>
            <div className="card-body" style={{ padding: '28px 30px 30px' }}>
              <h3 className="card-title" style={{ fontSize: 34, lineHeight: 1.05 }}>
                Android 16: the features that actually change how you use your phone
              </h3>
              <p className="excerpt" style={{ fontSize: 16, marginTop: 12 }}>
                Google&apos;s biggest Android release in years landed this week. We tested every feature so you know which ones are worth caring about.
              </p>
              <div className="card-meta">
                <span>Alex Chen</span><span className="dot"></span><span>12 min read</span><span className="dot"></span><span>Jun 1, 2026</span>
              </div>
            </div>
          </Link>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <AdSlot size="small" id="home-side-ad-1" /><AdSlot size="small" id="home-side-ad-2" />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="wrap" style={{ paddingBottom: 20 }}>
        <div className="grid-3">
          {[
            { slug:'galaxy-s25-ultra-review', tone:2, cat:'Smartphones', title:'Galaxy S25 Ultra review: two months, one camera, no going back', excerpt:'Samsung\'s best phone ever? After two months of daily use, here\'s our verdict.', author:'Sarah Kim', read:'15 min' },
            { slug:'iphone-17-vs-pixel-9', tone:4, cat:'Reviews', title:'iPhone 17 vs Pixel 9 Pro: the camera shootout that settles the debate', excerpt:'We shot 400 photos across 3 countries. The results might surprise you.', author:'Marcus Webb', read:'11 min' },
            { slug:'best-budget-android-2026', tone:3, cat:'Android', title:'Best budget Android phones under $200 in 2026', excerpt:'You don\'t need to spend $1,000 for a great Android experience. Here are the best value options.', author:'Priya Sharma', read:'9 min' },
            { slug:'smartphone-battery-fix', tone:6, cat:'How-To', title:'Why your phone battery dies fast — and exactly how to fix it', excerpt:'Most battery drain issues come from 4 common mistakes. This guide fixes all of them.', author:'Alex Chen', read:'8 min' },
            { slug:'chatgpt-mobile-tips', tone:5, cat:'AI & Mobile', title:'ChatGPT on mobile: the power features 90% of users never find', excerpt:'Hidden shortcuts, voice tricks, and workflow tips that make the app actually useful.', author:'Priya Sharma', read:'10 min' },
          ].map((p) => (
            <Link key={p.slug} className="card" href={`/blog/${p.slug}`} data-nav>
              <div className={`thumb tone-${p.tone}`}><img src={POST_IMAGES[p.slug]} alt={p.title} /><span className="cat">{p.cat}</span></div>
              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <p className="excerpt">{p.excerpt}</p>
                <div className="card-meta"><span>{p.author}</span><span className="dot"></span><span>{p.read}</span></div>
              </div>
            </Link>
          ))}
          <AdSlot size="small" id="home-grid-ad" style={{ height: 'auto', minHeight: 250 }} />
        </div>
      </section>

      <div className="wrap ad-zone ad-300-wrap" style={{ padding: '40px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <span className="faint" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Sponsored</span>
          <span style={{ flex: 1, height: 1, background: 'var(--border)' }}></span>
        </div>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          <AdSlot size="small" id="home-sponsored-1" fluid={false} /><AdSlot size="small" id="home-sponsored-2" fluid={false} />
        </div>
      </div>

      <div className="wrap ad-zone" style={{ padding: '24px 28px' }}>
        <AdSlot size="large" id="home-middle-banner" label="Billboard" />
      </div>

      {/* CATEGORIES */}
      <section className="wrap section">
        <div className="section-head">
          <div><span className="eyebrow">Browse by category</span><h2 style={{ marginTop: 14 }}>Find what you&apos;re looking for</h2></div>
          <p className="sub">From flagship reviews to beginner how-to guides.</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
          {[['Android',318],['iOS',274],['Smartphones',261],['Reviews',198],['Apps & Software',175],['How-To',154],['Wearables',143],['Gaming',129],['Cybersecurity',118],['AI & Mobile',97],['Tablets',84],['Accessories',72]].map(([label, count]) => (
            <Link key={label} href="/blog" data-nav className="tag" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', fontSize: 14 }}>
              {label}<span className="faint" style={{ fontSize: 12 }}>{count}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* DEEP DIVES */}
      <section className="wrap section">
        <div className="section-head">
          <div><span className="eyebrow">Deep dives</span><h2 style={{ marginTop: 14 }}>Long-form guides worth bookmarking</h2></div>
          <p className="sub">When a quick answer won&apos;t cut it.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            { slug:'wearables-2026', tone:2, cat:'Wearables', title:'Smartwatches in 2026: we tested every major model — here\'s who wins', excerpt:'Battery life, health tracking accuracy, and app support compared across 8 devices over 6 weeks.', author:'Zara Ahmed', read:'16 min', date:'May 9, 2026' },
            { slug:'android-malware-guide', tone:3, cat:'Cybersecurity', title:'How to spot and remove Android malware before it steals your data', excerpt:'Signs your phone is infected, tools to clean it, and habits to never get hit again.', author:'James Carter', read:'13 min', date:'May 5, 2026' },
          ].map((p) => (
            <Link key={p.slug} className="card" href={`/blog/${p.slug}`} data-nav>
              <div className={`thumb tone-${p.tone}`} style={{ aspectRatio: '16/9' }}><img src={POST_IMAGES[p.slug]} alt={p.title} /><span className="cat">{p.cat}</span></div>
              <div className="card-body" style={{ padding: '22px 24px 24px' }}>
                <h3 className="card-title" style={{ fontSize: 22 }}>{p.title}</h3>
                <p className="excerpt">{p.excerpt}</p>
                <div className="card-meta"><span>{p.author}</span><span className="dot"></span><span>{p.read}</span><span className="dot"></span><span>{p.date}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="wrap" style={{ padding: '20px 28px 60px' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, #1a0a3d 100%)',
          borderRadius: 20, padding: '56px 48px',
          display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center',
        }}>
          <div>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Free, every week</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', color: '#fff', margin: '14px 0 16px', maxWidth: '20ch' }}>
              The weekly tech roundup.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, maxWidth: '48ch', lineHeight: 1.65 }}>
              The top 5 tech stories, one new phone review, and one tip that actually saves you time — every Friday morning.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
              {['No spam','No affiliate links','Unsubscribe any time'].map((s) => (
                <span key={s} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 100, padding: '6px 14px', fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>{s}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 260 }}>
            <input type="email" placeholder="your@email.com" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 10, padding: '14px 18px', color: '#fff', fontSize: 15, outline: 'none' }} />
            <a className="btn btn-primary" href="#" style={{ justifyContent: 'center', background: '#fff', color: 'var(--accent)' }}>Subscribe free →</a>
          </div>
        </div>
      </section>

      {/* MORE STORIES */}
      <section className="wrap section">
        <div className="section-head">
          <div><span className="eyebrow">More stories</span><h2 style={{ marginTop: 14 }}>From across the archive</h2></div>
          <Link className="btn btn-ghost" href="/blog" data-nav style={{ whiteSpace: 'nowrap' }}>View all reviews →</Link>
        </div>
        <div className="grid-3">
          {[
            { slug:'oneplus-13-camera', tone:1, cat:'Reviews', title:'OnePlus 13 camera deep-dive: flagship quality at half the price', excerpt:'We compared 200 shots against the Galaxy S25. The results will make you rethink your budget.', author:'Sarah Kim', read:'14 min' },
            { slug:'5g-explained', tone:4, cat:'Smartphones', title:'5G speeds decoded: what the numbers on your plan actually mean', excerpt:'Sub-6, mmWave, and C-band explained without the marketing spin.', author:'Marcus Webb', read:'9 min' },
            { slug:'foldables-worth-it', tone:5, cat:'Smartphones', title:'Foldable phones in 2026: we tested them all — here\'s who should buy one', excerpt:'After a year of foldable phones, we finally know who they\'re actually for.', author:'Marcus Webb', read:'11 min' },
          ].map((p) => (
            <Link key={p.slug} className="card" href={`/blog/${p.slug}`} data-nav>
              <div className={`thumb tone-${p.tone}`}><img src={POST_IMAGES[p.slug]} alt={p.title} /><span className="cat">{p.cat}</span></div>
              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <p className="excerpt">{p.excerpt}</p>
                <div className="card-meta"><span>{p.author}</span><span className="dot"></span><span>{p.read}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="wrap" style={{ padding: '20px 28px 60px' }}>
        <blockquote style={{ borderLeft: '4px solid var(--accent)', paddingLeft: 32, margin: 0, maxWidth: '72ch' }}>
          <p style={{ fontSize: 'clamp(20px,3vw,28px)', lineHeight: 1.45, fontStyle: 'italic', color: 'var(--text)' }}>
            &ldquo;The most dangerous moment in tech journalism is when a spec sheet becomes a review. We test everything before we write anything.&rdquo;
          </p>
          <footer style={{ marginTop: 18, fontSize: 14, color: 'var(--muted)' }}>
            — Alex Chen, Editor-in-Chief, TechPulse
          </footer>
        </blockquote>
      </section>

      {/* MOST READ */}
      <section className="wrap section">
        <div className="section-head"><div><span className="eyebrow">Popular</span><h2 style={{ marginTop: 14 }}>Most read this month</h2></div></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { n:'01', slug:'galaxy-s25-ultra-review', cat:'Smartphones', title:'Galaxy S25 Ultra review: two months, one camera, no going back', author:'Sarah Kim', read:'15 min' },
            { n:'02', slug:'android-16-features', cat:'Android', title:'Android 16: the features that actually change how you use your phone', author:'Alex Chen', read:'12 min' },
            { n:'03', slug:'best-budget-android-2026', cat:'Android', title:'Best budget Android phones under $200 in 2026', author:'Priya Sharma', read:'9 min' },
            { n:'04', slug:'smartphone-battery-fix', cat:'How-To', title:'Why your phone battery dies fast — and exactly how to fix it', author:'Alex Chen', read:'8 min' },
            { n:'05', slug:'foldables-worth-it', cat:'Smartphones', title:'Foldable phones in 2026: we tested them all', author:'Marcus Webb', read:'11 min' },
          ].map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} data-nav style={{ display: 'grid', gridTemplateColumns: '48px 1fr auto', gap: 20, alignItems: 'center', padding: '20px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--muted)', lineHeight: 1 }}>{item.n}</span>
              <div>
                <span className="cat" style={{ fontSize: 11, marginBottom: 6, display: 'block' }}>{item.cat}</span>
                <h4 style={{ fontSize: 16, lineHeight: 1.35, color: 'var(--text)', fontWeight: 600 }}>{item.title}</h4>
                <div className="card-meta" style={{ marginTop: 6 }}><span>{item.author}</span></div>
              </div>
              <span className="faint" style={{ fontSize: 13, whiteSpace: 'nowrap' }}>{item.read}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="wrap section">
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="eyebrow">About TechPulse</span>
            <h2 style={{ fontSize: 42, margin: '18px 0 18px', maxWidth: '18ch' }}>Honest tech, no affiliate spin.</h2>
            <p className="muted" style={{ fontSize: 17, maxWidth: '58ch' }}>
              We buy every device we review. No loan units, no sponsored content, no affiliate deals that influence what we write. Just real testing and straight opinions.
            </p>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { title: 'We buy our own devices', desc: 'Every phone, tablet, and gadget we review is purchased independently — no manufacturer freebies.' },
                { title: 'Real-world testing', desc: 'We use devices as daily drivers for at least 2 weeks before publishing a review.' },
                { title: 'No affiliate pressure', desc: 'Our recommendations are not influenced by commission rates or brand relationships.' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', marginTop: 7, flexShrink: 0 }}></span>
                  <div>
                    <strong style={{ fontSize: 15 }}>{item.title}</strong>
                    <p className="muted" style={{ fontSize: 14, marginTop: 3 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ad-300-wrap"><AdSlot size="small" id="home-about-ad" /></div>
        </div>
      </section>

      <div className="wrap ad-zone ad-300-wrap" style={{ padding: '20px 28px 8px' }}>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          <AdSlot size="small" id="home-prefooter-1" fluid={false} /><AdSlot size="small" id="home-prefooter-2" fluid={false} />
        </div>
      </div>

      <div className="wrap ad-zone" style={{ padding: '24px 28px 0' }}>
        <AdSlot size="large" id="home-bottom-banner" />
      </div>
    </>
  );
}
