import React from "react";
import styles from "../../styles/Home.module.css";

const Header = ({pageName}) => {

    return (
        <div className={styles.header}>
            <a href="/" className={styles.homeLink}>
                Go Back to Home Page
            </a>
            <h1 className={styles.pageName}>{pageName}</h1>
        </div>
    );
}

export default Header;