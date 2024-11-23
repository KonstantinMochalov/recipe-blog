import React from "react";
import styles from "./Header.module.css";
import chefImage from "../../assets/images/chefImage.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <img src={chefImage} alt="Chef Logo" className={styles.logo} />
        <h1 className={styles.title}>Culinary Chronicles</h1>
      </div>
      <button className={styles.addButton}>+</button>
    </header>
  );
};

export default Header;
