import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2700&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  main: {
    // width: "30%",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    fontFamily: "Roboto",
    marginLeft: theme.spacing(8)
  },
  caption: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 20,
    fontStyle: "italic"
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="caption" component="h2" gutterBottom className={classes.caption}>
          {'I always had more goals than I could accomplshed in a lifetime.'}
          {'This is a passion project dedicated to all the unfulfilled or postponed goals you ever had.'}
        </Typography>
        <Typography variant="body1">Dzhangir Bayandarov</Typography>
      </Container>
    </div>
  );
}