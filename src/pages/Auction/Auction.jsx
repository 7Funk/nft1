import React, { useState } from "react";

import { Container, LotModal } from "../../components";
import { AuctionLot } from "../../components";
import styles from "./Auction.module.scss";

const Auction = () => {
  const [isOpenModal, setisOpenModal] = useState(false);

  return (
    <Container className={styles.container}>
      <img className={styles.bg} src="/images/smoke2.png" alt="background" />
      <h1 className={styles.heading}>Auction</h1>
      <div className={styles.lots}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(() => {
          return (
            <AuctionLot
              handleOpen={() => {
                setisOpenModal(true);
              }}
            />
          );
        })}
      </div>
      <div className={styles.containerButton}>
        <button className={styles.button}>
          Show more
          <img src="/images/rocketWhite.svg" alt="rocket" />
        </button>
      </div>
      <LotModal isOpen={isOpenModal} onClose={() => setisOpenModal(false)} />
    </Container>
  );
};

export default Auction;
