import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router-dom";

//Import Components
import QRCode from "./components/QRCode";
import AboutAdmin from "./components/AboutAdmin";
import AdminPermission from "./components/AdminPermission";
import Message from "./components/Message";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import { AdminPreviewDetail } from "./assignadminpermission.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
    },
  })
);

interface AssignAdminPermissionViewProps {
  id: number;
  userDetail: AdminPreviewDetail;
  setUserDetail: React.Dispatch<React.SetStateAction<AdminPreviewDetail>>;
  value: number[];
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    val: number
  ) => void;
  handleIsActive: (is_active: boolean) => void;
}

const AssignAdminPermissionView: React.FC<AssignAdminPermissionViewProps> = ({
  id,
  userDetail,
  setUserDetail,
  value,
  handleChange,
  handleIsActive,
}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <Box my={2} mx={1}>
            <Paper className={classes.root}>
              <Box py={1}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <Button
                      size="large"
                      onClick={() => history.push("/userlist")}
                    >
                      <KeyboardBackspaceIcon />
                    </Button>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h6">{userDetail.name}</Typography>
                  </Grid>
                  <Grid item>
                    <Button onClick={() => history.push(`/update/admin/${id}`)}>
                      EDIT
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
          <Box my={1}>
            <Grid container>
              <Grid item md={4} xs={12}>
                <Box px={1} pb={1}>
                  <Paper
                    className={classes.root}
                    style={{ minHeight: "320px" }}
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
                    style={{
                      minHeight: "320px",
                    }}
                  >
                    <Box p={2}>
                      <AboutAdmin
                        userDetail={userDetail}
                        setUserDetail={setUserDetail}
                        handleIsActive={handleIsActive}
                      />
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <Box px={1} pb={1}>
                <Paper className={classes.root}>
                  <Box p={2}>
                    <AdminPermission
                      value={value}
                      handleChange={handleChange}
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
                  <Message />
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default AssignAdminPermissionView;
