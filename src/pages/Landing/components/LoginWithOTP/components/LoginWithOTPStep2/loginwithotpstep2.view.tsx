import React from "react";

import { Grid, Link } from "@material-ui/core";

import OtpPin from "../../../../../../components/OtpPin";

interface LoginWithOtpStep2ViewProps {
  setLoginStep: React.Dispatch<React.SetStateAction<number>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginWithOtpStep2View: React.FC<LoginWithOtpStep2ViewProps> = ({
  setLoginStep,
  handleChange,
}) => {
  return (
    <div>
      <Grid container justify="center" style={{ minHeight: "35vh" }}>
        <Grid item xs={12}>
          <OtpPin handleChange={handleChange} />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Link
            component="button"
            variant="body2"
            onClick={() => setLoginStep(0)}
          >
            Change Mobile Number
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginWithOtpStep2View;
