import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePageCard from "../Components/HomePageCard";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyle Hilton Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      <Header pageName={""}/>
        <div className={styles.grid}>
          <HomePageCard href="/websites" cardName="Websites" message="View Websites i've made" />
          <HomePageCard href="/gamepage" cardName="Games" message="These are games i've made" />
          <HomePageCard href="/p5js" cardName="P5.js" message="See P5.js projects I made while learning to code" />
          <HomePageCard href="/aboutme" cardName="About Me" message="Contact info and more" />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
