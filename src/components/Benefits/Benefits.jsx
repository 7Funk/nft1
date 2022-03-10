import React from "react";

import { Container } from "..";
import styles from ".//Benefits.module.scss";

const Benefits = () => {
  return (
    <Container className={styles.benefits} id="benefits">
        <img className={styles.bg} src="/images/smoke2.png" alt="background" />
      <div className={styles.benefitsContainer}>
        <h2 className={styles.topBenefits}>Benefits</h2>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            className={styles.imgBenefits}
            src="/images/Vector1.svg"
            alt="icon1"
          />
          <p className={styles.textBenefits}>
            Meta Fluncer buyers will onetime get 5000 $ILONSI tokens and will
            receive 10 $ILONSI tokens daily automatically to their digital
            wallets during 3 years from the day the $ILONSI tokens is launched
            on platforms where you can buy and sell tokens.
          </p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.imgBenefits}
            src="/images/Vector4.svg"
            alt="icon3"
          />
          <p className={styles.textBenefits}>
            5% of all revenue ILONSI Shop makes will be divided evenly between
            1000 Meta Fluencer holders. Once a quarter, 5% of sales at the
            ILONSI Shop will be distributed to Meta Fluncer holders.
          </p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.imgBenefits}
            src="/images/Vector2.svg"
            alt="icon2"
          />
          <p className={styles.textBenefits}>
            Meta Fluncer holders will have the opportunity to join presales and
            whitelist for various NFT projects, together with Influencers, this
            will provide the NFT owner commission on everything the influencer
            sells in their ILONSI Shop for the NFT owner.
          </p>
        </div>

        <div className={styles.card}>
          <img
            className={styles.imgBenefits}
            src="/images/Vector5.svg"
            alt="shop"
          />
          <p className={styles.textBenefits}>
            Meta-Fluencer is a direct ticket into the ILONSI Shop, for brands
            and influencers wanting to be a part of our platform. Influencers
            and Brands who own a Meta-Fluencer will never have to pay membership
            fees, or for available features.
          </p>
        </div>

        <div className={styles.card}>
          <img
            className={styles.imgBenefits}
            src="/images/Vector3.svg"
            alt="party"
          />
          <p className={styles.textBenefits}>
            NFT owners will be invited to parties and events for networking with
            brands, influencers and a lot of other interesting people.
          </p>
        </div>

        <div className={styles.card}>
          <img
            className={styles.imgBenefits}
            src="/images/Vector6.svg"
            alt="copyright"
          />
          <p className={styles.textBenefits}>
            You own all rights attached to your Meta-Fluencer NFT, and these can
            never be revoked by ILONSI AB.
          </p>
        </div>
      </div>
    </Container>
  );
};
export default Benefits;
