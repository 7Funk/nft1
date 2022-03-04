import { Box, Dialog, DialogContent } from "@mui/material";
import React from "react";
import styles from "./LotModal.module.scss";

const LotModal = ({ isOpen, onClose }) => {
  return (
    <Dialog maxWidth='md' fullWidth scroll="body" open={isOpen} onClose={onClose}>
      <Box className={styles.modal}>
        <img className={styles.cross} src="/images/cross.svg" alt="lot" />
        <h3 className={styles.heading}>
          METAFLUENCER <br /> #0001
        </h3>
        <div className={styles.containerImg}>
          <img className={styles.img} src="/images/LotImage.png" alt="lot" />
        </div>
        <div className={styles.timeContainer}>
          <div className={styles.timeItem}>
            <h6 className={styles.timeValue}>87</h6>
            <p className={styles.timeType}>Days</p>
          </div>
          <div className={styles.timeItem}>
            <h6 className={styles.timeValue}>23</h6>
            <p className={styles.timeType}>Hours</p>
          </div>
          <div className={styles.timeItem}>
            <h6 className={styles.timeValue}>55</h6>
            <p className={styles.timeType}>Minutes</p>
          </div>
          <div className={styles.timeItem}>
            <h6 className={styles.timeValue}>16</h6>
            <p className={styles.timeType}>Seconds</p>
          </div>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          hendrerit facilisis quam, vitae efficitur dolor egestas at. Donec
          lacinia ipsum sed finibus consequat. Quisque blandit massa sed ornare
          scelerisque. Quisque et diam quis arcu malesuada convallis eu sed
          orci. Pellentesque habitant morbi tristique senectus et netus et d ac
        </p>
        <div className={styles.floorPriceGradient}>
          <div className={styles.floorPriceContainer}>
            <span className={styles.floorPrice}>FLOORPRICE:</span>
            <span className={styles.floorPriceValue}>100 $ILONSI</span>
          </div>
        </div>
        <p className={styles.bids}>{"[ 20 bids ]"}</p>
        <button className={styles.bidAmount}>Bid Amount</button>
        <p className={styles.bidQuantity}>Bid 100 $ILONSI or more</p>
        <div className={styles.actions}>
          <button className={styles.submit}>Subim BID</button>
          <div className={styles.containerClose}>
            <button className={styles.close}>You have BID</button>
          </div>
        </div>
      </Box>
    </Dialog>
  );
};

export default LotModal;
