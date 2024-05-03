import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";
import Ranking from "./pages/Ranking";
import Top from "./pages/Top";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
