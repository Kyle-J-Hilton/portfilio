import Head from "next/head";
import styles from "../../styles/P5js.module.css";

export default function p5js() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyle Hilton Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.gridContainer}>
          <a
            href="/p5js_projects/Bevel_goldfish/single_sketch.html"
            className={styles.gridItem}
            id={styles.one}
          ></a>
          <a
            href="/p5js_projects/Cha_cha/single_sketch.html"
            className={styles.gridItem}
            id={styles.two}
          ></a>
          <a
            href="/p5js_projects/poppy/single_sketch.html"
            className={styles.gridItem}
            id={styles.three}
          ></a>
          <a
            href="/p5js_projects/fireflies/single_sketch.html"
            className={styles.gridItem}
            id={styles.four}
          ></a>
          <a
            href="/p5js_projects/Bevel_goldfish/single_sketch.html"
            className={styles.gridItem}
            id={styles.five}
          ></a>
          <a
            href="/p5js_projects/lightshow_2/single_sketch.html"
            className={styles.gridItem}
            id={styles.six}
          ></a>
          <a
            href="/p5js_projects/decorousexplanation/single_sketch.html"
            className={styles.gridItem}
            id={styles.seven}
          ></a>
          <a
            href="/p5js_projects/Meteor_aragon/single_sketch.html"
            className={styles.gridItem}
            id={styles.eight}
          ></a>
          <a
            href="/p5js_projects/Periodic_oregano/single_sketch.html"
            className={styles.gridItem}
            id={styles.nine}
          ></a>
          <a
            href="/p5js_projects/perlinnoise/single_sketch.html"
            className={styles.gridItem}
            id={styles.ten}
          ></a>
          <a
            href="/p5js_projects/save_trees/single_sketch.html"
            className={styles.gridItem}
            id={styles.eleven}
          ></a>
          <a
            href="/p5js_projects/Bevel_goldfish/single_sketch.html"
            className={styles.gridItem}
            id={styles.twelve}
          ></a>
          <a
            href="/p5js_projects/white_flowers/single_sketch.html"
            className={styles.gridItem}
            id={styles.thirteen}
          ></a>
          <a
            href="/p5js_projects/Bevel_goldfish/single_sketch.html"
            className={styles.gridItem}
            id={styles.fourteen}
          ></a>
          <a
            href="/p5js_projects/Bevel_goldfish/single_sketch.html"
            className={styles.gridItem}
            id={styles.fifteen}
          >
            <h3>View Github Repository</h3>
          </a>
          <a href="/" className={styles.gridItem} id={styles.sixteen}>
            <h3>Go Back to the Home page</h3>
          </a>
          <a
            href="/p5js_projects/Bevel_goldfish/single_sketch.html"
            className={styles.gridItem}
            id={styles.seventeen}
          ></a>
          <a
            href="/p5js_projects/Bevel_goldfish/single_sketch.html"
            className={styles.gridItem}
            id={styles.eightteen}
          ></a>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
