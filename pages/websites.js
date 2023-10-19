import React from "react";
import styles from "../styles/Websites.module.css";
import WebsiteCards from "../Components/WebsiteCard";
import Header from "../Components/Header"

export default function Websites() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header pageName={'Websites'} />
        <h3>Websites ive created or worked on</h3>
        <div className={styles.websitesContainer}>
           <WebsiteCards />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

