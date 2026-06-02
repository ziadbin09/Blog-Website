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
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 48,
            flexWrap: 'wrap',
            borderTop: '1px solid var(--border)',
            paddingTop: 26,
          }}
        >
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
          {/* featured card */}
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

          {/* sidebar: 2 small ads (1,2) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <AdSlot size="small" id="home-side-ad-1" />
            <AdSlot size="small" id="home-side-ad-2" />
          </div>
        </div>
      </section>

      {/* POSTS GRID (5 posts + 1 ad = ad #3) */}
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
          {/* ad #3 sits in the grid as a tile */}
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

      {/* ad-zone: 2 small ads, clearly grouped (#4, #5) */}
      <div className="wrap ad-zone ad-300-wrap" style={{ padding: '40px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <span className="faint" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Sponsored
          </span>
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

      {/* ABOUT BLURB + 1 ad (#6) */}
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
            <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
              <Link className="btn btn-ghost" href="/blog" data-nav>
                Our editorial standards
              </Link>
              <a className="btn btn-quiet" href="#">
                Meet the contributors →
              </a>
            </div>
          </div>
          <div className="ad-300-wrap">
            <AdSlot size="small" id="home-about-ad" />
          </div>
        </div>
      </section>

      {/* ad-zone: 2 small ads pre-footer (#7, #8) */}
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
