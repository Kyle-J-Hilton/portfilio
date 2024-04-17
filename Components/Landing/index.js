import styles from "../../styles/Home.module.css";

const Landing = () => {

    return (
        <div className={styles.landing}>  
            <div className={styles.greeting}>
                <h1 id={styles.line1}>Fully Customized</h1>
                <h1 id={styles.line2}>Websites and Apps</h1>
                <h1 id={styles.line3}>Everyone will Love.</h1>
                <p>Need a website or app that stands out and</p>
                <p>performs at the highest level? I can help  </p>
                <p>you reach your tech goals with captivating </p>
                <p>and user friendly Software development techniques.</p>
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.contactCard}>
                    <a href="/contact" className={styles.contactCardAction}>
                        <h2 className={styles.contactCardTitle}> Contact </h2>
                    </a>
                </div>
            
                <div className={styles.contactCard}>
                    <a href="/aboutme" className={styles.contactCardAction}  >
                        <h2 className={styles.contactCardTitle}> More Info </h2>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Landing