import React, { Suspense } from "react";
import styles from "../styles/AboutMe.module.css";
import Header from "../Components/Header";
import LeftContainer from "../Components/LeftContainer";
import RightContainer from "../Components/RightContainer";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<p>Loading...</p>}>
          <LeftContainer />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <RightContainer />
        </Suspense>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
