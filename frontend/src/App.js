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
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


export default function App() {
	const [logged, setLogged] = useState(false);

	useEffect(() => {
		// Check if the user is logged
		if(window.localStorage.getItem("user") !== null){
			setLogged(true);
		}
	});
	return (
		<Router>
			<React.Fragment>
				<CssBaseline />
				<Header logged={logged} setLogged={setLogged}/> 
				<Switch>
					<Route path='/' exact>
						<UserPage logged={logged} />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/newgoal'>
						<NewGoalForm/>
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
				</Switch>
				<Footer />
			</React.Fragment>
		</Router>
	);
}