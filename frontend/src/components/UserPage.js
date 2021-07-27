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

export default function UserPage(props) {


    return (
        <div>
            <Hero logged={props.logged} setGoal={props.setGoal}/>
            <GoalGrid setGoal={props.setGoal} goals={props.goals} setLogged={props.setLogged}/>
        </div>
    )
}