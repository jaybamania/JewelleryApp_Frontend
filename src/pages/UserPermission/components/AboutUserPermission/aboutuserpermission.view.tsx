import React from "react";
import {
  Grid,
  Typography,
  Box,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

import { UserDetail, CompanyDetail } from "../../userpermission.model";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerFont: {
      fontSize: "calc(15px + (20 - 15) * ((100vw - 300px) / (1600 - 300)))",
    },
  })
);

interface AboutUserViewProps {
  userDetail: UserDetail;
  setUserDetail: React.Dispatch<React.SetStateAction<UserDetail>>;
  companyDetail: CompanyDetail;
  setCompanyDetail: React.Dispatch<React.SetStateAction<CompanyDetail>>;
  handleChange: () => void;
  handlePermission: () => void;
}

const AboutUserView: React.FC<AboutUserViewProps> = ({
  userDetail,
  setUserDetail,
  companyDetail,
  setCompanyDetail,
  handleChange,
  handlePermission,
}) => {
  const classes = useStyles();
  return (
    <>
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
              {userDetail.is_seller ? "Seller" : "User"}
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
                    handleChange();
                  }}
                />
              }
              style={{ color: userDetail.is_active ? "green" : "red" }}
              label={userDetail.is_active ? "Active" : "InActive"}
            />
          </Box>
        </Grid>
      </Grid>
      {userDetail.is_seller
        ?
        <Grid container justify="space-between">
          <Grid item>
            <Box my={1}>
              <Typography variant="h6" className={classes.headerFont}>
                Listing Permission
            </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box my={1}>
              <FormControlLabel
                control={
                  <Switch
                    checked={companyDetail.is_permitted}
                    color="primary"
                    onChange={(e) => {
                      handlePermission();
                    }}
                  />
                }
                style={{ color: companyDetail.is_permitted ? "green" : "red" }}
                label={companyDetail.is_permitted ? "Permitted" : "Not Permitted"}
              />
            </Box>
          </Grid>
        </Grid>
        : ""}
      {userDetail.is_seller ?
        < Grid container justify="space-between">
          <Grid item>
            <Box my={1}>
              <Typography variant="h6" className={classes.headerFont}>
                Listing Validity Expires on
            </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box my={1}>
              <Typography variant="h6" className={classes.headerFont}>
                {userDetail.is_seller
                  ? new Date(companyDetail.permission_last_date).toDateString()
                  : ""}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        : ""}
    </>
  );
};
export default AboutUserView;
