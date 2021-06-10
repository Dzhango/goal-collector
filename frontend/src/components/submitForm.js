import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography, Breadcrumbs, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export function SubmitForm(props) {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    },
    center: {
        display: "flex",
        justifyContent: "center"
    }
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: ""
    }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };

    fetch("https://pointy-gauge.glitch.me/api/form", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const handleClick = evt => {
      
  }

  const classes = useStyles();

  console.log(props);

  return (
    <div>
      {/* <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            id="margin-normal"
            name="name"
            defaultValue={formInput.email}
            className={classes.textField}
            onChange={handleInput}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Search <Icon className={classes.rightIcon}>send</Icon>
          </Button>
        </form>
      </Paper> */}

        <Breadcrumbs className={classes.center} aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                Home
            </Link>
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                Goals
            </Link>
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                About
            </Link>
        </Breadcrumbs>
    </div>
  );
}
