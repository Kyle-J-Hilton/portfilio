import React from "react";
import styles from "../../styles/Games.module.css"

const GameCard = ({name, link}) => {
    return (
        <div className={styles.outterCardContainer}>
            <h3>{name}</h3>
            <a
                href={link}
                className={styles.gamesCard}
            >Play Game</a>
            <div className={styles.gitHubLink}>
                <a href="/" >View Github Repository</a>
            </div>
            
        </div>
    );
};
export default GameCard;