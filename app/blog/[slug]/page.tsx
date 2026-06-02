import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

type PostMeta = {
  title: string;
  tags: string;
  author: string;
  authorBlurb: string;
  read: string;
  date: string;
  tone: number;
};

const POSTS: Record<string, PostMeta> = {
  'first-post': {
    title: 'Inside the trial that rewired first-line treatment for Type 1 diabetes',
    tags: 'Endocrinology · Clinical Trials',
    author: 'Dr. Lena Okafor',
    authorBlurb:
      'Endocrinologist and contributing editor at Vitalis. Writes on metabolic disease, trial design, and the gap between evidence and practice.',
    read: '14 min read',
    date: 'June 1, 2026',
    tone: 1,
  },
  'second-post': {
    title: 'The gut–brain axis: what 1,200 patients taught us about mood',
    tags: 'Neuroscience · Genomics',
    author: 'Dr. Marcus Reyes',
    authorBlurb: 'Neuroscientist and research director at Vitalis. Writes on the brain, behavior, and the microbiome.',
    read: '9 min read',
    date: 'May 28, 2026',
    tone: 2,
  },
  'third-post': {
    title: 'Reading the new GLP-1 cardiovascular outcomes data',
    tags: 'Cardiology · Clinical Trials',
    author: 'Dr. Priya Nandakumar',
    authorBlurb: 'Cardiologist and clinical lead at Vitalis. Writes on metabolic and cardiovascular medicine.',
    read: '11 min read',
    date: 'May 24, 2026',
    tone: 4,
  },
};

