import React, { Fragment } from "react";

import styles from "./Nav.module.css";

import HomeLightIcon from "../../assets/Icons/HomeLight.svg";
import SearchIcon from "../../assets/Icons/Search.svg";
import ProfileLightIcon from "../../assets/Icons/ProfileLight.svg";
import BookmarkLight from "../../assets/Icons/BookmarksLight.svg";
function NavBar() {
  return (
    <Fragment>
      <nav className={[styles.navBar]}>
        <ul className={[styles.navList]}>
          <li className={[styles.navItem]}>
            <img src={HomeLightIcon}></img>
          </li>

          <li className={[styles.navItem]}>
            <img src={SearchIcon}></img>
          </li>
          <li className={[styles.navItem]}>
            <img src={BookmarkLight}></img>
          </li>
          <li className={[styles.navItem]}>
            <img src={ProfileLightIcon}></img>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default NavBar;
