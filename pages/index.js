import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer"


const Home = () => {

  return (
    <div className={styles.scrollContainer} >
      <Head>
          <title>Kyle Hilton Portfolio</title>
          <meta name="description" />
          <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
          <Header />
        <div className={styles.landing}>  
            <div className={styles.greeting}>
                <h1 id={styles.line1}>Fully Customized</h1>
                <h1 id={styles.line2}>Websites and Apps</h1>
                <h1 id={styles.line3}>Everyone will Love.</h1>
                <p>Need a website or app that stands out and</p>
                <p>performs at the highest level? I can help  </p>
                <p>you reach your tech goals with captivating </p>
                <p>and user friendly Software development techniques.</p>
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.contactCard}>
                      <a href="/contact" className={styles.contactCardAction}>
                        <h2 className={styles.contactCardTitle}> Contact </h2>
                      </a>
                </div>
                <div className={styles.contactCard}>
                      <a href="/websiteAnalysis" className={styles.contactCardAction}>
                        <h2 className={styles.contactCardTitle}> Get a free website Analysis </h2>
                      </a>
                </div>
                <div className={styles.contactCard}>
                      <a href="/aboutme" className={styles.contactCardAction}  >
                        <h2 className={styles.contactCardTitle}> More Info </h2>
                      </a>
                </div>
            </div>
        </div>
        <div className={styles.lowerHalf}>
            <div className={styles.cardContainer}>

              <div className={styles.card}>
                <div className={styles.paragraphContainer}>
                  <p>These are some of the websites i have built for freelance
                     work or personal projects. </p>
                </div>
                <div className={styles.innerCard}>
                  <a href="/websites" className={styles.cardTitle}>
                    <h2>View</h2>
                  </a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.paragraphContainer}>
                  <p>Check out a few games i have made in my free time.</p>
                </div>
                <div className={styles.innerCard}>
                  <a href="/gamepage" className={styles.cardTitle}>
                    <h2>View</h2>
                  </a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.paragraphContainer}>
                  <p>As a side project i learned how to code some cool visuales with the JavaScript library p5.js</p>
                </div>
                <div className={styles.innerCard}>
                  <a href="/p5js" className={styles.cardTitle}>
                    <h2>View</h2>
                  </a>
                </div>
              </div>
            </div>
        </div>
        <Footer />
      </main>
     
    </div>
  );
};
export default Home