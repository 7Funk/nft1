import React from "react";
import Slider from "react-slick";
import { Container } from "../Container";
import styles from "./Fluensers.module.scss";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <div className={styles.rocket}>
        <div className={styles.circleContainer}>
          <img className={styles.circleImg} src="/images/circle.svg" alt="" />
        </div>
        <div
          className={styles.rocketContainer + " " + styles.rocketContainerNext}
        >
          <img
            className={styles.rocketImgNext}
            src="/images/rocket.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <div className={styles.rocket}>
        <div className={styles.circleContainer}>
          <img className={styles.circleImg} src="/images/circle.svg" alt="" />
        </div>
        <div
          className={styles.rocketContainer + " " + styles.rocketContainerPrev}
        >
          <img
            className={styles.rocketImgPrev}
            src="/images/rocket.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

const Fluensers = () => {
  const settings = {
    className: styles.center,
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container className={styles.container}>
      <div className={styles.topFluensersContainer}>
        <h2 className={styles.topFluensers}>The Meta Fluencers</h2>
      </div>
      <Slider {...settings}>
        <div className={styles.containerImage}>
          <img className={styles.image} src="/images/LotImage.png" alt="lot" />
        </div>
        <div className={styles.containerImage}>
          <img
            className={styles.image}
            src="/images/PersonBack.png"
            alt="lot"
          />
        </div>
        <div className={styles.containerImage}>
          <img className={styles.image} src="/images/LotImage.png" alt="lot" />
        </div>
        <div className={styles.containerImage}>
          <img
            className={styles.image}
            src="/images/PersonBack.png"
            alt="lot"
          />
        </div>
      </Slider>
    </Container>
  );
};

export default Fluensers;
