import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

type PostMeta = {
  title: string;
  cat: string;
  author: string;
  date: string;
  read: string;
  excerpt: string;
  tone: number;
};

const POSTS: Record<string, PostMeta> = {
  'android-16-features': { title:'Android 16: the features that actually change how you use your phone', cat:'Android', author:'Alex Chen', date:'Jun 1, 2026', read:'12 min', excerpt:'Google\'s biggest Android release in years landed this week. We tested every new feature to find out which ones actually matter.', tone:1 },
  'galaxy-s25-ultra-review': { title:'Galaxy S25 Ultra review: two months, one camera, no going back', cat:'Smartphones', author:'Sarah Kim', date:'May 28, 2026', read:'15 min', excerpt:'After two months of daily use, Samsung\'s Ultra still sets the bar every other Android phone has to clear.', tone:2 },
  'iphone-17-vs-pixel-9': { title:'iPhone 17 vs Pixel 9 Pro: the camera shootout that settles the debate', cat:'Reviews', author:'Marcus Webb', date:'May 24, 2026', read:'11 min', excerpt:'400 photos, six lighting conditions, three countries. One camera wins — and it\'s not the one everyone expected.', tone:4 },
  'best-budget-android-2026': { title:'Best budget Android phones under $200 in 2026', cat:'Android', author:'Priya Sharma', date:'May 20, 2026', read:'9 min', excerpt:'Great Android experiences no longer require a four-figure budget. These six phones prove the sub-$200 category has never been stronger.', tone:3 },
  'smartphone-battery-fix': { title:'Why your phone battery dies fast — and exactly how to fix it', cat:'How-To', author:'Alex Chen', date:'May 17, 2026', read:'8 min', excerpt:'Most battery drain problems trace back to four very fixable habits.', tone:6 },
  'chatgpt-mobile-tips': { title:'ChatGPT on mobile: the power features 90% of users never find', cat:'AI & Mobile', author:'Priya Sharma', date:'May 13, 2026', read:'10 min', excerpt:'Hidden shortcuts, memory controls, and workflow hacks that make ChatGPT actually useful every day.', tone:5 },
  'wearables-2026': { title:'Smartwatches in 2026: we tested every major model — here\'s who wins', cat:'Wearables', author:'Zara Ahmed', date:'May 9, 2026', read:'16 min', excerpt:'Eight weeks. Six watches. One conclusion: battery life is still the dealbreaker no spec sheet can hide.', tone:2 },
  'android-malware-guide': { title:'How to spot and remove Android malware before it steals your data', cat:'Cybersecurity', author:'James Carter', date:'May 5, 2026', read:'13 min', excerpt:'Signs of infection, tools to clean your device, and the habits that prevent reinfection.', tone:3 },
  'oneplus-13-camera': { title:'OnePlus 13 camera deep-dive: flagship quality at half the price', cat:'Reviews', author:'Sarah Kim', date:'Apr 30, 2026', read:'14 min', excerpt:'OnePlus\'s best camera yet — and it costs $300 less than the phones it beats.', tone:1 },
  '5g-explained': { title:'5G speeds decoded: what the numbers on your plan actually mean', cat:'Smartphones', author:'Marcus Webb', date:'Apr 25, 2026', read:'9 min', excerpt:'Sub-6GHz, mmWave, and C-band explained without the carrier marketing spin.', tone:4 },
  'best-android-apps-2026': { title:'50 best Android apps of 2026 — tested, ranked, and actually useful', cat:'Apps & Software', author:'Priya Sharma', date:'Apr 20, 2026', read:'16 min', excerpt:'200 apps tested. 50 survived. No filler, no sponsored picks — just apps worth installing.', tone:5 },
  'speed-up-android': { title:'How to make any Android phone feel new again in 10 minutes', cat:'How-To', author:'Alex Chen', date:'Apr 15, 2026', read:'8 min', excerpt:'Animation settings, background limits, and the developer option that transforms slow phones. Ten minutes, permanent results.', tone:6 },
  'foldables-worth-it': { title:'Foldable phones in 2026: we tested them all — here\'s who should buy one', cat:'Smartphones', author:'Marcus Webb', date:'Apr 10, 2026', read:'11 min', excerpt:'After a year with three foldables, we know who they\'re for and who should stick with slabs.', tone:1 },
  'ios-19-hidden-features': { title:'iOS 19 hidden features: 14 things Apple didn\'t announce on stage', cat:'iOS', author:'Sarah Kim', date:'Apr 5, 2026', read:'13 min', excerpt:'Apple buried 14 genuinely useful features in iOS 19. Here\'s where to find them.', tone:3 },
};

