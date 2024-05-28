import type { FC } from "react";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

export type ITextProps = {
  // 過去のテキスト
  pastText: string;
  // 現在のテキスト
  currentText: string;
  // 表示スピード・間隔
  interval?: number;
};

const Text: FC<ITextProps> = ({ pastText, currentText, interval = 100 }) => {
  // currentTextの表示は1文字ずつ表示する
  const [text, setText] = useState<string>("");

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const setTextHandle = (index: number, interval: number) => {
      if (index >= currentText.length) return;

      setText((prev) => prev + currentText[index]);

      setTimeout(() => {
        setTextHandle(index + 1, interval);
      }, interval);
    };
    setTextHandle(0, interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <p>{pastText}</p>
      <p>{text}</p>
    </div>
  );
};

export default Text;
