import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { UserDetail } from "../../userpermission.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerFont: {
      fontSize: "calc(12px + (20 - 12) * ((100vw - 300px) / (1600 - 300)))",
    },
    buttons: {
      fontSize: "calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)))",
      minWidth: "15%",
    },
  })
);
interface UserAccessViewProps {
  userDetail: UserDetail;
}
const UserAccessView: React.FC<UserAccessViewProps> = ({ userDetail }) => {
  const classes = useStyles();
  return (
    <>
      <Box px={2}>
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={4}>
            <Box my={1}>
              <Typography
                color="primary"
                variant="h6"
                className={classes.headerFont}
              >
                Access the User's
              </Typography>
            </Box>
          </Grid>
          <Grid container xs={8} item justify="flex-start" alignItems="center">
            <Grid item>
              <Box my={1}>
                <Button color="primary" variant="outlined" className={classes.buttons}>
                  PROFILE
                </Button>
              </Box>
            </Grid>
            {userDetail.is_seller ?

              <Grid item>
                <Box my={1} mx={1}>
                  <Button color="primary" variant="outlined" className={classes.buttons}>
                    Add List
               </Button>
                </Box>
              </Grid>
              : ""}
            {userDetail.is_seller ?
              <Grid item>
                <Box my={1}>
                  <Button color="primary" variant="outlined" className={classes.buttons}>
                    Edit List
              </Button>
                </Box>
              </Grid>
              : ""}

            <Grid item>
              <Box my={1} mx={1}>
                <Button color="primary" variant="outlined" className={classes.buttons}>
                  ADD BID
                </Button>
              </Box>
            </Grid>
            <Grid item>
              <Box my={1}>
                <Button color="primary" variant="outlined" className={classes.buttons}>
                  EDIT BID
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default UserAccessView;
