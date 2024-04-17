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
        <title>Kyle Hilton Portfolio</title>
        <meta name="description" content="Fully Customized Websites and Apps Everyone will Love. Need a website or app that stands out and performs at the highest level? I can help you reach your tech goals with captivating and user-friendly software development techniques." />
        <meta name="keywords" content="Kyle Hilton, Portfolio, Web Development, Mobile Development, Software Development, Custom Websites, Custom Apps" />
        <meta name="author" content="Kyle Hilton" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
          <Header />
        <Landing />
        <HomeLowerHalf />
        <Footer />
      </main>
     
    </div>
  );
};
export default Home