import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Grid, Button, Paper, Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
    },
    headerFont: {
      fontSize: "calc(15px + (25- 15) * ((100vw - 300px) / (1600 - 300)))",
      fontWeight: "bold",
    },
  })
);

const HeaderView = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box my={2}>
      <Paper className={classes.root}>
        <Box py={1}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Button size="large" onClick={() => history.push("/userlist")}>
                <KeyboardBackspaceIcon />
              </Button>
            </Grid>
            <Grid item xs={7}>
              <Typography align="center" className={classes.headerFont}>
                Product Control
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default HeaderView;
