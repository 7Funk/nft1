import React from "react";
import { Container } from "../../components";
import { AuctionLot } from "../../components";
import styles from "./Auction.module.scss";

const Auction = () => {
  return (
    <Container className={styles.container}>
      <h1 className={styles.heading}>Auction</h1>
      <div className={styles.lots}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(() => {
          return <AuctionLot />;
        })}
      </div>
    </Container>
  );
};

export default Auction;