const RELATED = [
  { slug:'galaxy-s25-ultra-review', tone:2, cat:'Smartphones', title:'Galaxy S25 Ultra: two months of real use', author:'Sarah Kim', read:'15 min' },
  { slug:'best-budget-android-2026', tone:3, cat:'Android', title:'Best budget Android phones under $200', author:'Priya Sharma', read:'9 min' },
  { slug:'speed-up-android', tone:6, cat:'How-To', title:'Make any Android feel new in 10 minutes', author:'Alex Chen', read:'8 min' },
];

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];

  if (!post) {
    return (
      <div className="wrap" style={{ padding: '80px 28px', textAlign: 'center' }}>
        <h1>Article not found</h1>
        <p className="muted" style={{ marginTop: 12 }}>This article may have moved or been removed.</p>
        <Link className="btn btn-primary" href="/blog" data-nav style={{ marginTop: 24, display: 'inline-flex' }}>Back to Reviews →</Link>
      </div>
    );
  }

  return (
    <>
      {/* Top ad */}
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="post-top-banner" tall />
      </div>

      {/* Breadcrumb */}
      <div className="wrap" style={{ padding: '20px 28px 0', fontSize: 13, color: 'var(--muted)', display: 'flex', gap: 8, alignItems: 'center' }}>
        <Link href="/" data-nav style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
        <span>/</span>
        <Link href="/blog" data-nav style={{ color: 'inherit', textDecoration: 'none' }}>Reviews</Link>
        <span>/</span>
        <span className="cat" style={{ fontSize: 12 }}>{post.cat}</span>
      </div>

      {/* Hero */}
      <section className="wrap" style={{ padding: '28px 28px 0', maxWidth: 800 }}>
        <span className="cat" style={{ marginBottom: 14, display: 'block' }}>{post.cat}</span>
        <h1 style={{ fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.08, margin: '0 0 20px' }}>{post.title}</h1>
        <p className="muted" style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 24 }}>{post.excerpt}</p>
        <div className="card-meta" style={{ fontSize: 14, marginBottom: 28 }}>
          <span>{post.author}</span><span className="dot"></span><span>{post.date}</span><span className="dot"></span><span>{post.read} read</span>
        </div>
      </section>

      {/* Thumb */}
      <div className="wrap" style={{ padding: '0 28px 32px' }}>
        <div className={`thumb tone-${post.tone} pat`} style={{ borderRadius: 20, minHeight: 320, aspectRatio: '16/7' }}>
          <span className="cat" style={{ position: 'absolute', bottom: 20, left: 20, fontSize: 13 }}>{post.cat}</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 48, maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <article className="article-body">
          <AdSlot size="small" id="post-inline-1" />

          <h2>What&apos;s actually new — and why it matters</h2>
          <p>
            Every major Android release arrives with a list of features that reads like a marketing brief. Most of them land as minor tweaks dressed up as revolutions. A few, though, genuinely change the way the phone feels to use — and Android 16 has more of the latter than we&apos;ve seen in years.
          </p>
          <p>
            We spent three weeks running Android 16 across four different devices — a Pixel 9 Pro, a Galaxy S25, a mid-range Motorola, and an older OnePlus — to find out which features survive contact with real-world use and which ones disappear into the settings menu within 48 hours.
          </p>

          <h2>The new notification system</h2>
          <p>
            Android&apos;s notification system has needed a serious rethink for years, and Google has finally delivered one. The new Adaptive Notifications layer uses on-device AI to group, prioritise, and — crucially — silently log low-priority alerts instead of interrupting you with them.
          </p>
          <p>
            In practice, the difference is dramatic. After training for about a week, the system correctly identified 84% of the alerts we&apos;d have swiped away anyway and handled them silently. The remaining 16% (mostly banking and security notifications) came through normally. You can review the silenced batch at any time from the new Notification History card.
          </p>
          <p>
            This alone is worth the update if you find your phone constantly competing for your attention.
          </p>

          <AdSlot size="small" id="post-inline-2" />

          <h2>Battery intelligence, finally done right</h2>
          <p>
            Google has been promising smarter charging for three releases. Android 16 is the first version where it actually works. The Adaptive Charging engine now learns your specific schedule — not a generic overnight window — and adjusts charge rates accordingly.
          </p>
          <p>
            If you consistently plug in at midnight and unplug at 7am, it charges to 80% quickly, holds there, then fills the last 20% between 5:30 and 6:45am. This keeps the battery at lower charge states for most of the night, which meaningfully extends long-term battery health.
          </p>
          <p>
            Over our three-week test, the system predicted our morning unplug time correctly 91% of the time. On missed predictions, it erred on the side of a fuller charge rather than leaving us short.
          </p>

          <blockquote style={{ borderLeft: '4px solid var(--accent)', paddingLeft: 24, margin: '32px 0', fontStyle: 'italic', fontSize: 18, color: 'var(--text)' }}>
            &ldquo;Android 16 feels like the first release in a long time where the features they announced are the features you&apos;ll actually use.&rdquo;
          </blockquote>

          <AdSlot size="large" id="post-inline-3" />

          <h2>Privacy controls get a proper overhaul</h2>
          <p>
            The new Privacy Hub is the single clearest indicator that Google has been watching what Apple does and taking notes. It consolidates all permission controls — camera, microphone, location, contacts, health data — into one dashboard with timeline graphs showing exactly which app accessed what and when.
          </p>
          <p>
            More importantly, there are now two new permission tiers that didn&apos;t exist before: Temporary Access (an app gets one-time permission for a single session) and Background Watch (you can see if an app is quietly accessing the microphone in the background, with an automatic alert if it does).
          </p>
          <p>
            The Background Watch feature caught one of our test apps accessing the microphone during idle time. We won&apos;t name it, but we deleted it immediately.
          </p>

          <h2>The Live Captions upgrade</h2>
          <p>
            Live Captions — Google&apos;s on-device real-time transcription — has been upgraded with two genuinely useful additions: speaker identification and translation. Speaker ID labels different voices in a conversation, while translation can render captions in a different language from the spoken audio in real time.
          </p>
          <p>
            The translation is handled entirely on-device with no network round-trip. Quality is good enough for casual conversation (we tested English → Urdu, English → Spanish, and English → Korean) but it struggles with regional accents and technical vocabulary. Still, for free, offline, real-time translation, it is remarkable.
          </p>

          <AdSlot size="small" id="post-inline-4" />

          <h2>UI changes: subtle but consistent</h2>
          <p>
            The visual refresh in Android 16 isn&apos;t dramatic — it&apos;s the kind of polish you notice after a week rather than in the first five minutes. Corner radii are slightly larger, animations are more fluid, and the Quick Settings panel has been reorganised so the controls you actually need (Bluetooth, hotspot, screen rotation) are in the top row by default instead of buried.
          </p>
          <p>
            The lock screen gets the most noticeable treatment: customisation options that used to require a third-party launcher are now built in, including adjustable clock styles, a shortcut bar with up to four apps, and a new &ldquo;Now Playing&rdquo; widget that stays visible when music is active.
          </p>

          <h2>Who should update, and who should wait</h2>
          <p>
            If you&apos;re on a Pixel 7 or later, update immediately — the notification system and battery intelligence improvements alone justify it. If you&apos;re on a Samsung Galaxy S24 series or later, Samsung has already confirmed a clean One UI 8 rollout that preserves their features, so the same applies.
          </p>
          <p>
            If you&apos;re on a mid-range device from a smaller manufacturer, wait two to three weeks for them to push a carrier-approved build. Early test builds from some brands had instability issues with third-party launcher compatibility that should be resolved by then.
          </p>
          <p>
            One caveat: if you rely heavily on any banking apps, check the compatibility list before updating. Two major banking apps had root detection issues in early Android 16 builds that haven&apos;t been fully resolved as of this writing.
          </p>

          <AdSlot size="large" id="post-inline-5" />

          <h2>The verdict</h2>
          <p>
            Android 16 is the first Android release in three years where we would recommend updating immediately rather than waiting for stability. The notification intelligence, battery management improvements, and privacy overhaul are all genuinely useful — not features that sound good in a press release but disappear into the noise.
          </p>
          <p>
            The challenge, as always, is fragmentation. These features land on Pixels first and may take months to reach other manufacturers&apos; devices. If you&apos;re on a Pixel, you have one of the strongest software arguments for that platform in years. If you&apos;re on anything else, some of these features may look different — or not arrive at all.
          </p>

          {/* Tags */}
          <div style={{ marginTop: 40, display: 'flex', gap: 10, flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: 28 }}>
            {['Android 16','Android','Google','Pixel','Smartphones','Software Update'].map((t) => (
              <span key={t} className="tag" style={{ fontSize: 13 }}>{t}</span>
            ))}
          </div>

          {/* Author card */}
          <div style={{ marginTop: 32, padding: '24px 28px', background: 'var(--surface)', borderRadius: 16, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent),#1a0a3d)', flexShrink: 0 }}></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{post.author}</div>
              <div className="muted" style={{ fontSize: 13, marginTop: 2, marginBottom: 8 }}>Senior editor, Android & Software · TechPulse</div>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.55 }}>
                Alex has been covering Android since the Nexus era. He tests every major release on at least three devices and maintains the TechPulse app compatibility database.
              </p>
            </div>
          </div>

          <AdSlot size="large" id="post-bottom-1" />
          <AdSlot size="small" id="post-bottom-2" />
        </article>

        {/* Sidebar */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <AdSlot size="small" id="post-sidebar-1" />
          <AdSlot size="small" id="post-sidebar-2" />
          <AdSlot size="small" id="post-sidebar-3" />
          <div style={{ background: 'var(--surface)', borderRadius: 16, padding: '22px 20px' }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Newsletter</div>
            <p className="muted" style={{ fontSize: 14, lineHeight: 1.5, marginBottom: 16 }}>Top 5 tech stories every Friday, free.</p>
            <input type="email" placeholder="your@email.com" style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 14px', fontSize: 14, color: 'var(--text)', outline: 'none', boxSizing: 'border-box' }} />
            <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>Subscribe →</a>
          </div>
          <AdSlot size="small" id="post-sidebar-4" />
          <AdSlot size="small" id="post-sidebar-5" />
        </aside>
      </div>

      {/* Related articles */}
      <section className="wrap section">
        <div className="section-head">
          <div><span className="eyebrow">Keep reading</span><h2 style={{ marginTop: 14 }}>Related articles</h2></div>
          <Link className="btn btn-ghost" href="/blog" data-nav>All reviews →</Link>
        </div>
        <div className="grid-3">
          {RELATED.map((r) => (
            <Link key={r.slug} className="card" href={`/blog/${r.slug}`} data-nav>
              <div className={`thumb tone-${r.tone} pat`}><span className="cat">{r.cat}</span></div>
              <div className="card-body">
                <h3 className="card-title">{r.title}</h3>
                <div className="card-meta"><span>{r.author}</span><span className="dot"></span><span>{r.read}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '20px 28px 40px' }}>
        <AdSlot size="large" id="post-footer-banner" />
      </div>
    </>
  );
}
