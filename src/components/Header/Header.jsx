import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
/* import MenuIcon from "@mui/icons-material/Menu"; */
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        {/*Inside the IconButton, we 
            can render various icons*/}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/*This is a simple Menu 
              Icon wrapped in Icon */}
        </IconButton>
        {/* The Typography component applies 
             default font weights and sizes */}
        <Link to="/">
          <Typography
            className={styles.movieAppName}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            CINEMAPASHKOV
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
