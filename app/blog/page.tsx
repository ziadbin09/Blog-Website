'use client';

import Link from 'next/link';
import { useState } from 'react';
import AdSlot from '@/components/AdSlot';

const CATS = ['all','Android','iOS','Smartphones','Reviews','Apps & Software','How-To','Wearables','Gaming','Cybersecurity','AI & Mobile'];

const POSTS = [
  { slug:'android-16-features', cat:'Android', tone:1, title:'Android 16: the features that actually change how you use your phone', excerpt:'Google\'s biggest Android release in years landed this week. We tested every new feature across three weeks of daily use to find out which ones matter.', author:'Alex Chen', read:'12 min', date:'Jun 1, 2026' },
  { slug:'galaxy-s25-ultra-review', cat:'Smartphones', tone:2, title:'Galaxy S25 Ultra review: two months, one camera, no going back', excerpt:'After eight weeks of daily photography and demanding workloads, Samsung\'s Ultra still sets the bar every other Android phone has to clear.', author:'Sarah Kim', read:'15 min', date:'May 28, 2026' },
  { slug:'iphone-17-vs-pixel-9', cat:'Reviews', tone:4, title:'iPhone 17 vs Pixel 9 Pro: the camera shootout that settles the debate', excerpt:'We shot 400 photos in six different lighting conditions across three countries. One camera is clearly better — and it\'s not the one everyone expected.', author:'Marcus Webb', read:'11 min', date:'May 24, 2026' },
  { slug:'best-budget-android-2026', cat:'Android', tone:3, title:'Best budget Android phones under $200 in 2026', excerpt:'Great Android experiences no longer require a four-figure budget. These six phones prove the sub-$200 category has never been stronger.', author:'Priya Sharma', read:'9 min', date:'May 20, 2026' },
  { slug:'smartphone-battery-fix', cat:'How-To', tone:6, title:'Why your phone battery dies fast — and exactly how to fix it', excerpt:'Most battery drain problems trace back to four very fixable habits. This step-by-step guide covers every setting, every app, and every charging mistake.', author:'Alex Chen', read:'8 min', date:'May 17, 2026' },
  { slug:'chatgpt-mobile-tips', cat:'AI & Mobile', tone:5, title:'ChatGPT on mobile: the power features 90% of users never find', excerpt:'Hidden voice shortcuts, custom instructions, memory controls, and workflow hacks that turn ChatGPT from a chatbot into a daily productivity tool.', author:'Priya Sharma', read:'10 min', date:'May 13, 2026' },
  { slug:'wearables-2026', cat:'Wearables', tone:2, title:'Smartwatches in 2026: we tested every major model — here\'s who wins', excerpt:'Eight weeks. Six watches. One conclusion: battery life is still the dealbreaker no spec sheet can hide. Here\'s which watch lasted, and which ones didn\'t.', author:'Zara Ahmed', read:'16 min', date:'May 9, 2026' },
  { slug:'android-malware-guide', cat:'Cybersecurity', tone:3, title:'How to spot and remove Android malware before it steals your data', excerpt:'Signs of infection, tools to clean your device, and the exact settings and habits that prevent reinfection. Works on all Android phones.', author:'James Carter', read:'13 min', date:'May 5, 2026' },
  { slug:'oneplus-13-camera', cat:'Reviews', tone:1, title:'OnePlus 13 camera deep-dive: flagship quality at half the price', excerpt:'OnePlus consistently under-promises and over-delivers on cameras. The 13 is their best yet — and it costs $300 less than anything it beats.', author:'Sarah Kim', read:'14 min', date:'Apr 30, 2026' },
  { slug:'5g-explained', cat:'Smartphones', tone:4, title:'5G speeds decoded: what the numbers on your plan actually mean', excerpt:'Sub-6GHz, mmWave, and C-band — your carrier\'s marketing sheet is designed to confuse. Here\'s what these terms really mean for your real-world speed.', author:'Marcus Webb', read:'9 min', date:'Apr 25, 2026' },
  { slug:'best-android-apps-2026', cat:'Apps & Software', tone:5, title:'50 best Android apps of 2026 — tested, ranked, and actually useful', excerpt:'After testing 200 apps across 12 categories, these 50 survived our ruthless cut. No filler, no sponsored picks — just apps worth space on your home screen.', author:'Priya Sharma', read:'16 min', date:'Apr 20, 2026' },
  { slug:'speed-up-android', cat:'How-To', tone:6, title:'How to make any Android phone feel new again in 10 minutes', excerpt:'Animation settings, background process limits, battery optimisation, and the one developer option that transforms slow Androids. Takes 10 minutes, lasts forever.', author:'Alex Chen', read:'8 min', date:'Apr 15, 2026' },
  { slug:'foldables-worth-it', cat:'Smartphones', tone:1, title:'Foldable phones in 2026: we tested them all — here\'s who should buy one', excerpt:'After a full year living with three foldables, we finally know which buyers will love them, which will regret it, and which models are actually reliable.', author:'Marcus Webb', read:'11 min', date:'Apr 10, 2026' },
  { slug:'ios-19-hidden-features', cat:'iOS', tone:3, title:'iOS 19 hidden features: 14 things Apple didn\'t announce on stage', excerpt:'Apple announced the headlines, but buried in the update are 14 genuinely useful features they didn\'t talk about. Here\'s where to find them.', author:'Sarah Kim', read:'13 min', date:'Apr 5, 2026' },
];

export default function BlogPage() {
  const [cat, setCat] = useState('all');
  const visible = cat === 'all' ? POSTS : POSTS.filter((p) => p.cat === cat);

  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="blog-top-banner" tall />
      </div>

      <section className="wrap" style={{ padding: '40px 28px 28px' }}>
        <span className="eyebrow">All articles</span>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', margin: '14px 0 10px' }}>Reviews, guides & news</h1>
        <p className="muted" style={{ fontSize: 17 }}>{POSTS.length} articles across {CATS.length - 1} categories.</p>
      </section>

      <div className="wrap" style={{ padding: '0 28px 28px', overflowX: 'auto' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'nowrap', minWidth: 'max-content' }}>
          {CATS.map((c) => (
            <button key={c} type="button" className={`tag${cat === c ? ' active' : ''}`} onClick={() => setCat(c)}
              style={{ cursor: 'pointer', border: 'none', background: cat === c ? 'var(--accent)' : undefined, color: cat === c ? '#fff' : undefined, whiteSpace: 'nowrap' }}>
              {c === 'all' ? 'All articles' : c}
            </button>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ padding: '0 28px' }}>
        <AdSlot size="large" id="blog-filter-banner" />
      </div>

      <section className="wrap" style={{ padding: '32px 28px 60px' }}>
        <div className="grid-3">
          {visible.map((p, i) => (
            <>
              <Link key={p.slug} className="card" href={`/blog/${p.slug}`} data-nav>
                <div className={`thumb tone-${p.tone} pat`}><span className="cat">{p.cat}</span></div>
                <div className="card-body">
                  <h3 className="card-title">{p.title}</h3>
                  <p className="excerpt">{p.excerpt}</p>
                  <div className="card-meta"><span>{p.author}</span><span className="dot"></span><span>{p.read}</span><span className="dot"></span><span>{p.date}</span></div>
                </div>
              </Link>
              {(i === 2 || i === 8) && (
                <AdSlot key={`ad-${i}`} size="small" id={`blog-inline-${i}`} style={{ height: 'auto', minHeight: 250 }} />
              )}
            </>
          ))}
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '0 28px 40px' }}>
        <AdSlot size="large" id="blog-bottom-banner" />
      </div>
    </>
  );
}
