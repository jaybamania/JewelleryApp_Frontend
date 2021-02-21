import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Link,
  Button,
  Dialog,
  Box,
  DialogContent,
  DialogTitle,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Hidden from '@material-ui/core/Hidden';
import { PersonalDetail } from "../../settings.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pad: {
      padding: "15px 0px",
    },
    text: {
      width: "100%",
      fontSize: "calc(10px + (17 - 10) * ((100vw - 300px) / (1600 - 300)))",
      maxWidth: "300px",
    },
    paper: {
      borderRadius: theme.spacing(2),
      padding: "7% 5%",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      justifyContent: "center",
    },
  })
);
interface PersonalTabViewProps {
  editor: boolean;
  setEditor: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  showPass1: boolean;
  showPass2: boolean;
  showPass3: boolean;
  oldPass: String;
  setOldPass: React.Dispatch<React.SetStateAction<string>>;
  newPass: String;
  setNewPass: React.Dispatch<React.SetStateAction<string>>;
  confirmNewPass: String;
  setConfirmNewPass: React.Dispatch<React.SetStateAction<string>>;
  personalDetail: PersonalDetail;
  handleClickOpen: () => void;
  handleClose: () => void;
  handleClickShowPassword1: () => void;
  handleClickShowPassword2: () => void;
  handleClickShowPassword3: () => void;
  handleMouseDownPassword: (event: any) => void;
  handleChangePass: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  cancelChange: () => void;
}
const PersonalTabView: React.FC<PersonalTabViewProps> = ({
  editor,
  setEditor,
  open,
  showPass1,
  showPass2,
  showPass3,
  oldPass,
  setOldPass,
  newPass,
  setNewPass,
  confirmNewPass,
  setConfirmNewPass,
  personalDetail,
  handleClickOpen,
  handleClose,
  handleClickShowPassword1,
  handleClickShowPassword2,
  handleClickShowPassword3,
  handleMouseDownPassword,
  handleChangePass,
  handleChange,
  handleSubmit,
  cancelChange,
}) => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item container xs={12} justify="center">
              <Grid item>
                <Typography
                  color="primary"
                  variant="h6"
                  style={{ borderBottom: "2px solid black", padding: "5px" }}
                >
                  PERSONAL PROFILE
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              className={classes.pad}
              xl={6}
            >
              <Hidden only="xs">
                <Grid item xl={3} sm={4}>
                  <Typography variant="subtitle1">Name</Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <TextField
                  className={classes.text}
                  id="name"
                  name="name"
                  label="Name"
                  value={personalDetail.name}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              className={classes.pad}
              xl={6}
            >
              <Hidden only="xs">
                <Grid item xl={3} sm={4}>
                  <Typography variant="subtitle1"> Mobile Number</Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <TextField
                  className={classes.text}
                  id="mobile_no"
                  name="mobile_no"
                  label="Mobile Number"
                  value={personalDetail.mobile_no}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              className={classes.pad}
              xl={6}
            >
              <Hidden only="xs">
                <Grid item xl={3} sm={4}>
                  <Typography variant="subtitle1">City</Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <TextField
                  className={classes.text}
                  id="city"
                  name="city"
                  label="Enter City"
                  value={personalDetail.city}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              className={classes.pad}
              xl={6}
            >
              <Hidden only="xs">
                <Grid item xl={3} sm={4}>
                  <Typography variant="subtitle1">State</Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <TextField
                  className={classes.text}
                  id="state"
                  name="state"
                  label="Enter State"
                  value={personalDetail.state}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              className={classes.pad}
              xl={6}
            >
              <Hidden only="xs">
                <Grid item xl={3} sm={4}>
                  <Typography variant="subtitle1"> Country</Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <TextField
                  className={classes.text}
                  id="country"
                  placeholder="India"
                  value={personalDetail.country}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              className={classes.pad}
            >
              <Grid item>
                <Link
                  component="button"
                  variant="body2"
                  onClick={handleClickOpen}
                >
                  <Typography variant="body1">
                    Change current password
                  </Typography>
                </Link>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Change Password
                  </DialogTitle>
                  <DialogContent>
                    <form
                      autoComplete="off"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Box mx={4} my={2}>
                        <FormControl variant="outlined" size="small">
                          <InputLabel htmlFor="password1">
                            Old Password
                          </InputLabel>
                          <OutlinedInput
                            id="password1"
                            name="password1"
                            value={oldPass}
                            onChange={(e) => setOldPass(e.target.value)}
                            type={showPass1 ? "text" : "password"}
                            labelWidth={100}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleClickShowPassword1}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPass1 ? (
                                    <Visibility />
                                  ) : (
                                      <VisibilityOff />
                                    )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Box>
                      <Box mx={4} my={2}>
                        <FormControl variant="outlined" size="small">
                          <InputLabel htmlFor="password2">
                            New Password
                          </InputLabel>
                          <OutlinedInput
                            id="password2"
                            name="password2"
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                            type={showPass2 ? "text" : "password"}
                            labelWidth={110}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleClickShowPassword2}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPass2 ? (
                                    <Visibility />
                                  ) : (
                                      <VisibilityOff />
                                    )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Box>
                      <Box mx={4} my={2}>
                        <FormControl variant="outlined" size="small">
                          <InputLabel htmlFor="password2">
                            Confirm New Password
                          </InputLabel>
                          <OutlinedInput
                            id="password3"
                            name="password3"
                            value={confirmNewPass}
                            onChange={(e) => setConfirmNewPass(e.target.value)}
                            type={showPass3 ? "text" : "password"}
                            labelWidth={170}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleClickShowPassword3}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPass3 ? (
                                    <Visibility />
                                  ) : (
                                      <VisibilityOff />
                                    )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Box>
                    </form>
                    <Box mx={4} my={2}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={handleChangePass}
                          style={{ width: "15ch" }}
                        >
                          CHANGE
                        </Button>
                      </div>
                    </Box>
                  </DialogContent>
                </Dialog>
              </Grid>
            </Grid>
            {editor ? (
              <Grid
                item
                container
                xs={12}
                alignItems="center"
                justify="space-evenly"
              >
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={cancelChange}
                >
                  Cancel
                </Button>
              </Grid>
            ) : (
                <Grid item container xs={12} alignItems="center" justify="center">
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => setEditor(true)}
                    >
                      Edit
                  </Button>
                  </Grid>
                </Grid>
              )}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default PersonalTabView;
