import React from "react";
import styles from "../../styles/P5js.module.css";
import p5jsAssets from "../../assets/p5jsAssets";
import { useId } from "react-id-generator";

const P5jsCard = () => {
    const idList = useId(16);

    let idCounter = 1; 

    const cards = p5jsAssets.map((info, index) => {
        const { link, imagePath } = info;
        const uniqueId = `${idList}-${idCounter++}`; 
       
        return (
                <a
                    key={index}
                    href={link}
                    className={styles.gridItem}
                    id={styles.uniqueId}
                    style={{
                        backgroundImage: `url(${imagePath})`
                    }}
                ></a>
        );
    });

    return cards;
}

export default P5jsCard;
