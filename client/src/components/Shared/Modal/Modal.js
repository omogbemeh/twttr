import { Fragment } from "react";
import styles from "./Modal.module.css";
function Modal(props) {
  return (
    <Fragment>
      <div className={styles["modalContainer"]}>
        <div className={styles["modal"]}>
          <div className={styles["modalContent"]}>{props.children}</div>
        </div>
        <div className={styles["modalOverlay"]}></div>
      </div>
    </Fragment>
  );
}

export default Modal;
