import React from "react";
import Header from "../Components/Header";
import P5jsCard from "../Components/P5jsCard";
import styles from "../styles/P5js.module.css";


export default function p5js() {
  return (
    <div className={styles.container}>
      <Header />
      <h3 className={styles.discription}>Click on a screen to see animation or visual coded in JavaScript using the Library P5.js</h3>
      <div className={styles.gridContainer}>
        <P5jsCard />  
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
};
