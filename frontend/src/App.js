import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Hero from './components/Hero.js'
import GoalGrid from './components/GoalGrid.js'

export default function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Hero/>
      <GoalGrid/>
      <Footer/>
    </React.Fragment>
  );
}