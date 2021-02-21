import React from "react";

import { Typography, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import ForgotPasswordStep1 from "./components/ForgotPasswordStep1";
import ForgotPasswordStep2 from "./components/ForgotPasswordStep2";
import ForgotPasswordStep3 from "./components/ForgotPasswordStep3";
import { ForgotPasswordDetail } from "../../landing.models";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
  })
);

interface ForgotPasswordViewProps {
  forgotPasswordDetail: ForgotPasswordDetail;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendForgotPasswordOTP: () => void;
  handleResetPassword: (password: string) => void;
  loginStep: number;
  setLoginStep: React.Dispatch<React.SetStateAction<number>>;
}

const ForgotPasswordView: React.FC<ForgotPasswordViewProps> = ({
  forgotPasswordDetail,
  handleChange,
  handleSendForgotPasswordOTP,
  handleResetPassword,
  loginStep,
  setLoginStep,
}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          variant={loginStep === 0 ? "h4" : "h5"}
          className={classes.heading}
        >
          {loginStep === 0 && "Forgot Password?"}
          {loginStep === 1 &&
            `OTP sent to +91 ${forgotPasswordDetail.mobile_no}`}
          {loginStep === 2 && "Create New Password"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {loginStep === 0 && (
          <ForgotPasswordStep1
            mobile_no={forgotPasswordDetail.mobile_no}
            handleChange={handleChange}
            handleSendForgotPasswordOTP={handleSendForgotPasswordOTP}
          />
        )}
        {loginStep === 1 && (
          <ForgotPasswordStep2
            setLoginStep={setLoginStep}
            handleChange={handleChange}
          />
        )}
        {loginStep === 2 && (
          <ForgotPasswordStep3 handleResetPassword={handleResetPassword} />
        )}
      </Grid>
    </Grid>
  );
};

export default ForgotPasswordView;
