import styles from ".//Header.module.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <img src="/images/headerLogo.svg" alt="logo" />
      </Link>
      <a className={styles.link} href="#story">
        Story
      </a>
      <a className={styles.link} href="#metaFluencer">
        The MetaFluencer`s
      </a>
      <a className={styles.link} href="#benefits">
        Benefits
      </a>
      <a className={styles.link} href="#eco">
        Eco
      </a>
      <a className={styles.link} href="#team">
        Team
      </a>
      <Link className={styles.link} to="/auction">
        Auction
      </Link>
      <Link className={styles.link} to="/contacts">
        Contacts
      </Link>
      <Link className={styles.link} to="/faq">
        FAQ
      </Link>
      <a className={styles.link} href="#whitepaper">
        Whitepaper
      </a>
      <button className={styles.button}>CONNECT WALLET {">"}</button>
    </header>
  );
};
export default Header;
