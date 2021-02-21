import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { Grid, Paper, Typography, Button, Box } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import { StateData } from "./listingcontrolstate.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fontsize: {
      fontSize: "calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)))",
    },
    pad: {
      padding: "1%",
    },
    paper: {
      margin: "3% 1%",
      borderRadius: theme.spacing(2),
      padding: "7% 3% ",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    colorText: {
      color: "#000033",
    },
    topComponent: {
      padding: "1%",
      margin: "1%",

      borderRadius: theme.spacing(2),
    },
    oneComponent: {
      border: "1px solid #000000",
      borderRadius: " 10px",
      boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
      background: "#FAFAFA",
      boxSizing: "border-box",
      padding: "3%",
      marginBottom: "1rem",
    },
    buttons: {
      width: "10%",
      float: "right",
      minWidth: "30%",
    },
  })
);
interface ListingControlStateViewProps {
  stateData: StateData[];
}
const ListingControlStateView: React.FC<ListingControlStateViewProps> = ({
  stateData,
}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} md={10} alignItems="center">
          <Box my={1} style={{ margin: "1%" }}>
            <Paper style={{ borderRadius: "15px", marginTop: "1rem" }}>
              <Box py={1}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <Button onClick={() => history.push("/userlist")}>
                      <KeyboardBackspaceIcon />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" className={classes.fontsize}>
                      Listing Control
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={10} xl={8}>
          <Paper className={classes.paper}>
            {stateData[0].state_name
              ? stateData.map((state: StateData) => (
                  <Grid
                    container
                    xs={12}
                    xl={6}
                    item
                    className={classes.oneComponent}
                  >
                    <Grid xs={8} xl={8} sm={8} md={8}>
                      <Typography variant="h5" className={classes.fontsize}>
                        <b>{state.state_name}</b>
                      </Typography>
                    </Grid>
                    <Grid xs={4} xl={4} sm={4} md={4}>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          history.push(
                            `/listingcontrol/${state.state_name}/${state.id}`
                          );
                        }}
                        className={classes.buttons}
                      >
                        <Typography
                          align="center"
                          style={{
                            fontSize:
                              "calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)))",
                          }}
                        >
                          Open
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                ))
              : "Loading..."}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default ListingControlStateView;
