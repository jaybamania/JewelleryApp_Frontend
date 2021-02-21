import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box, Paper, Typography, Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
//Import Components
import AddAdminForm from "./components/AddAdminForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
    },
    text: {
      width: "100%",
      fontSize: "calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)))",
    },
  })
);

const AddAdminView = () => {
  const classes = useStyles();
  const history = useHistory();
  const { type } = useParams();
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
                  <Grid item justify="center">
                    {type === "add" ? (
                      <Typography variant="h6" className={classes.text} >Add Admin</Typography>
                    ) : (
                        <Typography variant="h6" className={classes.text} >Edit Admin</Typography>
                      )}
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <Box px={1} pb={1}>
                <AddAdminForm />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default AddAdminView;
