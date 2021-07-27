import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}))
export default function GoalCard(props) {
    const classes = useStyles();

    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "auth-token": window.localStorage.getItem("token"),
        "email": window.localStorage.getItem("user")
    }
    const [view, setView] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();

        for (let i = 0; i < props.goals.length; i++) {
            if (props.goals[i].Title === props.card.Title) {
                props.setGoal(props.goals[i]);
                setView(true);
            }
        }


    }

    const handleDelete = (event) => {
        event.preventDefault();
        const params = {
            Title: props.card.Title
        }
        axios.post('http://localhost:8000/goals/goal/delete',
            params, {
            headers: headers
        }).then(function (response) {

            console.log(response);
            props.setGoal(null);

        }).catch(function (error) {
            alert(error);
        });
    }
    if (view) {
        return <Redirect to="/goal" />
    }

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={props.card.Img}
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.card.Title}
                </Typography>
                <Typography>
                    {props.card.Desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={handleClick}>
                    View
                </Button>
                <Link to="/goal">
                    <Button size="small" color="primary" onClick={handleDelete} >
                        Delete
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )

}