import React, { useState } from "react";

import { Container, Header, Question } from "../../components";
import styles from "./FAQ.module.scss";

const questions = [
  {
    answer:
      "Meta-Fluencer NFT will donate 20% of all NFT sales and the second-hand royalty sales to support women and children who have experienced trauma, through various organizations. Meta-Fluncer and ILONSI believes that everyone can do something and will therefore take our responsibility to do our utmost for equal and a freer society",
    question: "What Is An NFT?",
  },
  {
    answer:
      "Meta-Fluencer NFT will donate 20% of all NFT sales and the second-hand royalty sales to support women and children who have experienced trauma, through various organizations. Meta-Fluncer and ILONSI believes that everyone can do something and will therefore take our responsibility to do our utmost for equal and a freer society",
    question: "How Do I Buy A Metafluencer?",
  },
  {
    answer:
      "Meta-Fluencer NFT will donate 20% of all NFT sales and the second-hand royalty sales to support women and children who have experienced trauma, through various organizations. Meta-Fluncer and ILONSI believes that everyone can do something and will therefore take our responsibility to do our utmost for equal and a freer society",
    question: "How Many Metafluencers Will Be There?",
  },
  {
    answer:
      "Meta-Fluencer NFT will donate 20% of all NFT sales and the second-hand royalty sales to support women and children who have experienced trauma, through various organizations. Meta-Fluncer and ILONSI believes that everyone can do something and will therefore take our responsibility to do our utmost for equal and a freer society",
    question: "Where Can  I Buy And Sell NFTS?",
  },
];

const FAQ = () => {
  return (
    <Container className={styles.page}>
      <img className={styles.bg} src="/images/smoke2.png" alt="background" />
      <h1 className={styles.heading}>FAQ</h1>
      <div className={styles.questions}>
        {questions.map((el, i) => {
          return (
            <Question
              key={i}
              id={`question${i}`}
              question={el.question}
              answer={el.answer}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default FAQ;
