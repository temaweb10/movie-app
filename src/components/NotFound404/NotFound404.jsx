import React from "react";
import styles from "./NotFound404.module.css";
function NotFound404() {
  return (
    <div className={styles.errorBlock}>
      <span className={styles.errorText}>
        Страница не найдена <br />
        404 -_-
      </span>
    </div>
  );
}

export default NotFound404;
