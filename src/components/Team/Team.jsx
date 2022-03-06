import { style } from "@mui/system";
import React from "react";

import { Container } from "..";
import styles from "./Team.module.scss";

const Team = () => {
  return (
    <Container  id="team" className={styles.container}>
      <div className={styles.teamContainer}>
        <h2 className={styles.topTeam}>Team</h2>
      </div>
      <div className={styles.teamWrapper}>
        <div className={styles.teamCardContainer}>
          <div className={styles.avaContainer}>
            <img className={styles.ava} src="images/ava.png" alt="ava" />
          </div>
          <h3 className={styles.fouder}>Founder</h3>
          <p className={styles.name}>Cevat Keskiner Cevat</p>
          <div className={styles.socialsContainar}>
            <img
              className={styles.icon}
              src="images/twitter.svg"
              alt="twitter"
            />
            <img className={styles.icon} src="images/inst.svg" alt="inst" />
            <img className={styles.icon} src="images/in.svg" alt="in" />
          </div>
        </div>
        <div className={styles.teamCardContainer}>
          <div className={styles.avaContainer}>
            <img className={styles.ava} src="images/ava.png" alt="ava" />
          </div>
          <h3 className={styles.fouder}>Founder</h3>
          <p className={styles.name}>Cevat Keskiner Cevat</p>
          <div className={styles.socialsContainar}>
            <img
              className={styles.icon}
              src="images/twitter.svg"
              alt="twitter"
            />
            <img className={styles.icon} src="images/inst.svg" alt="inst" />
          </div>
        </div>
        <div className={styles.teamCardContainer}>
          <div className={styles.avaContainer}>
            <img className={styles.ava} src="images/ava.png" alt="ava" />
          </div>
          <h3 className={styles.fouder}>Founder</h3>
          <p className={styles.name}>Cevat Keskiner Cevat</p>
          <div className={styles.socialsContainar}>
            <img
              className={styles.icon}
              src="images/twitter.svg"
              alt="twitter"
            />
            <img className={styles.icon} src="images/inst.svg" alt="inst" />
            <img className={styles.icon} src="images/in.svg" alt="in" />
          </div>
        </div>
        <div className={styles.teamCardContainer}>
          <div className={styles.avaContainer}>
            <img className={styles.ava} src="images/ava.png" alt="ava" />
          </div>
          <h3 className={styles.fouder}>Founder</h3>
          <p className={styles.name}>Cevat Keskiner Cevat</p>
          <div className={styles.socialsContainar}>
            <img className={styles.icon} src="images/in.svg" alt="in" />
          </div>
        </div>
        <div className={styles.teamCardContainer}>
          <div className={styles.avaContainer}>
            <img className={styles.ava} src="images/ava.png" alt="ava" />
          </div>
          <h3 className={styles.fouder}>Founder</h3>
          <p className={styles.name}>Cevat Keskiner Cevat</p>
          <div className={styles.socialsContainar}>
            <img
              className={styles.icon}
              src="images/twitter.svg"
              alt="twitter"
            />
            <img className={styles.icon} src="images/inst.svg" alt="inst" />
            <img className={styles.icon} src="images/in.svg" alt="in" />
          </div>
        </div>
        <div className={styles.teamCardContainer}>
          <div className={styles.avaContainer}>
            <img className={styles.ava} src="images/ava.png" alt="ava" />
          </div>
          <h3 className={styles.fouder}>Founder</h3>
          <p className={styles.name}>Cevat Keskiner Cevat</p>
          <div className={styles.socialsContainar}>
            <img
              className={styles.icon}
              src="images/twitter.svg"
              alt="twitter"
            />
            <img className={styles.icon} src="images/inst.svg" alt="inst" />
            <img className={styles.icon} src="images/in.svg" alt="in" />
          </div>
        </div>
        <div className={styles.teamCardContainer}>
          <div className={styles.avaContainer}>
            <img className={styles.ava} src="images/ava.png" alt="ava" />
          </div>
          <h3 className={styles.fouder}>Founder</h3>
          <p className={styles.name}>Cevat Keskiner Cevat</p>
          <div className={styles.socialsContainar}>
            <img
              className={styles.icon}
              src="images/twitter.svg"
              alt="twitter"
            />
            <img className={styles.icon} src="images/inst.svg" alt="inst" />
          </div>
        </div>
        <div className={styles.teamCardContainer}>
          <div className={styles.avaContainer}>
            <img className={styles.ava} src="images/ava.png" alt="ava" />
          </div>
          <h3 className={styles.fouder}>Founder</h3>
          <p className={styles.name}>Cevat Keskiner Cevat</p>
          <div className={styles.socialsContainar}>
            <img className={styles.icon} src="images/in.svg" alt="in" />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Team;
