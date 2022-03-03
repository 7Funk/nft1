import React from "react";
import { Link } from "react-router-dom";

import styles from ".//Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
<<<<<<< HEAD
      <img src="/images/headerLogo.png" alt="logo" />
      <a className={styles.Link} href="#story">Story</a>
      <a className={styles.Link} >The MetaFluencer`s</a>
      <a className={styles.Link} href="#benefits">Benefits</a>
      <a className={styles.Link}>Eco</a>
      <a className={styles.Link}>Team</a>
      <a className={styles.Link}>Auction</a>
      <a className={styles.Link}>Contracts</a>
      <Link className={styles.Link} to="/faq">FAQ</Link>
      <a className={styles.Link}>Whitepaper</a>
=======
      <img src="/images/headerLogo.svg" alt="logo" />
      <a className={styles.link}>Story</a>
      <a className={styles.link}>The MetaFluencer`s</a>
      <a className={styles.link}>Benefits</a>
      <a className={styles.link}>Eco</a>
      <a className={styles.link}>Team</a>
      <a className={styles.link}>Auction</a>
      <a className={styles.link}>Contracts</a>
      <a className={styles.link}>FAQ</a>
      <a className={styles.link}>Whitepaper</a>
>>>>>>> main
      <button className={styles.button}>CONNECT WALLET {">"}</button>
      <img src="/images/walletShadow.png" alt="shadow" />
    </header>
  );
};
export default Header;

