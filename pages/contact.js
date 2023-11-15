import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

const FORM_API_ENDPOINT = '/api/sendEmail';

const Contact= () => {
  const [formData, setFormData] = useState({
    name: 'Enter Name',
    email: 'Enter Email or Phone',
    q1: 'what type of work are you looking to have done',
    q2: 'how long would be needing service',
    message: 'rest of message...',
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
    <div className={styles.container}>
        <Header />
        <main className={styles.main}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label className={styles.contactFormLabel}>
                    <input type="text" name="name" className={styles.contactFormInput} value={formData.name} onChange={handleChange} />
                </label>
                <label className={styles.contactFormLabel}>
                    <input type="email" name="email" className={styles.contactFormInput} value={formData.email} onChange={handleChange} />
                </label>
                <label className={styles.contactFormLabel}>
                    <input type="text" name="q1" className={styles.contactFormInput} value={formData.q1} onChange={handleChange} />
                </label>
                <label className={styles.contactFormLabel}>
                    <input type="text" name="q2" className={styles.contactFormInput} value={formData.q2} onChange={handleChange} />
                </label>
                <label className={styles.contactFormLabel}>
                    <input type="text" name="message" className={styles.contactFormInput} value={formData.message} onChange={handleChange} />
                </label>

                <button type="submit" className={styles.contactFormButton}>Send Message</button>

                {status && <p className={styles.statusMessage}>{status}</p>}
                <div className={styles.contactIcons}> 
                  <a href="https://www.linkedin.com/in/kyle-hilton-27a1b2199/">
                    {" "}
                    <FaLinkedin className={styles.icon} />
                    
                  </a>
                  <a href="https://github.com/Kyle-J-Hilton">
                    {" "}
                    <DiGithubBadge className={styles.icon} />
                  </a>
                </div>
            </form>

            <div className={styles.infoBox}>
                <h3 className={styles.infoBoxH3}>Feel Free to contact about any software development work needed!</h3>
                <p className={styles.infoBoxP}>
                    I have been working as a frontend or 
                    full stack developer for the past five years.
                    I am confident I can be the solution to any of 
                    your website or mobile application problems. 
                    send a message for a free quote on your job.
                </p>
            </div>
        </main>
        <Footer />
    </div>
  );
};

export default Contact;
