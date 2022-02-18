import { Fragment } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./AuthForm.module.css";

function AuthForm() {
  return (
    <Fragment>
      <div className={styles.authFormDiv}>
        <form className={styles.authForm}>
          <div className={styles.authFormGroup}>
            <Input
              label="Username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className={styles.authFormGroup}>
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className={styles.authFormGroup}>
            <Button color="light">Sign Up!</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default AuthForm;
