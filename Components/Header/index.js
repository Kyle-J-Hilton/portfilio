import React from "react";
import styles from "../../styles/Header.module.css";

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.name}>
                <div className={styles.starcontainer}></div>
                <div className={styles.h1container}>
                    <a href="/" className={styles.homeLink}>
                        <h1>KJ Hilton Software Development</h1>
                    </a>
                </div>
            </div>
            <div className={styles.nav}>
                <a href="/contact" className={styles.navLink}>
                        Contact
                </a>
                <a href="/aboutme" className={styles.navLink}>
                        Info
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
            </div>
            
        </div>
    );
}

export default Header;