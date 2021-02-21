import React from "react";
import { Grid, Box, Paper, Typography } from "@material-ui/core";

import { UserDetail, CompanyDetail } from "./userpermission.model";

//Import Components
import QRCode from "./components/QRCode";
import AboutUser from "./components/AboutUser";
import Message from "./components/Message";
import AboutUserPermission from "./components/AboutUserPermission";
import UserAccess from "./components/UserAccess";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
    },
    headerFont: {
      fontSize: "calc(15px + (26 - 15) * ((100vw - 300px) / (1600 - 300)))",
      fontWeight: "bold",
    },
  })
);

interface UserPermissionViewProps {
  userDetail: UserDetail;
  setUserDetail: React.Dispatch<React.SetStateAction<UserDetail>>;
  companyDetail: CompanyDetail;
  setCompanyDetail: React.Dispatch<React.SetStateAction<CompanyDetail>>;
}

const UserPermissionView: React.FC<UserPermissionViewProps> = ({
  userDetail,
  setUserDetail,
  companyDetail,
  setCompanyDetail,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <Box my={2} mx={1}>
            <Paper className={classes.root}>
              <Box p={1} px={3}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      color="primary"
                      variant="h5"
                      className={classes.headerFont}
                    >
                      {companyDetail.company
                        ? companyDetail.company
                        : userDetail.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="primary"
                      variant="h5"
                      className={classes.headerFont}
                    >
                      User ID
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography color="primary" variant="subtitle1">
                      {companyDetail.company
                        ? companyDetail.branch_city
                        : "Bangalore"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">{userDetail.id}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
          <Box mt={1}>
            <Grid container>
              <Grid item md={4} xs={12}>
                <Box px={1} pb={1}>
                  <Paper
                    className={classes.root}
                    style={{ minHeight: "370px" }}
                  >
                    <Box py={3}>
                      <QRCode />
                    </Box>
                  </Paper>
                </Box>
              </Grid>
              <Grid item md={8} xs={12}>
                <Box px={1} pb={1}>
                  <Paper
                    className={classes.root}
                    style={{ minHeight: "185px" }}
                  >
                    <Box p={2}>
                      <AboutUser
                        userDetail={userDetail}
                        setUserDetail={setUserDetail}
                        companyDetail={companyDetail}
                        setCompanyDetail={setCompanyDetail}
                      />
                    </Box>
                  </Paper>
                </Box>
                <Box px={1} pb={1}>
                  <Paper
                    className={classes.root}
                    style={{ minHeight: "185px" }}
                  >
                    <Box p={2}>
                      <AboutUserPermission
                        userDetail={userDetail}
                        setUserDetail={setUserDetail}
                        companyDetail={companyDetail}
                        setCompanyDetail={setCompanyDetail}
                      />
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <Box px={1}>
                <Paper className={classes.root}>
                  <Box py={1}>
                    <UserAccess
                      userDetail={userDetail}
                    />
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
          <Box my={1} mx={1}>
            <Paper className={classes.root}>
              <Box p={1}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Message
                    userDetail={userDetail}
                    setUserDetail={setUserDetail}
                  />
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default UserPermissionView;
