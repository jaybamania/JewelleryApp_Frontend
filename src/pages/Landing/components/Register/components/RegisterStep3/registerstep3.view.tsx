import React from "react";

import { Button, Typography, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import PasswordFields from "../../../../../../components/PasswordFields";
import { Passwords } from "../../../../landing.models";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    inputField: {
      width: "100%",
    },
  })
);

interface RegisterStep3ViewProps {
  handlePreviousStep: () => void;
  validatePassword: () => void;
  validatePassword1: () => string | undefined;
  validatePassword2: () => string | undefined;
  setPasswords: React.Dispatch<React.SetStateAction<Passwords>>;
  passwords: Passwords;
}

const RegisterStep3View: React.FC<RegisterStep3ViewProps> = ({
  validatePassword,
  validatePassword1,
  validatePassword2,
  setPasswords,
  passwords,
  handlePreviousStep,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.heading}>
          Enter Password
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form autoComplete="off">
          <Grid
            container
            spacing={2}
            justify="center"
            style={{ minHeight: "35vh" }}
          >
            <PasswordFields passwords={passwords} setPasswords={setPasswords} />
            <Grid
              container
              item
              xs={12}
              justify="space-around"
              spacing={2}
              style={{ marginTop: "1rem" }}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePreviousStep}
                  className={classes.inputField}
                >
                  Back
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={validatePassword}
                  className={classes.inputField}
                  disabled={
                    (validatePassword1() || validatePassword2()) === undefined
                      ? false
                      : true
                  }
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default RegisterStep3View;
