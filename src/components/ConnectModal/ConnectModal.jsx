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
