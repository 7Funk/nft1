import React from "react";

import { Footer, Header } from "..";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <div className={styles.content}>{children}</div>
      </main>
      <div className={styles.footer}>
      <Footer />
      </div>
    </div>
  );
};

export default Layout;
