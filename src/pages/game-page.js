import Head from "next/head";
import styles from "../../styles/Games.module.css";

export default function games() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyle Hilton Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <a href="/" className={styles.homeLink}>
            Kyle's Portfolio
          </a>
          <h1 className={styles.pageName}>Game Room</h1>
        </div>
        
        <div className={styles.gamesContainer}>
          <div className={styles.outterCardContainer}>
            <h3>Street Fight 3</h3>
            <a
              href="/arcadeGame1/gamepage1.html"
              className={styles.gamesCard}
              id={styles.game1Card}
            >Play Game</a>
            <p></p>
            <a href="/">View Github Repository</a>
           
          </div>
          <div className={styles.outterCardContainer}>
          <h3>P5.JS Pong</h3>
            <a
              href="/arcadeGame1/p5pong/single_sketch.html"
              className={styles.gamesCard}
              id={styles.gameTwoCard}
            >Play Game</a>
            <p></p>
            <a href="/">View Github Repository</a>
       
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
