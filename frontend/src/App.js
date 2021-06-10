import './App.css';
import { SubmitForm } from "./components/submitForm.js";
import {BackgroundImg} from "./components/backgroundImg.js"
import {AppBar, Typography, makeStyles, Button, Link, Container, Box, Grid, Avatar, Ca} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Album from "./components/Album.js"

function App() {
    const useStyles = makeStyles(theme => ({
      backgroundApp: {
        backgroundColor: "white"
      },
      toolBar: {
        display: "flex",
        justifyContent: "center"
      },
      menuItem: {
        marginRight: "5%"
      },
      containerGallery: {
        margin: theme.spacing(2)
      },
      galleryHeader: {
        fontWeight: 800
      }
    })); 
    const classes = useStyles();
    
    function handleClick(e){

    }
    return (
      <div className="App">
          <Album/>
      </div>
  );
}

export default App;
