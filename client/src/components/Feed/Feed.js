import React, { Fragment } from "react";
import PageHeader from "../Shared/PageHeader/PageHeader";
import styles from "./Feed.module.css";
import TopTwtts from "../../assets/Icons/Top-Tweets.svg";
import TwttForm from "../Shared/TwttForm/TwttForm";
import Twtt from "../Shared/Twtt/Twtt";

function Feed() {
  return (
    <Fragment>
      <section className={styles["feed-section"]}>
        <header className={styles["feed-sectionHeader"]}>
          <PageHeader text="Home" icon={TopTwtts} altText="Home Page" />
        </header>
        <TwttForm />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
        <Twtt />
      </section>
    </Fragment>
  );
}

export default Feed;
