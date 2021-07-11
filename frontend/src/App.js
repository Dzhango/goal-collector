import React, { useEffect } from 'react';
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
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
const axios = require('axios');

// const api = axios.create({
// 	baseURL: "http://localhost:8000/"
// })


export default function App() {
	// useEffect(() => {
	// 	api.post('/home').then(res => {
	// 		console.log(res.data);
	// 	})
	// });

	return (
		<Router>
			<React.Fragment>
				<CssBaseline />
				<Header />
				<Switch>
					<Route path='/' exact>
						<Hero />
						<GoalGrid />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/newgoal'>
						<NewGoalForm />
					</Route>
					<Route path='/signup'>
						<SignUp />
					</Route>
					<Route path='/signin'>
						<SignIn />
					</Route>
					<Route path='/:id/feed'>
						<Feed id=":id" />
					</Route>
				</Switch>
				<Footer />
			</React.Fragment>
		</Router>
	);
}