import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        // Initial check on mount
        handleResize();

        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


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
                <a href="/gamepage" className={`${isMobile ? styles.hideOnMobile : styles.navLink}`}>
                    Games
                </a>
                <a href="/p5js" className={`${isMobile ? styles.hideOnMobile : styles.navLink}`}>
                    Visuals
                </a>
            </div>
            
        </div>
    );
}

export default Header;