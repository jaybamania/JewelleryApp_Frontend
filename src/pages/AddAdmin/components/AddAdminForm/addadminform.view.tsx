import React from "react";
import {
  Grid,
  Typography,
  InputAdornment,
  Button,
  Paper,
} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';
import { AdminDetail, StateList, AdminPreviewDetail } from "../../addadmin.model";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import Dropdown from "../../../../components/Dropdown";

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
interface AddAdminFormViewProps {
  mode: boolean;
  editor: boolean;
  validateName: () => string;
  validateMobileNo: () => string;
  validatePin: () => string;
  validateEmail: () => string;
  // validateState: () => string | undefined;
  // validateCity: () => string | undefined;
  setEditor: React.Dispatch<React.SetStateAction<boolean>>;
  adminDetail: AdminDetail;
  editAdmin: AdminPreviewDetail;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  cityData: string[];
  stateList: StateList[];
}
const AddAdminFormView: React.FC<AddAdminFormViewProps> = ({
  mode,
  editor,
  validateName,
  validateMobileNo,
  validateEmail,
  validatePin,
  // validateState,
  // validateCity,
  setEditor,
  adminDetail,
  editAdmin,
  handleChange,
  handleSubmit,
  cityData,
  stateList,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        item
        xs={12}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} md={10} style={{ margin: "auto" }} >
          <Paper className={classes.paper} >
            <Grid container>

              <Formik
                initialValues={{
                  name: "",
                  mobile_no: "",
                  cityData,
                  stateList,
                  city: "",
                }}
                onSubmit={() => { }}

              >

                <Form autoComplete="off"
                  style={{ margin: "auto" }} >
                  <Grid
                    item
                    container
                    className={classes.pad}
                    xs={12}
                    alignItems="center"
                  >
                    <Hidden only="xs">
                      <Grid item xl={3} sm={4}>
                        <Typography variant="subtitle1" className={classes.text}>Name</Typography>
                      </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={8}>
                      <Field
                        className={classes.text}
                        component={TextField}
                        value={mode ? editAdmin.name : adminDetail.name}
                        name="name"
                        onChange={handleChange}
                        id="full_name"
                        label="Full Name"
                        validate={validateName}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    container
                    className={classes.pad}
                    xs={12}
                    alignItems="center"
                  >
                    <Hidden only="xs">
                      <Grid item xl={3} sm={4}>
                        <Typography variant="subtitle1" className={classes.text}>Phone Number</Typography>
                      </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={8} >
                      <Field
                        component={TextField}
                        className={classes.text}
                        id="mobile_no"
                        name="mobile_no"
                        type="number"
                        value={mode ? editAdmin.mobile_no : adminDetail.mobile_no}
                        onChange={handleChange}
                        label="Mobile Number"
                        validate={validateMobileNo}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {adminDetail.country_code}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>


                  <Grid
                    item
                    container
                    className={classes.pad}
                    xs={12}
                    alignItems="center"
                  >
                    <Hidden only="xs">
                      <Grid item xl={3} sm={4}>
                        <Typography variant="subtitle1" className={classes.text}>Email Id</Typography>
                      </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={8} >
                      <Field
                        component={TextField}
                        className={classes.text}
                        value={mode ? editAdmin.email : adminDetail.email}
                        onChange={handleChange}
                        id="email"
                        name="email"
                        label="Email ID"
                        validate={validateEmail}
                      />
                    </Grid>
                  </Grid>
                  {mode ? "" : (
                    <Grid
                      item
                      container
                      className={classes.pad}
                      xs={12}
                      alignItems="center"
                    >
                      <Hidden only="xs">
                        <Grid item xl={3} sm={4}>
                          <Typography variant="subtitle1" className={classes.text}>PIN</Typography>
                        </Grid>
                      </Hidden>
                      <Grid item xs={12} sm={8}>
                        <Field
                          className={classes.text}
                          component={TextField}
                          validate={validatePin}
                          value={mode ? editAdmin.password : adminDetail.password}
                          onChange={handleChange}
                          id="password"
                          name="password"
                          label="PIN for Admin to Access"
                        />
                      </Grid>
                    </Grid>
                  )}

                  <Grid
                    item
                    container
                    className={classes.pad}
                    xs={12}
                    alignItems="center"
                  >
                    <Hidden only="xs">
                      <Grid item xl={3} sm={4}>
                        <Typography variant="subtitle1" className={classes.text}>State</Typography>
                      </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={8}>
                      <Dropdown
                        value={mode ? editAdmin.state! : adminDetail.state!}
                        id="state"
                        name="state"
                        handleChange={handleChange}
                        options={stateList.map(({ state_name }) => state_name)}

                        label="State"
                        style={{
                          minWidth: "100%",
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    container
                    className={classes.pad}
                    xs={12}
                    alignItems="center"
                  >
                    <Hidden only="xs">
                      <Grid item xl={3} sm={4}>
                        <Typography variant="subtitle1" className={classes.text}>City</Typography>
                      </Grid>
                    </Hidden>
                    {console.log(mode)}
                    <Grid item xs={12} sm={8}>
                      <Dropdown
                        value={mode ? editAdmin.city! : adminDetail.city!}
                        id="city"
                        name="city"
                        handleChange={handleChange}
                        options={mode && !editor ? [editAdmin.city] : cityData}
                        // options={cityData}
                        label="City"
                        style={{
                          minWidth: "100%",
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    container
                    className={classes.pad}
                    xs={12}
                    alignItems="center"
                  >
                    <Hidden only="xs">
                      <Grid item xl={3} sm={4}>
                        <Typography variant="subtitle1" className={classes.text}>Country</Typography>
                      </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={8}>
                      <Field
                        component={TextField}
                        className={classes.text}
                        id="country"
                        label="Country"
                        value={mode ? editAdmin.country : adminDetail.country}
                        InputProps={{ readOnly: true }}
                        name="country"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    className={classes.pad}
                    xs={12}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item>
                      {mode ?

                        editor ? (
                          <Grid item>
                            <Button
                              variant="outlined"
                              color="secondary"
                              disabled={
                                (validateName() ||
                                  validateMobileNo() ||
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
                          )
                        : <Button
                          variant="outlined"
                          color="primary"
                          onClick={handleSubmit}
                          disabled={
                            (validateName() ||
                              validateMobileNo() ||
                              validateEmail() ||
                              validatePin()) === ""
                              // && (validateCity()) === undefined
                              ? false
                              : true
                          }
                          style={{ padding: "4px 2rem" }}
                        > Add
                  </Button>}
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default AddAdminFormView;
