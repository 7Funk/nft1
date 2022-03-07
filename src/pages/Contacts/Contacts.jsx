import styled from "@emotion/styled";
import React from "react";

import { Container } from "../../components";
import styles from "./Contacts.module.scss";

const customStyles = `
  background-color: #c6c6c656;
  width: 100%;
  padding: 16px 42px;
  border: double 1px transparent;
  border-radius: 30px;
  background-image: linear-gradient(#100d10, #100d10),
    linear-gradient(170deg, #fff 0%, #100d10 70%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  font-weight: 900;
  font-size: 18px;
  line-height: 24px;
  color: white;
  box-sizing: border-box;

  &::placeholder {
    color: #292629;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
  }

  &:focus {
    background-image: linear-gradient(#100d10, #100d10),
    linear-gradient(170deg, #fff 0%, #fff 100%);
  }
`;

const StyledInput = styled("input")(() => customStyles);
const StyledTextArea = styled("textarea")(() => customStyles);

const Contacts = () => {
  return (
    <Container className={styles.container}>
      <img className={styles.bg} src="/images/smoke2.png" alt="background" />
      <h1 className={styles.heading}>Contact Us</h1>
      <div className={styles.textFields}>
        <div className={styles.textFieldContainer}>
          <p className={styles.fieldLabel}>Your Name*</p>
          <StyledInput
            className={styles.textField}
            error={true}
            placeholder="Your Name"
          />
        </div>
        <div className={styles.textFieldContainer}>
          <p className={styles.fieldLabel}>Phone Number*</p>
          <StyledInput
            className={styles.textField}
            placeholder="Phone Number"
          />
        </div>
        <div className={styles.textFieldContainer}>
          <p className={styles.fieldLabel}>Email Address</p>
          <StyledInput
            className={styles.textField}
            placeholder="Email Address"
          />
        </div>
      </div>
      <div
        style={{ width: "100%" }}
        className={styles.textFieldContainer + " " + styles.textFieldError}
      >
        <p className={styles.fieldLabel}>Your Message</p>
        <StyledTextArea
          style={{ minHeight: "400px", resize: "none", marginBottom: "40px" }}
          placeholder="Your Message"
          fullwidth
          className={styles.textField}
          multiline
          rows={6}
        />
      </div>
      <div className={styles.containerButton}>
        <button className={styles.button}>Send</button>
      </div>
    </Container>
  );
};

export default Contacts;
