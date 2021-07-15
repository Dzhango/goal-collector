import React from 'react';
import {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, Container, Button} from "@material-ui/core";
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: "center",
        margin: "auto",
        width: "50%",
        marginTop: 20,
    },
    grid: {
        marginBottom: 10
    },
    button: {
        marginLeft: 20
    }

}))


export default function NewGoalForm(props) {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);

    const params = {

    }
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "auth-token": props.token, 
    }
    function handleSubmit(event){
        axios.post('http://localhost:8000/signin', 
			params, { headers: headers 
			}).then(function (response) {
			
			setIsLoading(true);
			props.setToken(response.data);

			}).catch(function (error) {
				alert(error.response.data);
		});
    }

    return (
        <React.Fragment>
            <Container className={classes.title}>
                <Typography variant="h4" gutterBottom>
                    New Goal Form
                </Typography>
                <form className={classes.form} Validate onSubmit={handleSubmit}>
                    <Grid className={classes.grid} container spacing={2}>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="Title"
                                label="Goal Title"
                                fullWidth
                            // autoComplete="given-name
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="Desc"
                                label="Give a specific description"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="Measure"
                                label="How will you measure progress?"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="Attainable"
                                label="Is the goal attainable? Why?"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Values"
                                label="How does it align with your values?"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="Deadline"
                                label="Deadline"
                                required
                                fullwidth
                            />
                        </Grid>
                    </Grid>
                    <TextField
                                id="Img"
                                label="Image Link"
                                required
                                fullwidth
                            />
                    <Button className={classes.button}
                            type="submit"
                            variant="contained"
                            color="secondary"
                            margin="dense">Submit</Button>
                </form>
            </Container>
        </React.Fragment>
    );
}