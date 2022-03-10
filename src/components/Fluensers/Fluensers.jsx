import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { useWindowSize } from "../../hooks/useWindowSize";
import { Container } from "../Container";
import styles from "./Fluensers.module.scss";

import './Slider.scss'

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <div className={styles.rocket}>
        <div className={styles.circleContainer}>
          <img className={styles.circleImg} src="/images/circle.svg" alt="circle" />
        </div>
        <div
          className={styles.rocketContainer + " " + styles.rocketContainerNext}
        >
          <img
            className={styles.rocketImgNext}
            src="/images/rocket.svg"
            alt="rocket"
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
          <img className={styles.circleImg} src="/images/circle.svg" alt="circle" />
        </div>
        <div
          className={styles.rocketContainer + " " + styles.rocketContainerPrev}
        >
          <img
            className={styles.rocketImgPrev}
            src="/images/rocket.svg"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}

const Fluensers = () => {
  const [slidesToShow, setSlidesToShow] = useState(3)
  const {width} = useWindowSize()
  useEffect(() => {
    if (width < 1000) {
      setSlidesToShow(1)
    } else {
      setSlidesToShow(3)
    }
    
  }, [slidesToShow, width])
  

  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
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
          <img className={styles.image} src="/images/lotImage.png" alt="person" />
        </div>
        <div className={styles.containerImage}>
          <img
            className={styles.image}
            src="/images/PersonBack.png"
            alt="person"
          />
        </div>
        <div className={styles.containerImage}>
          <img className={styles.image} src="/images/lotImage.png" alt="person" />
        </div>
        <div className={styles.containerImage}>
          <img
            className={styles.image}
            src="/images/PersonBack.png"
            alt="person"
          />
        </div>
      </Slider>
    </Container>
  );
};

export default Fluensers;
