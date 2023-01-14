import styles from "./css/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.widthClass}>
        <div className={styles.footerCol1}>
          <div className={styles.author}>Aman Kumar</div>
          <div className={styles.links}>Social Media</div>
          <div className={styles.links}>About</div>
        </div>
        <div className={styles.copyright}>&copy; Copyright 2022</div>
      </div>
    </div>
  );
};

export default Footer;
