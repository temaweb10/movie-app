import React from "react";
import loadingIcon from "../../images/loading.png";
import styles from "./Loading.module.css";
function Loading() {
  return <img className={styles.loading} src={loadingIcon} alt="Загрузка..." />;
}

export default Loading;
