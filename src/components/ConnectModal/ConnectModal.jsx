import { Box, Dialog, DialogContent } from "@mui/material";
import React, { useEffect, useState } from "react";

import styles from "./ConnectModal.module.scss";

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
        <h3 className={styles.heading}>Connection</h3>
        <p className={styles.subtitle}>
          Pick a wallet to connect to Metafluencer
        </p>
        <div className={styles.actions}>
          <button onClick={() => {setContext('connect')}} className={styles.button}>
            <img src="/images/ShipIcon.svg" alt="ship" />
            &nbsp;
            <span className={styles.buttonText}>Founderrrrrr</span>
          </button>
          <button onClick={() => {setContext('connect')}} className={styles.button}>
            <img src="/images/ShipIcon.svg" alt="ship" />
            &nbsp;
            <span className={styles.buttonText}>Founderrrrrr</span>
          </button>
          <button onClick={() => {setContext('connect')}} className={styles.button}>
            <img src="/images/ShipIcon.svg" alt="ship" />
            &nbsp;
            <span className={styles.buttonText}>Founderrrrrr</span>
          </button>
          <button onClick={() => {setContext('connect')}} className={styles.button}>
            <img src="/images/ShipIcon.svg" alt="ship" />
            &nbsp;
            <span className={styles.buttonText}>Founderrrrrr</span>
          </button>
          <button onClick={() => {setContext('connect')}} className={styles.button}>
            <img src="/images/ShipIcon.svg" alt="ship" />
            &nbsp;
            <span className={styles.buttonText}>Founderrrrrr</span>
          </button>
          <button onClick={() => {setContext('connect')}} className={styles.button}>
            <img src="/images/ShipIcon.svg" alt="ship" />
            &nbsp;
            <span className={styles.buttonText}>Founderrrrrr</span>
          </button>
          <button onClick={() => {setContext('connect')}} className={styles.button}>
            <img src="/images/ShipIcon.svg" alt="ship" />
            &nbsp;
            <span className={styles.buttonText}>Founderrrrrr</span>
          </button>
          <button onClick={() => {setContext('connect')}} className={styles.button}>
            <img src="/images/ShipIcon.svg" alt="ship" />
            &nbsp;
            <span className={styles.buttonText}>Founderrrrrr</span>
          </button>
        </div>
      </div>
    </Box>
  );
}
function ConnectContext({ onClose, setContext }) {
  return (
    <Box className={styles.modal}>
      <div className={styles.container}>
        <img
          onClick={onClose}
          className={styles.cross}
          src="/images/Close.svg"
          alt="cross"
        />
        <h3 className={styles.heading}>Welcome!</h3>
        <p className={styles.subtitle}>
        Let’s begin with connecting your MetaMask
        </p>
        <button onClick={onClose} className={styles.buttonConnect}>
          Connect
        </button>
      </div>
    </Box>
  );
}

const switchContext = (context, setContext, onClose) => {
  switch (context) {
    case "connect":
      return <ConnectContext setContext={setContext} onClose={onClose} />;
    default:
      return <MainContext onClose={onClose} setContext={setContext} />;
  }
};

const ConnectModal = ({ isOpen, onClose }) => {
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

export default ConnectModal;
