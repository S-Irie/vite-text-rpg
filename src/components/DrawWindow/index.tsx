import type { FC } from "react";
import Text from "../Text";
import styles from "./index.module.scss";

const DrawWindow: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Text RPG</h1>
      <div className={styles.window}>
        <Text
          pastText={"過去のテキスト"}
          currentText={
            "現在のテキスト現在のテキスト現在のテキスト現在のテキスト現在のテキスト現在のテキスト現在のテキスト現在のテキスト現在のテキスト"
          }
        />
      </div>
    </div>
  );
};

export default DrawWindow;
