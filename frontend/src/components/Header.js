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
        display: "block",
        float: "right",
        padding: "12px"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    icon: {
        display: "inline-block",
        padding: "12px", 
        // marginLeft: "60%"
    },
    flexItems: {
        verticalAlign: "text-bottom"
    }
}))

export default function Header(props) {
    const classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar className={classes.toolbar}>
                <div className={classes.flexItems}>
                    {props.logged
                        ? <MenuLogged setLogged={props.setLogged} className={classes.items} />
                        : <Menu className={classes.items}/>
                    }
                    {/* <CameraIcon className={classes.icon} /> */}
                
                    <Typography color="inherit" noWrap className={classes.flexItems}>
                        <Typography  variant="h5"color="inherit">
                            SMART Goals Library
                        </Typography>
                    </Typography>
                </div>
                <div className={classes.flexItems}>
                    {props.logged
                        ? <div className={classes.icon}> <AccountCircle/> </div>
                        : <AccountCircle visibility="hidden"/>
                    }
                    <Typography className={classes.header} color="inherit">
                        {props.logged
                            ? window.localStorage.getItem("user")
                            : ""}
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}
