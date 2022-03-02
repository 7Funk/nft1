import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children, className, ...resprops }) => {
  return <div {...resprops} className={styles.container + `${className && ' ' + className}`}>{children}</div>;
};
export default Container;
