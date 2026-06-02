import AdSlot from '@/components/AdSlot';

export const metadata = {
  title: 'Vitalis Daily — Get the App',
};

export default function AppPage() {
  return (
    <>
      <main className="app-wrap section" style={{ paddingTop: 48 }}>
        {/* TOP LARGE BANNER */}
        <div className="ad-zone" style={{ paddingBottom: 28 }}>
          <AdSlot size="large" id="app-top-banner" tall />
        </div>

        {/* REWARDED AD */}
        <div className="rewarded">
          <span className="ad-tag">Ad</span>
          <div className="play-orb">
            <svg viewBox="0 0 24 24" fill="#fff"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
          </div>
          <h2 style={{ fontSize: 30, marginBottom: 8 }}>Watch Ad to Unlock</h2>
          <p className="muted" style={{ fontSize: 15, maxWidth: '46ch', margin: '0 auto 20px' }}>
            View a short rewarded video to unlock Vitalis Daily Premium free for 7 days — full study archive, no
            banner ads.
          </p>
          <button className="btn btn-primary" style={{ margin: '0 auto' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
              <line x1="19" y1="5" x2="19" y2="19"></line>
            </svg>
            Watch 30-second ad
          </button>
          <div className="faint" style={{ fontSize: 12, marginTop: 14 }}>Rewarded video · 320 × 480 placeholder</div>
        </div>

        {/* APP IDENTITY */}
        <div style={{ marginTop: 54 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 20,
              margin: '0 auto 20px',
              display: 'grid',
              placeItems: 'center',
              background: 'linear-gradient(145deg,var(--accent),#2a1758)',
              boxShadow: '0 0 0 1px var(--accent-line), 0 16px 40px -12px var(--accent)',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 40, height: 40 }}>
              <path d="M3 12h3l2 6 4-14 2 8h2l2-3h3" />
            </svg>
          </div>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Companion app</span>
          <h1 style={{ fontSize: 'clamp(40px,6vw,60px)', margin: '16px 0 14px' }}>Vitalis Daily</h1>
          <p className="muted" style={{ fontSize: 18, maxWidth: '54ch', margin: '0 auto', lineHeight: 1.6 }}>
            Your evidence-based health journal. Track symptoms and medications, get plain-language explainers on the
            studies that matter, and turn research into routine — privately, on your phone.
          </p>
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center', marginTop: 22, color: 'var(--faint)', fontSize: 13.5, flexWrap: 'wrap' }}>
            <span>★ 4.8 · 12k ratings</span><span className="dot"></span><span>50k+ downloads</span><span className="dot"></span><span>Free · no tracking</span>
          </div>
        </div>

        {/* MIDDLE LARGE BANNER */}
        <div className="ad-zone" style={{ padding: '36px 0 0' }}>
          <AdSlot size="large" id="app-middle-banner" label="Billboard" />
        </div>

        {/* SCREENSHOTS */}
        <div className="shots" style={{ marginTop: 44 }}>
          <div className="phone"><div className="screen tone-1 pat"></div></div>
          <div className="phone"><div className="screen tone-4 pat"></div></div>
          <div className="phone"><div className="screen tone-2 pat"></div></div>
        </div>
        <div className="faint" style={{ fontSize: 12, marginTop: 14 }}>Screenshot placeholders — drop in your store assets</div>

        {/* small ad row between sections */}
        <div className="ad-zone ad-300-wrap" style={{ padding: '36px 0 0' }}>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            <AdSlot size="small" id="app-ad-1" fluid={false} />
            <AdSlot size="small" id="app-ad-2" fluid={false} />
          </div>
        </div>

        {/* FEATURES */}
        <div style={{ marginTop: 56, textAlign: 'left', maxWidth: 680, marginInline: 'auto' }}>
          <h2 style={{ fontSize: 32, textAlign: 'center', marginBottom: 30 }}>What&apos;s inside</h2>
          <div className="feat">
            <div className="row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h3l2 6 4-14 2 8h2l2-3h3" /></svg>
              </span>
              <div><b>Symptom &amp; vitals journal</b><p>Log how you feel in seconds; spot patterns with clean weekly trends.</p></div>
            </div>
            <div className="row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M8 2v4M16 2v4M3 10h18"></path></svg>
              </span>
              <div><b>Medication reminders</b><p>Schedules that adapt to your day, with adherence you can actually see.</p></div>
            </div>
            <div className="row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </span>
              <div><b>Research explainers</b><p>The same briefs from Vitalis, distilled for your conditions of interest.</p></div>
            </div>
            <div className="row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </span>
              <div><b>Private by design</b><p>Your data stays on-device by default. Export or delete it any time.</p></div>
            </div>
          </div>
        </div>

        {/* DOWNLOAD */}
        <div style={{ marginTop: 54 }}>
          {/* TODO: Replace # with Play Store URL */}
          <a className="gplay" href="#">
            <svg viewBox="0 0 512 512" fill="none">
              <path d="M48 59v394c0 7 4 13 10 16l231-213L58 43c-6 3-10 9-10 16z" fill="#fff" />
              <path d="M363 196l-74-43L58 43c-2-1-4-1-6-1l237 217 74-63z" fill="#fff" />
              <path d="M363 316l74-43c12-7 12-27 0-34l-74-43-80 68 80 52z" fill="#fff" />
              <path d="M52 469c2 0 4 0 6-1l231-133-74-71-237 217c2 1 4 1 6 1z" fill="#fff" />
            </svg>
            <span className="lbl"><small>GET IT ON</small><span>Google Play</span></span>
          </a>
          <div className="faint" style={{ fontSize: 13, marginTop: 16 }}>Android 9+ · 38 MB · also available for iOS soon</div>
        </div>

        {/* BOTTOM LARGE BANNER */}
        <div className="ad-zone" style={{ padding: '40px 0 0' }}>
          <AdSlot size="large" id="app-bottom-banner" />
        </div>
      </main>
    </>
  );
}
