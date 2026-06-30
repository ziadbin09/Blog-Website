'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import AdSlot from '@/components/AdSlot';

const NOVAPLEX_DOMAIN = 'novaplex-links.pages.dev';
const STEP_TIMER = 12;

const STEPS = [
  { label: 'Home',         btn: 'Continue to Research →' },
  { label: 'Research',     btn: 'Continue to Latest Study →' },
  { label: 'Latest Study', btn: 'Get the App →' },
  { label: 'Get the App',  btn: 'Open in NovaPlex' },
];

// Replace this with your PropellerAds / ad network interstitial script.
// Call onComplete() inside the ad close/completion callback.
function fireInterstitial(onComplete: () => void) {
  onComplete(); // PLACEHOLDER — swap for real ad script
}

// ── Step 0: Home ─────────────────────────────────────────────────────────────
function Step0() {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="w0-top" tall />
      </div>

      <section className="wrap" style={{ padding: '48px 28px 24px' }}>
        <span className="eyebrow">Peer-reviewed, plainly explained</span>
        <h1 style={{ fontSize: 'clamp(44px,7vw,80px)', maxWidth: '14ch', margin: '18px 0 20px' }}>
          The science of medicine, read clearly.
        </h1>
        <p className="muted" style={{ fontSize: 18, maxWidth: '58ch', lineHeight: 1.65 }}>
          Vitalis distils clinical trials, genomics, and the breakthroughs reshaping care — written by working researchers.
        </p>
        <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: 24 }}>
          {[['2,400+','studies summarised'],['38','researchers'],['94%','reader satisfaction'],['Weekly','evidence briefings']].map(([n,l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32 }}>{n}</div>
              <div className="faint" style={{ fontSize: 13 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <div><span className="eyebrow">Latest</span><h2 style={{ marginTop: 14 }}>This week in research</h2></div>
          <p className="sub">New evidence and methodology deep-dives from the journals that matter.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.85fr 1fr', gap: 28 }}>
          <div className="card">
            <div className="thumb tone-1 pat" style={{ aspectRatio: '16/10' }}><span className="cat">Endocrinology</span></div>
            <div className="card-body" style={{ padding: '28px 30px 30px' }}>
              <h3 className="card-title" style={{ fontSize: 32, lineHeight: 1.05 }}>Inside the trial that rewired first-line treatment for Type 1 diabetes</h3>
              <p className="excerpt" style={{ fontSize: 15, marginTop: 10 }}>A teplizumab-led protocol delayed disease onset by a median of two years.</p>
              <div className="card-meta"><span>Dr. Lena Okafor</span><span className="dot"></span><span>14 min read</span><span className="dot"></span><span>Jun 1, 2026</span></div>
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
            { tone:2, cat:'Neuroscience', title:'The gut–brain axis: what 1,200 patients taught us', author:'Dr. Marcus Reyes', read:'9 min' },
            { tone:4, cat:'Cardiology', title:'Reading the new GLP-1 cardiovascular outcomes data', author:'Dr. Priya Nandakumar', read:'11 min' },
            { tone:3, cat:'Clinical Trials', title:'Why most Phase II oncology trials stall', author:'Dr. Sofia Haddad', read:'13 min' },
          ].map((p) => (
            <div key={p.title} className="card" style={{ cursor: 'default' }}>
              <div className={`thumb tone-${p.tone} pat`}><span className="cat">{p.cat}</span></div>
              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <div className="card-meta"><span>{p.author}</span><span className="dot"></span><span>{p.read}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '0 28px 24px' }}>
        <AdSlot size="large" id="w0-bot" />
      </div>
    </>
  );
}

// ── Step 1: Research ──────────────────────────────────────────────────────────
function Step1() {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="w1-top" tall />
      </div>

      <section className="wrap" style={{ padding: '40px 28px 16px' }}>
        <span className="eyebrow">Research</span>
        <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', margin: '16px 0 16px' }}>Recent findings</h1>
        <p className="muted" style={{ fontSize: 17, maxWidth: '56ch', lineHeight: 1.65 }}>
          Fresh summaries from the journals that matter — fact-checked by active clinicians.
        </p>
      </section>

      <section className="wrap section" style={{ paddingTop: 16 }}>
        <div className="with-side">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { tone:4, cat:'Cardiology', title:'Reading the new GLP-1 cardiovascular outcomes data', author:'Dr. Priya Nandakumar', read:'11 min', date:'May 24, 2026', excerpt:'Beyond weight loss: a 17% reduction in major adverse events, and why dosing matters.' },
              { tone:3, cat:'Clinical Trials', title:"Why most Phase II oncology trials stall — and what's changing", author:'Dr. Sofia Haddad', read:'13 min', date:'May 20, 2026', excerpt:'Adaptive designs and biomarker stratification are quietly improving the odds.' },
              { tone:5, cat:'Immunology', title:'mRNA platforms after COVID: the next therapeutic decade', author:'Dr. Lena Okafor', read:'10 min', date:'May 13, 2026', excerpt:'From oncology vaccines to autoimmune tolerance, the pipeline is broader than you think.' },
              { tone:6, cat:'Neurology', title:'Sleep debt and amyloid: a seven-year cohort, revisited', author:'Dr. Ian Whitfield', read:'8 min', date:'May 17, 2026', excerpt:'Chronic short sleep tracks with faster amyloid accumulation — but causation stays slippery.' },
              { tone:2, cat:'Public Health', title:'What 40,000 wearables revealed about heat and hospital visits', author:'Dr. Marcus Reyes', read:'7 min', date:'May 9, 2026', excerpt:'A continental dataset turns anecdote into signal: heat thresholds that predict ER load.' },
            ].map((p,i) => (
              <div key={p.title}>
                <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 20, padding: '20px 0', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                  <div className={`thumb tone-${p.tone} pat`} style={{ height: 68, borderRadius: 10 }}><span className="cat" style={{ fontSize: 10 }}>{p.cat}</span></div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.35, marginBottom: 5 }}>{p.title}</h3>
                    <p className="muted" style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 6 }}>{p.excerpt}</p>
                    <div className="card-meta"><span>{p.author}</span><span className="dot"></span><span>{p.read}</span><span className="dot"></span><span>{p.date}</span></div>
                  </div>
                </div>
                {i === 2 && <div style={{ padding: '16px 0' }}><AdSlot size="large" id="w1-mid" /></div>}
              </div>
            ))}
          </div>
          <aside className="sidebar">
            <AdSlot size="small" id="w1-side-1" label="Sidebar" />
            <div className="side-card">
              <h4 style={{ fontSize: 16 }}>Browse by specialty</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                {['Cardiology','Neuroscience','Oncology','Immunology','Genomics','Public Health'].map((t) => (
                  <span key={t} className="tag" style={{ fontSize: 12, padding: '6px 12px' }}>{t}</span>
                ))}
              </div>
            </div>
            <AdSlot size="small" id="w1-side-2" label="Sidebar" />
          </aside>
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '0 28px 24px' }}>
        <AdSlot size="large" id="w1-bot" />
      </div>
    </>
  );
}

