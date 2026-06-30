'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'next/navigation';
import AdSlot from '@/components/AdSlot';

const NOVAPLEX_DOMAIN = 'novaplex-links.pages.dev';
const STEP_TIMER = 12; // seconds per step before button unlocks

const STEPS = [
  { label: 'Home',         btnText: 'Continue to Research →' },
  { label: 'Research',     btnText: 'Continue to Latest Study →' },
  { label: 'Latest Study', btnText: 'Get the App →' },
  { label: 'Get the App',  btnText: 'Open NovaPlex' },
];

// ─── Interstitial ad placeholder ────────────────────────────────────────────
// Replace the body of this function with your PropellerAds interstitial script.
// Call onComplete() inside the ad's close / completion callback.
// ────────────────────────────────────────────────────────────────────────────
function fireInterstitial(onComplete: () => void) {
  // PLACEHOLDER — swap this for your ad network script.
  // Example PropellerAds onclick zone:
  //   window.open('https://your-propellerads-link.com');
  //   setTimeout(onComplete, 2000);
  onComplete();
}

// ─── Step content ────────────────────────────────────────────────────────────
function StepContent({ step }: { step: number }) {
  if (step === 0) return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ textAlign: 'center', padding: '48px 0 32px' }}>
        <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Welcome</span>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', margin: '16px 0 14px', lineHeight: 1.1 }}>The science of medicine,<br />read clearly.</h1>
        <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: '52ch', margin: '0 auto', lineHeight: 1.65 }}>
          Vitalis summarises peer-reviewed research so clinicians and curious readers get the signal without the noise.
        </p>
      </div>
      <AdSlot size="large" id="w-s0-top" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {[
          { tone: 1, cat: 'Endocrinology', title: 'Inside the trial that rewired first-line Type 1 diabetes treatment', author: 'Dr. Lena Okafor', read: '14 min' },
          { tone: 2, cat: 'Neuroscience', title: 'The gut–brain axis: what 1,200 patients taught us about mood', author: 'Dr. Marcus Reyes', read: '9 min' },
        ].map((p) => (
          <div key={p.title} className="card" style={{ cursor: 'default' }}>
            <div className={`thumb tone-${p.tone} pat`}><span className="cat">{p.cat}</span></div>
            <div className="card-body">
              <h3 className="card-title" style={{ fontSize: 17 }}>{p.title}</h3>
              <div className="card-meta"><span>{p.author}</span><span className="dot"></span><span>{p.read}</span></div>
            </div>
          </div>
        ))}
      </div>
      <AdSlot size="large" id="w-s0-mid" />
      <div style={{ display: 'flex', gap: 40, padding: '32px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[['2,400+','studies summarised'],['38','contributing researchers'],['94%','reader satisfaction'],['Weekly','evidence briefings']].map(([n, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 32 }}>{n}</div>
            <div className="faint" style={{ fontSize: 13, marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>
      <AdSlot size="large" id="w-s0-bot" />
    </div>
  );

  if (step === 1) return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ textAlign: 'center', padding: '48px 0 32px' }}>
        <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Research</span>
        <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', margin: '16px 0 14px', lineHeight: 1.1 }}>This week in medical research</h1>
        <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: '52ch', margin: '0 auto', lineHeight: 1.65 }}>
          Fresh findings from the journals that matter — summarised, fact-checked, and ready to read.
        </p>
      </div>
      <AdSlot size="large" id="w-s1-top" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {[
          { tone: 4, cat: 'Cardiology', title: 'Reading the new GLP-1 cardiovascular outcomes data', author: 'Dr. Priya Nandakumar', read: '11 min', date: 'May 24, 2026', excerpt: 'Beyond weight loss: a 17% reduction in major adverse events, and why dosing matters.' },
          { tone: 3, cat: 'Clinical Trials', title: 'Why most Phase II oncology trials stall — and what\'s changing', author: 'Dr. Sofia Haddad', read: '13 min', date: 'May 20, 2026', excerpt: 'Adaptive designs and biomarker stratification are quietly improving the odds.' },
          { tone: 5, cat: 'Immunology', title: 'mRNA platforms after COVID: the next therapeutic decade', author: 'Dr. Lena Okafor', read: '10 min', date: 'May 13, 2026', excerpt: 'From oncology vaccines to autoimmune tolerance, the pipeline is broader than you think.' },
        ].map((p) => (
          <div key={p.title} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 18, padding: '20px 0', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
            <div className={`thumb tone-${p.tone} pat`} style={{ height: 64, borderRadius: 10 }}><span className="cat" style={{ fontSize: 10 }}>{p.cat}</span></div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.35, marginBottom: 4 }}>{p.title}</h3>
              <p className="muted" style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 6 }}>{p.excerpt}</p>
              <div className="card-meta"><span>{p.author}</span><span className="dot"></span><span>{p.read}</span><span className="dot"></span><span>{p.date}</span></div>
            </div>
          </div>
        ))}
      </div>
      <AdSlot size="large" id="w-s1-mid" />
      <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 16, padding: '28px 32px' }}>
        <h3 style={{ fontSize: 20, marginBottom: 10 }}>Browse by specialty</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {['Cardiology','Neuroscience','Oncology','Genomics','Immunology','Public Health','Psychiatry','Infectious Disease'].map((t) => (
            <span key={t} className="tag" style={{ padding: '8px 16px', fontSize: 13 }}>{t}</span>
          ))}
        </div>
      </div>
      <AdSlot size="large" id="w-s1-bot" />
    </div>
  );

  if (step === 2) return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ textAlign: 'center', padding: '48px 0 32px' }}>
        <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Latest Study</span>
        <h1 style={{ fontSize: 'clamp(28px,4.5vw,48px)', margin: '16px 0 14px', lineHeight: 1.1 }}>Inside the trial that rewired<br />Type 1 diabetes treatment</h1>
        <div className="card-meta" style={{ justifyContent: 'center', marginTop: 8 }}>
          <span>Dr. Lena Okafor</span><span className="dot"></span><span>14 min read</span><span className="dot"></span><span>June 1, 2026</span>
        </div>
      </div>
      <AdSlot size="large" id="w-s2-top" />
      <div style={{ maxWidth: 680, margin: '0 auto', fontSize: 16, lineHeight: 1.75, color: 'var(--text)' }}>
        <div className={`thumb tone-1 pat`} style={{ height: 300, borderRadius: 16, marginBottom: 28 }}></div>
        <p>For three decades, a Type 1 diabetes diagnosis arrived with the same blunt prescription: lifelong insulin, beginning the day the beta cells gave out. New trial data is the first hard evidence that the timeline itself is negotiable.</p>
        <h2 style={{ fontSize: 22, margin: '28px 0 12px' }}>What the trial actually measured</h2>
        <p>A 14-day course of teplizumab delayed the onset of clinical disease by a median of roughly two years versus placebo — a result built on immune markers, not symptoms, letting investigators intervene during the silent pre-clinical window.</p>
        <AdSlot size="large" id="w-s2-mid" />
        <h2 style={{ fontSize: 22, margin: '28px 0 12px' }}>Caveats worth keeping</h2>
        <p>Two years is not a cure. Participants were autoantibody-positive relatives — not the general population. But for the first time, the standard of care has a plausible &quot;before&quot; stage at which we intervene to protect function rather than replace it.</p>
      </div>
      <AdSlot size="large" id="w-s2-bot" />
    </div>
  );

  // Step 3 — Get the App
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, padding: '40px 0' }}>
      <AdSlot size="large" id="w-s3-top" />
      <div style={{ textAlign: 'center', maxWidth: 520 }}>
        <div style={{ width: 88, height: 88, borderRadius: 22, background: 'linear-gradient(135deg,var(--accent),#2a1758)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <h1 style={{ fontSize: 'clamp(28px,5vw,46px)', lineHeight: 1.1, marginBottom: 14 }}>NovaPlex</h1>
        <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.65, marginBottom: 8 }}>
          Your video is ready. Tap the button below to open it in NovaPlex — the fast, clean video player built for streams like this one.
        </p>
        <div style={{ display: 'flex', gap: 28, justifyContent: 'center', margin: '32px 0', flexWrap: 'wrap' }}>
          {[['Free','No subscription'],['Fast','Instant playback'],['Clean','No bloat']].map(([t,d]) => (
            <div key={t} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>{t}</div>
              <div className="faint" style={{ fontSize: 13 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
      <AdSlot size="large" id="w-s3-bot" />
    </div>
  );
}

export default function WatchPage() {
  const { id } = useParams<{ id: string }>();
  const [step, setStep]         = useState(0);
  const [timeLeft, setTimeLeft] = useState(STEP_TIMER);
  const [ready, setReady]       = useState(false);
  const [adPlaying, setAdPlaying] = useState(false);
  const [adTimer, setAdTimer]   = useState(5);
  const topRef = useRef<HTMLDivElement>(null);

  // Reset timer when step changes
  useEffect(() => {
    setTimeLeft(STEP_TIMER);
    setReady(false);
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [step]);

  // Countdown
  useEffect(() => {
    if (ready) return;
    if (timeLeft <= 0) { setReady(true); return; }
    const t = setTimeout(() => setTimeLeft((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, ready]);

  // Ad overlay countdown
  useEffect(() => {
    if (!adPlaying) return;
    if (adTimer <= 0) return;
    const t = setTimeout(() => setAdTimer((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [adPlaying, adTimer]);

  const handleContinue = useCallback(() => {
    const isLastStep = step === STEPS.length - 1;

    if (isLastStep) {
      // Final step — fire interstitial then go to NovaPlex
      setAdPlaying(true);
      setAdTimer(5);
      fireInterstitial(() => {
        setAdPlaying(false);
        window.location.href = `https://${NOVAPLEX_DOMAIN}/watch/${id}`;
      });
      return;
    }

    setAdPlaying(true);
    setAdTimer(5);
    fireInterstitial(() => {
      setAdPlaying(false);
      setStep((s) => s + 1);
    });
  }, [step, id]);

  const pct = ((STEP_TIMER - timeLeft) / STEP_TIMER) * 100;

  return (
    <>
      {/* ── INTERSTITIAL OVERLAY ─────────────────────────────────────── */}
      {adPlaying && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.92)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 20,
        }}>
          <div style={{ width: 64, height: 64, border: '4px solid rgba(255,255,255,0.15)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
          <p style={{ color: '#fff', fontSize: 18, fontWeight: 600 }}>Loading your content…</p>
          <p className="faint" style={{ fontSize: 14 }}>Please wait {adTimer > 0 ? adTimer : ''}s</p>
        </div>
      )}

      <div ref={topRef} />

      {/* ── STICKY PROGRESS BAR ──────────────────────────────────────── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'var(--bg)', borderBottom: '1px solid var(--border)',
        padding: '14px 28px',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 0 }}>
          {STEPS.map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 0 }}>
              {/* Step dot */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: i <= step ? 'var(--accent)' : 'var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.3s',
                }}>
                  {i < step
                    ? <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><polyline points="20 6 9 17 4 12"/></svg>
                    : <span style={{ width: 8, height: 8, borderRadius: '50%', background: i === step ? '#fff' : 'var(--muted)' }} />
                  }
                </div>
                <span style={{ fontSize: 11, color: i === step ? 'var(--text)' : 'var(--muted)', whiteSpace: 'nowrap', fontWeight: i === step ? 600 : 400 }}>{s.label}</span>
              </div>
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div style={{ flex: 1, height: 2, background: 'var(--border)', margin: '0 8px', marginBottom: 18, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'var(--accent)', transform: i < step ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timer bar */}
        {!ready && (
          <div style={{ maxWidth: 860, margin: '10px auto 0', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ flex: 1, height: 3, background: 'var(--border)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${pct}%`, background: 'var(--accent)', borderRadius: 4, transition: 'width 1s linear' }} />
            </div>
            <span className="faint" style={{ fontSize: 12, whiteSpace: 'nowrap' }}>Loading… {timeLeft}s</span>
          </div>
        )}
        {ready && (
          <div style={{ maxWidth: 860, margin: '10px auto 0', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>
            <span style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>Scroll down to continue</span>
          </div>
        )}
      </div>

      {/* ── STEP CONTENT ─────────────────────────────────────────────── */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 28px 0' }}>
        <StepContent step={step} />
      </div>

      {/* ── CONTINUE BUTTON (bottom of page) ─────────────────────────── */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 28px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        {!ready ? (
          <p className="faint" style={{ fontSize: 14, textAlign: 'center' }}>
            Please wait for the page to fully load before continuing…
          </p>
        ) : null}
        <button
          onClick={handleContinue}
          disabled={!ready}
          style={{
            background: ready ? 'linear-gradient(135deg,var(--accent),#2a1758)' : 'var(--border)',
            color: ready ? '#fff' : 'var(--muted)',
            border: 'none', borderRadius: 14,
            padding: '18px 48px', fontSize: 17, fontWeight: 700,
            cursor: ready ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s',
            minWidth: 260,
          }}
        >
          {STEPS[step].btnText}
        </button>
        <p className="faint" style={{ fontSize: 12, textAlign: 'center' }}>
          {step < STEPS.length - 1 ? 'A short ad will play before the next page' : 'Opens NovaPlex on your device'}
        </p>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}
