import React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "../../components";
import styles from './Contacts.module.scss'
import styled from "@emotion/styled";

const CssTextField = styled(TextField)({
  '&': {
    border: '1px solid white',
    color: 'white',
  },
  // '& label.Mui-focused': {
  //   color: 'green',
  // },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: 'green',
  // },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

const Contacts = () => {
  return (
    <Container className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <div className={styles.textFields}>
        <CssTextField className={styles.textField} color="secondary" label="Your Name" required variant="outlined" />
        <CssTextField className={styles.textField} color="secondary" label="Phone Number" required variant="outlined" />
        <CssTextField className={styles.textField} color="secondary" label="Email Address" variant="outlined" />
      </div>
      <CssTextField color="secondary" fullwidth className={styles.textArea} multiline rows={6} />
      <button className={styles.sendButton}>Send</button>
    </Container>
  );
};

export default Contacts;
