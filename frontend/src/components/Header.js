import React from 'react';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu.js'
import MenuLogged from './MenuLogged.js'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    header: {
        marginLeft: theme.spacing(2)
    },
}))

export default function Header(props) {
    const classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar>
                {props.logged
                    ? <MenuLogged setLogged={props.setLogged} />
                    : <Menu />
                }
                {/* <CameraIcon className={classes.icon} /> */}
                <Typography variant="h5" color="inherit" noWrap>
                    <Typography className={classes.header} color="inherit">
                        SMART Goals Library
                </Typography>
                </Typography>
                
                {/* //TODO */}
                {props.logged
                    ? <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <AccountCircle />
                      </IconButton>
                    : <Typography> Nothing</Typography>
                }
            </Toolbar>
        </AppBar>
    )
}
