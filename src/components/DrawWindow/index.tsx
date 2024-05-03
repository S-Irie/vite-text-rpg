import type { FC } from "react";
import styles from "./index.module.scss";

const DrawWindow: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Text RPG</h1>
      <div className={styles.window}>window</div>
    </div>
  );
};

export default DrawWindow;
