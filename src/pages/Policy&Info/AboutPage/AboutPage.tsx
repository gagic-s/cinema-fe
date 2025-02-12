import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.aboutHeader}>
        <h1>About Us</h1>
      </header>

      <section className={styles.aboutContent}>
        <p>
          Welcome to our website! We are a company dedicated to providing the
          best services and experiences for our customers. Our team is
          passionate about innovation, quality, and customer satisfaction.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals and businesses with the tools
          and solutions they need to succeed in an ever-changing world. We
          strive to make a positive impact through our products, services, and
          community initiatives.
        </p>

        <h2>Our History</h2>
        <p>
          Founded in 2010, we started as a small startup with a big vision. Over
          the years, we’ve grown into a global company with a diverse team, but
          we’ve always remained focused on our core values of integrity,
          collaboration, and excellence.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
