import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, Container, Button} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: "center",
        margin: "auto",
        width: "50%",
        marginTop: 20,
    },
    grid: {
        marginBottom: 10
    }

}))

export default function NewGoalForm() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container className={classes.title}>
                <Typography variant="h4" gutterBottom>
                    New Goal Form
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid className={classes.grid} container spacing={3}>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="goalTitle"
                                label="Goal Title"
                                fullWidth
                            // autoComplete="given-name
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="specific"
                                label="Give a specific description"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                id="progress"
                                label="How will you measure progress?"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="attainable"
                                label="Is the goal attainable? Why?"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="relevance"
                                label="How does it align with your values?"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="date"
                                label="Deadline"
                                type="date"
                                defaultValue="2017-05-24"
                                // className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit"
                            variant="contained"
                            color="secondary"
                            margin="dense">Submit</Button>
                </form>
            </Container>
        </React.Fragment>
    );
}