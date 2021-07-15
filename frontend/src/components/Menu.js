import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import {Link} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function MenuNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
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
          <Link to="/" color="inherit">
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          <Link to="/about" color="inherit">
            <MenuItem onClick={handleClose}>About</MenuItem>
          </Link>
          <Link to="/signin" color="inherit">
            <MenuItem onClick={handleClose}>My Account</MenuItem>
          </Link>
          <Link to="/signup" color="inherit">
            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
          </Link>
      </Menu>
    </div>
  );
}