// ── Step 2: Latest Study ──────────────────────────────────────────────────────
function Step2() {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="w2-top" tall />
      </div>

      <section className="wrap" style={{ padding: '36px 28px 0' }}>
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow" style={{ cursor: 'default' }}>Endocrinology · Clinical Trials</span>
          <h1 style={{ fontSize: 'clamp(34px,5.4vw,58px)', margin: '16px 0 20px', lineHeight: 1.04 }}>
            Inside the trial that rewired first-line treatment for Type 1 diabetes
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', color: 'var(--muted)', fontSize: 14 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent),#2a1758)', display: 'inline-block' }}></span>
              <b style={{ color: 'var(--text)' }}>Dr. Lena Okafor</b>
            </span>
            <span className="dot"></span><span>14 min read</span>
            <span className="dot"></span><span>June 1, 2026</span>
          </div>
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 28 }}>
        <div className="with-side">
          <article className="article" style={{ maxWidth: 760 }}>
            <figure style={{ marginTop: 0 }}>
              <div className="fig-ph thumb tone-1 pat" style={{ height: 340 }}></div>
              <figcaption>Islet autoimmunity progression in at-risk cohorts.</figcaption>
            </figure>
            <p>For three decades, a Type 1 diabetes diagnosis arrived with the same blunt prescription: lifelong insulin, beginning the day the beta cells gave out. The TN-10 follow-up data is the first hard evidence that the timeline itself is negotiable.</p>
            <p>A 14-day course of teplizumab delayed the onset of clinical disease by a median of roughly two years versus placebo — a result built on immune markers, not symptoms.</p>
            <h2>What the trial actually measured</h2>
            <p>The primary endpoint was time to clinical diagnosis defined by standard glucose-tolerance thresholds. Crucially, the trial enrolled on the basis of immune markers — a design that let investigators intervene during the silent pre-clinical window.</p>
            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="w2-content-1" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>
            <h2>The two-year signal, in context</h2>
            <p>Two years is not a cure. But in a disease where progression has felt inexorable, a durable delay reshapes the conversation — about screening, about when to treat, and about what first-line even means.</p>
            <blockquote>&quot;We&apos;ve spent forty years managing the consequences. This is the first time we&apos;ve meaningfully changed the slope of the curve.&quot;</blockquote>
            <div className="ad-zone" style={{ padding: '12px 0' }}>
              <AdSlot size="large" id="w2-mid" label="In-article Billboard" />
            </div>
            <h2>What it changes at the bedside</h2>
            <p>The practical shift is upstream. If a two-week course can buy years, the value of identifying at-risk individuals before symptoms rises sharply. Several pediatric centres are already piloting targeted screening in first-degree relatives.</p>
          </article>
          <aside className="sidebar">
            <AdSlot size="small" id="w2-side-1" label="Sidebar" />
            <div className="side-card">
              <h4 style={{ fontSize: 16 }}>In this article</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10, fontSize: 14 }}>
                <span className="muted">What the trial measured</span>
                <span className="muted">The two-year signal</span>
                <span className="muted">What it changes</span>
              </div>
            </div>
            <AdSlot size="small" id="w2-side-2" label="Sidebar" />
            <AdSlot size="small" id="w2-side-3" label="Sidebar" />
          </aside>
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '0 28px 24px' }}>
        <AdSlot size="large" id="w2-bot" />
      </div>
    </>
  );
}

