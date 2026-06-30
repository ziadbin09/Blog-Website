'use client';

import AdSlot from '@/components/AdSlot';
import Link from 'next/link';
import { useState } from 'react';

type Post = {
  slug: string;
  cat: string;
  tone: number;
  title: string;
  excerpt: string;
  author: string;
  read: string;
  date: string;
};

const POSTS: Post[] = [
  { slug: 'first-post', cat: 'Endocrinology', tone: 1, title: 'Inside the trial that rewired first-line treatment for Type 1 diabetes', excerpt: 'A teplizumab-led protocol delayed disease onset by a median of two years — we unpack the endpoints and the caveats.', author: 'Dr. Lena Okafor', read: '14 min', date: 'Jun 1, 2026' },
  { slug: 'second-post', cat: 'Neuroscience', tone: 2, title: 'The gut–brain axis: what 1,200 patients taught us about mood', excerpt: 'A landmark microbiome cohort links specific bacterial strains to depressive symptoms.', author: 'Dr. Marcus Reyes', read: '9 min', date: 'May 28, 2026' },
  { slug: 'third-post', cat: 'Cardiology', tone: 4, title: 'Reading the new GLP-1 cardiovascular outcomes data', excerpt: 'Beyond weight loss: a 17% reduction in major adverse events, and why dosing matters.', author: 'Dr. Priya Nandakumar', read: '11 min', date: 'May 24, 2026' },
  { slug: 'fourth-post', cat: 'Clinical Trials', tone: 3, title: "Why most Phase II oncology trials stall — and what's changing", excerpt: 'Adaptive designs and biomarker stratification are quietly improving the odds.', author: 'Dr. Sofia Haddad', read: '13 min', date: 'May 20, 2026' },
  { slug: 'fifth-post', cat: 'Neuroscience', tone: 6, title: 'Sleep debt and amyloid: a seven-year cohort, revisited', excerpt: 'Chronic short sleep tracks with faster amyloid accumulation — but causation stays slippery.', author: 'Dr. Ian Whitfield', read: '8 min', date: 'May 17, 2026' },
  { slug: 'sixth-post', cat: 'Immunology', tone: 5, title: 'mRNA platforms after COVID: the next therapeutic decade', excerpt: 'From oncology vaccines to autoimmune tolerance, the pipeline is broader than you think.', author: 'Dr. Lena Okafor', read: '10 min', date: 'May 13, 2026' },
  { slug: 'seventh-post', cat: 'Public Health', tone: 2, title: 'What 40,000 wearables revealed about heat and hospital visits', excerpt: 'A continental dataset turns anecdote into signal: heat thresholds that predict ER load.', author: 'Dr. Marcus Reyes', read: '7 min', date: 'May 9, 2026' },
  { slug: 'eighth-post', cat: 'Genomics', tone: 3, title: 'CRISPR in the clinic: what the first 200 treated patients show us', excerpt: 'Early gene-editing trials for sickle cell and beta-thalassemia are yielding durable responses — and raising new questions about access.', author: 'Dr. Sofia Haddad', read: '16 min', date: 'May 5, 2026' },
  { slug: 'ninth-post', cat: 'Psychiatry', tone: 1, title: 'Ketamine for depression: separating the signal from the noise', excerpt: 'Rapid antidepressant effects are real — but patient selection and dosing protocols remain deeply contested.', author: 'Dr. Ian Whitfield', read: '12 min', date: 'Apr 30, 2026' },
  { slug: 'tenth-post', cat: 'Infectious Disease', tone: 4, title: 'Antimicrobial resistance: the slow pandemic reshaping surgery', excerpt: 'Drug-resistant organisms are quietly changing what procedures we can safely perform — and on whom.', author: 'Dr. Priya Nandakumar', read: '10 min', date: 'Apr 25, 2026' },
  { slug: 'eleventh-post', cat: 'Oncology', tone: 5, title: 'CAR-T at five years: what the long-term remission data finally tells us', excerpt: 'Durable responses in diffuse large B-cell lymphoma point toward a genuine cure for a subset of patients.', author: 'Dr. Sofia Haddad', read: '14 min', date: 'Apr 20, 2026' },
  { slug: 'twelfth-post', cat: 'Cardiology', tone: 4, title: 'The blood pressure paradox: why treating to target isn\'t always enough', excerpt: 'New meta-analysis of 180,000 patients challenges the assumption that lower is always better.', author: 'Dr. Priya Nandakumar', read: '9 min', date: 'Apr 15, 2026' },
  { slug: 'thirteenth-post', cat: 'Genomics', tone: 2, title: 'Polygenic risk scores: closer to the clinic than you think', excerpt: 'Multi-ancestry validation data suggests PRS-guided screening could reshape preventive cardiology within the decade.', author: 'Dr. Marcus Reyes', read: '11 min', date: 'Apr 10, 2026' },
  { slug: 'fourteenth-post', cat: 'Immunology', tone: 6, title: 'Autoimmunity after COVID: the emerging long-haul immune picture', excerpt: 'Persistent dysregulation in B and T cell populations is reshaping how we think about post-viral syndromes.', author: 'Dr. Lena Okafor', read: '13 min', date: 'Apr 5, 2026' },
];

