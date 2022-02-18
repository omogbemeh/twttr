import React, { Fragment } from "react";
import styles from "./FeedBox.module.css";

function FeedBox(props) {
  return (
    <Fragment>
      <div className={styles.feedBox}>{props.children}</div>
    </Fragment>
  );
}

export default FeedBox;
