import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import "./styles.css";

console.log(styles);
const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <h2 className={styles.appHeader}>Welcome to your Recipe Blog!</h2>
        <p className={styles.appContent}>
          Start by adding your favorite recipes.
        </p>
      </main>
    </div>
  );
};

export default App;
