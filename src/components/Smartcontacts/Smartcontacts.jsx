import React from "react";

import styles from "./Smartcontacts.module.scss";

const Smartcontacts = () => {
  return (
    <div className="contacts"> 
      <div>
        <h2>ILONSI’s Smart Contracts</h2>
      </div>
      <div>
        <img src="/images/founderlogo.svg" alt="" />
        <h3>Founder</h3>
        <button className={styles.button}>fly</button>
      </div>
      <div>
        <img src="/images/rariblelogo.svg" alt="" />
        <h3>Rarible</h3>
        <button className={styles.button}>fly</button>
      </div>
      <div>
        <img src="/images/tokenlogo.svg" alt="" />
        <h3>ILONSI Token</h3>
        <button className={styles.button}>fly</button>
      </div>
      <div>
        <img src="/images/binancelogo.svg" alt="" />
        <h3>Binance</h3>
        <button className={styles.button}>fly</button>
      </div>
    </div>
  );
};
export default Smartcontacts;
