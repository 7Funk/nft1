import React from "react";
import styles from ".//Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/images/headerLogo.svg" alt="logo" />
      <a className={styles.link}>Story</a>
      <a className={styles.link}>Team</a>
      <a className={styles.link}>Auction</a>
      <a className={styles.link}>Contact </a>
      <a className={styles.link}> FAQ</a>
      <a className={styles.link}>Whitepaper</a>
      <button className={styles.button}>CONNECT WALLET {">"}</button>
    </header>
  );
};
export default Header;
