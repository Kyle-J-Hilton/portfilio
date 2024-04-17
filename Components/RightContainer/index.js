import styles from "../../styles/AboutMe.module.css";

const RightContainer = () => {

    return (
        <div className={styles.rightContainer}>
            <p className={styles.languageP}> 
              Over the years I have become an expert 
              in the following languages and libraries.
            </p>
            <div className={styles.languageLists}>
                <dl className={styles.list}>
                    <dt> HMTL </dt>
                    <dt> JavaScript</dt>
                    <dt> CSS/SCSS</dt>
                    <dt> React</dt>
                    <dt> TypeScript</dt>
                    <dt> React-Native </dt>
                    <dt> Next.js</dt>
                    <dt> Spring Boot</dt>
                </dl>
                <dl className={styles.list}> 
                    <dt> Java </dt>
                    <dt> C++</dt>
                    <dt> C#</dt>  
                    <dt> SQL</dt>
                    <dt> mySQL</dt>
                    <dt> Node.js</dt>
                    <dt> Shopify</dt>
                    <dt> AWS</dt>
                </dl>
                <dl className={styles.list}>   
                    <dt> .NET</dt>
                    <dt> Eclipse</dt>
                    <dt> MongoDB</dt>
                    <dt> CocoaPods</dt>
                    <dt> UNITY</dt>
                    <dt> Web3</dt>
                    <dt> IOS Development/xcode</dt>
                    <dt> Android Development</dt> 
                </dl>
               
            </div>
           
          </div>
    )
}
export default RightContainer