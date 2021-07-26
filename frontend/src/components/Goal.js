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
        margin: "auto",
        width: "50%",
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


export default function Goal(props) {
    const classes = useStyles();

    let text = {}
    props.goals.find((goal) => {
        if (goal.clicked) {
            text = { ...goal }
        }
    })


    return (
        <div className={classes.root}>
            <Paper elevation={3} >
                <form >
                    <div className={classes.title}>
                        <TextField
                            id="Title"
                            variant="outlined"
                            label="Write the title of your goal"
                            multiline
                            rows={1}
                            fullWidth
                            required
                            defaultValue={text.Title}
                        />
                    </div>
                    <Container component="main" className={classes.main} maxWidth="lg">
                        <TextField
                            id="Desc"
                            variant="outlined"
                            label="Describe what you are trying to achieve?"
                            multiline
                            rows={8}
                            fullWidth
                            required
                            defaultValue={text.Desc}
                        />
                        <TextField
                            id="Attainable"
                            variant="outlined"
                            label="Is the goal attainable and why?"
                            multiline
                            rows={8}
                            fullWidth
                            required
                            defaultValue={text.Attainable}
                        />
                        <TextField
                            id="Measure"
                            variant="outlined"
                            label="How are you going to measure your progress?"
                            multiline
                            rows={8}
                            fullWidth
                            required
                            defaultValue={text.Measure}
                        />
                        <TextField
                            id="Values"
                            variant="outlined"
                            label="How is the goal relevant in your life?"
                            multiline
                            rows={8}
                            fullWidth
                            required
                            defaultValue={text.Value}
                        />
                        <TextField
                            id="Deadline"
                            variant="outlined"
                            label="When are you going to achieve the goal and how will you celebrate?"
                            multiline
                            rows={8}
                            fullWidth
                            required
                            defaultValue={text.Deadline}
                        />
                    </Container>
                </form>
            </Paper>
        </div>
            );
}