import React from "react";
import styles from "../../styles/Home.module.css";

const HomePageCard = ({ href, cardName, message }) => {
    return (  
        <a href={href} className={styles.card}>
          <h2>{cardName} &rarr;</h2>
          <p>{message}</p>
        </a>
    )
}

export default HomePageCard;