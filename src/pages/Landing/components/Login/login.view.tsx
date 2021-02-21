import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Button,
  Typography,
  Link,
  FormControl,
  InputLabel,
  Grid,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { LoginDetail } from "../../landing.models";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        width: "25ch",
      },
    },
    heading: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    login: {
      height: "20rem",
    },
    inputField: {
      width: "100%",
    },
  })
);

interface LoginViewProps {
  loginDetail: LoginDetail;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  validateMobileNo: () => string | undefined;
  validatePassword: () => string | undefined;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  errorMobileNo: boolean;
  seterrorMobileNo: React.Dispatch<React.SetStateAction<boolean>>;
  showPass: boolean;
}

const LoginView: React.FC<LoginViewProps> = ({
  loginDetail,
  handleChange,
  handleSubmit,
  validateMobileNo,
  validatePassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  errorMobileNo,
  seterrorMobileNo,
  showPass,
}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.heading}>
          Login
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
            <Grid item xs={9} sm={8} md={7}>
              <TextField
                error={errorMobileNo}
                id="mobile_number"
                name="mobile_no"
                type="number"
                value={loginDetail.mobile_no}
                onChange={handleChange}
                label="Mobile Number"
                variant="outlined"
                onBlur={() => {
                  validateMobileNo() === undefined
                    ? seterrorMobileNo(false)
                    : seterrorMobileNo(true);
                }}
                size="small"
                helperText={validateMobileNo()}
                className={classes.inputField}
              />
            </Grid>
            <Grid item xs={9} sm={8} md={7}>
              <FormControl
                variant="outlined"
                size="small"
                className={classes.inputField}
              >
                <InputLabel htmlFor="password1">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  value={loginDetail.password}
                  onChange={handleChange}
                  labelWidth={70}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPass ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <div>
                  <Link
                    component={RouterLink}
                    to="/loginwithotp"
                    style={{ textAlign: "right", float: "right" }}
                  >
                    Login via OTP
                  </Link>
                </div>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justify="center"
              style={{ marginTop: ".5rem" }}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={
                    (validateMobileNo() || validatePassword()) === undefined
                      ? false
                      : true
                  }
                  className={classes.inputField}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Link component={RouterLink} to="/forgotpassword">
                Forgot Password
              </Link>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography>
                Haven't registed yet?{" "}
                <Link component={RouterLink} to="/register">
                  Register now
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginView;
