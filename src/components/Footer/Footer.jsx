import React from "react";
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
              <a href="#" className={styles.link}>
                Story
              </a>
              <a href="#" className={styles.link}>
                The MetaFluencer`s
              </a>
              <a href="#" className={styles.link}>
                Benefits
              </a>
            </div>
            <div className={styles.linkBlock}>
              <a href="#" className={styles.link}>
                Eco
              </a>
              <a href="#" className={styles.link}>
                Team
              </a>
              <a href="#" className={styles.link}>
                Contracts{" "}
              </a>
            </div>
            <div className={styles.linkBlock}>
              <a href="#" className={styles.link}>
                Auction
              </a>
              <a href="#" className={styles.link}>
                Whitepaper
              </a>
              <a href="#" className={styles.link}>
                FAQ
              </a>
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
