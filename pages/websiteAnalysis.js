import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer"

const FORM_API_ENDPOINT = '/api/sendEmail';

const WebsiteAnalysis= () => {
    const [formData, setFormData] = useState({
        name: 'Enter Name',
        email: 'Enter Email',
        q1: 'Enter website URL',
        q2: 'Favorite and Least Favorite Parts of your current site or app',
        message: 'Most important features and overall goal for the site',
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
                </form>
    
                <div className={styles.infoBox}>
                    <h3 className={styles.infoBoxH3}>Send Me Your Websites!</h3>
                    <p className={styles.infoBoxP}>
                        please fill out the form and send me your current website
                        as well as your goals for the website and i will tell you
                        what things could be imporoved and what things look great.
                        I will use me years of experience and proven analytics methods
                        to help your website stand out and help you gain customers.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
      );
    };
    

export default WebsiteAnalysis;
