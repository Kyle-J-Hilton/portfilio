import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyle Hilton Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Kyle J. Hilton</h1>
          <p>Software Developer</p>
        </div>

        <div className={styles.grid}>
          <a href="/websites" className={styles.card}>
            <h2>Websites &rarr;</h2>
            <p>View Websites i've made</p>
          </a>

          <a href="/gamepage" className={styles.card}>
            <h2>Games &rarr;</h2>
            <p>These are games i've made</p>
          </a>

          <a
            href="/p5js"
            className={styles.card}
          >
            <h2>P5.js &rarr;</h2>
            <p>See P5.js projects I made while learning to code</p>
          </a>

          <a 
              href="/aboutme"
            className={styles.card}
          >
            <h2>About Me &rarr;</h2>
            <p>
              Contact info and more
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
