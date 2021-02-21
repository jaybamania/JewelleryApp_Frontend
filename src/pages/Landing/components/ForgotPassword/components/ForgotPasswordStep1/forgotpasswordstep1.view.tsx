import React from "react";

import { Button, TextField, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputField: {
      width: "100%",
    },
  })
);

interface ForgotPasswordStep1ViewProps {
  mobile_no: string;
  validateMobileNo: () => string | undefined;
  errorMobileNo: boolean;
  seterrorMobileNo: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendForgotPasswordOTP: () => void;
}

const ForgotPasswordStep1View: React.FC<ForgotPasswordStep1ViewProps> = ({
  mobile_no,
  validateMobileNo,
  errorMobileNo,
  seterrorMobileNo,
  handleChange,
  handleSendForgotPasswordOTP,
}) => {
  const classes = useStyles();
  return (
    <form autoComplete="off">
      <Grid
        container
        spacing={2}
        justify="center"
        style={{ minHeight: "35vh" }}
      >
        <Grid item xs={10} sm={8} md={7}>
          <TextField
            error={errorMobileNo}
            id="moe_number"
            name="mobile_no"
            type="number"
            value={mobile_no}
            onChange={handleChange}
            label="Mobile Number"
            variant="outlined"
            size="small"
            className={classes.inputField}
            // onFocus={() => {
            //   validateMobileNo() === undefined
            //     ? seterrorMobileNo(false)
            //     : seterrorMobileNo(true);
            // }}
            onBlur={() => {
              validateMobileNo() === undefined
                ? seterrorMobileNo(false)
                : seterrorMobileNo(true);
            }}
            helperText={validateMobileNo()}
          />
        </Grid>
        <Grid item xs={12} container justify="center">
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              className={classes.inputField}
              onClick={handleSendForgotPasswordOTP}
              disabled={validateMobileNo() === undefined ? false : true}
            >
              Send OTP
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default ForgotPasswordStep1View;
