import React, { Suspense } from 'react';
import styles from '../styles/Contact.module.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';

const FORM_API_ENDPOINT = '/api/sendEmail';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<p>Loading...</p>}>
          <ContactForm FORM_API_ENDPOINT={FORM_API_ENDPOINT} />
        </Suspense>
        <div className={styles.infoBox}>
          <h3 className={styles.infoBoxH3}>Feel Free to contact about any software development work needed!</h3>
          <p className={styles.infoBoxP}>
            I have been working as a frontend or full stack developer for the past five years. I am confident I can be the solution to any of your website or mobile application problems. send a message for a free quote on your job.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
