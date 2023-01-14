import styles from "./css/Header.module.css";
const Header = () => {
  return (
    <div className={styles.heading}>
      <div className={styles.widthClass}>
        <div className={styles.title}>Note Keeper</div>
        <div className={styles.links}>About</div>
      </div>
    </div>
  );
};

export default Header;
