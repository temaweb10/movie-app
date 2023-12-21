import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import HeaderInput from "./HeaderInput";
/* import MenuIcon from "@mui/icons-material/Menu"; */
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar className={styles.headerToolBar}>
        {/*Inside the IconButton, we 
            can render various icons*/}

        {/* The Typography component applies 
             default font weights and sizes */}
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Link to="/movie-app/" className={styles.movieAppNameLink}>
            <Typography
              className={styles.movieAppName}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              CINEMAPASHKOV
            </Typography>
          </Link>
          {/*   <Link to="/category/movie/popular">
            <span className={styles.headerLinkText}>Новинки</span>
          </Link> */}
          <HeaderInput />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
