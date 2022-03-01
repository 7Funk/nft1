import React, { useState } from "react";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Question } from "../../components/Question/Question";
import styles from "./FAQ.module.scss";

const questions = [
  {
    answer:
      "A non-fungible Token (NFT) is a unique digital asset that represents real-world objects that range from music, and art, to videos, game items and digital rights.",
    question: "What is an NFT",
  },
  {
    answer: "lorem ipsum",
    question: "How do i buy a metafluencer",
  },
  {
    answer: "lorem ipsum",
    question: "How many metafluencers will be there",
  },
  {
    answer: "lorem ipsum",
    question: "Where can i buy and sell nfts",
  },
  {
    answer: "lorem ipsum",
    question: "What is an nft",
  },
  {
    answer: "lorem ipsum",
    question: "What is an nft",
  },
  {
    answer: "lorem ipsum",
    question: "What is an nft",
  },
];

const FAQ = () => {
  const [questionOpen, setQuestionOpen] = useState(null);

  const setOpenedQuestion = (id) => {
    if (id === questionOpen) {
      setQuestionOpen(null);
    } else {
      setQuestionOpen(id);
    }
  };

  return (
    <div className={styles.page} style={{ background: "black" }}>
      <Header />
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>FAQ</h1>
      </div>
      <Container>
        {questions.map((el, i) => {
          return (
            <Question
              key={i}
              question={el.question}
              answer={el.answer}
              id={i}
              isOpen={questionOpen === i}
              setIsOpen={setOpenedQuestion}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default FAQ;
