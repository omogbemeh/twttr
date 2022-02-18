import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={props.color === "light" ? styles.light : styles.blue}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
