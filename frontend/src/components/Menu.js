import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "@material-ui/core";


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
        <MenuItem onClick={handleClose}>
            <Link color="inherit">Home </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link color="inherit">About </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link color="inherit">My Account </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link color="inherit">Sign Up</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}