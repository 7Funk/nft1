import React from "react";

import { Benefits, Eco, Story, Team } from "../../components";
import styles from ".//Main.module.scss";

const Main = () => {
  return (
    <div className={styles.girl}>
      <img
        className={styles.shutter}
        src="/images/shutterstock.png"
        alt="shutterstock"
      />
      <img src="/images/rocket.svg" alt="rocket" />
      <img src="/images/rocketback.svg" alt="" />
      <Story />
      <Benefits />
      <Eco />
      <Team />
    </div>
  );
};
export default Main;

