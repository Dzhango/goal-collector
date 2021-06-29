import {Container, Grid, makeStyles} from '@material-ui/core';
import GoalCard from './GoalCard.js'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}))


export default function GoalGrid(props){
    const classes = useStyles();

    const cards = [1, 2, 3];
    
    return(
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <GoalCard/>
              </Grid>
            ))}
          </Grid>
        </Container>
    )
}