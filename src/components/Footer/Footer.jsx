import React from "react";
import { Link } from "react-router-dom";

import { Container } from "..";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <Container className={styles.footer}>
        <div className={styles.footerBlock}>
          <img
            className={styles.logo + " " + styles.heading}
            src="/images/headerLogo.svg"
            alt="logo"
          />
          <div className={styles.containerLinks}>
            <div className={styles.linkBlock}>
              <a className={styles.link} href="#story">
                Story
              </a>
              <a className={styles.link} href="#metaFluencer">
                The MetaFluencer`s
              </a>
              <a className={styles.link} href="#benefits">
                Benefits
              </a>
            </div>
            <div className={styles.linkBlock}>
              <a className={styles.link} href="#eco">
                Eco
              </a>
              <a className={styles.link} href="#team">
                Team
              </a>
              <Link className={styles.link} to="/contacts">
                Contacts
              </Link>
            </div>
            <div className={styles.linkBlock}>
              <a className={styles.link} href="#auction">
                Auction
              </a>
              <a className={styles.link} href="#whitepaper">
                Whitepaper
              </a>
              <Link className={styles.link} to="/faq">
                FAQ
              </Link>
            </div>
          </div>
          <p className={styles.wishes}>
            Meta-Fluencer will bring the light to the darkness and show us the
            universe.
          </p>
          <p className={styles.rights}>
            ©2022 Meta-Fluencer. All rights reserved.
          </p>
        </div>
        <div className={styles.footerBlock}>
          <h3 className={styles.contact + " " + styles.heading}>Contact Us</h3>
          <div className={styles.linkBlock}>
            <a href="#" className={styles.link}>
              info@meta-fluencer.com
            </a>
            <a href="#" className={styles.link}>
              support@meta-fluencer.com
            </a>
            <a href="#" className={styles.link}>
              info@ilonsi.com
            </a>
          </div>
          <div className={styles.icons}>
            <a href="#">
              <img className={styles.icon} src="/images/tg.svg" alt="" />
            </a>
            <a href="#">
              <img className={styles.icon} src="/images/dc.svg" alt="" />
            </a>
            <a href="#">
              <img className={styles.icon} src="/images/tw.svg" alt="" />
            </a>
            <a href="#">
              <img className={styles.icon} src="/images/insta.svg" alt="" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
