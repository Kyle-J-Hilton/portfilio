import React from "react";
import styles from "../../styles/Home.module.css";

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.name}>
                <div className={styles.starcontainer}></div>
                <div className={styles.h1container}>
                    <h1>Kyle J. Hilton</h1>
                </div>
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