export const metadata = {
  title: 'Privacy Policy — TechPulse',
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
            TechPulse Media (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
            our website, use our mobile app, and interact with our services.
          </p>

          <h2>2. Information we collect</h2>
          <p>We may collect information about you in a variety of ways, including:</p>
          <ul>
            <li><b>Personal data.</b> Name, email address, and similar identifiers you voluntarily provide when you subscribe, create an account, or contact us.</li>
            <li><b>Usage data.</b> Pages and articles visited, time on site, search queries, and interactions, collected automatically to improve the experience.</li>
            <li><b>Device data.</b> Browser type, device model, operating system version, and approximate location when you access the site or app.</li>
            <li><b>Saved preferences.</b> Categories you follow, articles you save for offline reading, and price-tracking watchlists.</li>
          </ul>

          <h2>3. Use of your information</h2>
          <p>We use the information we collect to operate and improve TechPulse, specifically to:</p>
          <ul>
            <li>Deliver our editorial content, push notifications, and the weekly briefing you subscribe to.</li>
            <li>Monitor and analyze usage and trends to improve your experience and our reviews.</li>
            <li>Serve and measure advertising, where applicable.</li>
            <li>Sync saved articles, offline downloads, and watchlists across your signed-in devices.</li>
          </ul>

          <h2>4. Cookies and tracking technologies</h2>
          <p>
            We use cookies and similar technologies (such as local storage and pixel tags) to remember your
            preferences, keep you signed in, and understand how visitors use the site. You can control cookies
            through your browser settings; disabling them may limit some site functionality, such as staying signed
            in or remembering your category filters.
          </p>
          <p>
            Cookies fall into three categories on this site: <b>essential</b> (required for core functionality and
            cannot be disabled), <b>analytics</b> (help us understand traffic and usage patterns), and
            <b> advertising</b> (used by ad partners to personalize the placeholders shown across the site).
          </p>

          <h2>5. Advertising</h2>
          <p>
            Pages on this site display advertising placeholders. In production, third-party vendors — including
            advertising partners such as Google — may use cookies to serve ads based on your prior visits to this and
            other websites. You can manage ad personalization through your account or browser settings.
          </p>

          <h2>6. Data retention</h2>
          <p>
            We retain personal data only for as long as necessary to provide our services and fulfill the purposes
            described in this policy. Account data is retained until you delete your account; you may request
            deletion at any time via the contact details below, and we will remove your data within 30 days except
            where retention is required by law.
          </p>

          <h2>7. Your rights (GDPR &amp; CCPA)</h2>
          <p>
            If you are located in the European Economic Area, United Kingdom, or California, you have specific
            rights over your personal data, including the right to access, correct, delete, or export the data we
            hold about you, and the right to opt out of the sale or sharing of personal data. To exercise any of
            these rights, contact us using the details in Section 10.
          </p>

          <h2>8. Children&apos;s privacy</h2>
          <p>
            TechPulse is not directed at children under 13, and we do not knowingly collect personal data from
            children under 13. If we learn that we have collected information from a child under 13 without
            parental consent, we will delete it promptly.
          </p>

          <h2>9. Third-party links</h2>
          <p>
            Our articles and reviews may link to third-party websites, retailers, or apps. We are not responsible
            for the privacy practices or content of those third parties, and we encourage you to review their
            privacy policies before providing any personal information.
          </p>

          <h2>10. Security of your information</h2>
          <p>
            We use administrative, technical, and physical safeguards to protect your personal information. However, no
            method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>11. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal
            reasons. We will update the &quot;Last updated&quot; date above and, for material changes, notify
            subscribers by email or in-app notice.
          </p>

          <h2>12. Contact us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your data rights, contact us at{' '}
            <a className="inline" href="mailto:privacy@techpulse.media">privacy@techpulse.media</a>.
          </p>
        </article>
      </section>
    </>
  );
}
