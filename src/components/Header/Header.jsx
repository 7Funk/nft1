import React from "react";
import { Link } from "react-router-dom";

import styles from ".//Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/images/headerLogo.svg" alt="logo" />
      <a className={styles.Link} href="#story">Story</a>
      <a className={styles.Link} >The MetaFluencer`s</a>
      <a className={styles.Link} href="#benefits">Benefits</a>
      <a className={styles.Link}>Eco</a>
      <a className={styles.Link}>Team</a>
      <a className={styles.Link}>Auction</a>
      <a className={styles.Link}>Contracts</a>
      <Link className={styles.Link} to="/faq">FAQ</Link>
      <a className={styles.Link}>Whitepaper</a>
      <button className={styles.button}>CONNECT WALLET {">"}</button>
    </header>
  );
};
export default Header;

