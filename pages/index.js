import React, {useState, useEffect, useRef} from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
//import HomePageCard from "../Components/HomePageCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Home = () => {
  const cardRef1 = useRef(null) 
  const cardRef2 = useRef(null)
  const cardRef3 = useRef(null)
  const cardRef4 = useRef(null)
  const arrowRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const timeline0 = gsap.timeline({
      scrollTrigger: {
        trigger: arrowRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        
      },
    });

    timeline0.fromTo(
      arrowRef.current,
      { opacity: 1 },
      { opacity: 0}
    );

    const timeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef1.current,
        start: "top center+=100px",
        end: "bottom center-=100px",
        scrub: true,
        
      },
    });

    timeline1.fromTo(
      cardRef1.current,
      { x: "-100%", opacity: 0.8 },
      { x: "100%", opacity: 1}
    );

    timeline1.to(
      cardRef1.current,
      { x: "300%", opacity: 0.5 },

    );

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef2.current,
        start: "top center+=100px",
        end: "bottom center-=100px",
        scrub: true,
       
      },
    });

    timeline2.fromTo(
      cardRef2.current,
      { x: "300%", opacity: 0.9 },
      { x: "100%", opacity: 1 }
    );

    timeline2.to(
      cardRef2.current,
      { x: "-100%", opacity: 0.5 },
     
    );

    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef3.current,
        start: "top center+=100px",
        end: "bottom center-=100px",
        scrub: true,
       
      },
    });

    timeline3.fromTo(
      cardRef3.current,
      { x: "-100%", opacity: .9 },
      { x: "100%", opacity: 1}
    );

    timeline3.to(
      cardRef3.current,
      { x: "300%", opacity: 0.5 },
 
    );

    const timeline4 = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef4.current,
        start: "top center+=100px",
        end: "bottom center-=100px",
        scrub: true,
       
      },
    });

    timeline4.fromTo(
      cardRef4.current,
      { x: "300%", opacity: 0.9 },
      { x: "100%", opacity: 1 }
    );

    timeline4.to(
      cardRef4.current,
      { x: "-100%", opacity: 0.5 },

    );
  }, []);

  return (
    <div className={styles.scrollContainer} >
        <Head>
          <title>Kyle Hilton Portfolio</title>
          <meta name="description" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={styles.main}>
          <Header />
          <div className={styles.cardContainer}>
            <div ref={cardRef1} className={styles.card}>
              <a  href="/websites">
                <h2>Websites</h2>
                <p>These are websites I've made</p>
              </a>
            </div>
            <div ref={cardRef2} className={styles.card}>
              <a href="/gamepage" >
                <h2>Games</h2>
                <p>These are games I've made</p>
              </a>
            </div>
            <div ref={cardRef3} className={styles.card}>
              <a href="/p5js" >
                <h2>P5.js Visuals</h2>
                <p>See P5.js projects I made while learning to code</p>
              </a>
            </div>
            <div ref={cardRef4} className={styles.card}>
              <a href="/aboutme" >
                <h2>About Me</h2>
                <p>Contact info and more</p>
              </a>
            </div>
          </div>
          <div ref={arrowRef} className={styles.arrowcontainer}></div>
          <div className={styles.raincontainer}></div>
          <div className={styles.container}></div>
          <Footer />
        </main>
     
    </div>
  );
};
export default Home