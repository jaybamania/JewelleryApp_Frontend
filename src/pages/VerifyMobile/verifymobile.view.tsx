import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core";

import OtpPin from "../../components/OtpPin";
import { HandleOtpEvent } from "./verifymobile.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "50vh",
    },
  })
);

interface VerifyMobileViewProps {
  handleOtp: (event: HandleOtpEvent) => void;
  message: string;
}

const VerifyMobileView: React.FC<VerifyMobileViewProps> = ({
  handleOtp,
  message,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h2>Verify Mobile Component</h2>
        <h6>Enter OTP below</h6>
        <OtpPin handleChange={handleOtp} />
        <h6>{message}</h6>
      </div>
    </div>
  );
};

export default VerifyMobileView;
