import React, { useGlobal } from "reactn";
import {
  Paper,
  Grid,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import QRCode from "qrcode.react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

import { ProfileDetail } from "../../settings.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexend: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      position: "relative",
      right: "20px",
    },
    pad: {
      padding: "10px",
    },
    paper: {
      borderRadius: theme.spacing(2),
    },
  })
);

interface HomeTabViewProps {
  profileDetail: ProfileDetail;
  color: any;
  handleSubmit: () => void;
}
const HomeTabView: React.FC<HomeTabViewProps> = ({
  profileDetail,
  color,
  handleSubmit,
}) => {
  const classes = useStyles();
  const globalUserDetail = useGlobal("userDetail")[0];
  const { is_seller } = globalUserDetail;
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10}>
        <Paper
          style={{ marginTop: "1em", padding: "1em" }}
          className={classes.paper}
        >
          <Grid container>
            <Grid item container xs={12} style={{ textAlign: "center" }}>
              <Grid item xs={12} className={classes.pad}>
                <Typography
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <VerifiedUserIcon style={{ color: "green" }} />
                  Verified Trader By Jweler
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <QRCode
                  style={{ width: "15em", height: "15em" }}
                  value="http://facebook.github.io/react/"
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        {/* User Detail Section */}
        <Paper
          style={{ marginTop: "1em", padding: "1em" }}
          className={classes.paper}
        >
          <Grid container>
            <Grid item xs={12}>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="subtitle1">
                    {profileDetail.user_details.name}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={6}>
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="subtitle1">
                      {profileDetail.user_details.mobile_no}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  className={classes.flexend}
                  variant="subtitle1"
                  style={{ color }}
                >
                  {profileDetail.user_details.is_verified
                    ? "Verified"
                    : "Not Verified"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="subtitle1">
                    {profileDetail.company_details.company}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="subtitle1">
                    {`${profileDetail.company_details.branch_address_line_1} ${profileDetail.company_details.branch_address_line_2}`}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Grid>
          </Grid>
        </Paper>
        {/* User Account Status */}
        <Paper
          style={{ marginTop: "1em", padding: "1em" }}
          className={classes.paper}
        >
          <Grid container>
            <Grid item container xs={12} className={classes.pad}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Account Type</Typography>
              </Grid>
              <Grid item xs={6} className={classes.flexend}>
                <Typography variant="subtitle1">
                  {profileDetail.user_details.is_seller ? "Trader" : "Buyer"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.pad}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Account Status</Typography>
              </Grid>
              <Grid item xs={6} className={classes.flexend}>
                <Typography variant="subtitle1" style={{ color }}>
                  {profileDetail.user_details.is_active ? "Active" : "Inactive"}
                </Typography>
              </Grid>
            </Grid>
            {is_seller ? <>
              <Grid item container xs={12} className={classes.pad}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Listing Permission</Typography>
                </Grid>
                <Grid item xs={6} className={classes.flexend}>
                  <Typography variant="subtitle1" style={{ color }}>
                    {profileDetail.company_details.is_permitted
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
                    {profileDetail.company_details.permission_last_date.slice(
                      0,
                      10
                    )}
                  </Typography>
                </Grid>

              </Grid>
            </> : <></>}
            {is_seller ? <>
              <Button variant="outlined" color="primary"
                onClick={handleSubmit}
                style={{ margin: "auto" }}>
                SUBMIT ALL DETAILS
                  </Button>
            </> : <> </>}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default HomeTabView;
