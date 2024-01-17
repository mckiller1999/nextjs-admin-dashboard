import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Hoang Le</div>
      <div className={styles.text}>@ All right reserved</div>
    </div>
  );
};

export default Footer;
