import React from "react";

import { Contacts } from "..";
import { Benefits, Eco, Smartcontacts, Socials, Story, Team } from "../../components";
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
      <Smartcontacts />
      <Socials />
    </div>
  );
};
export default Main;

