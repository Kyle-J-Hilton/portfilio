import Head from "next/head";
import styles from "../../styles/AboutMe.module.css";

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
            <div className={styles.noteCard}>
               <p>Kyle James Hilton</p>
               <p>Software Developer</p>
               <a href="/">Go back to home page</a>
            </div>   
        </div>
        <div className={styles.rightContainer}>
              <div className={styles.box} id={styles.box1}>
                  <h3>Languages and Libraries I Use</h3>
                  <div className={styles.languageLists}>
                    <ul className={styles.list}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java Script</li>
                      </ul>
                      <ul className={styles.list}>
                        <li>Type Script</li>
                        <li>React</li>
                        <li>Materials UI</li>
                      </ul>
                      <ul className={styles.list}>
                        <li>@solana/web3</li>
                        <li>C++</li>
                        <li>Python</li>                 
                      </ul>
                  </div>
              </div>
              <div className={styles.box} id={styles.box2}>
                  <p>
                      I am a Software Developer who specializes 
                      in front-end Dev work. I have learned coding
                      through Codecademy's full-stack Engineering 
                      bootcamp, and while studying Physics in college.

                  </p>    
              </div> 
              <div className={styles.box} id={styles.box3}>
                  <h3>Contact Me</h3>
                  <form className={styles.form}>
                    <label>
                      Name:
                      <input type="text" name="name" />
                    </label>
                    <label>
                      Email:
                      <input type="text" name="email" />
                    </label>
                    <label>
                      Message:
                      <input type="text" name="message" />
                    </label>
                    <input type="submit" value="Send Message" />
                   </form>
                   <a>Linkden</a>
                   <a>Github</a>
                   <a>Gmail</a>
              </div> 
        </div>
      </main>
       
      <footer className={styles.footer}></footer>
    </div>
  );
}