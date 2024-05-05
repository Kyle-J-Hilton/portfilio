require('dotenv').config();

import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Landing from "../Components/Landing";
import HomeLowerHalf from "../Components/HomeLowerHalf";
import Header from "../Components/Header";
import Footer from "../Components/Footer"


const Home = () => {

  return (
    <div className={styles.scrollContainer} >
      <Head>
        <title>KJ Hilton Software Development</title>
        <meta name="description" content="Fully Customized Websites and Apps Everyone will Love. Need a website or app that stands out and performs at the highest level? I can help you reach your tech goals with captivating and user-friendly software development techniques." />
        <meta name="keywords" content="Kyle Hilton, Portfolio, Web Development, Mobile Development, Software Development, Custom Websites, Custom Apps" />
        <meta name="author" content="Kyle Hilton" />
        <link rel="icon" href="/favicon.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KJ Hilton Software Development",
              "url": "https://www.kyle-j-hilton.com/",
              "logo": "https://www.kyle-j-hilton.com/favicon.png",
              "description": "Fully Customized Websites and Apps Everyone will Love. Need a website or app that stands out and performs at the highest level? I can help you reach your tech goals with captivating and user-friendly software development techniques.",
            
              "sameAs": [
                "https://www.linkedin.com/in/kyle-hilton-27a1b2199/"
              ]
            }
          `}
        </script>

      </Head>
      <main className={styles.main}>
          <Header />
        <Landing />
        
        <Footer />
      </main>
     
    </div>
  );
};
export default Home