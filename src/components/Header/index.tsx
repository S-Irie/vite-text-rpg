import type { FC } from "react";
import styles from "./index.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <img src="icons/favicon.svg" alt="icon" className={styles.image} />
        <p className={styles.text}>Text RPG</p>
      </div>
      <div className={styles.menu}>
        <h2>セーブ</h2>
        <h2>ランキング</h2>
        <h2>ログイン</h2>
      </div>
    </header>
  );
};

export default Header;
