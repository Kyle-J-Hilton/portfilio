import React from "react";
import Header from "../Components/Header";
import GameCard from "../Components/GameCard";
import styles from "../styles/Games.module.css";


export default function GamePage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      <Header />
        <div className={styles.gamesContainer}>
          <GameCard name='platformer' link={"/arcadeGame1/gamepage1.html"} />
          <GameCard name='pong' link={"/p5pong/single_sketch.html"} />
        </div>
      </div>
    </div>
  );
};