// ── Step 3: Get the App ───────────────────────────────────────────────────────
function Step3() {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="w3-top" tall />
      </div>

      <section className="wrap" style={{ padding: '56px 28px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ width: 96, height: 96, borderRadius: 24, background: 'linear-gradient(135deg,var(--accent),#2a1758)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <span className="eyebrow">Get the App</span>
        <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', margin: '16px 0 16px', maxWidth: '14ch' }}>Watch on NovaPlex</h1>
        <p className="muted" style={{ fontSize: 17, maxWidth: '48ch', lineHeight: 1.65 }}>
          Your video is ready. NovaPlex opens it instantly — fast, clean playback with no extra steps.
        </p>
        <div style={{ display: 'flex', gap: 36, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[['Free','No subscription needed'],['Fast','Instant playback'],['Clean','No clutter']].map(([t,d]) => (
            <div key={t}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28 }}>{t}</div>
              <div className="faint" style={{ fontSize: 13, marginTop: 4 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '0 28px 40px' }}>
        <AdSlot size="large" id="w3-mid" />
      </div>

      <section className="wrap" style={{ padding: '0 28px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {[
            { icon: '🎬', title: 'Any format', desc: 'MP4, MKV, AVI, and more — NovaPlex handles them all without converting.' },
            { icon: '📱', title: 'Mobile-first', desc: 'Built for Android with a clean, touch-friendly interface.' },
            { icon: '🔒', title: 'Private', desc: 'No account needed. Your watch history stays on your device.' },
          ].map((f) => (
            <div key={f.title} className="side-card" style={{ textAlign: 'center', padding: '28px 20px' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '0 28px 24px' }}>
        <AdSlot size="large" id="w3-bot" />
      </div>
    </>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function WatchPage() {
  const { id } = useParams<{ id: string }>();
  const [step, setStep]         = useState(0);
  const [timeLeft, setTimeLeft] = useState(STEP_TIMER);
  const [ready, setReady]       = useState(false);
  const [adPlaying, setAdPlaying] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

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
    const isLast = step === STEPS.length - 1;
    setAdPlaying(true);
    fireInterstitial(() => {
      setAdPlaying(false);
      if (isLast) {
        window.location.href = `https://${NOVAPLEX_DOMAIN}/watch/${id}`;
      } else {
        setStep((s) => s + 1);
      }
    });
  }, [step, id]);

  const pct = ((STEP_TIMER - timeLeft) / STEP_TIMER) * 100;

  return (
    <>
      {/* Interstitial overlay */}
      {adPlaying && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.9)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
          <div style={{ width: 56, height: 56, border: '4px solid rgba(255,255,255,0.15)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
          <p style={{ color: '#fff', fontSize: 17, fontWeight: 600 }}>Loading…</p>
        </div>
      )}

      <div ref={topRef} />

      {/* Step content */}
      {step === 0 && <Step0 />}
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}

      {/* ── Fixed bottom bar ──────────────────────────────────────────── */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 500,
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '12px 24px',
        display: 'flex', alignItems: 'center', gap: 20,
        boxShadow: '0 -4px 24px rgba(0,0,0,0.18)',
      }}>
        {/* Step dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          {STEPS.map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{
                width: i === step ? 28 : 10, height: 10,
                borderRadius: 5,
                background: i < step ? 'var(--accent)' : i === step ? 'var(--accent)' : 'var(--border)',
                transition: 'all 0.3s',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {i < step && <svg width="6" height="6" viewBox="0 0 24 24" fill="white"><polyline points="20 6 9 17 4 12"/></svg>}
              </div>
              {i < STEPS.length - 1 && <div style={{ width: 6, height: 2, background: i < step ? 'var(--accent)' : 'var(--border)' }} />}
            </div>
          ))}
        </div>

        {/* Timer bar or scroll hint */}
        <div style={{ flex: 1 }}>
          {!ready ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                <span className="faint">{STEPS[step].label}</span>
                <span className="faint">{timeLeft}s</span>
              </div>
              <div style={{ height: 4, background: 'var(--border)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: 'var(--accent)', borderRadius: 4, transition: 'width 1s linear' }} />
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>
              <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>Scroll down and tap continue</span>
            </div>
          )}
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          disabled={!ready}
          style={{
            background: ready ? 'linear-gradient(135deg,var(--accent),#2a1758)' : 'var(--border)',
            color: ready ? '#fff' : 'var(--muted)',
            border: 'none', borderRadius: 10,
            padding: '11px 24px', fontSize: 14, fontWeight: 700,
            cursor: ready ? 'pointer' : 'not-allowed',
            flexShrink: 0, whiteSpace: 'nowrap',
            transition: 'all 0.3s',
          }}
        >
          {STEPS[step].btn}
        </button>
      </div>

      {/* Bottom padding so content isn't hidden behind fixed bar */}
      <div style={{ height: 80 }} />

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
