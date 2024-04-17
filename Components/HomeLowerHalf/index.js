import styles from "../../styles/Home.module.css";

const HomeLowerHalf = () => {

    return (
        <div className={styles.lowerHalf}>
        <div className={styles.cardContainer}>

          <div className={styles.card}>
            <div className={styles.paragraphContainer}>
              <p>These are some of the websites i have built for freelance
                 work or personal projects. </p>
            </div>
            <div className={styles.innerCard}>
              <a href="/websites" className={styles.cardTitle}>
                <h2>View</h2>
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.paragraphContainer}>
              <p>Check out a few games i have made in my free time.</p>
            </div>
            <div className={styles.innerCard}>
              <a href="/gamepage" className={styles.cardTitle}>
                <h2>View</h2>
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.paragraphContainer}>
              <p>As a side project i learned how to code some cool visuales with the JavaScript library p5.js</p>
            </div>
            <div className={styles.innerCard}>
              <a href="/p5js" className={styles.cardTitle}>
                <h2>View</h2>
              </a>
            </div>
          </div>
        </div>
    </div>
    )
}
export default HomeLowerHalf