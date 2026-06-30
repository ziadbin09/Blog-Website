'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import AdSlot from '@/components/AdSlot';

const NOVAPLEX_DOMAIN = 'novaplex-links.pages.dev';
const STEP_TIMER = 15;

const STEPS = [
  { label: 'Home',         btn: 'Continue to Research →' },
  { label: 'Research',     btn: 'Continue to Latest Study →' },
  { label: 'Latest Study', btn: 'Get the App →' },
  { label: 'Get the App',  btn: 'Open in NovaPlex →' },
];

// Replace with your PropellerAds / ad network interstitial script.
function fireInterstitial(onComplete: () => void) {
  onComplete(); // PLACEHOLDER
}

// ── Shared: timer banner shown at top of each step ────────────────────────────
function TimerBanner({ timeLeft, ready, step }: { timeLeft: number; ready: boolean; step: number }) {
  const pct = ((STEP_TIMER - timeLeft) / STEP_TIMER) * 100;
  return (
    <div style={{
      background: ready ? 'linear-gradient(90deg,#1a4d1a,#0f3d0f)' : 'linear-gradient(90deg,var(--accent),#2a1758)',
      padding: '14px 28px',
      display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
    }}>
      {/* Step progress */}
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

// ── Continue button shown at very bottom of page ──────────────────────────────
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

// ── Step 0: Home (full length) ────────────────────────────────────────────────
function Step0({ ready, onContinue }: { ready: boolean; onContinue: () => void }) {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="w0-top" tall />
      </div>

      {/* Hero */}
      <section className="wrap" style={{ padding: '48px 28px 24px' }}>
        <span className="eyebrow">Peer-reviewed, plainly explained</span>
        <h1 style={{ fontSize: 'clamp(44px,7vw,84px)', maxWidth: '14ch', margin: '20px 0 22px' }}>
          The science of medicine, read clearly.
        </h1>
        <p className="muted" style={{ fontSize: 19, maxWidth: '60ch', lineHeight: 1.6 }}>
          Vitalis distils clinical trials, genomics, and the breakthroughs reshaping care — written by working researchers, for clinicians and the curious alike.
        </p>
        <div style={{ display: 'flex', gap: 40, marginTop: 48, flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: 26 }}>
          {[['2,400+','studies summarised'],['38','contributing researchers'],['weekly','evidence briefings'],['94%','reader satisfaction']].map(([n,l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 34 }}>{n}</div>
              <div className="faint" style={{ fontSize: 13 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="wrap section" style={{ paddingTop: 40 }}>
        <div className="section-head">
          <div><span className="eyebrow">Latest</span><h2 style={{ marginTop: 14 }}>This week in research</h2></div>
          <p className="sub">New evidence and methodology deep-dives from the journals that matter.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.85fr 1fr', gap: 28 }}>
          <div className="card">
            <div className="thumb tone-1 pat" style={{ aspectRatio: '16/10' }}><span className="cat">Endocrinology</span></div>
            <div className="card-body" style={{ padding: '28px 30px 30px' }}>
              <h3 className="card-title" style={{ fontSize: 34, lineHeight: 1.05 }}>Inside the trial that rewired first-line treatment for Type 1 diabetes</h3>
              <p className="excerpt" style={{ fontSize: 16, marginTop: 12 }}>A teplizumab-led protocol delayed disease onset by a median of two years. We unpack the endpoints, the caveats, and what it changes at the bedside.</p>
              <div className="card-meta"><span>Dr. Lena Okafor</span><span className="dot"></span><span>14 min read</span><span className="dot"></span><span>Jun 1, 2026</span></div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <AdSlot size="small" id="w0-side-1" /><AdSlot size="small" id="w0-side-2" />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="wrap" style={{ paddingBottom: 20 }}>
        <div className="grid-3">
          {[
            { slug:'s2', tone:2, cat:'Neuroscience', title:'The gut–brain axis: what 1,200 patients taught us about mood', excerpt:'A landmark microbiome cohort links specific bacterial strains to depressive symptoms.', author:'Dr. Marcus Reyes', read:'9 min' },
            { slug:'s3', tone:4, cat:'Cardiology', title:'Reading the new GLP-1 cardiovascular outcomes data', excerpt:'Beyond weight loss: a 17% reduction in major adverse events, and why dosing matters.', author:'Dr. Priya Nandakumar', read:'11 min' },
            { slug:'s4', tone:3, cat:'Clinical Trials', title:"Why most Phase II oncology trials stall — and what's changing", excerpt:'Adaptive designs and biomarker stratification are quietly improving the odds.', author:'Dr. Sofia Haddad', read:'13 min' },
            { slug:'s5', tone:6, cat:'Neurology', title:'Sleep debt and amyloid: a seven-year cohort, revisited', excerpt:'Chronic short sleep tracks with faster amyloid accumulation — but causation stays slippery.', author:'Dr. Ian Whitfield', read:'8 min' },
            { slug:'s6', tone:5, cat:'Immunology', title:'mRNA platforms after COVID: the next therapeutic decade', excerpt:'From oncology vaccines to autoimmune tolerance, the pipeline is broader than you think.', author:'Dr. Lena Okafor', read:'10 min' },
          ].map((p) => (
            <div key={p.slug} className="card" style={{ cursor: 'default' }}>
              <div className={`thumb tone-${p.tone} pat`}><span className="cat">{p.cat}</span></div>
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

      {/* Trending topics */}
      <section className="wrap section">
        <div className="section-head"><div><span className="eyebrow">Browse by field</span><h2 style={{ marginTop: 14 }}>What researchers are reading</h2></div></div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
          {[['Cardiology',312],['Neuroscience',287],['Oncology',261],['Genomics',198],['Immunology',175],['Endocrinology',154],['Clinical Trials',143],['Public Health',129],['Psychiatry',118],['Infectious Disease',97],['Rheumatology',84],['Pediatrics',72]].map(([label, count]) => (
            <span key={label} className="tag" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', fontSize: 14 }}>
              {label}<span className="faint" style={{ fontSize: 12 }}>{count}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Deep reads */}
      <section className="wrap section">
        <div className="section-head"><div><span className="eyebrow">Deep reads</span><h2 style={{ marginTop: 14 }}>Long-form analysis worth your time</h2></div></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            { tone:2, cat:'Public Health', title:'What 40,000 wearables revealed about heat and hospital visits', excerpt:'A continental dataset turns anecdote into signal: heat thresholds that predict ER load weeks in advance.', author:'Dr. Marcus Reyes', read:'7 min', date:'May 9, 2026' },
            { tone:3, cat:'Genomics', title:'CRISPR in the clinic: what the first 200 treated patients show us', excerpt:'Early gene-editing trials for sickle cell and beta-thalassemia are yielding durable responses.', author:'Dr. Sofia Haddad', read:'16 min', date:'May 5, 2026' },
          ].map((p) => (
            <div key={p.title} className="card" style={{ cursor: 'default' }}>
              <div className={`thumb tone-${p.tone} pat`} style={{ aspectRatio: '16/9' }}><span className="cat">{p.cat}</span></div>
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

      {/* Most read */}
      <section className="wrap section">
        <div className="section-head"><div><span className="eyebrow">Popular</span><h2 style={{ marginTop: 14 }}>Most read this month</h2></div></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { n:'01', cat:'Cardiology', title:'Reading the new GLP-1 cardiovascular outcomes data', author:'Dr. Priya Nandakumar', read:'11 min' },
            { n:'02', cat:'Endocrinology', title:'Inside the trial that rewired first-line treatment for Type 1 diabetes', author:'Dr. Lena Okafor', read:'14 min' },
            { n:'03', cat:'Neuroscience', title:'The gut–brain axis: what 1,200 patients taught us about mood', author:'Dr. Marcus Reyes', read:'9 min' },
            { n:'04', cat:'Immunology', title:'mRNA platforms after COVID: the next therapeutic decade', author:'Dr. Lena Okafor', read:'10 min' },
            { n:'05', cat:'Genomics', title:'CRISPR in the clinic: what the first 200 treated patients show us', author:'Dr. Sofia Haddad', read:'16 min' },
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

// ── Step 1: Research (full length) ────────────────────────────────────────────
function Step1({ ready, onContinue }: { ready: boolean; onContinue: () => void }) {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="w1-top" tall />
      </div>

      <section className="wrap" style={{ padding: '48px 28px 24px' }}>
        <span className="eyebrow">Research</span>
        <h1 style={{ fontSize: 'clamp(40px,6vw,72px)', maxWidth: '18ch', margin: '18px 0 18px' }}>Recent findings from the journals</h1>
        <p className="muted" style={{ fontSize: 18, maxWidth: '58ch', lineHeight: 1.65 }}>
          Every summary here started as a primary paper. Our researchers read it, checked it, and cut it down to what actually matters.
        </p>
      </section>

      <section className="wrap section" style={{ paddingTop: 16 }}>
        <div className="with-side">
          <div>
            {[
              { tone:1, cat:'Endocrinology', title:'Inside the trial that rewired first-line treatment for Type 1 diabetes', excerpt:'A teplizumab-led protocol delayed disease onset by a median of two years — we unpack the endpoints and the caveats.', author:'Dr. Lena Okafor', read:'14 min', date:'Jun 1, 2026' },
              { tone:2, cat:'Neuroscience', title:'The gut–brain axis: what 1,200 patients taught us about mood', excerpt:'A landmark microbiome cohort links specific bacterial strains to depressive symptoms.', author:'Dr. Marcus Reyes', read:'9 min', date:'May 28, 2026' },
              { tone:4, cat:'Cardiology', title:'Reading the new GLP-1 cardiovascular outcomes data', excerpt:'Beyond weight loss: a 17% reduction in major adverse events, and why dosing matters.', author:'Dr. Priya Nandakumar', read:'11 min', date:'May 24, 2026' },
              { tone:3, cat:'Clinical Trials', title:"Why most Phase II oncology trials stall — and what's changing", excerpt:'Adaptive designs and biomarker stratification are quietly improving the odds.', author:'Dr. Sofia Haddad', read:'13 min', date:'May 20, 2026' },
              { tone:6, cat:'Neurology', title:'Sleep debt and amyloid: a seven-year cohort, revisited', excerpt:'Chronic short sleep tracks with faster amyloid accumulation — but causation stays slippery.', author:'Dr. Ian Whitfield', read:'8 min', date:'May 17, 2026' },
              { tone:5, cat:'Immunology', title:'mRNA platforms after COVID: the next therapeutic decade', excerpt:'From oncology vaccines to autoimmune tolerance, the pipeline is broader than you think.', author:'Dr. Lena Okafor', read:'10 min', date:'May 13, 2026' },
              { tone:2, cat:'Public Health', title:'What 40,000 wearables revealed about heat and hospital visits', excerpt:'A continental dataset turns anecdote into signal: heat thresholds that predict ER load.', author:'Dr. Marcus Reyes', read:'7 min', date:'May 9, 2026' },
              { tone:3, cat:'Genomics', title:'CRISPR in the clinic: what the first 200 treated patients show us', excerpt:'Early gene-editing trials for sickle cell and beta-thalassemia are yielding durable responses.', author:'Dr. Sofia Haddad', read:'16 min', date:'May 5, 2026' },
              { tone:1, cat:'Psychiatry', title:'Ketamine for depression: separating the signal from the noise', excerpt:'Rapid antidepressant effects are real — but patient selection and dosing protocols remain contested.', author:'Dr. Ian Whitfield', read:'12 min', date:'Apr 30, 2026' },
              { tone:4, cat:'Infectious Disease', title:'Antimicrobial resistance: the slow pandemic reshaping surgery', excerpt:'Drug-resistant organisms are quietly changing what procedures we can safely perform.', author:'Dr. Priya Nandakumar', read:'10 min', date:'Apr 25, 2026' },
              { tone:5, cat:'Oncology', title:'CAR-T at five years: what the long-term remission data finally tells us', excerpt:'Durable responses in diffuse large B-cell lymphoma point toward a genuine cure for a subset.', author:'Dr. Sofia Haddad', read:'14 min', date:'Apr 20, 2026' },
              { tone:4, cat:'Cardiology', title:"The blood pressure paradox: why treating to target isn't always enough", excerpt:'New meta-analysis of 180,000 patients challenges the assumption that lower is always better.', author:'Dr. Priya Nandakumar', read:'9 min', date:'Apr 15, 2026' },
              { tone:2, cat:'Genomics', title:'Polygenic risk scores: closer to the clinic than you think', excerpt:'Multi-ancestry validation data suggests PRS-guided screening could reshape preventive cardiology.', author:'Dr. Marcus Reyes', read:'11 min', date:'Apr 10, 2026' },
              { tone:6, cat:'Immunology', title:'Autoimmunity after COVID: the emerging long-haul immune picture', excerpt:'Persistent dysregulation in B and T cell populations is reshaping how we think about post-viral syndromes.', author:'Dr. Lena Okafor', read:'13 min', date:'Apr 5, 2026' },
            ].map((p, i) => (
              <div key={p.title}>
                <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 20, padding: '22px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                  <div className={`thumb tone-${p.tone} pat`} style={{ height: 72, borderRadius: 10 }}><span className="cat" style={{ fontSize: 10 }}>{p.cat}</span></div>
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
              <h4 style={{ fontSize: 16 }}>Browse by specialty</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                {['Cardiology','Neuroscience','Oncology','Immunology','Genomics','Public Health','Psychiatry','Infectious Disease'].map((t) => (
                  <span key={t} className="tag" style={{ fontSize: 12, padding: '6px 12px' }}>{t}</span>
                ))}
              </div>
            </div>
            <AdSlot size="small" id="w1-side-2" label="Sidebar" />
            <div className="side-card">
              <h4 style={{ fontSize: 16 }}>About Vitalis</h4>
              <p className="muted" style={{ fontSize: 13, lineHeight: 1.6, marginTop: 8 }}>Independent medical research journalism. Every brief is sourced from primary literature and reviewed by an active clinician.</p>
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

// ── Step 2: Latest Study (full article) ───────────────────────────────────────
function Step2({ ready, onContinue }: { ready: boolean; onContinue: () => void }) {
  return (
    <>
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="w2-top" tall />
      </div>

      <section className="wrap" style={{ padding: '36px 28px 0' }}>
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow">Endocrinology · Clinical Trials</span>
          <h1 style={{ fontSize: 'clamp(36px,5.4vw,60px)', margin: '18px 0 22px', lineHeight: 1.04 }}>
            Inside the trial that rewired first-line treatment for Type 1 diabetes
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', color: 'var(--muted)', fontSize: 14.5 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent),#2a1758)', display: 'inline-block' }}></span>
              <b style={{ color: 'var(--text)', fontWeight: 600 }}>Dr. Lena Okafor</b>
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
              <div className="fig-ph thumb tone-1 pat" style={{ height: 380 }}></div>
              <figcaption>Islet autoimmunity progression in at-risk cohorts. Illustrative.</figcaption>
            </figure>
            <p>For three decades, a Type 1 diabetes diagnosis arrived with the same blunt prescription: lifelong insulin, beginning the day the beta cells gave out. The TN-10 follow-up data, presented this spring, is the first hard evidence that the timeline itself is negotiable.</p>
            <p>In a cohort of relatives with two or more islet autoantibodies — people at high risk but not yet symptomatic — a 14-day course of teplizumab delayed the onset of clinical disease by a median of roughly two years versus placebo. For a teenager, that is two more years of working pancreatic function, and two more years before the daily arithmetic of insulin begins.</p>
            <h2>What the trial actually measured</h2>
            <p>The primary endpoint was time to clinical diagnosis, defined by standard glucose-tolerance thresholds. Crucially, the trial enrolled on the basis of immune markers, not symptoms — a design choice that let investigators intervene during the silent, pre-clinical window when beta-cell mass is declining but not yet gone.</p>
            <p>That window is the whole story. Teplizumab is an anti-CD3 monoclonal antibody; it blunts the autoreactive T cells doing the damage. Hit those cells early enough and you preserve function that, post-diagnosis, is already lost.</p>
            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="w2-content-1" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>
            <h2>The two-year signal, in context</h2>
            <p>Two years is not a cure, and the authors are careful not to frame it as one. But in a disease where progression has felt inexorable, a durable delay reshapes the conversation — about screening, about when to treat, and about what &quot;first-line&quot; even means.</p>
            <blockquote>&quot;We&apos;ve spent forty years managing the consequences. This is the first time we&apos;ve meaningfully changed the slope of the curve before symptoms appear.&quot;</blockquote>
            <p>The effect was not uniform. Responders tended to be younger and to carry a specific HLA profile, hinting that the future of the therapy is stratified rather than universal.</p>
            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="w2-content-2" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>
            <div className="ad-zone" style={{ padding: '18px 0' }}>
              <AdSlot size="large" id="w2-mid" label="In-article Billboard" />
            </div>
            <h2>Caveats worth keeping</h2>
            <p>Enthusiasm should be measured against the trial&apos;s real limits:</p>
            <ul>
              <li><b>Small, enriched cohort.</b> Participants were autoantibody-positive relatives — not the general population — so screening logistics remain unsolved.</li>
              <li><b>Transient side effects.</b> A predictable lymphopenia and rash followed dosing; manageable, but not nothing in otherwise-healthy adolescents.</li>
              <li><b>Durability unknown past the window.</b> We have years, not decades, of follow-up. Whether the delay compounds or simply shifts the timeline is the open question.</li>
            </ul>
            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="w2-content-3" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>
            <h2>What it changes at the bedside</h2>
            <p>The practical shift is upstream. If a two-week course can buy years, the value of identifying at-risk individuals before symptoms — through family history and autoantibody panels — rises sharply. Several pediatric centres are already piloting targeted screening in first-degree relatives.</p>
            <p>None of this replaces insulin for those already diagnosed. But for the first time, the standard of care has a plausible &quot;before&quot; — a stage at which we intervene to protect function rather than merely replace it.</p>
            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="w2-content-4" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>
            <div className="side-card" style={{ marginTop: 8, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <span style={{ width: 54, height: 54, flex: 'none', borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent),#2a1758)' }}></span>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 21, marginBottom: 4 }}>Dr. Lena Okafor</h4>
                <p className="muted" style={{ fontSize: 14 }}>Endocrinologist and contributing editor at Vitalis. Writes on metabolic disease, trial design, and the gap between evidence and practice.</p>
              </div>
            </div>
          </article>
          <aside className="sidebar">
            <AdSlot size="small" id="w2-side-1" label="Sidebar" />
            <div className="side-card">
              <h4 style={{ fontSize: 16 }}>In this article</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 10, fontSize: 14 }}>
                <span className="muted">What the trial measured</span>
                <span className="muted">The two-year signal</span>
                <span className="muted">Caveats worth keeping</span>
                <span className="muted">What it changes at the bedside</span>
              </div>
            </div>
            <AdSlot size="small" id="w2-side-2" label="Sidebar" />
            <AdSlot size="small" id="w2-side-3" label="Sidebar" />
            <AdSlot size="small" id="w2-side-4" label="Sidebar" />
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="wrap section">
        <div className="section-head"><h2>Keep reading</h2></div>
        <div className="grid-3">
          {[
            { tone:2, cat:'Neuroscience', title:'The gut–brain axis: what 1,200 patients taught us', author:'Dr. Marcus Reyes', read:'9 min' },
            { tone:4, cat:'Cardiology', title:'Reading the new GLP-1 cardiovascular outcomes data', author:'Dr. Priya Nandakumar', read:'11 min' },
            { tone:5, cat:'Immunology', title:'mRNA platforms after COVID: the next therapeutic decade', author:'Dr. Lena Okafor', read:'10 min' },
          ].map((r) => (
            <div key={r.title} className="card" style={{ cursor: 'default' }}>
              <div className={`thumb tone-${r.tone} pat`}><span className="cat">{r.cat}</span></div>
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
            { icon:'📱', title:'Mobile-first', desc:'Built for Android with a clean, touch-friendly interface optimised for one-handed use.' },
            { icon:'🔒', title:'Private', desc:'No account needed. Your watch history stays on your device.' },
            { icon:'⚡', title:'Fast start', desc:'Videos begin playing in under a second, even on slow connections.' },
            { icon:'🎧', title:'Audio tracks', desc:'Switch between multiple audio languages without restarting.' },
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
