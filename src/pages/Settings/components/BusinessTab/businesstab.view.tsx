import React from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { BusinessDetail } from "../../settings.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pad: {
      padding: "15px 0px",
    },
    flexend: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      position: "relative",
      right: "20px",
    },
    text: {
      width: "100%",
      fontSize: "calc(10px + (17 - 10) * ((100vw - 300px) / (1600 - 300)))",
      maxWidth: "300px",
    },
    paper: {
      borderRadius: theme.spacing(2),
    },
  })
);

interface BusinessTabViewProps {
  businessDetail: BusinessDetail;
  color: any;
  handleUserDetailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCompanyDetailChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleCompanyBranchDetailChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  editor: Boolean;
  setEditor: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
  cancelChange: () => void;
  validate: any;
}

const BusinessTabView = ({
  businessDetail,
  color,
  handleUserDetailChange,
  handleCompanyDetailChange,
  handleCompanyBranchDetailChange,
  editor,
  setEditor,
  handleSubmit,
  cancelChange,
  validate,
}: BusinessTabViewProps) => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10}>
        <Paper style={{ padding: "1em" }} className={classes.paper}>
          <Grid container>
            <Grid item container xs={12} justify="center">
              <Grid item>
                <Typography
                  color="primary"
                  variant="h6"
                  style={{ borderBottom: "2px solid black", padding: "5px" }}
                >
                  BUSINESS
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              className={classes.pad}
            >
              <Grid item xl={3} sm={4} xs={6}>
                <Typography variant="subtitle1">Account Status</Typography>
              </Grid>

              <Grid item sm={8} xs={6}>
                <Typography variant="subtitle1" style={{ color }}>
                  {businessDetail.user_details.is_active
                    ? "Active"
                    : "Inactive"}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              className={classes.pad}
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
                  label="Enter your Name"
                  value={businessDetail.user_details.name}
                  onChange={handleUserDetailChange}
                  disabled={!editor ? true : false}
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
              <Hidden only="xs">
                <Grid item xl={3} sm={4}>
                  <Typography variant="subtitle1">Father's Name</Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <TextField
                  className={classes.text}
                  id="father_name"
                  name="father_name"
                  label="Enter Father's Name"
                  value={businessDetail.user_details.father_name}
                  onChange={handleUserDetailChange}
                  disabled={!editor ? true : false}
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
              <Hidden only="xs">
                <Grid item xl={3} sm={4}>
                  <Typography variant="subtitle1">
                    Registered Mobile Number
                  </Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <TextField
                  className={classes.text}
                  id="mobile_no"
                  name="mobile_no"
                  label="Mobile Number will be the User Id for Login Criteria"
                  value={businessDetail.user_details.mobile_no}
                  onChange={handleUserDetailChange}
                  disabled={!editor ? true : false}
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
              alignItems="center"
              className={classes.pad}
            >
              <Hidden only="xs">
                <Grid item xl={3} sm={4}>
                  <Typography variant="subtitle1">Address</Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <Grid item xs={12} className={classes.pad}>
                  <TextField
                    className={classes.text}
                    id="address_line_1"
                    name="address_line_1"
                    label="Door #, Street, Layout"
                    value={businessDetail.user_details.address_line_1}
                    onChange={handleUserDetailChange}
                    disabled={!editor ? true : false}
                  />
                </Grid>
                <Grid item xs={12} className={classes.pad}>
                  <TextField
                    className={classes.text}
                    id="address_line_2"
                    name="address_line_2"
                    label="Area/Locality"
                    value={businessDetail.user_details.address_line_2}
                    onChange={handleUserDetailChange}
                    disabled={!editor ? true : false}
                  />
                </Grid>
                <Grid item xs={12} className={classes.pad}>
                  <TextField
                    className={classes.text}
                    id="city"
                    name="city"
                    label="City"
                    value={businessDetail.user_details.city}
                    onChange={handleUserDetailChange}
                    disabled={!editor ? true : false}
                  />
                </Grid>
                <Grid item xs={12} className={classes.pad}>
                  <TextField
                    className={classes.text}
                    id="state"
                    name="state"
                    label="State"
                    value={businessDetail.user_details.state}
                    onChange={handleUserDetailChange}
                    disabled={!editor ? true : false}
                  />
                </Grid>
                <Grid item xs={12} className={classes.pad}>
                  <TextField
                    className={classes.text}
                    id="pincode"
                    name="pincode"
                    type="number"
                    label="Pin Code"
                    value={businessDetail.user_details.pincode}
                    onChange={handleUserDetailChange}
                    disabled={!editor ? true : false}
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
                <Hidden only="xs">
                  <Grid item xl={3} sm={4}>
                    <Typography variant="subtitle1">Email Id</Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={8}>
                  <TextField
                    className={classes.text}
                    id="email"
                    name="email"
                    label="Email Id"
                    value={businessDetail.user_details.email}
                    onChange={handleUserDetailChange}
                    disabled={!editor ? true : false}
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
                <Hidden only="xs">
                  <Grid item xl={3} sm={4}>
                    <Typography variant="subtitle1">Aadhar Number</Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={8}>
                  <TextField
                    className={classes.text}
                    id="aadhar_no"
                    name="aadhar_no"
                    label="Aadhar Number"
                    value={businessDetail.user_details.aadhar_no}
                    onChange={handleUserDetailChange}
                    disabled={!editor ? true : false}
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
                <Hidden only="xs">
                  <Grid item xl={3} sm={4}>
                    <Typography variant="subtitle1">Pan Number</Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={8}>
                  <TextField
                    className={classes.text}
                    id="pan_no"
                    name="pan_no"
                    label="Pan Number"
                    value={businessDetail.user_details.pan_no}
                    onChange={handleUserDetailChange}
                    disabled={!editor ? true : false}
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
                <Hidden only="xs">
                  <Grid item xl={3} sm={4}>
                    <Typography variant="subtitle1">Company Number</Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={8}>
                  <TextField
                    className={classes.text}
                    label="Company Number"
                    id="company_number"
                    name="company_number"
                    disabled={!editor ? true : false}
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
                <Hidden only="xs">
                  <Grid item xl={3} sm={4}>
                    <Typography variant="subtitle1">Company Type</Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={8}>
                  <TextField
                    className={classes.text}
                    label="Company Type"
                    id="company_type"
                    name="company_type"
                    value={businessDetail.company.company_type}
                    onChange={handleCompanyDetailChange}
                    disabled={!editor ? true : false}
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
                <Hidden only="xs">
                  <Grid item xl={3} sm={4}>
                    <Typography variant="subtitle1">Contact Number</Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={8}>
                  <TextField
                    className={classes.text}
                    label="Contact Number"
                    id="mobile_no1"
                    name="mobile_no1"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                    value={businessDetail.company_branch_details.mobile_no1}
                    onChange={handleCompanyBranchDetailChange}
                    disabled={!editor ? true : false}
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
                <Hidden only="xs">
                  <Grid item xl={3} sm={4}>
                    <Typography variant="subtitle1">
                      Alernative Contact Number
                    </Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={8}>
                  <TextField
                    className={classes.text}
                    label="Alernative Contact Number"
                    id="mobile_no2"
                    name="mobile_no2"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                    value={businessDetail.company_branch_details.mobile_no2}
                    onChange={handleCompanyBranchDetailChange}
                    disabled={!editor ? true : false}
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
                <Hidden only="xs">
                  <Grid item xl={3} sm={4}>
                    <Typography variant="subtitle1">Company PAN</Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={8}>
                  <TextField
                    className={classes.text}
                    label="Company PAN"
                    id="company_pan_no"
                    name="company_pan_no"
                    value={businessDetail.company.company_pan_no}
                    onChange={handleCompanyDetailChange}
                    disabled={!editor ? true : false}
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
                <Hidden only="xs">
                  <Grid item xl={3} sm={4}>
                    <Typography variant="subtitle1">GST Number</Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={8}>
                  <TextField
                    className={classes.text}
                    label="GST Number"
                    id="gst_no"
                    name="gst_no"
                    type="number"
                    value={businessDetail.company_branch_details.gst_no}
                    onChange={handleCompanyBranchDetailChange}
                    disabled={!editor ? true : false}
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
                <Hidden only="xs">
                  <Grid item xl={3} sm={4}>
                    <Typography variant="subtitle1">CIN Number</Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={8}>
                  <TextField
                    className={classes.text}
                    id="cin_no"
                    name="cin_no"
                    type="number"
                    label="CIN Number"
                    value={businessDetail.company.cin_no}
                    onChange={handleCompanyDetailChange}
                    disabled={!editor ? true : false}
                  />
                </Grid>
              </Grid>
              <p>{validate.name()}</p>
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
                  // disabled={
                  //   !businessDetail.user_details.name ||
                  //   !businessDetail.user_details.father_name ||
                  //   !businessDetail.user_details.mobile_no ||
                  //   !businessDetail.user_details.address_line_1 ||
                  //   !businessDetail.user_details.address_line_2 ||
                  //   !businessDetail.user_details.city ||
                  //   !businessDetail.user_details.state ||
                  //   !businessDetail.user_details.pincode ||
                  //   !businessDetail.user_details.email ||
                  //   !businessDetail.user_details.aadhar_no ||
                  //   !businessDetail.user_details.pan_no ||
                  //   !businessDetail.company_branch_details.gst_no ||
                  //   !businessDetail.company.cin_no
                  // }
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
                  <Grid
                    item
                    container
                    xs={12}
                    alignItems="center"
                    justify="center"
                  >
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
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BusinessTabView;
