import React from "react";
import styles from "../../styles/P5js.module.css";
import p5jsAssets from "../../assets/p5jsAssets";
import { useId } from "react-id-generator";

const P5jsCard = () => {
    const idList = useId(16);
    
    const cards = p5jsAssets.map((info, index) => {
        
        
        const { link, imagePath } = info;
        const uniqueId = `id${index}`; // Correct the unique ID assignment
        return (
            <a
                key={index}
                href={link}
                className={styles.gridItem}
                id={uniqueId} 
                style={{
                    backgroundImage: `url(${imagePath})`
                }}
            ></a>
        );
    });
    return cards;
}

export default P5jsCard;
