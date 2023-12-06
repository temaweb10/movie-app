import TextField from "@mui/material/TextField";
import React from "react";
import styles from "./Input.module.css";
function Input(props) {
  return <TextField className={styles.input} {...props} />;
}

export default Input;
