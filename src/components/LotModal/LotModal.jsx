import { Box, Dialog, DialogContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./LotModal.module.scss";

function MainContext({ onClose, setContext }) {
  return (
    <Box className={styles.modal}>
      <div className={styles.container}>
        <img
          onClick={onClose}
          className={styles.cross}
          src="/images/Close.svg"
          alt="cross"
        />
        <h3 className={styles.heading}>
          METAFLUENCER <br /> #0001
        </h3>
        <div className={styles.containerImg}>
          <img className={styles.img} src="/images/lotImage.png" alt="lot" />
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
        <button
          onClick={() => {
            setContext("bid");
          }}
          className={styles.bidAmount}
        >
          Bid Amount
        </button>
        <p className={styles.bidQuantity}>Bid 100 $ILONSI or more</p>
        <div className={styles.actions}>
          <button
            onClick={() => {
              setContext("submit");
            }}
            className={styles.submit}
          >
            Subim BID
          </button>
          <div className={styles.containerClose}>
            <div className={styles.containerClose2}>
              <button onClick={onClose} className={styles.close}>
                You have BID
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

const BidContext = ({ onClose, setContext }) => {
  return (
    <Box className={styles.containerBid}>
      <div className={styles.actions}>
        <img
          onClick={() => {
            setContext("main");
          }}
          className={styles.back}
          src="/images/Back.svg"
          alt="back"
        />
        <img
          onClick={onClose}
          className={styles.cross}
          src="/images/Close.svg"
          alt="cross"
        />
      </div>
      <div className={styles.containerBid}>
        <div className={styles.itemContainer}>
          <div className={styles.icon}></div>
          <div className={styles.bidContent}>
            <p className={styles.name}>101 $ILONSI</p>
            <div className={styles.bidInfo}>
              <p className={styles.by}>by</p>
              <p className={styles.text}>1xdddc32226222</p>
            </div>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.icon}></div>
          <div className={styles.bidContent}>
            <p className={styles.name}>101 $ILONSI</p>
            <div className={styles.bidInfo}>
              <p className={styles.by}>by</p>
              <p className={styles.text}>1xdddc32226222</p>
            </div>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.icon}></div>
          <div className={styles.bidContent}>
            <p className={styles.name}>101 $ILONSI</p>
            <div className={styles.bidInfo}>
              <p className={styles.by}>by</p>
              <p className={styles.text}>1xdddc32226222</p>
            </div>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.icon}></div>
          <div className={styles.bidContent}>
            <p className={styles.name}>101 $ILONSI</p>
            <div className={styles.bidInfo}>
              <p className={styles.by}>by</p>
              <p className={styles.text}>1xdddc32226222</p>
            </div>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.icon}></div>
          <div className={styles.bidContent}>
            <p className={styles.name}>101 $ILONSI</p>
            <div className={styles.bidInfo}>
              <p className={styles.by}>by</p>
              <p className={styles.text}>1xdddc32226222</p>
            </div>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.icon}></div>
          <div className={styles.bidContent}>
            <p className={styles.name}>101 $ILONSI</p>
            <div className={styles.bidInfo}>
              <p className={styles.by}>by</p>
              <p className={styles.text}>1xdddc32226222</p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

const SubmitContext = ({ onClose }) => {
  return (
    <Box className={styles.modal}>
      <img
        onClick={onClose}
        className={styles.cross}
        src="/images/Close.svg"
        alt="cross"
      />
      <div className={styles.containerSubmit}>
        <h3 className={styles.heading}>100 $ILONSI</h3>
        <div className={styles.containerImg}>
          <img className={styles.img} src="/images/lotImage.png" alt="lot" />
        </div>
        <button onClick={onClose} className={styles.submit}>
          Subim BID
        </button>
      </div>
    </Box>
  );
};

const switchContext = (context, setContext, onClose) => {
  switch (context) {
    case "bid":
      return <BidContext setContext={setContext} onClose={onClose} />;
    case "submit":
      return <SubmitContext onClose={onClose} setContext={setContext} />;
    default:
      return <MainContext onClose={onClose} setContext={setContext} />;
  }
};

const LotModal = ({ isOpen, onClose }) => {
  const [context, setContext] = useState("main");

  useEffect(() => {
    if (isOpen) {
      setContext("main");
    }
  }, [isOpen]);

  const classes = {
    paper: styles.paper,
  };

  return (
    <Dialog
      classes={classes}
      maxWidth="md"
      fullWidth
      scroll="body"
      open={isOpen}
      onClose={onClose}
    >
      {switchContext(context, setContext, onClose)}
    </Dialog>
  );
};

export default LotModal;
