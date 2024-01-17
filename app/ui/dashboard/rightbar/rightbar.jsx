import { MdPlayCircleFilled } from "react-icons/md";
import styles from "./rightbar.module.css";
import Image from "next/image";
const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>New</span>
          <h3 className={styles.title}>Lorem ipsum</h3>
          <span className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>New</span>
          <h3 className={styles.title}>Lorem ipsum</h3>
          <span className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
