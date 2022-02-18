import React, { Fragment, useState } from "react";
import logo from "../../assets/twitterLogo.svg";
import AuthForm from "../Shared/AuthForms/AuthForm";
import Button from "../Shared/Button/Button";
import Modal from "../Shared/Modal/Modal";
import styles from "./Login.module.css";

function Login() {
  const [displayLogin, setDisplayLogin] = useState(false);
  const showLoginMenu = () => {
    setDisplayLogin((prev) => !prev);
  };
  return (
    <Fragment>
      {displayLogin && (
        <Modal>
          <h5 className={styles.register}>Create your account</h5>
          <AuthForm />
        </Modal>
      )}
      <section className={styles["login-section"]}>
        <div className={styles["logo-inner"]}>
          <img className={styles["logo"]} src={logo} alt="Twitter Logo"></img>
          <h1 className={styles["login-primary"]} login-primary>
            Happening <br />
            now
          </h1>
          <p className={styles["login-secondary"]}>Join Twitter today</p>
          <div className={styles["login-signInOptions"]}>
            <div className={styles["login-signInButtons"]}>
              <Button color="light">Sign up with Google</Button>
              <Button color="light">Sign up with Apple</Button>
            </div>
            <div className={styles["login-or-seperator"]}>
              <hr></hr>
              &nbsp;
              <span> or </span>
              &nbsp;
              <hr></hr>
            </div>
            <Button color="blue">Sign up with email</Button>
            <div>
              <p className={styles["login-alreadySignedIn"]}>
                Already have an account?
              </p>
              <button
                onClick={showLoginMenu}
                className={styles["login-signInWithEmail"]}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Login;
