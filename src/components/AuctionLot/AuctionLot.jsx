import React from "react";
import styles from "./AuctionLot.module.scss";

const AuctionLot = ({handleOpen}) => {
  return (
    <div className={styles.container}>
      <img className={styles.lotImage} src="/images/LotImage.png" alt="lot" />
      <div className={styles.lotInfo}>
        <h6 className={styles.lotName}>
          Metafluencer <br /> #00001
        </h6>
        <p className={styles.lotFloorPrice}>
          Floorprice 1/1
        </p>
        <p className={styles.lotPrice}>
          100 $ILONSI
        </p>
        <button onClick={handleOpen} className={styles.button}>Bid</button>
        
      </div>
    </div>
  );
};

export default AuctionLot;
