import style from "./TermsOfService.module.css";

const TermsOfService = () => {
  return (
    <div className={style.termsContainer}>
      <h1>Terms of Service</h1>
      <p>Last updated: February 12, 2025</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you agree to comply with these
          Terms of Service. If you do not agree with these terms, please do not
          use the website.
        </p>
      </section>

      <section>
        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these terms at any time. Any
          changes will be posted on this page, and the updated date will be
          indicated at the top.
        </p>
      </section>

      <section>
        <h2>3. User Responsibilities</h2>
        <p>
          Users agree to use the website in accordance with all applicable laws
          and regulations. You are responsible for your actions while using the
          site.
        </p>
      </section>

      <section>
        <h2>4. Privacy Policy</h2>
        <p>
          Your use of our site is also governed by our Privacy Policy, which can
          be found <a href="/privacy-policy">here</a>.
        </p>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <p>
          All content, trademarks, and intellectual property on this site are
          owned by the company and protected by copyright laws.
        </p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          Our liability to you is limited to the maximum extent permitted by
          law. We are not responsible for any indirect or consequential damages
          arising from the use of our site.
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to our
          website at any time, without notice, for conduct that violates these
          Terms of Service.
        </p>
      </section>

      <section>
        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by the laws of the jurisdiction in which we
          operate, and any disputes will be subject to the exclusive
          jurisdiction of the courts in that region.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at <a href="mailto:support@example.com">support@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
