import { Fragment } from "react";
import styles from "./Input.module.css";

function Input(props) {
  return (
    <Fragment>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>{props.label}</label>
        <input className={styles.formInput} {...props} />
      </div>
    </Fragment>
  );
}

export default Input;
