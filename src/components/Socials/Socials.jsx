import React from "react";

import { Container } from "..";
import styles from "./Socials.module.scss";

const Socials = () => {
  return (
    <Container id="whitepaper">
      <div className={styles.socialsContainer}>
        <h2 className={styles.topSocials}>Join Our Socials</h2>
      </div>
      <div className={styles.pena}>
        <p className={styles.textSocials}>Don’t miss out the space</p>
        <div className={styles.socialsImg}>
          <a className={styles.iconContainer}>
            <img className={styles.icon} src="/images/tg.svg" alt="icon" />
            <img className={styles.iconHover} src="/images/tgHover.svg" alt="icon" />
            <img className={styles.iconPress} src="/images/tgPress.svg" alt="icon" />
          </a>
          <a className={styles.iconContainer}>
            <img className={styles.icon} src="/images/dc.svg" alt="icon" />
            <img className={styles.iconHover} src="/images/dcHover.svg" alt="icon" />
            <img className={styles.iconPress} src="/images/dcPress.svg" alt="icon" />
          </a>
          <a className={styles.iconContainer}>
            <img className={styles.icon} src="/images/tw.svg" alt="icon" />
            <img className={styles.iconHover} src="/images/twHover.svg" alt="icon" />
            <img className={styles.iconPress} src="/images/twPress.svg" alt="icon" />
          </a>
          <a className={styles.iconContainer}>
            <img className={styles.icon} src="/images/insta.svg" alt="icon" />
            <img className={styles.iconHover} src="/images/instaHover.svg" alt="icon" />
            <img className={styles.iconPress} src="/images/instaPress.svg" alt="icon" />
          </a>
        </div>
        <div  className={styles.rrocket}>
          <a href="#" className={styles.download}>Download whitepaper</a>
          <div className={styles.rocket45}>
            <div className={styles.rocketContainer}>
              <img
                className={styles.rocketImg}
                src="/images/rocket45.svg"
                alt="rocket"
              />
              <img
                className={styles.rocketPinkImg}
                src="/images/PinkRocket.svg"
                alt="rocket"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Socials;
