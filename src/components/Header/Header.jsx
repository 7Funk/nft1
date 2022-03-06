import styles from ".//Header.module.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ConnectModal } from "../ConnectModal";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  useEffect(() => {
    if (isHeaderOpen) {
      document.body.style = 'overflow: hidden'
    } else {
      document.body.style = 'overflow: auto'
    }
  }, [isHeaderOpen])
  

  const headerClass = () => {
    let cls = styles.header;
    if (isHeaderOpen) {
      cls += ' ' + styles.responsive;
    }
    return cls;
  };
  return (
    <header className={headerClass()}>
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
      <button
        onClick={() => {
          setIsOpenModal(true);
        }}
        className={styles.button}
      >
        CONNECT WALLET <span className={styles.arrow}>{">"}</span>
      </button>
      <img onClick={() => {setIsHeaderOpen(true)}} className={styles.burger} src="/images/Burger.svg" alt="burger" />
      <img onClick={() => {setIsHeaderOpen(false)}} className={styles.cross} src="/images/Close.svg" alt="cross" />
      <ConnectModal
        isOpen={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
        }}
      />
    </header>
  );
};
export default Header;
