import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

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
}

const AboutUserView: React.FC<AboutUserViewProps> = ({
  userDetail,
  setUserDetail,
  companyDetail,
  setCompanyDetail,
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
      {/* {userDetail.is_seller
        ?<Grid container justify="space-between">
        <Grid item>
          <Box my={1}>
            <Typography variant="h6" className={classes.headerFont}>
              Company Ph No
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box my={1}>
            <Typography variant="h6" className={classes.headerFont}>
              {companyDetail.}
            </Typography>
          </Box>
        </Grid>
      </Grid>  : ""} */}
      < Grid container justify="space-between">
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
export default AboutUserView;
