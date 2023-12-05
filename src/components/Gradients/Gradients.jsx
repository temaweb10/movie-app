import React from "react";
import styles from "../Gradients/Gradients.module.css";
function Gradients() {
  return (
    <>
      <div className={styles.gradientPurpleBottom}></div>
      <div className={styles.gradientBlueBottom}></div>
      <div className={styles.gradientBlueTop}></div>
      <div className={styles.gradientPurpleTop}></div>
    </>
  );
}

export default Gradients;
