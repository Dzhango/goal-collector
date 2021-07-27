import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, Container, Button } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const axios = require('axios');


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        margin: "auto",
        width: "80%",
        marginTop: theme.spacing(6),
    },
    title: {
        marginTop: theme.spacing(4),
        textAlign: "center", 
        margin: "auto",
        width: "100%",
        marginBottom: theme.spacing(4),
    },
    main: {
        // margin: "auto", 
        // width: "50%",
        display: 'grid',
        gridTemplateColumns: "1fr 1fr",
        gridGap: "10px"
        // flexDirection: 'row',
        //   marginTop: theme.spacing(8),
        //   marginBottom: theme.spacing(2),
    },
    link: {
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        width: "50%",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(10),
    }
}));


export default function GoalView(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} >
                <div className={classes.title}>
                    <Typography variant="h4" >
                        {props.goal.Title}
                    </Typography>

                </div>
                <Container component="main" className={classes.main} maxWidth="lg">
                    <div>
                        <Typography variant="subtitle1" gutterBottom>
                            What you are trying to achieve?
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {props.goal.Desc}
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="subtitle1" gutterBottom>
                            Is the goal attainable and why?
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {props.goal.Attainable}
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="subtitle1" gutterBottom>
                            How are you going to measure your progress?
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {props.goal.Measure}
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="subtitle1" gutterBottom>
                            How is the goal relevant in your life?
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {props.goal.Values}
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="subtitle1" gutterBottom>
                            When are you going to achieve the goal and how will you celebrate?
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {props.goal.Deadline}
                        </Typography>
                    </div>
                </Container>
            </Paper>
        </div >
    );
}