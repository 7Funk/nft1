import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import React from "react";

import { Container } from "../../components";
import styles from "./Contacts.module.scss";

const CustomTextField = styled(TextField)({
  '& label': {
    color: 'gray',
  },
});

const Contacts = () => {
  return (
    <Container className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <div className={styles.textFields}>
        <div className={styles.textFieldContainer}>
          <p className={styles.fieldLabel}>Your Name*</p>
          <CustomTextField
            className={styles.textField}
            color="secondary"
            label="Your Name"
            variant="filled"
          />
        </div>
        <div className={styles.textFieldContainer}>
          <p className={styles.fieldLabel}>Phone Number*</p>
          <CustomTextField
            className={styles.textField}
            color="secondary"
            label="Phone Number"
            variant="filled"
          />
        </div>
        <div className={styles.textFieldContainer}>
          <p className={styles.fieldLabel}>Email Address</p>
          <CustomTextField
            className={styles.textField}
            color="secondary"
            label="Email Address"
            variant="filled"
          />
        </div>
      </div>
      <div style={{width: '100%'}} className={styles.textFieldContainer}>
        <p className={styles.fieldLabel}>Your Message</p>
        <CustomTextField
          label="Your Message"
          color="secondary"
          variant="filled"
          fullwidth
          className={styles.textArea}
          multiline
          rows={6}
        />
      </div>
      <button className={styles.sendButton}>Send</button>
    </Container>
  );
};

export default Contacts;
