'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import AdSlot from '@/components/AdSlot';
import { POST_IMAGES } from '@/lib/post-images';

const NOVAPLEX_DOMAIN = 'novaplex-links.pages.dev';
const STEP_TIMER = 15;

const STEPS = [
  { label: 'Home',    btn: 'Continue to Reviews →' },
  { label: 'Reviews', btn: 'Continue to Latest →' },
  { label: 'Latest',  btn: 'Get the App →' },
  { label: 'Get the App', btn: 'Open in NovaPlex →' },
];

// Replace with your PropellerAds / ad network interstitial script.
function fireInterstitial(onComplete: () => void) {
  onComplete(); // PLACEHOLDER
}

// ── Shared: timer banner ──────────────────────────────────────────────────────
function TimerBanner({ timeLeft, ready, step }: { timeLeft: number; ready: boolean; step: number }) {
  const pct = ((STEP_TIMER - timeLeft) / STEP_TIMER) * 100;
  return (
    <div style={{
      background: ready ? 'linear-gradient(90deg,#1a4d1a,#0f3d0f)' : 'linear-gradient(90deg,var(--accent),#2a1758)',
      padding: '14px 28px',
      display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {STEPS.map((s, i) => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: 24, height: 24, borderRadius: '50%',
              background: i < step ? 'rgba(255,255,255,0.9)' : i === step ? '#fff' : 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              {i < step
                ? <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--accent)"><polyline points="20 6 9 17 4 12"/></svg>
                : <span style={{ width: 8, height: 8, borderRadius: '50%', background: i === step ? 'var(--accent)' : 'transparent' }} />
              }
            </div>
            <span style={{ fontSize: 12, color: i === step ? '#fff' : 'rgba(255,255,255,0.5)', fontWeight: i === step ? 700 : 400, whiteSpace: 'nowrap' }}>{s.label}</span>
            {i < STEPS.length - 1 && <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.25)' }} />}
          </div>
        ))}
      </div>

      <div style={{ flex: 1, minWidth: 200 }}>
        {!ready ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ height: 4, background: 'rgba(255,255,255,0.2)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${pct}%`, background: '#fff', borderRadius: 4, transition: 'width 1s linear' }} />
            </div>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>Loading your link… {timeLeft}s remaining</span>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>
            <span style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Link ready — scroll to the bottom to continue</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Continue button at very bottom ────────────────────────────────────────────
function ContinueButton({ ready, onClick, label }: { ready: boolean; onClick: () => void; label: string }) {
  return (
    <div style={{ padding: '60px 28px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      {!ready && (
        <p className="muted" style={{ fontSize: 14, textAlign: 'center' }}>
          Your link is still loading — please wait for the timer above to finish.
        </p>
      )}
      <button
        onClick={onClick}
        disabled={!ready}
        style={{
          background: ready ? 'linear-gradient(135deg,var(--accent),#2a1758)' : 'var(--border)',
          color: ready ? '#fff' : 'var(--muted)',
          border: 'none', borderRadius: 14,
          padding: '20px 56px', fontSize: 18, fontWeight: 700,
          cursor: ready ? 'pointer' : 'not-allowed',
          transition: 'all 0.3s',
          minWidth: 280,
          boxShadow: ready ? '0 8px 32px rgba(108,43,217,0.35)' : 'none',
        }}
      >
        {label}
      </button>
      {ready && (
        <p className="faint" style={{ fontSize: 13, textAlign: 'center' }}>
          A short ad will play before the next page
        </p>
      )}
    </div>
  );
}

// ── Step 0: Home ──────────────────────────────────────────────────────────────
function Step0({ ready, onContinue }: { ready: boolean; onContinue: () => void }) {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="w0-top" tall />
      </div>

      <section className="wrap" style={{ padding: '48px 28px 24px' }}>
        <span className="eyebrow">Android · iOS · Reviews · How-To</span>
        <h1 style={{ fontSize: 'clamp(44px,7vw,84px)', maxWidth: '14ch', margin: '20px 0 22px' }}>
          Mobile tech, explained simply.
        </h1>
        <p className="muted" style={{ fontSize: 19, maxWidth: '60ch', lineHeight: 1.6 }}>
          TechPulse covers the phones, apps, and gadgets that matter — with honest reviews and no sponsored opinions.
        </p>
        <div style={{ display: 'flex', gap: 40, marginTop: 48, flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: 26 }}>
          {[['1,200+','reviews & guides'],['24','tech writers'],['daily','news updates'],['4.8★','reader rating']].map(([n,l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 34 }}>{n}</div>
              <div className="faint" style={{ fontSize: 13 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 40 }}>
        <div className="section-head">
          <div><span className="eyebrow">Latest</span><h2 style={{ marginTop: 14 }}>This week in mobile tech</h2></div>
          <p className="sub">New phone reviews, software breakdowns, and what the specs actually mean for real users.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.85fr 1fr', gap: 28, alignItems: 'start' }}>
          <div className="card" style={{ cursor: 'default' }}>
            <div className="thumb tone-1" style={{ aspectRatio: '16/10' }}><img src={POST_IMAGES['android-16-features']} alt="Android 16" /><span className="cat">Android</span></div>
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
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <AdSlot size="small" id="w0-side-1" /><AdSlot size="small" id="w0-side-2" />
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 20 }}>
        <div className="grid-3">
          {[
            { tone:2, cat:'Smartphones', title:'Galaxy S25 Ultra: two months, one camera, no going back', excerpt:'Samsung\'s best phone ever? After two months of daily use, here\'s our verdict.', author:'Sarah Kim', read:'15 min' },
            { tone:4, cat:'Reviews', title:'iPhone 17 vs Pixel 9 Pro: camera shootout that settles the debate', excerpt:'400 photos across 3 countries. The results might surprise you.', author:'Marcus Webb', read:'11 min' },
            { tone:3, cat:'Android', title:'Best budget Android phones under $200 in 2026', excerpt:'You don\'t need to spend $1,000 for a great Android experience.', author:'Priya Sharma', read:'9 min' },
            { tone:6, cat:'How-To', title:'Why your phone battery dies fast — and exactly how to fix it', excerpt:'Most battery drain issues come from 4 common mistakes. This guide fixes all of them.', author:'Alex Chen', read:'8 min' },
            { tone:5, cat:'AI & Mobile', title:'ChatGPT on mobile: the power features 90% of users never find', excerpt:'Hidden shortcuts, voice tricks, and workflow tips that make the app actually useful.', author:'Priya Sharma', read:'10 min' },
          ].map((p) => (
            <div key={p.title} className="card" style={{ cursor: 'default' }}>
              <div className={`thumb tone-${p.tone}`}><img src={POST_IMAGES[p.slug as keyof typeof POST_IMAGES] ?? POST_IMAGES['android-16-features']} alt={p.title} /><span className="cat">{p.cat}</span></div>
              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <p className="excerpt">{p.excerpt}</p>
                <div className="card-meta"><span>{p.author}</span><span className="dot"></span><span>{p.read}</span></div>
              </div>
            </div>
          ))}
          <AdSlot size="small" id="w0-grid-ad" style={{ height: 'auto', minHeight: 250 }} />
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '24px 28px' }}>
        <AdSlot size="large" id="w0-mid" />
      </div>

      <section className="wrap section">
        <div className="section-head"><div><span className="eyebrow">Browse by category</span><h2 style={{ marginTop: 14 }}>Find what you&apos;re looking for</h2></div></div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
          {[['Android',318],['iOS',274],['Smartphones',261],['Reviews',198],['Apps & Software',175],['How-To',154],['Wearables',143],['Gaming',129],['Cybersecurity',118],['AI & Mobile',97],['Tablets',84],['Accessories',72]].map(([label, count]) => (
            <span key={label} className="tag" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', fontSize: 14 }}>
              {label}<span className="faint" style={{ fontSize: 12 }}>{count}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head"><div><span className="eyebrow">Deep dives</span><h2 style={{ marginTop: 14 }}>Long-form guides worth bookmarking</h2></div></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            { tone:2, cat:'Wearables', title:'Smartwatches in 2026: we tested every major model — here\'s who wins', excerpt:'Battery life, health tracking accuracy, and app support compared across 8 devices over 6 weeks.', author:'Zara Ahmed', read:'16 min', date:'May 9, 2026' },
            { tone:3, cat:'Cybersecurity', title:'How to spot and remove Android malware before it steals your data', excerpt:'Signs your phone is infected, tools to clean it, and habits to never get hit again.', author:'James Carter', read:'13 min', date:'May 5, 2026' },
          ].map((p) => (
            <div key={p.title} className="card" style={{ cursor: 'default' }}>
              <div className={`thumb tone-${p.tone}`} style={{ aspectRatio: '16/9' }}><img src={POST_IMAGES[p.slug as keyof typeof POST_IMAGES] ?? POST_IMAGES['android-16-features']} alt={p.title} /><span className="cat">{p.cat}</span></div>
              <div className="card-body" style={{ padding: '22px 24px 24px' }}>
                <h3 className="card-title" style={{ fontSize: 22 }}>{p.title}</h3>
                <p className="excerpt">{p.excerpt}</p>
                <div className="card-meta"><span>{p.author}</span><span className="dot"></span><span>{p.read}</span><span className="dot"></span><span>{p.date}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap ad-zone ad-300-wrap" style={{ padding: '20px 28px' }}>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          <AdSlot size="small" id="w0-sp-1" fluid={false} /><AdSlot size="small" id="w0-sp-2" fluid={false} />
        </div>
      </div>

      <section className="wrap section">
        <div className="section-head"><div><span className="eyebrow">Popular</span><h2 style={{ marginTop: 14 }}>Most read this month</h2></div></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { n:'01', cat:'Smartphones', title:'Galaxy S25 Ultra: two months, one camera, no going back', author:'Sarah Kim', read:'15 min' },
            { n:'02', cat:'Android', title:'Android 16: the features that actually change how you use your phone', author:'Alex Chen', read:'12 min' },
            { n:'03', cat:'Android', title:'Best budget Android phones under $200 in 2026', author:'Priya Sharma', read:'9 min' },
            { n:'04', cat:'How-To', title:'Why your phone battery dies fast — and exactly how to fix it', author:'Alex Chen', read:'8 min' },
            { n:'05', cat:'Smartphones', title:'Foldable phones in 2026: we tested them all', author:'Marcus Webb', read:'11 min' },
          ].map((item) => (
            <div key={item.n} style={{ display: 'grid', gridTemplateColumns: '48px 1fr auto', gap: 20, alignItems: 'center', padding: '20px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--muted)', lineHeight: 1 }}>{item.n}</span>
              <div>
                <span className="cat" style={{ fontSize: 11, marginBottom: 6, display: 'block' }}>{item.cat}</span>
                <h4 style={{ fontSize: 16, lineHeight: 1.35, color: 'var(--text)', fontWeight: 600 }}>{item.title}</h4>
                <div className="card-meta" style={{ marginTop: 6 }}><span>{item.author}</span></div>
              </div>
              <span className="faint" style={{ fontSize: 13, whiteSpace: 'nowrap' }}>{item.read}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '24px 28px' }}>
        <AdSlot size="large" id="w0-bot" />
      </div>

      <ContinueButton ready={ready} onClick={onContinue} label={STEPS[0].btn} />
    </>
  );
}

// ── Step 1: Reviews ───────────────────────────────────────────────────────────
function Step1({ ready, onContinue }: { ready: boolean; onContinue: () => void }) {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="w1-top" tall />
      </div>

      <section className="wrap" style={{ padding: '48px 28px 24px' }}>
        <span className="eyebrow">Reviews</span>
        <h1 style={{ fontSize: 'clamp(40px,6vw,72px)', maxWidth: '18ch', margin: '18px 0 18px' }}>All reviews, tested and ranked</h1>
        <p className="muted" style={{ fontSize: 18, maxWidth: '58ch', lineHeight: 1.65 }}>
          Every device we review is purchased independently and tested for at least two weeks before we write a single word.
        </p>
      </section>

      <section className="wrap section" style={{ paddingTop: 16 }}>
        <div className="with-side">
          <div>
            {[
              { tone:1, cat:'Android', title:'Android 16: the features that actually change how you use your phone', excerpt:'Google\'s biggest Android release in years. We tested every new feature across three weeks of daily use.', author:'Alex Chen', read:'12 min', date:'Jun 1, 2026' },
              { tone:2, cat:'Smartphones', title:'Galaxy S25 Ultra review: two months, one camera, no going back', excerpt:'After eight weeks of daily photography and demanding workloads, Samsung\'s Ultra still sets the benchmark.', author:'Sarah Kim', read:'15 min', date:'May 28, 2026' },
              { tone:4, cat:'Reviews', title:'iPhone 17 vs Pixel 9 Pro: the camera shootout that settles the debate', excerpt:'400 photos, six lighting conditions, three countries. One camera wins — and it\'s not the one everyone expected.', author:'Marcus Webb', read:'11 min', date:'May 24, 2026' },
              { tone:3, cat:'Android', title:'Best budget Android phones under $200 in 2026', excerpt:'Great Android experiences no longer require a four-figure budget. These six phones prove the sub-$200 category has never been stronger.', author:'Priya Sharma', read:'9 min', date:'May 20, 2026' },
              { tone:6, cat:'How-To', title:'Why your phone battery dies fast — and exactly how to fix it', excerpt:'Most battery drain problems trace back to four very fixable habits. Every setting, every app, every charging mistake covered.', author:'Alex Chen', read:'8 min', date:'May 17, 2026' },
              { tone:5, cat:'AI & Mobile', title:'ChatGPT on mobile: the power features 90% of users never find', excerpt:'Hidden voice shortcuts, custom instructions, memory controls, and workflow hacks that make the app actually useful.', author:'Priya Sharma', read:'10 min', date:'May 13, 2026' },
              { tone:2, cat:'Wearables', title:'Smartwatches in 2026: we tested every major model — here\'s who wins', excerpt:'Eight weeks. Six watches. Battery life is still the dealbreaker no spec sheet can hide. Here\'s which watch lasted.', author:'Zara Ahmed', read:'16 min', date:'May 9, 2026' },
              { tone:3, cat:'Cybersecurity', title:'How to spot and remove Android malware before it steals your data', excerpt:'Signs of infection, tools to clean your device, and the exact habits that prevent reinfection.', author:'James Carter', read:'13 min', date:'May 5, 2026' },
              { tone:1, cat:'Reviews', title:'OnePlus 13 camera deep-dive: flagship quality at half the price', excerpt:'OnePlus under-promises and over-delivers again. The 13 is their best camera yet — $300 less than the phones it beats.', author:'Sarah Kim', read:'14 min', date:'Apr 30, 2026' },
              { tone:4, cat:'Smartphones', title:'5G speeds decoded: what the numbers on your plan actually mean', excerpt:'Sub-6GHz, mmWave, and C-band explained without carrier marketing spin.', author:'Marcus Webb', read:'9 min', date:'Apr 25, 2026' },
              { tone:5, cat:'Apps & Software', title:'50 best Android apps of 2026 — tested, ranked, and actually useful', excerpt:'200 apps tested. 50 survived our ruthless cut. No filler, no sponsored picks.', author:'Priya Sharma', read:'16 min', date:'Apr 20, 2026' },
              { tone:6, cat:'How-To', title:'How to make any Android phone feel new again in 10 minutes', excerpt:'Animation settings, background limits, battery optimisation, and the developer option that transforms slow phones.', author:'Alex Chen', read:'8 min', date:'Apr 15, 2026' },
              { tone:1, cat:'Smartphones', title:'Foldable phones in 2026: we tested them all — here\'s who should buy one', excerpt:'After a full year living with three foldables, we know exactly who they\'re for.', author:'Marcus Webb', read:'11 min', date:'Apr 10, 2026' },
              { tone:3, cat:'iOS', title:'iOS 19 hidden features: 14 things Apple didn\'t announce on stage', excerpt:'Buried in the iOS 19 update are 14 genuinely useful features Apple never mentioned. Here\'s where to find them.', author:'Sarah Kim', read:'13 min', date:'Apr 5, 2026' },
            ].map((p, i) => (
              <div key={p.title}>
                <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 20, padding: '22px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                  <div className={`thumb tone-${p.tone}`} style={{ height: 72, borderRadius: 10 }}><img src={POST_IMAGES[p.slug as keyof typeof POST_IMAGES] ?? POST_IMAGES['android-16-features']} alt={p.title} /><span className="cat" style={{ fontSize: 10 }}>{p.cat}</span></div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.35, marginBottom: 6 }}>{p.title}</h3>
                    <p className="muted" style={{ fontSize: 14, lineHeight: 1.55, marginBottom: 8 }}>{p.excerpt}</p>
                    <div className="card-meta"><span>{p.author}</span><span className="dot"></span><span>{p.read}</span><span className="dot"></span><span>{p.date}</span></div>
                  </div>
                </div>
                {(i === 3 || i === 7) && (
                  <div style={{ padding: '16px 0' }}>
                    <AdSlot size="large" id={`w1-mid-${i}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <aside className="sidebar">
            <AdSlot size="small" id="w1-side-1" label="Sidebar" />
            <div className="side-card">
              <h4 style={{ fontSize: 16 }}>Browse categories</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                {['Android','iOS','Smartphones','Reviews','Apps','How-To','Wearables','Cybersecurity'].map((t) => (
                  <span key={t} className="tag" style={{ fontSize: 12, padding: '6px 12px' }}>{t}</span>
                ))}
              </div>
            </div>
            <AdSlot size="small" id="w1-side-2" label="Sidebar" />
            <div className="side-card">
              <h4 style={{ fontSize: 16 }}>About TechPulse</h4>
              <p className="muted" style={{ fontSize: 13, lineHeight: 1.6, marginTop: 8 }}>Independent mobile and tech journalism. Every review starts with a device we bought ourselves.</p>
            </div>
            <AdSlot size="small" id="w1-side-3" label="Sidebar" />
          </aside>
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '0 28px 24px' }}>
        <AdSlot size="large" id="w1-bot" />
      </div>

      <ContinueButton ready={ready} onClick={onContinue} label={STEPS[1].btn} />
    </>
  );
}

// ── Step 2: Latest ────────────────────────────────────────────────────────────
function Step2({ ready, onContinue }: { ready: boolean; onContinue: () => void }) {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="w2-top" tall />
      </div>

      <section className="wrap" style={{ padding: '36px 28px 0' }}>
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow">Android · Software</span>
          <h1 style={{ fontSize: 'clamp(36px,5.4vw,60px)', margin: '18px 0 22px', lineHeight: 1.04 }}>
            Android 16: the features that actually change how you use your phone
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', color: 'var(--muted)', fontSize: 14.5 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent),#2a1758)', display: 'inline-block' }}></span>
              <b style={{ color: 'var(--text)', fontWeight: 600 }}>Alex Chen</b>
            </span>
            <span className="dot"></span><span>12 min read</span>
            <span className="dot"></span><span>June 1, 2026</span>
          </div>
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 28 }}>
        <div className="with-side">
          <article className="article" style={{ maxWidth: 760 }}>
            <figure style={{ marginTop: 0 }}>
              <div className="fig-ph thumb tone-1" style={{ height: 320 }}><img src={POST_IMAGES['android-16-features']} alt="Android 16 on Pixel" /></div>
              <figcaption>Android 16 running on a Pixel 9 Pro. Photo: TechPulse / Alex Chen.</figcaption>
            </figure>
            <p>Every major Android release arrives with a list of features that reads like a marketing brief. Most land as minor tweaks dressed up as revolutions. A few genuinely change the way the phone feels to use — and Android 16 has more of the latter than we&apos;ve seen in years.</p>
            <p>We spent three weeks running Android 16 across four devices — a Pixel 9 Pro, a Galaxy S25, a mid-range Motorola, and an older OnePlus — to find out which features survive contact with real-world use and which ones vanish into the settings menu within 48 hours.</p>

            <h2>The new notification system</h2>
            <p>Android&apos;s notification system has needed a serious rethink for years, and Google has finally delivered one. The new Adaptive Notifications layer uses on-device AI to group, prioritise, and silently log low-priority alerts instead of interrupting you with them.</p>
            <p>In practice, the difference is dramatic. After training for about a week, the system correctly identified 84% of the alerts we&apos;d have swiped away anyway and handled them silently. The remaining 16% — mostly banking and security notifications — came through normally.</p>

            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="w2-c1" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>

            <h2>Battery intelligence, finally done right</h2>
            <p>Google has been promising smarter charging for three releases. Android 16 is the first version where it actually works. The Adaptive Charging engine now learns your specific schedule and adjusts charge rates accordingly.</p>
            <p>If you consistently plug in at midnight and unplug at 7am, it charges to 80% quickly, holds there, then fills the last 20% between 5:30 and 6:45am. This keeps the battery at lower charge states for most of the night, meaningfully extending long-term battery health.</p>
            <p>Over our three-week test, the system predicted our morning unplug time correctly 91% of the time.</p>

            <blockquote>&ldquo;Android 16 feels like the first release in a long time where the features they announced are the ones you&apos;ll actually use.&rdquo;</blockquote>

            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="w2-c2" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>
            <div className="ad-zone" style={{ padding: '18px 0' }}>
              <AdSlot size="large" id="w2-mid" label="In-article Billboard" />
            </div>

            <h2>Privacy controls get a proper overhaul</h2>
            <p>The new Privacy Hub consolidates all permission controls into one dashboard with timeline graphs showing exactly which app accessed what and when. More importantly, there are now two new permission tiers: Temporary Access and Background Watch.</p>
            <p>The Background Watch feature caught one of our test apps accessing the microphone during idle time. We deleted it immediately.</p>

            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="w2-c3" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>

            <h2>Live Captions now translate in real time</h2>
            <p>Live Captions — Google&apos;s on-device real-time transcription — has been upgraded with speaker identification and real-time translation. The translation is handled entirely on-device with no network round-trip. Quality is good enough for casual conversation across the languages we tested.</p>

            <h2>UI changes: subtle but consistent</h2>
            <p>The visual refresh in Android 16 isn&apos;t dramatic — it&apos;s the kind of polish you notice after a week rather than in the first five minutes. Corner radii are slightly larger, animations are more fluid, and the Quick Settings panel has been reorganised. The lock screen gets the most noticeable treatment with new customisation options built in.</p>

            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="w2-c4" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>

            <h2>The verdict</h2>
            <p>Android 16 is the first Android release in three years where we would recommend updating immediately rather than waiting. The notification intelligence, battery management improvements, and privacy overhaul are all genuinely useful — not features that sound good in a press release but disappear into noise.</p>
            <p>Pixels benefit first. If you&apos;re on a Pixel 7 or later, update now. If you&apos;re on Samsung, the One UI 8 rollout is clean. If you&apos;re on a mid-range device from a smaller manufacturer, wait two to three weeks.</p>

            <div className="side-card" style={{ marginTop: 24, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <span style={{ width: 54, height: 54, flex: 'none', borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent),#2a1758)' }}></span>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 21, marginBottom: 4 }}>Alex Chen</h4>
                <p className="muted" style={{ fontSize: 14 }}>Senior editor, Android & Software at TechPulse. Covering Android since the Nexus era.</p>
              </div>
            </div>
          </article>
          <aside className="sidebar">
            <AdSlot size="small" id="w2-side-1" label="Sidebar" />
            <div className="side-card">
              <h4 style={{ fontSize: 16 }}>In this review</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 10, fontSize: 14 }}>
                {['Notification system','Battery intelligence','Privacy controls','Live Captions','UI changes','The verdict'].map(s => (
                  <span key={s} className="muted">{s}</span>
                ))}
              </div>
            </div>
            <AdSlot size="small" id="w2-side-2" label="Sidebar" />
            <AdSlot size="small" id="w2-side-3" label="Sidebar" />
            <AdSlot size="small" id="w2-side-4" label="Sidebar" />
          </aside>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head"><h2>Keep reading</h2></div>
        <div className="grid-3">
          {[
            { tone:2, cat:'Smartphones', title:'Galaxy S25 Ultra: two months of real use', author:'Sarah Kim', read:'15 min' },
            { tone:4, cat:'Reviews', title:'iPhone 17 vs Pixel 9 Pro: the camera shootout', author:'Marcus Webb', read:'11 min' },
            { tone:5, cat:'AI & Mobile', title:'ChatGPT on mobile: the power features you\'re missing', author:'Priya Sharma', read:'10 min' },
          ].map((r) => (
            <div key={r.title} className="card" style={{ cursor: 'default' }}>
              <div className={`thumb tone-${r.tone}`}><img src={POST_IMAGES[r.slug as keyof typeof POST_IMAGES] ?? POST_IMAGES['android-16-features']} alt={r.title} /><span className="cat">{r.cat}</span></div>
              <div className="card-body">
                <h3 className="card-title">{r.title}</h3>
                <div className="card-meta"><span>{r.author}</span><span className="dot"></span><span>{r.read}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '0 28px 24px' }}>
        <AdSlot size="large" id="w2-bot" />
      </div>

      <ContinueButton ready={ready} onClick={onContinue} label={STEPS[2].btn} />
    </>
  );
}

// ── Step 3: Get the App ───────────────────────────────────────────────────────
function Step3({ ready, onContinue }: { ready: boolean; onContinue: () => void }) {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="w3-top" tall />
      </div>

      <section className="wrap" style={{ padding: '60px 28px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ width: 100, height: 100, borderRadius: 26, background: 'linear-gradient(135deg,var(--accent),#2a1758)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <span className="eyebrow">Get the App</span>
        <h1 style={{ fontSize: 'clamp(38px,6vw,68px)', margin: '16px 0 16px', maxWidth: '14ch' }}>Watch on NovaPlex</h1>
        <p className="muted" style={{ fontSize: 18, maxWidth: '50ch', lineHeight: 1.65 }}>
          Your video is ready. NovaPlex opens it instantly — fast, clean playback with no extra steps.
        </p>
        <div style={{ display: 'flex', gap: 44, marginTop: 48, flexWrap: 'wrap', justifyContent: 'center', borderTop: '1px solid var(--border)', paddingTop: 36 }}>
          {[['Free','No subscription'],['Fast','Instant playback'],['Clean','No clutter'],['Private','No account needed']].map(([t,d]) => (
            <div key={t}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 30 }}>{t}</div>
              <div className="faint" style={{ fontSize: 13, marginTop: 4 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '0 28px 24px' }}>
        <AdSlot size="large" id="w3-mid1" />
      </div>

      <section className="wrap section">
        <div className="section-head"><div><span className="eyebrow">Features</span><h2 style={{ marginTop: 14 }}>Built for video lovers</h2></div></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {[
            { icon:'🎬', title:'Any format', desc:'MP4, MKV, AVI, and more — NovaPlex handles them all without converting.' },
            { icon:'📱', title:'Mobile-first', desc:'Built for Android with a clean, touch-friendly interface for one-handed use.' },
            { icon:'🔒', title:'Private', desc:'No account needed. Your watch history stays on your device.' },
            { icon:'⚡', title:'Fast start', desc:'Videos begin playing in under a second, even on slow connections.' },
            { icon:'🎧', title:'Audio tracks', desc:'Switch between multiple audio languages without restarting the video.' },
            { icon:'📺', title:'Cast support', desc:'Send to your TV with Google Cast, no extra app required.' },
          ].map((f) => (
            <div key={f.title} className="side-card" style={{ textAlign: 'center', padding: '28px 20px' }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap ad-zone ad-300-wrap" style={{ padding: '20px 28px' }}>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          <AdSlot size="small" id="w3-sp-1" fluid={false} /><AdSlot size="small" id="w3-sp-2" fluid={false} />
        </div>
      </div>

      <div className="wrap ad-zone" style={{ padding: '0 28px 24px' }}>
        <AdSlot size="large" id="w3-bot" />
      </div>

      <ContinueButton ready={ready} onClick={onContinue} label={STEPS[3].btn} />
    </>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function WatchPage() {
  const { id } = useParams<{ id: string }>();
  const [step, setStep]           = useState(0);
  const [timeLeft, setTimeLeft]   = useState(STEP_TIMER);
  const [ready, setReady]         = useState(false);
  const [adPlaying, setAdPlaying] = useState(false);

  useEffect(() => {
    setTimeLeft(STEP_TIMER);
    setReady(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  useEffect(() => {
    if (ready) return;
    if (timeLeft <= 0) { setReady(true); return; }
    const t = setTimeout(() => setTimeLeft((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, ready]);

  const handleContinue = useCallback(() => {
    setAdPlaying(true);
    fireInterstitial(() => {
      setAdPlaying(false);
      if (step === STEPS.length - 1) {
        window.location.href = `https://${NOVAPLEX_DOMAIN}/watch/${id}`;
      } else {
        setStep((s) => s + 1);
      }
    });
  }, [step, id]);

  return (
    <>
      {adPlaying && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.9)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
          <div style={{ width: 56, height: 56, border: '4px solid rgba(255,255,255,0.15)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
          <p style={{ color: '#fff', fontSize: 17, fontWeight: 600 }}>Loading…</p>
        </div>
      )}

      <TimerBanner timeLeft={timeLeft} ready={ready} step={step} />

      {step === 0 && <Step0 ready={ready} onContinue={handleContinue} />}
      {step === 1 && <Step1 ready={ready} onContinue={handleContinue} />}
      {step === 2 && <Step2 ready={ready} onContinue={handleContinue} />}
      {step === 3 && <Step3 ready={ready} onContinue={handleContinue} />}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
