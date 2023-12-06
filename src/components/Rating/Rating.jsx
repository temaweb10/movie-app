import React from "react";
import styles from "./Rating.module.css";
function Rating({ rating }) {
  let colorBlock;

  switch (true) {
    case rating >= 9:
      colorBlock = "#3bb33b";
      break;
    case rating >= 8 && rating < 9:
      colorBlock = "#87b121";
      break;
    case rating >= 7 && rating < 8:
      colorBlock = "#c4b502";
      break;
    case rating >= 6 && rating < 7:
      colorBlock = "#deac00";
      break;
    case rating >= 5 && rating < 6:
      colorBlock = "#f6a504";
      break;
    case rating >= 4 && rating < 5:
      colorBlock = "#ef8e00";
      break;
    case rating >= 3 && rating < 4:
      colorBlock = "#ef5601";
      break;
    case rating >= 2 && rating < 3:
      colorBlock = "#eb5800";
      break;
    case rating >= 1 && rating < 2:
      colorBlock = "#e63604";
      break;
    case rating >= 0 && rating < 1:
      colorBlock = "#e4010b";
      break;
    default:
      colorBlock = "";
      break;
  }

  return (
    <div className={styles.ratingBlock} style={{ backgroundColor: colorBlock }}>
      <span className={styles.ratingNumber}>
        {!Number.isNaN(Number(rating)) ? rating : ""}
      </span>
    </div>
  );
}

export default Rating;
