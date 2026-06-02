export const metadata = {
  title: 'Privacy Policy — Vitalis',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="wrap narrow section" style={{ paddingTop: 56 }}>
        <span className="eyebrow">Legal</span>
        <h1 style={{ fontSize: 'clamp(38px,5.4vw,60px)', margin: '16px 0 8px' }}>Privacy Policy</h1>
        <p className="faint" style={{ fontSize: 13, marginBottom: 8 }}>Last updated: June 2026</p>

        <article className="article" style={{ fontSize: 17 }}>
          <h2>1. Introduction</h2>
          <p>
            Vitalis Media (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
            our website and use our services.
          </p>

          <h2>2. Information we collect</h2>
          <p>We may collect information about you in a variety of ways, including:</p>
          <ul>
            <li><b>Personal data.</b> Name, email address, and similar identifiers you voluntarily provide when you subscribe or contact us.</li>
            <li><b>Usage data.</b> Pages visited, time on site, and interactions, collected automatically to improve the experience.</li>
            <li><b>Device data.</b> Browser type, device model, and approximate location when you access the site.</li>
          </ul>

          <h2>3. Use of your information</h2>
          <p>We use the information we collect to operate and improve Vitalis, specifically to:</p>
          <ul>
            <li>Deliver our editorial content and the weekly briefing you subscribe to.</li>
            <li>Monitor and analyze usage and trends to improve your experience.</li>
            <li>Serve and measure advertising, where applicable.</li>
          </ul>

          <h2>4. Advertising</h2>
          <p>
            Pages on this site display advertising placeholders. In production, third-party vendors — including
            advertising partners such as Google — may use cookies to serve ads based on your prior visits to this and
            other websites. You can manage ad personalization through your account or browser settings.
          </p>

          <h2>5. Security of your information</h2>
          <p>
            We use administrative, technical, and physical safeguards to protect your personal information. However, no
            method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Contact us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at <a className="inline" href="mailto:privacy@vitalis.med">privacy@vitalis.med</a>.
          </p>
        </article>
      </section>
    </>
  );
}
