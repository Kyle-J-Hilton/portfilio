import Head from "next/head";
import styles from "../../styles/AboutMe.module.css";
import {
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiCss3Full,
  DiReact,
  DiPython,
  DiNpm,
} from "react-icons/di";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

export default function p5js() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyle Hilton Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.pageName}>About Me</h1>
      </div>

      <main className={styles.main}>
        <div className={styles.leftContainer}>
          <div className={styles.businessCard}>
            <p>Kyle James Hilton</p>
            <p>Software Developer</p>
            <a href="/">Go back to home page</a>
          </div>
          <div >
            <h3>Languages and Libraries I Use</h3>
            <div className={styles.languageLists}>
              <dl className={styles.iconList}>
                <dt>
                  {" "}
                  <DiHtml5 />
                </dt>
                <dt>
                  {" "}
                  <DiCss3Full />
                </dt>
                <dt>
                  {" "}
                  <DiJsBadge />
                </dt>
              </dl>
              <dl className={styles.iconList}>
                <dt>
                  {" "}
                  <DiPython />
                </dt>
                <dt>
                  {" "}
                  <DiReact />
                </dt>
                <dt>
                  {" "}
                  <DiNpm />
                </dt>
              </dl>
              <dl className={styles.list}>
                <dt> Materials UI</dt>
                <dt> @solana/web3</dt>
                <dt> TypeScript</dt>
                <dt> C++</dt>
                <dt> storybook</dt>
              </dl>
            </div>
          </div>
          <div className={styles.paragraph}>
            <p>
              I am a Software Developer who specializes in front-end Dev work. I
              have learned coding through Codecademy's full-stack Engineering
              bootcamp, and while studying Physics in college I learned C++.
            </p>
          </div>
          <div>
            
            <a href="https://www.linkedin.com/in/kyle-hilton-27a1b2199/">
              {" "}
              <FaLinkedin className={styles.icon} />
              
            </a>
            <a href="https://github.com/Kyle-J-Hilton">
              {" "}
              <DiGithubBadge className={styles.icon} />
              
            </a>
            <a href="https://gmail.com">
              {" "}
              <FaGoogle className={styles.icon} />
              kylehilton18@gmail.com
            </a>
          </div>
        </div>
        
        <div className={styles.rightContainer}>
          <div className={styles.box} id={styles.box1}>
            
          </div>
          <div className={styles.box} id={styles.box2}>
            
          </div>
          <div className={styles.box} id={styles.box3}>
            
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
