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


export default function NewGoalForm(props) {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);

    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "auth-token": props.user.token,
        "email": props.user.login
    }
    function handleSubmit(event) {
        // const params = {
        //     Title: ""

        // }
        console.dir(event.target[0])

        // axios.put('http://localhost:8000/goals', 
        // 	params, { headers: headers 
        // 	}).then(function (response) {

        // 	setIsLoading(true);

        // 	}).catch(function (error) {
        // 		alert(error);
        // });
    }

    if (isLoading) {

    }

    return (
        <div className={classes.root}>
            <Paper elevation={3} >
                <form onSubmit={handleSubmit}> 
                <div className={classes.title}>
                    <TextField
                        id="Title"
                        variant="outlined"
                        placeholder="Write the title of your goal"
                        multiline
                        rows={1}
                        fullWidth
                    />
                </div>
                <Container component="main" className={classes.main} maxWidth="lg">
                    <TextField
                        id="Desc"
                        variant="outlined"
                        placeholder="Describe what you are trying to achieve"
                        multiline
                        rows={8}
                        fullWidth
                    />
                    <TextField
                        id="Attainable"
                        variant="outlined"
                        placeholder="Is the goal attainable and why?"
                        multiline
                        rows={8}
                        fullWidth
                    />
                    <TextField
                        id="Measure"
                        variant="outlined"
                        placeholder="How are you going to measure your progress?"
                        multiline
                        rows={8}
                        fullWidth
                    />
                    <TextField
                        id="Values"
                        variant="outlined"
                        placeholder="How is the goal relevant in your life?"
                        multiline
                        rows={8}
                        fullWidth
                    />
                    <TextField
                        id="Deadline"
                        variant="outlined"
                        placeholder="When are you going to achieve the goal and how will you celebrate?"
                        multiline
                        rows={8}
                        fullWidth
                    />
                </Container>
                <div className={classes.link}>
                    <TextField
                            id="Img"
                            variant="outlined"
                            placeholder="Paste a link to an image associated with the goal"
                            multiline
                            rows={1}
                            fullWidth
                    />
                    <Button type="submit">Submit</Button>
                </div>
                </form>
            </Paper>
        </div>
    );
}