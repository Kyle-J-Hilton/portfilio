import React, { Suspense } from "react";
import styles from "../styles/Websites.module.css";
import WebsiteCards from "../Components/WebsiteCard";
import Header from "../Components/Header"
import Footer from "../Components/Footer";
//website page

export default function Websites() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <h2  className={styles.websiteTitle} >Websites ive created as a freelance developer</h2>
        <div className={styles.websitesContainer}>
          <Suspense fallback={<p>Loading...</p>}>
            <WebsiteCards />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
};

