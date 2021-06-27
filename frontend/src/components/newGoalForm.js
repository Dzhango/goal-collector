import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function NewGoalForm() {
    return (
        <React.Fragment>
            
            <Typography variant="h6" gutterBottom>
                New Goal Form
            </Typography>
            <Grid container spacing={3}>
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
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </React.Fragment>
    );
}