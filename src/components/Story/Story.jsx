import React from "react";

import { Container } from "..";
import styles from "./Story.module.scss";

const Story = () => {
  return (
    <Container className={styles.container} id="story">
      <div className={styles.story}>
        <div className={styles.topStoryContainer}>
          <h2 className={styles.topStory}>The story</h2>
        </div>
        <img className={styles.ship} src="images/ship.png" alt="" />
        <p className={styles.textStory}>
          Meta-Fluencer is a female Influencer from the Metaverse world, a
          planet beyond the stars. She has traveled back from the future to 2022
          to save the human species.
          <br />
          <br />
          Meta-Fluencer’s are creative, brave, and stubborn characters who will
          do their utmost to save humanity, guiding them towards making right
          decisions — failure could have a catastrophic effect on humanity in
          the Metaverse.
          <br />
          <br />
          1000 3D hand-drawn female characters called Meta-Fluncer’s will travel
          back in time to Mother Earth with many important missions. ILONSI as a
          company, values equal rights, freedom and will always stand up against
          dark powers, regardless of what it costs them.
        </p>
        
      </div>
    </Container>
  );
};
export default Story;
