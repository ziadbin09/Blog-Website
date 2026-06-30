import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export const metadata = {
  title: 'Vitalis — Medical Research, Read Clearly',
};

export default function Home() {
  return (
    <>
      {/* TOP LARGE BANNER */}
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="home-top-banner" tall />
      </div>

      {/* HERO */}
      <section className="wrap" style={{ padding: '48px 28px 24px' }}>
        <span className="eyebrow">Peer-reviewed, plainly explained</span>
        <h1 style={{ fontSize: 'clamp(44px,7vw,84px)', maxWidth: '14ch', margin: '20px 0 22px' }}>
          The science of medicine, read clearly.
        </h1>
        <p className="muted" style={{ fontSize: 19, maxWidth: '60ch', lineHeight: 1.6 }}>
          Vitalis distills clinical trials, genomics, and the breakthroughs reshaping care — written by
          working researchers, for clinicians and the curious alike.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" href="/blog" data-nav>
            Read the latest research
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          <Link className="btn btn-ghost" href="/app" data-nav>
            Explore the app
          </Link>
        </div>
        <div style={{ display: 'flex', gap: 40, marginTop: 48, flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: 26 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 34 }}>2,400+</div>
            <div className="faint" style={{ fontSize: 13 }}>studies summarized</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 34 }}>38</div>
            <div className="faint" style={{ fontSize: 13 }}>contributing researchers</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 34 }}>weekly</div>
            <div className="faint" style={{ fontSize: 13 }}>evidence briefings</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 34 }}>94%</div>
            <div className="faint" style={{ fontSize: 13 }}>reader satisfaction</div>
          </div>
        </div>
      </section>

      {/* FEATURED + SIDEBAR ADS */}
      <section className="wrap section" style={{ paddingTop: 40 }}>
        <div className="section-head">
          <div>
            <span className="eyebrow">Latest</span>
            <h2 style={{ marginTop: 14 }}>This week in research</h2>
          </div>
          <p className="sub">
            New evidence, methodology deep-dives, and what the data actually means for patients.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.85fr 1fr', gap: 28, alignItems: 'start' }}>
          <Link className="card" href="/blog/first-post" data-nav>
            <div className="thumb tone-1 pat" style={{ aspectRatio: '16/10' }}>
              <span className="cat">Endocrinology</span>
            </div>
            <div className="card-body" style={{ padding: '28px 30px 30px' }}>
              <h3 className="card-title" style={{ fontSize: 34, lineHeight: 1.05 }}>
                Inside the trial that rewired first-line treatment for Type 1 diabetes
              </h3>
              <p className="excerpt" style={{ fontSize: 16, marginTop: 12 }}>
                A teplizumab-led protocol delayed disease onset by a median of two years. We unpack the
                endpoints, the caveats, and what it changes at the bedside.
              </p>
              <div className="card-meta">
                <span>Dr. Lena Okafor</span>
                <span className="dot"></span>
                <span>14 min read</span>
                <span className="dot"></span>
                <span>Jun 1, 2026</span>
              </div>
            </div>
          </Link>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <AdSlot size="small" id="home-side-ad-1" />
            <AdSlot size="small" id="home-side-ad-2" />
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="wrap" style={{ paddingBottom: 20 }}>
        <div className="grid-3">
          <Link className="card" href="/blog/second-post" data-nav>
            <div className="thumb tone-2 pat"><span className="cat">Neuroscience</span></div>
            <div className="card-body">
              <h3 className="card-title">The gut–brain axis: what 1,200 patients taught us about mood</h3>
              <p className="excerpt">A landmark microbiome cohort links specific bacterial strains to depressive symptoms.</p>
              <div className="card-meta"><span>Dr. Marcus Reyes</span><span className="dot"></span><span>9 min</span></div>
            </div>
          </Link>
          <Link className="card" href="/blog/third-post" data-nav>
            <div className="thumb tone-4 pat"><span className="cat">Cardiology</span></div>
            <div className="card-body">
              <h3 className="card-title">Reading the new GLP-1 cardiovascular outcomes data</h3>
              <p className="excerpt">Beyond weight loss: a 17% reduction in major adverse events, and why dosing matters.</p>
              <div className="card-meta"><span>Dr. Priya Nandakumar</span><span className="dot"></span><span>11 min</span></div>
            </div>
          </Link>
          <AdSlot size="small" id="home-grid-ad" style={{ height: 'auto', minHeight: 250 }} />
          <Link className="card" href="/blog/fourth-post" data-nav>
            <div className="thumb tone-3 pat"><span className="cat">Clinical Trials</span></div>
            <div className="card-body">
              <h3 className="card-title">Why most Phase II oncology trials stall — and what&apos;s changing</h3>
              <p className="excerpt">Adaptive designs and biomarker stratification are quietly improving the odds.</p>
              <div className="card-meta"><span>Dr. Sofia Haddad</span><span className="dot"></span><span>13 min</span></div>
            </div>
          </Link>
          <Link className="card" href="/blog/fifth-post" data-nav>
            <div className="thumb tone-6 pat"><span className="cat">Neurology</span></div>
            <div className="card-body">
              <h3 className="card-title">Sleep debt and amyloid: a seven-year cohort, revisited</h3>
              <p className="excerpt">Chronic short sleep tracks with faster amyloid accumulation — but causation stays slippery.</p>
              <div className="card-meta"><span>Dr. Ian Whitfield</span><span className="dot"></span><span>8 min</span></div>
            </div>
          </Link>
          <Link className="card" href="/blog/sixth-post" data-nav>
            <div className="thumb tone-5 pat"><span className="cat">Immunology</span></div>
            <div className="card-body">
              <h3 className="card-title">mRNA platforms after COVID: the next therapeutic decade</h3>
              <p className="excerpt">From oncology vaccines to autoimmune tolerance, the pipeline is broader than you think.</p>
              <div className="card-meta"><span>Dr. Lena Okafor</span><span className="dot"></span><span>10 min</span></div>
            </div>
          </Link>
        </div>
      </section>

      {/* SPONSORED */}
      <div className="wrap ad-zone ad-300-wrap" style={{ padding: '40px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <span className="faint" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Sponsored</span>
          <span style={{ flex: 1, height: 1, background: 'var(--border)' }}></span>
        </div>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          <AdSlot size="small" id="home-sponsored-1" fluid={false} />
          <AdSlot size="small" id="home-sponsored-2" fluid={false} />
        </div>
      </div>

      {/* MIDDLE LARGE BANNER */}
      <div className="wrap ad-zone" style={{ padding: '24px 28px' }}>
        <AdSlot size="large" id="home-middle-banner" label="Billboard" />
      </div>

      {/* TRENDING TOPICS */}
      <section className="wrap section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Browse by field</span>
            <h2 style={{ marginTop: 14 }}>What researchers are reading</h2>
          </div>
          <p className="sub">Jump into the specialty that matters most to you.</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
          {[
            { label: 'Cardiology', count: 312 },
            { label: 'Neuroscience', count: 287 },
            { label: 'Oncology', count: 261 },
            { label: 'Genomics', count: 198 },
            { label: 'Immunology', count: 175 },
            { label: 'Endocrinology', count: 154 },
            { label: 'Clinical Trials', count: 143 },
            { label: 'Public Health', count: 129 },
            { label: 'Psychiatry', count: 118 },
            { label: 'Infectious Disease', count: 97 },
            { label: 'Rheumatology', count: 84 },
            { label: 'Pediatrics', count: 72 },
          ].map((t) => (
            <Link key={t.label} href="/blog" data-nav
              className="tag"
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', fontSize: 14 }}>
              {t.label}
              <span className="faint" style={{ fontSize: 12 }}>{t.count}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* DEEP READS */}
      <section className="wrap section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Deep reads</span>
            <h2 style={{ marginTop: 14 }}>Long-form analysis worth your time</h2>
          </div>
          <p className="sub">When a single paragraph won&apos;t do the evidence justice.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <Link className="card" href="/blog/seventh-post" data-nav>
            <div className="thumb tone-2 pat" style={{ aspectRatio: '16/9' }}>
              <span className="cat">Public Health</span>
            </div>
            <div className="card-body" style={{ padding: '22px 24px 24px' }}>
              <h3 className="card-title" style={{ fontSize: 22 }}>What 40,000 wearables revealed about heat and hospital visits</h3>
              <p className="excerpt">A continental dataset turns anecdote into signal: heat thresholds that predict ER load weeks in advance.</p>
              <div className="card-meta">
                <span>Dr. Marcus Reyes</span><span className="dot"></span><span>7 min</span><span className="dot"></span><span>May 9, 2026</span>
              </div>
            </div>
          </Link>
          <Link className="card" href="/blog/eighth-post" data-nav>
            <div className="thumb tone-3 pat" style={{ aspectRatio: '16/9' }}>
              <span className="cat">Genomics</span>
            </div>
            <div className="card-body" style={{ padding: '22px 24px 24px' }}>
              <h3 className="card-title" style={{ fontSize: 22 }}>CRISPR in the clinic: what the first 200 treated patients show us</h3>
              <p className="excerpt">Early gene-editing trials for sickle cell and beta-thalassemia are yielding durable responses — and raising new questions about access.</p>
              <div className="card-meta">
                <span>Dr. Sofia Haddad</span><span className="dot"></span><span>16 min</span><span className="dot"></span><span>May 5, 2026</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="wrap" style={{ padding: '60px 28px' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, #1a0a3d 100%)',
          borderRadius: 20,
          padding: '56px 48px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 40,
          alignItems: 'center',
        }}>
          <div>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Free, every Friday</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', color: '#fff', margin: '14px 0 16px', maxWidth: '20ch' }}>
              The weekly evidence briefing.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, maxWidth: '48ch', lineHeight: 1.65 }}>
              One email. The five most important studies of the week, explained in plain language by the researchers who read them so you don&apos;t have to.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
              {['No spam', 'No hype', 'Unsubscribe any time'].map((s) => (
                <span key={s} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 100, padding: '6px 14px', fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>{s}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 260 }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: 10,
                padding: '14px 18px',
                color: '#fff',
                fontSize: 15,
                outline: 'none',
              }}
            />
            <a className="btn btn-primary" href="#" style={{ justifyContent: 'center', background: '#fff', color: 'var(--accent)' }}>
              Subscribe free →
            </a>
          </div>
        </div>
      </section>

      {/* MORE STORIES */}
      <section className="wrap section">
        <div className="section-head">
          <div>
            <span className="eyebrow">More stories</span>
            <h2 style={{ marginTop: 14 }}>From across the archive</h2>
          </div>
          <Link className="btn btn-ghost" href="/blog" data-nav style={{ whiteSpace: 'nowrap' }}>
            View all research →
          </Link>
        </div>
        <div className="grid-3">
          <Link className="card" href="/blog/ninth-post" data-nav>
            <div className="thumb tone-1 pat"><span className="cat">Psychiatry</span></div>
            <div className="card-body">
              <h3 className="card-title">Ketamine for depression: separating the signal from the noise</h3>
              <p className="excerpt">Rapid antidepressant effects are real — but patient selection and dosing protocols remain contested.</p>
              <div className="card-meta"><span>Dr. Ian Whitfield</span><span className="dot"></span><span>12 min</span></div>
            </div>
          </Link>
          <Link className="card" href="/blog/tenth-post" data-nav>
            <div className="thumb tone-4 pat"><span className="cat">Infectious Disease</span></div>
            <div className="card-body">
              <h3 className="card-title">Antimicrobial resistance: the slow pandemic reshaping surgery</h3>
              <p className="excerpt">Drug-resistant organisms are quietly changing what procedures we can safely perform — and on whom.</p>
              <div className="card-meta"><span>Dr. Priya Nandakumar</span><span className="dot"></span><span>10 min</span></div>
            </div>
          </Link>
          <Link className="card" href="/blog/eleventh-post" data-nav>
            <div className="thumb tone-5 pat"><span className="cat">Oncology</span></div>
            <div className="card-body">
              <h3 className="card-title">CAR-T at five years: what the long-term remission data finally tells us</h3>
              <p className="excerpt">Durable responses in diffuse large B-cell lymphoma point toward a genuine cure for a subset of patients.</p>
              <div className="card-meta"><span>Dr. Sofia Haddad</span><span className="dot"></span><span>14 min</span></div>
            </div>
          </Link>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="wrap" style={{ padding: '20px 28px 60px' }}>
        <blockquote style={{
          borderLeft: '4px solid var(--accent)',
          paddingLeft: 32,
          margin: 0,
          maxWidth: '72ch',
        }}>
          <p style={{ fontSize: 'clamp(20px,3vw,28px)', lineHeight: 1.45, fontStyle: 'italic', color: 'var(--text)' }}>
            &ldquo;The most dangerous moment in medicine is when a promising result becomes clinical consensus before the replication evidence arrives. Our job is to slow that down.&rdquo;
          </p>
          <footer style={{ marginTop: 18, fontSize: 14, color: 'var(--muted)' }}>
            — Dr. Lena Okafor, Editor-in-Chief, Vitalis
          </footer>
        </blockquote>
      </section>

      {/* AD ZONE */}
      <div className="wrap ad-zone ad-300-wrap" style={{ padding: '0 28px 40px' }}>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          <AdSlot size="small" id="home-sponsored-3" fluid={false} />
          <AdSlot size="small" id="home-sponsored-4" fluid={false} />
        </div>
      </div>

      {/* ABOUT BLURB */}
      <section className="wrap section">
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="eyebrow">About Vitalis</span>
            <h2 style={{ fontSize: 42, margin: '18px 0 18px', maxWidth: '18ch' }}>
              Evidence, without the jargon or the hype.
            </h2>
            <p className="muted" style={{ fontSize: 17, maxWidth: '58ch' }}>
              We&apos;re a small newsroom of physicians, biostatisticians, and science writers. Every brief is
              sourced from primary literature, checked against the trial registry, and reviewed by someone who
              actually practices in the field. No press-release science.
            </p>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { title: 'Primary sources only', desc: 'We cite the study, not the press release. Every claim links to the trial registry or journal.' },
                { title: 'Peer-reviewed internally', desc: 'Each brief is reviewed by at least one active clinician in the relevant specialty before publication.' },
                { title: 'No conflicts of interest', desc: 'Our editorial team has no financial relationships with pharmaceutical companies or device manufacturers.' },
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
            <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
              <Link className="btn btn-ghost" href="/blog" data-nav>Our editorial standards</Link>
              <a className="btn btn-quiet" href="#">Meet the contributors →</a>
            </div>
          </div>
          <div className="ad-300-wrap">
            <AdSlot size="small" id="home-about-ad" />
          </div>
        </div>
      </section>

      {/* MOST READ */}
      <section className="wrap section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Popular</span>
            <h2 style={{ marginTop: 14 }}>Most read this month</h2>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { n: '01', slug: 'third-post', cat: 'Cardiology', title: 'Reading the new GLP-1 cardiovascular outcomes data', author: 'Dr. Priya Nandakumar', read: '11 min' },
            { n: '02', slug: 'first-post', cat: 'Endocrinology', title: 'Inside the trial that rewired first-line treatment for Type 1 diabetes', author: 'Dr. Lena Okafor', read: '14 min' },
            { n: '03', slug: 'second-post', cat: 'Neuroscience', title: 'The gut–brain axis: what 1,200 patients taught us about mood', author: 'Dr. Marcus Reyes', read: '9 min' },
            { n: '04', slug: 'sixth-post', cat: 'Immunology', title: 'mRNA platforms after COVID: the next therapeutic decade', author: 'Dr. Lena Okafor', read: '10 min' },
            { n: '05', slug: 'fifth-post', cat: 'Neurology', title: 'Sleep debt and amyloid: a seven-year cohort, revisited', author: 'Dr. Ian Whitfield', read: '8 min' },
          ].map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} data-nav
              style={{ display: 'grid', gridTemplateColumns: '48px 1fr auto', gap: 20, alignItems: 'center', padding: '20px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none' }}>
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

      {/* PRE-FOOTER ADS */}
      <div className="wrap ad-zone ad-300-wrap" style={{ padding: '20px 28px 8px' }}>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          <AdSlot size="small" id="home-prefooter-1" fluid={false} />
          <AdSlot size="small" id="home-prefooter-2" fluid={false} />
        </div>
      </div>

      {/* BOTTOM LARGE BANNER */}
      <div className="wrap ad-zone" style={{ padding: '24px 28px 0' }}>
        <AdSlot size="large" id="home-bottom-banner" />
      </div>
    </>
  );
}
