import styles from "../../styles/Websites.module.css";
import Head from "next/head";

export default function websites() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyle Hilton Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <a href="/" className={styles.homeLink}>
            Go Back to Home Page
          </a>
          <h1 className={styles.pageName}>Websites Ive Made</h1>
        </div>
        <div className={styles.websitesContainer}>
          <div className={styles.outterCardContainer}>
            <h3>Cha Cha Vans NFTs staking site</h3>
            <p>
              Cha Cha Vans hired me to make this site where users can stake
              their NFTs for $CHA tokens. Made with next.js and react using
              Materials UI and deployed with Vercel
            </p>
            
            <a
              href="https://staking.chachavans.io/"
              className={styles.websiteCard}
              id={styles.stakingCard}
            ></a>
          </div>
          <div className={styles.outterCardContainer}>
            <h3>Cha Cha Vans NFTs raffle site</h3>
            <p>
              Cha Cha Vans NFTs hired me to make this site for their raffles and
              give-aways. Made with next.js and react using Materials UI and
              deployed with Vercel
            </p>
          
            <a
              href="https://raffles.chachavans.io/"
              className={styles.websiteCard}
              id={styles.rafflesCard}
            ></a>
          </div>
          <div className={styles.outterCardContainer}>
            <h3>Mayson Whipple PhD Portfolio</h3>
            <p>
              A PhD student's Portfolio website made with just HTML, CSS, and
              JS. This site is not currently deployed.
            </p>
            <a href="https://github.com/Kyle-J-Hilton/maysons_portfolio">
              View Github Repository
            </a>
            <a
              href="/maysonwebsite/mayson.html"
              className={styles.websiteCard}
              id={styles.maysonCard}
            ></a>
          </div>
          <div className={styles.outterCardContainer}>
            <h3>Jamming Spotify playlist maker</h3>
            <p>
              This was a unit final project from Codacademy front-end
              engineering coding bootcamp. made with creat-react-app
            </p>
            <a href="https://github.com/Kyle-J-Hilton/Jamming">
              View Github Repository
            </a>
            <a
              href="https://github.com/Kyle-J-Hilton/Jamming"
              className={styles.websiteCard}
              id={styles.jammingCard}
            ></a>
          </div>
          <div className={styles.outterCardContainer}>
            <h3>Fetch User Registration Form</h3>
            <p>
              This app is a user registration form made with creat-react-app. 
            </p>
            <a href="https://github.com/Kyle-J-Hilton/fetch-frontend-takehome">
              View Github Repository
            </a>
            <a
              href="https://github.com/Kyle-J-Hilton/fetch-frontend-takehome"
              className={styles.websiteCard}
              id={styles.fetchRegistrationCard}
            ></a>
          </div>
          <div className={styles.outterCardContainer}>
            <h3>Fetch Rewards Coding test</h3>
            <p>This webpage was for a test and had a 4 hour time limit</p>
            <a href="https://github.com/Kyle-J-Hilton/fetch_rewards_coding_exercise">
              View Github Repository
            </a>
            <a
              href="/fetch/fetchProject.html"
              className={styles.websiteCard}
              id={styles.fetchCard}
            ></a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
