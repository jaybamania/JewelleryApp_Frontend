import React from "react";

import { Typography, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import LoginWithOtpStep1 from "./components/LoginWithOTPStep1";
import LoginWithOtpStep2 from "./components/LoginWithOTPStep2";
import { LoginWithOtpDetail } from "../../landing.models";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
  })
);

interface LoginWithOtpViewProps {
  loginStep: number;
  setLoginStep: React.Dispatch<React.SetStateAction<number>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendLoginOTP: () => void;
  loginWithOtpDetail: LoginWithOtpDetail;
}

const LoginWithOtpView: React.FC<LoginWithOtpViewProps> = ({
  loginStep,
  setLoginStep,
  handleChange,
  handleSendLoginOTP,
  loginWithOtpDetail,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant={loginStep === 0 ? "h4" : "h5"}
            className={classes.heading}
          >
            {loginStep === 0 && "Login via OTP"}
            {loginStep === 1 &&
              `OTP sent to +91 ${loginWithOtpDetail.mobile_no}`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {loginStep === 0 && (
            <LoginWithOtpStep1
              mobile_no={loginWithOtpDetail.mobile_no}
              handleChange={handleChange}
              handleSendLoginOTP={handleSendLoginOTP}
            />
          )}
          {loginStep === 1 && (
            <LoginWithOtpStep2
              setLoginStep={setLoginStep}
              handleChange={handleChange}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default LoginWithOtpView;
