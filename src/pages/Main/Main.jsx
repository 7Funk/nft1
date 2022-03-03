import React from "react";

<<<<<<< HEAD
import { Benefits, Eco, Smartcontacts, Story, Team } from "../../components";
import styles from ".//Main.module.scss";
=======
import { Benefits, Eco, Story, Team } from "../../components";
import styles from "./Main.module.scss";
>>>>>>> main

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
    </div>
  );
};
export default Main;

