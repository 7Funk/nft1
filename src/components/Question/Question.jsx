import React from "react";
import styles from "./Question.module.scss";

const Question = ({
  question,
  answer,
  isOpen,
  setIsOpen,
  id,
  ...restprops
}) => {
  return (
    <div onClick={() => setIsOpen(id)} className={styles.question}>
      <p className={styles.content}>{isOpen ? answer : question}</p>
    </div>
  );
};
export default Question;
