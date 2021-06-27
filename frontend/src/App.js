import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Hero from './components/Hero.js'
import GoalGrid from './components/GoalGrid.js'
import NewGoalForm from './components/newGoalForm.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  return (
    <Router>
      {/* <React.Fragment> */}
        {/* <CssBaseline /> */}
        {/* <Header/> */}
        <Header/>
        <Route path='/' exact>
          <Hero/>
          <GoalGrid/>
        </Route>
        <Route path='/newgoal' exact>
          <NewGoalForm/>
        </Route>
        <Footer/>
        {/* <NewGoalForm/> */}
      {/* </React.Fragment> */}
    </Router>
  );
}