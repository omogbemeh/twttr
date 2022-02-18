import React, { Fragment } from "react";
import FeedBox from "../FeedBox/FeedBox";

import styles from "./PageHeader.module.css";

function PageHeader(props) {
  return (
    <Fragment>
      <div className={styles["page-header"]}>
        <div className={styles["page-headerText"]}>{props.text}</div>
        <div className={styles["page-headerIcon"]}>
          <img src={props.icon} alt={props.altText}></img>
        </div>
      </div>
    </Fragment>
  );
}

export default PageHeader;
