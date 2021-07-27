import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Hero from './components/Hero.js'
import GoalGrid from './components/GoalGrid.js'
import NewGoalForm from './components/newGoalForm.js';
import About from './components/About.js';
import SignUp from './components/SignUp.js';
import SignIn from './components/SignIn.js';
import Feed from './components/Feed.js';
import UserPage from './components/UserPage.js'; 
import GoalView from './components/GoalView.js';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
const axios = require("axios");


const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
}

export default function App() {
	const [logged, setLogged] = useState(false);
	const [goals, setGoals] = useState([]);
	const [goal, setGoal] = useState(null);

	useEffect(() => {
		// Check if the user is logged
		if(window.localStorage.getItem("user") !== null){
			setLogged(true);
		} else {
			setLogged(false);
			setGoals([])
		}
	}, [window.localStorage.getItem("user")]);

	useEffect(() => {
		if (logged === true){
			axios.post('http://localhost:8000/userpage',
			{ email: window.localStorage.getItem("user") }, {
			headers: headers
			})
			.then(function (response) {
				setGoals(response.data);

			}).catch(function (error) {
				alert(error.response.data);
			});
		} 
		//figure out how to chance goals, what do they depend on
	}, [logged, goals]);

	return (
		<Router>
			<React.Fragment>
				<CssBaseline />
				<Header logged={logged} setLogged={setLogged}/> 
				<Switch>
					<Route path='/' exact>
						<UserPage setGoal={setGoal} logged={logged} goals={goals} setLogged={setLogged}/>
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/newgoal'>
						<NewGoalForm goal={goal} setGoal={setGoal} goals={goals} setGoals={setGoals}/>
					</Route>
					<Route path='/signup'>
						<SignUp setLogged={setLogged}/>
					</Route>
					<Route path='/signin'>
						<SignIn setLogged={setLogged}/>
					</Route>
					<Route path='/logout'>
						<Feed />
					</Route>
					<Route path='/goal'>
						<GoalView goal={goal}/>
					</Route>
				</Switch>
				<Footer />
			</React.Fragment>
		</Router>
	);
}