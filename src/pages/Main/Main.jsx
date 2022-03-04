import React from "react";

import { Contacts } from "..";
import { Benefits, Eco, Girl, Smartcontacts, Socials, Story, Team } from "../../components";
import styles from ".//Main.module.scss";

const Main = () => {
  return (
    <div>
      <Girl />
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

