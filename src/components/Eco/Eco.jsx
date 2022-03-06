import React from "react";

import { Container } from "..";
import styles from "./Eco.module.scss";

const Eco = () => {
  return (
    <Container id="eco" className={styles.container}>
      <div className={styles.topEcoContainer}>
        <h2 className={styles.topEco}>Eco</h2>
      </div>
      <div className={styles.card}>
        <div className={styles.textContainer}>
          <h3 className={styles.topText}>META CHARITY</h3>
          <p className={styles.textEco}>
            Meta-Fluencer NFT will donate 20% of all NFT sales and the
            second-hand royalty sales to support women and children who have
            experienced trauma, through various organizations. Meta-Fluncer and
            ILONSI believes that everyone can do something and will therefore
            take our responsibility to do our utmost for equal and a freer
            society
          </p>
        </div>
        <div className={styles.containerImg}>
          <img className={styles.ecoImg} src="images/arms.png" alt="icon" />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.textContainer}>
          <h3 className={styles.topText}>RENTING SYSTEM</h3>
          <p className={styles.textEco}>
            Meta-Fluencer NFT will donate 20% of all NFT sales and the
            second-hand royalty sales to support women and children who have
            experienced trauma, through various organizations. Meta-Fluncer and
            ILONSI believes that everyone can do something and will therefore
            take our responsibility to do our utmost for equal and a freer
            society
          </p>
        </div>
        <div className={styles.containerImg}>
          <img className={styles.ecoImg} src="images/rent.png" alt="icon" />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.textContainer}>
          <h3 className={styles.topText}>$ILONSI SHOP</h3>
          <p className={styles.textEco}>
            Meta-Fluencer NFT will donate 20% of all NFT sales and the
            second-hand royalty sales to support women and children who have
            experienced trauma, through various organizations. Meta-Fluncer and
            ILONSI believes that everyone can do something and will therefore
            take our responsibility to do our utmost for equal and a freer
            society
          </p>
        </div>
        <div className={styles.containerImg}>
          <img className={styles.ecoImg} src="images/door.png" alt="icon" />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.textContainer}>
          <h3 className={styles.topText}>$ILONSI TOKEN</h3>
          <p className={styles.textEco}>
            Will be launched later and will be part of ILONSI Shop and Meta
            Fluencer´s eco-system. Our vision is that the ILONSI token will be
            used primarily as a means of repaying parts of commissions to
            companies in Turkey, in the event of sales made via influencers
            trough ILONSI Shop. ILONSI token will be used later on
            Meta-Fluncer.com to buy and bid on various products, NFTs and
            prices.
          </p>
        </div>
        <div className={styles.containerImg}>
          <img className={styles.ecoImg} src="images/token.png" alt="icon" />
        </div>
      </div>
    </Container>
  );
};
export default Eco;
