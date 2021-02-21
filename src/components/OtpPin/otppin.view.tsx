import React from "react";

import { TextField } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "2rem",
    },
    pin: {
      "& > *": {
        margin: theme.spacing(1),
        width: "2ch",
        fontSize: "3ch",
      },
    },
  })
);

interface OtpPinViewProps {
  otpValues: string[];
  handleOtpChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownPin: (event: React.KeyboardEvent, pinNo: number) => void;
}

const OtpPinView: React.FC<OtpPinViewProps> = ({
  otpValues,
  handleOtpChange,
  onKeyDownPin,
}) => {
  const classes = useStyles();

  return (
    <form autoComplete="off" className={classes.form}>
      {otpValues.map((value: string, index: number) => (
        <TextField
          key={index}
          className={classes.pin}
          type="text"
          id={"pin" + (index + 1)}
          name={"pin" + (index + 1)}
          value={value}
          onChange={handleOtpChange}
          onKeyDown={(e) => (index > 0 ? onKeyDownPin(e, index + 1) : "")}
          size="small"
        />
      ))}
    </form>
  );
};

export default OtpPinView;
