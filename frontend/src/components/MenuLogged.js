import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import {Link} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menu: {
    width: "50px"
  }
}))

export default function MenuLogged(props) {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    window.localStorage.clear();
    props.setLogged(false);
  };

  return (
    <div className={classes.menu}>
      <IconButton aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/' style={{ textDecoration: 'none', outline: "none" }}>
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to='/about' style={{ textDecoration: 'none', outline: "none" }}>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
        <Link to='/signin' style={{ textDecoration: 'none', outline: "none" }}>
          <MenuItem onClick={handleLogout}>Log out</MenuItem>
        </Link>

      </Menu>
    </div>
  );
}