import React from "react";
import styles from "../../styles/Games.module.css"

const GameCard = ({name, link}) => {
    return (
        <div className={styles.cardLinks}>
           
            <a href={link} className={styles.gitHubLink}>
            {name}
            </a>
            <a className={styles.gitHubLink} href="/" >
                View Github Repository
            </a>
        </div>
    );
};
export default GameCard;