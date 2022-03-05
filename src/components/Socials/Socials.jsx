import React from "react";

import { Container } from "..";
import styles from "./Socials.module.scss";

const Socials = () => {
  return (
    <Container>
      <div className={styles.socialsContainer}>
        <h2 className={styles.topSocials}>Join Our Socials</h2>
      </div>
      <div className={styles.pena}>
        <p className={styles.textSocials}>Don’t miss out the space</p>
        <div className={styles.socialsImg}>
          <a>
            <img className={styles.icon} src="/images/tg.svg" alt="" />
          </a>
          <a>
            <img className={styles.icon} src="/images/dc.svg" alt="" />
          </a>
          <a>
            <img className={styles.icon} src="/images/tw.svg" alt="" />
          </a>
          <a>
            <img className={styles.icon} src="/images/insta.svg" alt="" />
          </a>
        </div>
        <div className={styles.rrocket}>
          <a className={styles.download}>Download whitepaper</a>
          <div className={styles.rocket45}>
            <div className={styles.rocketContainer}>
              <img
                className={styles.rocketImg}
                src="/images/rocket45.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Socials;
