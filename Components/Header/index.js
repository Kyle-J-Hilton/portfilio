import React from "react";
import styles from "../../styles/Home.module.css";

const Header = ({pageName}) => {

    return (
        <div className={styles.header}>
            <div className={styles.name}>
                <h1>Kyle J. Hilton</h1>
                <p>Software Developer</p>
            </div>
            <div className={styles.nav}>
                <a href="/" className={styles.navLink}>
                        Home
                </a>
                <a href="/websites" className={styles.navLink}>
                        Websites
                </a>
                <a href="/gamepage" className={styles.navLink}>
                        Games
                </a>
                <a href="/p5js" className={styles.navLink}>
                        Visuals
                </a>
                <a href="/aboutme" className={styles.navLink}>
                        Info/Contact
                </a>
            </div>
            
        </div>
    );
}

export default Header;