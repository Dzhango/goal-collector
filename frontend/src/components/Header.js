import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu.js'

const useStyles = makeStyles((theme) => ({
    header: {
        marginLeft: theme.spacing(2)
    },
}))

export default function Header(){
    const classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar>
                <Menu/>
              {/* <CameraIcon className={classes.icon} /> */}
              <Typography variant="h5" color="inherit" noWrap>
                <Typography className={classes.header} color="inherit">
                    SMART Goals Library
                </Typography>
              </Typography>
            </Toolbar>
        </AppBar>
    )
}
