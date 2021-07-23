import React from 'react';
import { useState, useEffect } from 'react';
import Hero from './Hero.js';
import GoalGrid from './GoalGrid.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
const axios = require("axios");


const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
}

export default function UserPage(props) {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
            axios.post('http://localhost:8000/userpage',
            { email: window.localStorage.getItem("user") }, {
            headers: headers
            })
            .then(function (response) {
                setGoals(response.data);

            }).catch(function (error) {
                alert(error.response.data);
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)

    }, [])

    return (
        <div>
            <Hero logged={props.logged}/>
            <GoalGrid goals={goals}/>
        </div>
    )
}