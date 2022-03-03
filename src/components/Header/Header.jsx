import React from "react";
import { Link } from "react-router-dom";

import styles from ".//Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/images/headerLogo.svg" alt="logo" />
      <a className={styles.link} href="#story">Story</a>
      <a className={styles.link} >The MetaFluencer`s</a>
      <a className={styles.link} href="#benefits">Benefits</a>
      <a className={styles.link}>Eco</a>
      <a className={styles.link}>Team</a>
      <a className={styles.link}>Auction</a>
      <Link to="/contacts" className={styles.link}>Contacts</Link>
      <Link className={styles.link} to="/faq">FAQ</Link>
      <a className={styles.link}>Whitepaper</a>
      <button className={styles.button}>CONNECT WALLET {">"}</button>
    </header>
  );
};
export default Header;