const CATS = ['all', 'Clinical Trials', 'Genomics', 'Neuroscience', 'Cardiology', 'Immunology', 'Public Health', 'Oncology', 'Psychiatry', 'Infectious Disease'];

// Inline ads injected after these post indexes (0-based), mirroring the static design
const AD_AFTER = new Set([1, 3, 5]);

export default function BlogPage() {
  const [active, setActive] = useState('all');

  const visible = POSTS.filter((p) => active === 'all' || p.cat === active);

  return (
    <>
      {/* TOP LARGE BANNER */}
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="blog-top-banner" tall />
      </div>

      {/* PAGE TITLE + FILTERS */}
      <section className="wrap" style={{ padding: '40px 28px 8px' }}>
        <span className="eyebrow">The archive</span>
        <h1 style={{ fontSize: 'clamp(40px,6vw,64px)', margin: '16px 0 10px' }}>Research, briefed.</h1>
        <p className="muted" style={{ fontSize: 17, maxWidth: '56ch' }}>
          Every study we cover, filtered to what matters. Browse by field.
        </p>

        <div className="tags" style={{ marginTop: 26 }}>
          {CATS.map((c) => (
            <button
              key={c}
              className={`tag${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
              type="button"
            >
              {c === 'all' ? 'All' : c}
            </button>
          ))}
        </div>
      </section>

      {/* MAIN with SIDEBAR */}
      <section className="wrap section" style={{ paddingTop: 32 }}>
        <div className="with-side">
          {/* POST LIST */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {visible.map((p, i) => (
              <div key={p.slug} style={{ display: 'contents' }}>
                <Link className="card post-row" href={`/blog/${p.slug}`} data-nav>
                  <div className={`thumb tone-${p.tone} pat`}>
                    <span className="cat">{p.cat}</span>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{p.title}</h3>
                    <p className="excerpt">{p.excerpt}</p>
                    <div className="card-meta">
                      <span>{p.author}</span>
                      <span className="dot"></span>
                      <span>{p.read}</span>
                      <span className="dot"></span>
                      <span>{p.date}</span>
                    </div>
                  </div>
                </Link>
                {AD_AFTER.has(i) && (
                  <AdSlot
                    size="small"
                    id={`blog-inline-ad-${i}`}
                    label="Inline Rectangle"
                    style={{ height: 'auto', minHeight: 160 }}
                  />
                )}
              </div>
            ))}

            {/* PAGINATION */}
            <div className="pager">
              <a className="prev">← Prev</a>
              <span className="cur">1</span>
              <a>2</a>
              <a>3</a>
              <span className="gap">…</span>
              <a>9</a>
              <a className="next">Next →</a>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="sidebar">
            <AdSlot size="small" id="blog-side-ad-1" label="Sidebar" />
            <div className="side-card">
              <h4>The weekly briefing</h4>
              <p className="muted" style={{ fontSize: 14, marginBottom: 14 }}>
                One evidence-based email every Friday. No spam, no hype.
              </p>
              <a className="btn btn-primary" href="#" style={{ width: '100%', justifyContent: 'center' }}>
                Subscribe free
              </a>
            </div>
            <AdSlot size="small" id="blog-side-ad-2" label="Sidebar" />
            <AdSlot size="small" id="blog-side-ad-3" label="Sidebar" />
          </aside>
        </div>
      </section>

      {/* MIDDLE LARGE BANNER */}
      <div className="wrap ad-zone" style={{ padding: '8px 28px 24px' }}>
        <AdSlot size="large" id="blog-middle-banner" label="Billboard" />
      </div>

      {/* pre-footer 2 small ads (#7,#8) */}
      <div className="wrap ad-zone ad-300-wrap" style={{ padding: '8px 28px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <span className="faint" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Sponsored
          </span>
          <span style={{ flex: 1, height: 1, background: 'var(--border)' }}></span>
        </div>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          <AdSlot size="small" id="blog-prefooter-1" fluid={false} />
          <AdSlot size="small" id="blog-prefooter-2" fluid={false} />
        </div>
      </div>

      {/* BOTTOM LARGE BANNER */}
      <div className="wrap ad-zone" style={{ padding: '0 28px' }}>
        <AdSlot size="large" id="blog-bottom-banner" />
      </div>
    </>
  );
}
