import { Fragment, useState } from "react";
import styles from "./Modal.module.css";
import Logo from "../../../assets/twitterLogo.svg";
import X from "../../../assets/Icons/x.svg";

function Modal(props) {
  const [showModal, setShowModal] = useState(true);
  return (
    <Fragment>
      <div className={`${styles["modalContainer"]}`}>
        <div className={`${styles["modal"]} `}>
          <header className={`${styles["modalHeader"]} `} r>
            <img
              onClick={props.onCloseModal}
              className={`${styles["modalClose"]} `}
              src={X}
              alt="close modal"
            />
            <img
              className={`${styles["modalLogo"]} `}
              src={Logo}
              alt="Twttr Logo"
            />
          </header>
          <div className={`${styles["modalContent"]}`}>{props.children}</div>
        </div>
        <div className={styles["modalOverlay"]}></div>
      </div>
    </Fragment>
  );
}

export default Modal;
