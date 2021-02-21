import React from "react";

import { Button, Grid } from "@material-ui/core";

import PasswordFields from "../../../../../../components/PasswordFields";
import { Passwords } from "../../../../landing.models";

interface ForgotPasswordStep3ViewProps {
  passwords: Passwords;
  setPasswords: React.Dispatch<React.SetStateAction<Passwords>>;
  validatePassword: () => void;
  validatePassword1: () => string | undefined;
  validatePassword2: () => string | undefined;
}

const ForgotPasswordStep3View: React.FC<ForgotPasswordStep3ViewProps> = ({
  passwords,
  setPasswords,
  validatePassword,
  validatePassword1,
  validatePassword2,
}) => {
  return (
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
          <Grid item xs={5}>
            <Button
              variant="contained"
              color="primary"
              onClick={validatePassword}
              disabled={
                (validatePassword1() || validatePassword2()) === undefined
                  ? false
                  : true
              }
            >
              Change Password
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default ForgotPasswordStep3View;
