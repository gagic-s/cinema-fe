import style from "./PrivacyPolicyPage.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={style.privacyContainer}>
      <h1>Privacy Policy</h1>
      <p>Last updated: February 12, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          We value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your data when you use our website.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>
          We may collect personal information, such as your name, email address,
          and usage data when you visit our site. This information helps us
          provide a better experience.
        </p>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>
          The information we collect is used to improve our website, communicate
          with you, and ensure a secure user experience.
        </p>
      </section>

      <section>
        <h2>4. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies to enhance your browsing experience. You can choose to
          disable cookies through your browser settings.
        </p>
      </section>

      <section>
        <h2>5. Data Sharing and Disclosure</h2>
        <p>
          We do not sell your personal information. However, we may share data
          with trusted third parties to provide our services, comply with legal
          obligations, or protect our rights.
        </p>
      </section>

      <section>
        <h2>6. Data Security</h2>
        <p>
          We implement security measures to protect your information from
          unauthorized access or disclosure. However, no online platform is
          completely secure.
        </p>
      </section>

      <section>
        <h2>7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not
          responsible for their privacy practices, and we encourage you to
          review their policies.
        </p>
      </section>

      <section>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated date.
        </p>
      </section>

      <section>
        <h2>9. Your Rights</h2>
        <p>
          Depending on your location, you may have rights related to your
          personal data, such as access, correction, deletion, or objection to
          processing.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a href="mailto:privacy@example.com">privacy@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
