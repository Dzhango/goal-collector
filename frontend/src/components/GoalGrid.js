import {Container, Grid, makeStyles} from '@material-ui/core';
import GoalCard from './GoalCard.js'
import { useState, useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}))


export default function GoalGrid(props){
    const classes = useStyles();

    // console.log(props.goals)
    const cards = props.goals;
    // const cards = [1, 2, 3]

    // console.log(props.goals);
    return(
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <GoalCard setGoal={props.setGoal} card={card} goals={props.goals}/>
              </Grid>
            ))}
          </Grid>
        </Container>
    )
}