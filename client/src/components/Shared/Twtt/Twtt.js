import FeedBox from "../FeedBox/FeedBox";
import styles from "./Twtt.module.css";
import LikeLight from "../../../assets/Icons/LikeLight.svg";
import Bookmark from "../../../assets/Icons/BookmarksLight.svg";

function Twtt() {
  return (
    <FeedBox>
      <p className={styles["twtt-retwttedBy"]}>Retwtted by someone you know</p>
      <div className={styles["twtt-wrapper"]}>
        <div className={styles["twtt-imageBox"]}>
          {/* <img className={styles["twtt-image"]} src="" alt="Profile Picture" /> */}
        </div>
        <div className={styles["twtt-content"]}>
          <div className={styles["twtt-handle"]}>
            Twttr handle{" "}
            <span className={styles["twtt-username"]}>@praise_o</span>
          </div>
          <div className={styles["twtt"]}>
            Technically, a twtt could be longer
          </div>
          <div className={styles["twtt-options"]}>
            <div className={styles["twtt-optionsGroup"]}>
              <div className={styles["twtt-optionsIcon"]}>
                <img src={LikeLight} />
              </div>
              <span>&nbsp; 4</span>
            </div>
            <div className={styles["twtt-optionsGroup"]}>
              <div className={styles["twtt-optionsIcon"]}>
                <img src={Bookmark} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeedBox>
  );
}

export default Twtt;
