import React from "react";

import {
  Grid,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";

import { CompanyDetail } from "../../settings.model";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
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
interface CompanyTabViewProps {
  companyDetail: CompanyDetail;
  color: any;
  editor: Boolean;
  setEditor: React.Dispatch<React.SetStateAction<boolean>>;
  handleCompanyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  cancelChange: () => void;
}
const CompanyTabView: React.FC<CompanyTabViewProps> = ({
  companyDetail,
  color,
  editor,
  setEditor,
  handleCompanyChange,
  handleSubmit,
  cancelChange,
}) => {
  const classes = useStyles();
  console.log(editor);
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
                  COMPANY PROFILE
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
                  <Typography variant="subtitle1">Company Name</Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <TextField
                  className={classes.text}
                  id="company"
                  name="company"
                  label="Company name"
                  onChange={handleCompanyChange}
                  value={companyDetail.company_details.company}
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
                  id="mobile_no1"
                  name="mobile_no1"
                  label="Contact Number"
                  onChange={handleCompanyChange}
                  value={companyDetail.company_details.mobile_no1}
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
                  <Typography variant="subtitle1">
                    Alternate Contact Number
                  </Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <TextField
                  className={classes.text}
                  id="mobile_no2"
                  name="mobile_no2"
                  label="Alternate Contact Number"
                  value={companyDetail.company_details.mobile_no2}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                  onChange={handleCompanyChange}
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
                  <Typography variant="subtitle1">Address</Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <Grid item xs={12} className={classes.pad}>
                  <TextField
                    className={classes.text}
                    id="branch_address_line_1"
                    name="branch_address_line_1"
                    value={companyDetail.company_details.branch_address_line_1}
                    onChange={handleCompanyChange}
                    label="Building No., Cross/Street Name"
                    disabled={!editor ? true : false}
                  />
                </Grid>
                <Grid item xs={12} className={classes.pad}>
                  <TextField
                    className={classes.text}
                    id="branch_address_line_2"
                    name="branch_address_line_2"
                    value={companyDetail.company_details.branch_address_line_2}
                    onChange={handleCompanyChange}
                    label="Locality, Area, Town"
                    disabled={!editor ? true : false}
                  />
                </Grid>
                <Grid item xs={12} className={classes.pad}>
                  <TextField
                    className={classes.text}
                    id="branch_city"
                    name="branch_city"
                    value={companyDetail.company_details.branch_city}
                    label="City"
                    disabled={!editor ? true : false}
                    onChange={handleCompanyChange}
                  />
                </Grid>
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
                  <Typography variant="subtitle1">State</Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <TextField
                  className={classes.text}
                  id="branch_state"
                  name="branch_state"
                  value={companyDetail.company_details.branch_state}
                  label="Enter State"
                  onChange={handleCompanyChange}
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
                  <Typography variant="subtitle1">Country</Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8}>
                <TextField
                  className={classes.text}
                  id="branch_country"
                  name="branch_country"
                  value={companyDetail.company_details.branch_country}
                  disabled={!editor ? true : false}
                  placeholder="India"
                />
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
                  disabled={
                    !companyDetail.company_details.company ||
                    !companyDetail.company_details.mobile_no1 ||
                    !companyDetail.company_details.mobile_no2 ||
                    !companyDetail.company_details.branch_address_line_1 ||
                    !companyDetail.company_details.branch_address_line_2 ||
                    !companyDetail.company_details.branch_city ||
                    !companyDetail.company_details.branch_state
                  }
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
        <Paper
          style={{ marginTop: "1em", padding: "1em" }}
          className={classes.paper}
        >
          <Grid container>
            <Grid item container xs={12} className={classes.pad}>
              <Grid item xs={6}>
                <Typography variant="subtitle1"> Account Type</Typography>
              </Grid>
              <Grid item xs={6} className={classes.flexend}>
                <Typography variant="subtitle1">
                  {companyDetail.user_details.is_seller ? "Trader" : "Buyer"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.pad}>
              <Grid item xs={6}>
                <Typography variant="subtitle1"> Account Status</Typography>
              </Grid>
              <Grid item xs={6} className={classes.flexend}>
                <Typography variant="subtitle1" style={{ color }}>
                  {companyDetail.user_details.is_active ? "Active" : "Inactive"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.pad}>
              <Grid item xs={6}>
                <Typography variant="subtitle1"> Listing Permission</Typography>
              </Grid>
              <Grid item xs={6} className={classes.flexend}>
                <Typography variant="subtitle1" style={{ color }}>
                  {companyDetail.company_details.is_permitted
                    ? "Active"
                    : "Expired"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.pad}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">
                  Listing Validity Expires on
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.flexend}>
                <Typography variant="subtitle1">
                  {companyDetail.company_details.permission_last_date.slice(
                    0,
                    10
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default CompanyTabView;
