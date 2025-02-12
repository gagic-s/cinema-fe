/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import styles from "./ContactUsPage.module.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Placeholder: For now, just display a success message
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.contactUsPage}>
      <section className={styles.contactInfo}>
        <h1>Our Contact Information</h1>
        <ul>
          <li>
            Email: <a href="mailto:info@company.com">info@company.com</a>
          </li>
          <li>
            Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
          </li>
          <li>Fax: +1 (234) 567-8910</li>
          <li>Address: 123 Fake Street, Fake City, FA 12345</li>
        </ul>
        <header className={styles.contactHeader}>
          <h2>Contact Us</h2>
        </header>
        <section className={styles.contactFormSection}>
          {isSubmitted ? (
            <div className={styles.successMessage}>
              <h2>Thank you for reaching out!</h2>
              <p>We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          )}
        </section>
      </section>
    </div>
  );
};

export default ContactUsPage;
