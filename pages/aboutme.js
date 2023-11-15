import Head from "next/head";
import styles from "../styles/AboutMe.module.css";
import {
  DiGithubBadge,
} from "react-icons/di";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import Header from "../Components/Header";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
      
        <div className={styles.leftContainer}>
            <div className={styles.paragraph}>
              <h2>Who am I?</h2>
              <h3>
                a Software Developer who specializes in Frontend and Mobile develpment.
              </h3>
              <p>
                5 years combined experience working both freelance and as part of a large team.
                I began my jorney studying Physics in college. This meade me fall in love with 
                problem solving. I took this love into coding, and have spent the last five years
                honing my craft. I have worked for corperations and worked on websites and apps with
                over seven million users, and I have built projects for small companies looking 
                to gain some customers with beutiful and using friendly websites.
             </p>
            </div>
            
        </div>
        <div className={styles.rightContainer}>
            <p className={styles.languageP}> 
              Over the years I have become an expert 
              in the following languages and libraries.
            </p>
            <div className={styles.languageLists}>
                <dl className={styles.list}>
                    <dt> HMTL </dt>
                    <dt> JavaScript</dt>
                    <dt> CSS/SCSS</dt>
                    <dt> React</dt>
                    <dt> TypeScript</dt>
                    <dt> React-Native </dt>
                    <dt> Next.js</dt>
                    <dt> Spring Boot</dt>
                </dl>
                <dl className={styles.list}> 
                    <dt> Java </dt>
                    <dt> C++</dt>
                    <dt> C#</dt>  
                    <dt> SQL</dt>
                    <dt> mySQL</dt>
                    <dt> Node.js</dt>
                    <dt> Shopify</dt>
                    <dt> AWS</dt>
                </dl>
                <dl className={styles.list}>   
                    <dt> .NET</dt>
                    <dt> Eclipse</dt>
                    <dt> MongoDB</dt>
                    <dt> CocoaPods</dt>
                    <dt> UNITY</dt>
                    <dt> Web3</dt>
                    <dt> IOS Development/xcode</dt>
                    <dt> Android Development</dt> 
                </dl>
               
            </div>
           
          </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
