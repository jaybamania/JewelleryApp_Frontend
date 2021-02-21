import React from "react";
import {
  Grid,
  Typography,
  Box,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

import { AdminPreviewDetail } from "../../assignadminpermission.model";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerFont: {
      fontSize: "calc(16px + (25 - 16) * ((100vw - 300px) / (1600 - 300)))",
    },
  })
);

interface AboutAdminViewProps {
  userDetail: AdminPreviewDetail;
  setUserDetail: React.Dispatch<React.SetStateAction<AdminPreviewDetail>>;
  handleIsActive: (is_active: boolean) => void;
}

const AboutAdminView: React.FC<AboutAdminViewProps> = ({
  userDetail,
  setUserDetail,
  handleIsActive,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="space-between">
        <Grid item>
          <Box my={1}>
            <Typography variant="h6" className={classes.headerFont}>
              Name
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box my={1}>
            <Typography variant="h6" className={classes.headerFont}>
              {userDetail.name}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justify="space-between">
        <Grid item>
          <Box my={1}>
            <Typography variant="h6" className={classes.headerFont}>
              Account Type
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box my={1}>
            <Typography variant="h6" className={classes.headerFont}>
              {userDetail.is_admin && "Admin"}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justify="space-between">
        <Grid item>
          <Box my={1}>
            <Typography variant="h6" className={classes.headerFont}>
              Account Status
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box my={1}>
            <FormControlLabel
              control={
                <Switch
                  checked={userDetail.is_active}
                  color="primary"
                  onChange={(e) => {
                    handleIsActive(!userDetail.is_active);
                  }}
                />
              }
              className={classes.headerFont}
              style={{ color: userDetail.is_active ? "green" : "red" }}
              label={userDetail.is_active ? "Active" : "InActive"}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container justify="space-between">
        <Grid item>
          <Box my={1}>
            <Typography variant="h6" className={classes.headerFont}>
              Phone Number
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box my={1}>
            <Typography variant="h6" className={classes.headerFont}>
              {"+91 " + userDetail.mobile_no}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justify="space-between">
        <Grid item>
          <Box my={1}>
            <Typography variant="h6" className={classes.headerFont}>
              Email ID
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box my={1}>
            <Typography variant="h6" className={classes.headerFont}>
              {userDetail.email}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default AboutAdminView;
