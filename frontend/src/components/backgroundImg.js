import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

export const BackgroundImg = () => {
    const imgSource = "https://images.unsplash.com/photo-1585776245865-b92df54c6b25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"; 

    const useStyles = makeStyles(theme => ({
        background: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imgSource}')`,
            height: "500px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "4rem",
            fontFamily: "Helvetica Neue",
            [theme.breakpoints.down("sm")]: {
                height: 300,
                fontSize: "3em"
              }
            }
    })); 
    const classes = useStyles();

    return (
        <Box className={classes.background}>
            <Box>Goal Collection</Box>
        </Box>
    )
}