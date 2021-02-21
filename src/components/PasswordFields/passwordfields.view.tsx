import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  InputLabel,
  FormControl,
  Grid,
} from "@material-ui/core";

import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Passwords } from "../../pages/Landing/landing.models";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputField: {
      width: "100%",
    },
  })
);

interface PasswordFieldsViewProps {
  handleClickShowPassword1: () => void;
  handleClickShowPassword2: () => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  passwords: Passwords;
  showPass1: boolean;
  showPass2: boolean;
}

const PasswordFieldsView: React.FC<PasswordFieldsViewProps> = ({
  handleClickShowPassword1,
  handleClickShowPassword2,
  handlePasswordChange,
  handleMouseDownPassword,
  passwords,
  showPass1,
  showPass2,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={9} sm={7} container>
      <Grid item xs={12}>
        <FormControl
          variant="outlined"
          size="small"
          className={classes.inputField}
        >
          <InputLabel htmlFor="password1">Password</InputLabel>
          <OutlinedInput
            id="password1"
            name="password1"
            type={showPass1 ? "text" : "password"}
            value={passwords.password1}
            onChange={handlePasswordChange}
            labelWidth={70}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPass1 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl
          variant="outlined"
          size="small"
          className={classes.inputField}
        >
          <InputLabel htmlFor="password2">Confirm Password</InputLabel>
          <OutlinedInput
            id="password2"
            name="password2"
            type={showPass2 ? "text" : "password"}
            value={passwords.password2}
            onChange={handlePasswordChange}
            labelWidth={140}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPass2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default PasswordFieldsView;
