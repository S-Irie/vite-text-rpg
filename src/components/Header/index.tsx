import type { FC } from "react";
import styles from "./index.module.scss";
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.icon}>
        <img src="icons/favicon.svg" alt="icon" className={styles.image} />
        <p className={styles.text}>Text RPG</p>
      </Link>
      <div className={styles.menu}>
        <Link to='/' className={styles.link}>ゲーム</Link>
        <Link to='/ranking' className={styles.link}>ランキング</Link>
        <Link to='/login' className={styles.link}>ログイン</Link>
      </div>
    </header>
  );
};

export default Header;
