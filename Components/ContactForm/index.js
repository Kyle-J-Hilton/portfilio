import React, { useState } from 'react';
import styles from '../../styles/Contact.module.css';
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';

const ContactForm = ({ FORM_API_ENDPOINT }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    q1: '',
    q2: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending...');

    try {
      const response = await fetch(FORM_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          q1: '',
          q2: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An unexpected error occurred.');
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.contactFormLabel}>
        <input type="text" name="name" className={styles.contactFormInput} value={formData.name} onChange={handleChange} placeholder="Enter Name" required />
      </label>
      <label className={styles.contactFormLabel}>
        <input type="email" name="email" className={styles.contactFormInput} value={formData.email} onChange={handleChange} placeholder="Enter Email" required />
      </label>
      <label className={styles.contactFormLabel}>
        <input type="text" name="q1" className={styles.contactFormInput} value={formData.q1} onChange={handleChange} placeholder="What type of work are you looking to have done?" />
      </label>
      <label className={styles.contactFormLabel}>
        <input type="text" name="q2" className={styles.contactFormInput} value={formData.q2} onChange={handleChange} placeholder="How long would you be needing service?" />
      </label>
      <label className={styles.contactFormLabel}>
        <textarea name="message" className={styles.contactFormInput} value={formData.message} onChange={handleChange} placeholder="Enter your message..." required />
      </label>

      <button type="submit" className={styles.contactFormButton}>Send Message</button>

      {status && <p className={styles.statusMessage}>{status}</p>}
      <div className={styles.contactIcons}>
        <a href="https://www.linkedin.com/in/kyle-hilton-27a1b2199/">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="https://github.com/Kyle-J-Hilton">
          <DiGithubBadge className={styles.icon} />
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
