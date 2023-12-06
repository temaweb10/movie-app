import React from "react";
import loadingIcon from "../../images/loading.png";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div style={{ marginBottom: "36px" }}>
      <span className={styles.loadingSpan}>CINEMAPASHKOV</span>
      <span className={styles.loadingSpanAnimaton}>.</span>
      <span className={styles.loadingSpanAnimaton}>.</span>
      <span className={styles.loadingSpanAnimaton}>.</span>
    </div>
  );
}

export default Loading;
