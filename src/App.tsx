import type { FC } from "react";
import styles from "./App.module.scss";
import DrawWindow from "./components/DrawWindow";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <DrawWindow />
      <Footer />
    </div>
  );
};

export default App;
