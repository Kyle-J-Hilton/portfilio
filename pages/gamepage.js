import React from "react";
import styles from "../styles/Games.module.css";
import Header from "../Components/Header";
import GameCard from "../Components/GameCard";

export default function GamePage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header pageName={'Game Room'}/>
        <div className={styles.gamesContainer}>
          <GameCard name={'platformer'} id={'platformer'} link={"/arcadeGame1/gamepage1.html"} />
          <GameCard name={'pong'} id={'pong'} link={"/p5pong/single_sketch.html"} />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};
