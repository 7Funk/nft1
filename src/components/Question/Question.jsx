import React from "react";

import styles from "./Question.module.scss";

const Question = ({
  question,
  answer,
  id,
  ...restprops
}) => {
  return (
    <div id={id} className={styles.container}>
      <h3 className={styles.heading}>{question}</h3>
      <p className={styles.content}>{answer}</p>
    </div>
  );
};
export default Question;