const RELATED = [
  { slug: 'second-post', tone: 2, cat: 'Neuroscience', title: 'The gut–brain axis: what 1,200 patients taught us about mood', author: 'Dr. Marcus Reyes', read: '9 min' },
  { slug: 'third-post', tone: 4, cat: 'Cardiology', title: 'Reading the new GLP-1 cardiovascular outcomes data', author: 'Dr. Priya Nandakumar', read: '11 min' },
  { slug: 'sixth-post', tone: 5, cat: 'Immunology', title: 'mRNA platforms after COVID: the next therapeutic decade', author: 'Dr. Lena Okafor', read: '10 min' },
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug] ?? POSTS['first-post'];

  return (
    <>
      {/* LARGE BANNER ABOVE CONTENT (#1) */}
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="post-top-banner" tall />
      </div>

      {/* ARTICLE HEADER */}
      <section className="wrap" style={{ padding: '36px 28px 0' }}>
        <div style={{ maxWidth: 760 }}>
          <Link href="/blog" data-nav className="eyebrow" style={{ cursor: 'pointer' }}>
            {post.tags}
          </Link>
          <h1 style={{ fontSize: 'clamp(38px,5.4vw,60px)', margin: '18px 0 22px', lineHeight: 1.04 }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', color: 'var(--muted)', fontSize: 14.5 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent),#2a1758)', display: 'inline-block' }}></span>
              <b style={{ color: 'var(--text)', fontWeight: 600 }}>{post.author}</b>
            </span>
            <span className="dot"></span><span>Endocrinologist, contributing editor</span>
            <span className="dot"></span><span>{post.read}</span>
            <span className="dot"></span><span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* MAIN with SIDEBAR */}
      <section className="wrap section" style={{ paddingTop: 34 }}>
        <div className="with-side">
          {/* ARTICLE */}
          <article className="article" style={{ maxWidth: 760 }}>
            <figure style={{ marginTop: 0 }}>
              <div className={`fig-ph thumb tone-${post.tone} pat`} style={{ height: 380 }}></div>
              <figcaption>Islet autoimmunity progression in at-risk cohorts. Illustrative — replace with study figure.</figcaption>
            </figure>

            <p>For three decades, a Type 1 diabetes diagnosis arrived with the same blunt prescription: lifelong insulin, beginning the day the beta cells gave out. The TN-10 follow-up data, presented this spring, is the first hard evidence that the timeline itself is negotiable.</p>

            <p>In a cohort of relatives with two or more islet autoantibodies — people at high risk but not yet symptomatic — a 14-day course of teplizumab delayed the onset of clinical disease by a median of roughly two years versus placebo. For a teenager, that is two more years of working pancreatic function, and two more years before the daily arithmetic of insulin begins.</p>

            <h2>What the trial actually measured</h2>
            <p>The primary endpoint was time to clinical diagnosis, defined by standard glucose-tolerance thresholds. Crucially, the trial enrolled on the basis of immune markers, not symptoms — a design choice that let investigators intervene during the silent, pre-clinical window when beta-cell mass is declining but not yet gone.</p>
            <p>That window is the whole story. Teplizumab is an anti-CD3 monoclonal antibody; it blunts the autoreactive T cells doing the damage. Hit those cells early enough and you preserve function that, post-diagnosis, is already lost.</p>

            {/* between-section small ad (#1) */}
            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="post-content-ad-1" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>

            <h2>The two-year signal, in context</h2>
            <p>Two years is not a cure, and the authors are careful not to frame it as one. But in a disease where progression has felt inexorable, a durable delay reshapes the conversation — about screening, about when to treat, and about what &quot;first-line&quot; even means.</p>
            <blockquote>&quot;We&apos;ve spent forty years managing the consequences. This is the first time we&apos;ve meaningfully changed the slope of the curve before symptoms appear.&quot;</blockquote>
            <p>The effect was not uniform. Responders tended to be younger and to carry a specific HLA profile, hinting that the future of the therapy is stratified rather than universal.</p>

            {/* between-section small ad (#2) */}
            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="post-content-ad-2" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>

            {/* MID-CONTENT LARGE BANNER (#2) */}
            <div className="ad-zone" style={{ padding: '18px 0' }}>
              <AdSlot size="large" id="post-mid-banner" label="In-article Billboard" />
            </div>

            <h2>Caveats worth keeping</h2>
            <p>Enthusiasm should be measured against the trial&apos;s real limits:</p>
            <ul>
              <li><b>Small, enriched cohort.</b> Participants were autoantibody-positive relatives — not the general population — so screening logistics remain unsolved.</li>
              <li><b>Transient side effects.</b> A predictable lymphopenia and rash followed dosing; manageable, but not nothing in otherwise-healthy adolescents.</li>
              <li><b>Durability unknown past the window.</b> We have years, not decades, of follow-up. Whether the delay compounds or simply shifts the timeline is the open question.</li>
            </ul>

            {/* between-section small ad (#3) */}
            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="post-content-ad-3" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>

            <h2>What it changes at the bedside</h2>
            <p>The practical shift is upstream. If a two-week course can buy years, the value of identifying at-risk individuals before symptoms — through family history and autoantibody panels — rises sharply. Several pediatric centers are already piloting targeted screening in first-degree relatives.</p>
            <p>None of this replaces insulin for those already diagnosed. But for the first time, the standard of care has a plausible &quot;before&quot; — a stage at which we intervene to protect function rather than merely replace it.</p>

            {/* between-section small ad (#4) */}
            <div className="ad-zone ad-300-wrap" style={{ padding: '8px 0' }}>
              <AdSlot size="small" id="post-content-ad-4" label="In-content" style={{ height: 'auto', minHeight: 160 }} />
            </div>

            {/* author / source */}
            <div className="side-card" style={{ marginTop: 8, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <span style={{ width: 54, height: 54, flex: 'none', borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent),#2a1758)' }}></span>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 21, marginBottom: 4 }}>{post.author}</h4>
                <p className="muted" style={{ fontSize: 14 }}>{post.authorBlurb}</p>
              </div>
            </div>
          </article>

          {/* STICKY SIDEBAR: TOC + 4 small ads (#5–#8) */}
          <aside className="sidebar">
            <AdSlot size="small" id="post-side-ad-1" label="Sidebar" />
            <div className="side-card">
              <h4 style={{ fontSize: 18 }}>In this article</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 10, fontSize: 14 }}>
                <a className="muted" href="#">What the trial measured</a>
                <a className="muted" href="#">The two-year signal</a>
                <a className="muted" href="#">Caveats worth keeping</a>
                <a className="muted" href="#">What it changes at the bedside</a>
              </div>
            </div>
            <AdSlot size="small" id="post-side-ad-2" label="Sidebar" />
            <AdSlot size="small" id="post-side-ad-3" label="Sidebar" />
            <AdSlot size="small" id="post-side-ad-4" label="Sidebar" />
          </aside>
        </div>
      </section>

      {/* LARGE BANNER BELOW CONTENT (#3) */}
      <div className="wrap ad-zone" style={{ padding: '0 28px' }}>
        <AdSlot size="large" id="post-bottom-banner" />
      </div>

      {/* RELATED */}
      <section className="wrap section">
        <div className="section-head"><h2>Keep reading</h2></div>
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
    </>
  );
}
