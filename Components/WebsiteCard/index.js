import React from "react";
import styles from "../../styles/Websites.module.css";
import websites from "../../assets/websites";

const WebsiteCards = () => {
    const cards = websites.map((website, index) => {
        const { name, description, link, styleId, imagePath } = website;
        let style = styleId;
    return (
        <div key={index} className={styles.outterCardContainer}>
            <h3>{name}</h3>
            <p>{description}</p>
            <a
                href={link}
                className={styles.websiteCard}
                style={{
                    backgroundImage: `url(${imagePath})`,
                }}
            >
            </a>
        </div>   
    )
});
return cards;
}
export default WebsiteCards;