import React from "react";
import { Container } from "../Container";

import styles from "./Smartcontacts.module.scss";

const Smartcontacts = () => {
  return (
    <Container id="whitepaper">
      <div className={styles.smartContainer}>
        <h2 className={styles.topSmart}>ILONSI’s Smart Contracts</h2>
      </div>
      <div className={styles.contactCardContainer}>
        <div className={styles.contactCard}>
          <div className={styles.card}>
            <img className={styles.logo} src="/images/founderlogo.svg" alt="" />
            <h3 className={styles.name}>Founder</h3>
            <button className={styles.button}>Fly</button>
          </div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.card}>
            <img className={styles.logo} src="/images/rariblelogo.svg" alt="" />
            <h3 className={styles.name}>Rarible</h3>
            <button className={styles.button}>Fly</button>
          </div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.card}>
            <img className={styles.logo} src="/images/tokenlogo.svg" alt="" />
            <h3 className={styles.name}>ILONSI Token</h3>
            <button className={styles.button}>Fly</button>
          </div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.card}>
            <img className={styles.logo} src="/images/binancelogo.svg" alt="" />
            <h3 className={styles.name}>Binance</h3>
            <button className={styles.button}>Fly</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Smartcontacts;
