import React, { Fragment } from "react";
import styles from "./Home.module.css";
import Logo from "../../assets/twitterLogo.svg";
import NavBar from "../Nav/Nav";
import TweetIcon from "../../assets/Icons/Logo.svg";
import PageRoutes from "../PageRoutes/PageRoute";
function Home() {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <section className={styles.homeFeedLayout}>
          <div className={styles.leftSection}>
            <div className={styles.leftSectionContainer}>
              <div className={styles["leftSection-top"]}>
                <img
                  className={styles.feedLogo}
                  src={Logo}
                  alt="Twitter Logo"
                />
              </div>
              <div className={styles["leftSection-nav"]}>
                <NavBar />
              </div>
              <div className={styles["leftSection-twtt"]}>
                <div className={styles["leftSection-tweetIconBorder"]}>
                  <span className={styles["leftSection-tweetIconPlus"]}>+</span>
                  <img
                    className={styles["leftSection-tweetIcon"]}
                    src={TweetIcon}
                    alt="Make a tweet icon"
                  ></img>
                </div>
              </div>
              <div className={styles["leftSection-logout"]}></div>
            </div>
          </div>

          <div className={styles.middleSection}>
            <PageRoutes />
          </div>
          <div className={styles.rightSection}>Right</div>
        </section>
      </div>
    </Fragment>
  );
}

export default Home;
