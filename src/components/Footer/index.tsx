import type { FC } from "react";
import styles from "./index.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <small className={styles.copyright}>
        Copyright © 2024 S-Irie All Rights Reserved.
      </small>
      <a href="https://github.com/S-Irie/vite-text-rpg" className={styles.link} target="_blank" rel="noopener noreferrer">The github site is https://github.com/S-Irie/vite-text-rpg</a>
    </footer>
  );
};

export default Footer;
