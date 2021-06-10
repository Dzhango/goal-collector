import './App.css';
import { SubmitForm } from "./components/submitForm.js";
import {BackgroundImg} from "./components/backgroundImg.js"
import {AppBar, Typography, makeStyles, Button, Link} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';


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
      }
    })); 
    const classes = useStyles();
    
    function handleClick(e){

    }
    return (
      <div className="App">
         {/* <SubmitForm
              formName="Look-up a STONK"
              // formDescription="This is sample form using Material UI."
          /> */}
          <AppBar className={classes.backgroundApp} position="static">
            <Toolbar className={classes.toolBar}>
              <Typography variant="h6" color="primary" className={classes.menuItem}>
                <Link color="inherit" href="/" onClick={handleClick}>
                  Home
                </Link>
              </Typography>
              <Typography variant="h6" color="primary" className={classes.menuItem}>
                <Link color="inherit" href="/" onClick={handleClick}>
                  About
                </Link>
              </Typography>
              <Typography variant="h6" color="primary">
                <Link color="inherit" href="/" onClick={handleClick}>
                  Login
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
          <BackgroundImg/>
      </div>
  );
}

export default App;
