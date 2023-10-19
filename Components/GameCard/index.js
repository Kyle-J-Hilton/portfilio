import React from "react";
import styles from "../../styles/Games.module.css"

const GameCard = ({name, id, link}) => {
    return (
        <div className={styles.outterCardContainer}>
            <h3>{name}</h3>
            <a
                href={link}
                className={styles.gamesCard}
            >Play Game</a>
            <p></p>
            <a href="/">View Github Repository</a>
        </div>
    );
};
export default GameCard;