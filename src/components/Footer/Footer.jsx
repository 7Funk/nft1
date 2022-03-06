import React from "react";
import { Link } from "react-router-dom";

import { Container } from "..";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <Container className={styles.footer}>
        <div className={styles.footerBlock}>
          <Link to="/" className={styles.link}>
            <img style={{margin: "10px 0 64px 0", }} src="/images/headerLogo.svg" alt="logo" />
          </Link>
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
              <Link className={styles.link} to="/auction">
                Auction
              </Link>
              <a className={styles.link} href="#whitepaper">
                Whitepaper
              </a>
              <Link className={styles.link} to="/faq">
                FAQ
              </Link>
            </div>
          </div>
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
            <a className={styles.iconContainer} href="#">
              <img className={styles.icon} src="/images/tg.svg" alt="" />
              <img
                className={styles.iconHover}
                src="/images/tgHover.svg"
                alt=""
              />
              <img
                className={styles.iconPress}
                src="/images/tgPress.svg"
                alt=""
              />
            </a>
            <a className={styles.iconContainer} href="#">
              <img className={styles.icon} src="/images/dc.svg" alt="" />
              <img
                className={styles.iconHover}
                src="/images/dcHover.svg"
                alt=""
              />
              <img
                className={styles.iconPress}
                src="/images/dcPress.svg"
                alt=""
              />
            </a>
            <a className={styles.iconContainer} href="#">
              <img className={styles.icon} src="/images/tw.svg" alt="" />
              <img
                className={styles.iconHover}
                src="/images/twHover.svg"
                alt=""
              />
              <img
                className={styles.iconPress}
                src="/images/twPress.svg"
                alt=""
              />
            </a>
            <a className={styles.iconContainer} href="#">
              <img className={styles.icon} src="/images/insta.svg" alt="" />
              <img
                className={styles.iconHover}
                src="/images/instaHover.svg"
                alt=""
              />
              <img
                className={styles.iconPress}
                src="/images/instaPress.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className={styles.footerBlock}>
          <p className={styles.wishes}>
            Meta-Fluencer will bring the light to the darkness and show us the
            universe.
          </p>
          <p className={styles.rights}>
            ©2022 Meta-Fluencer. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
