import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
  Grid,
  Paper,
  Typography,
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

} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import { UpdateAdminDetail } from "../../services/models";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pad: {
      padding: "10px 0px",
    },
    text: {
      width: "100%",
      fontSize: "calc(10px + (17 - 10) * ((100vw - 300px) / (1600 - 300)))",
    },
    paper: {
      margin: "0.5em",
      borderRadius: theme.spacing(2),
      padding: "7% 5%",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      justifyContent: "center",
    },
  })
);

interface AdminViewProps {
  validateMobileNo: () => string;
  validateEmail: () => string;
  validatePin: () => string;
  showPass: boolean;
  editor: boolean;
  open: boolean;
  oldPass: String;
  setEditor: React.Dispatch<React.SetStateAction<boolean>>;
  adminDetail: UpdateAdminDetail;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleClickOpen: () => void;
  handleClose: () => void;
  handleMouseDownPassword: (event: any) => void;
  handleClickShowPassword1: () => void;
  handleChangePass: () => void;
  setOldPass: React.Dispatch<React.SetStateAction<string>>;
}

const UpdateAdminView: React.FC<AdminViewProps> = ({
  validateMobileNo,
  validateEmail,
  validatePin,
  showPass,
  editor,
  open,
  setEditor,
  adminDetail,
  handleClickOpen,
  handleClose,
  handleChange,
  handleChangePass,
  handleSubmit,
  handleMouseDownPassword,
  handleClickShowPassword1,
  oldPass,
  setOldPass,
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Grid container justify="center">
        <Grid
          item
          xs={12}
          md={10}
          alignItems="center"
        >
          <Box my={1} mx={1}>
            <Paper style={{ borderRadius: "15px", marginTop: "1rem" }} >
              <Box py={1}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"

                >
                  <Grid item >
                    <Button
                      size="large"
                      onClick={() => history.push("/userlist")}
                    >
                      <KeyboardBackspaceIcon />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">Edit Admin</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={10} >
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item container xs={12} justify="flex-start">
                <Formik
                  initialValues={{
                    name: "",
                    mobile_no: "",
                    email: "",
                    password: "",
                  }}
                  onSubmit={() => { }}
                >
                  <Form autoComplete="off" style={{ margin: "auto" }}>



                    <Grid item xs={8} sm={8} style={{ marginBottom: "2em" }}>
                      <Typography
                        className={classes.text}
                      >
                        {adminDetail.name}
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.pad}
                      style={{ marginBottom: "2em" }}
                    >
                      <Hidden only="xs">
                        <Grid item xl={3} sm={4}>
                          <Typography variant="subtitle1" className={classes.text} >Phone Number</Typography>
                        </Grid>
                      </Hidden>
                      <Grid item xs={12} sm={8}>
                        <Field
                          component={TextField}
                          id="mobile_no"
                          name="mobile_no"
                          label="Mobile Number"
                          value={adminDetail.mobile_no}
                          onChange={handleChange}
                          validate={validateMobileNo}
                          className={classes.text}
                          disabled={false}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">+91</InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.pad}
                      style={{ marginBottom: "2em" }}
                    >
                      <Hidden only="xs">
                        <Grid item xl={3} sm={4}>
                          <Typography variant="subtitle1" className={classes.text} >Email Id</Typography>
                        </Grid>
                      </Hidden>
                      <Grid item xs={12} sm={8}>
                        <Field
                          component={TextField}
                          id="email"
                          name="email"
                          label="Email ID."
                          value={adminDetail.email}
                          onChange={handleChange}
                          validate={validateEmail}
                          className={classes.text}
                          disabled={false}
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
                          disabled={editor ? false : true}
                        >
                          <Typography variant="body1">
                            Change current Pin
                          </Typography>
                        </Link>

                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="form-dialog-title"
                        >
                          <DialogTitle id="form-dialog-title">
                            Change Pin
                          </DialogTitle>
                          <DialogContent>
                            <form
                              autoComplete="off"
                              style={{ display: "flex", flexDirection: "column" }}
                            >
                              <Box mx={4} my={2}>
                                <FormControl variant="outlined" size="small">
                                  <InputLabel htmlFor="password">
                                    Pin
                              </InputLabel>
                                  <OutlinedInput
                                    id="password"
                                    name="password"
                                    value={adminDetail.password}
                                    onChange={(e) => setOldPass(e.target.value)}
                                    type={showPass ? "text" : "password"}
                                    labelWidth={100}

                                    endAdornment={
                                      <InputAdornment position="end">
                                        <IconButton
                                          onClick={handleClickShowPassword1}
                                          onMouseDown={handleMouseDownPassword}
                                          edge="end"
                                        >
                                          {showPass ? (
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
                  </Form>
                </Formik>
              </Grid>
            </Grid>
            <Grid item container xs={12} alignItems="center" justify="center" style={{ marginTop: "3em" }}>
              {editor ? (
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    disabled={
                      (validateMobileNo() ||
                        validateEmail()) !== ""
                        ? true
                        : false
                    }
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </Grid>
              ) : (
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => setEditor(true)}
                    >
                      Edit
                  </Button>
                  </Grid>
                )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default UpdateAdminView;
