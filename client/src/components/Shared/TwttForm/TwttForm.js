import React, { Fragment } from "react";
import FeedBox from "../FeedBox/FeedBox";
import styles from "./TwttForm.module.css";

function TwttForm() {
  return (
    <FeedBox>
      <section className={styles["twttForm"]}>
        <div className={styles["twttForm-inner"]}>
          <div className={styles["twttForm-image"]}></div>
          <div className={styles["twttForm-Container"]}>
            <form className={styles["twttForm-form"]}>
              <input placeholder="What's happening?" />
              <button className={styles["twttForm-submit"]}>Twtt</button>
            </form>
          </div>
        </div>
      </section>
    </FeedBox>
  );
}

export default TwttForm;
