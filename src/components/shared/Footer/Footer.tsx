import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logo}>CinemaApp</div>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
      <div className={styles.socials}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
      <div className={styles.copyright}>
        © 2025 CinemaApp. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
