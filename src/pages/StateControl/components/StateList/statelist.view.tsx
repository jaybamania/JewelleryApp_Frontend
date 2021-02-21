import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box, Paper, Typography, Link } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import { StateData } from "../../statecontrol.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
      background: "#F4F4F4",
    },
  })
);

interface StateListViewProps {
  stateData: StateData[];
  setCityData: React.Dispatch<React.SetStateAction<string[]>>;
}

const StateListView: React.FC<StateListViewProps> = ({
  stateData,
  setCityData,
}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Box my={2}>
        {stateData.map((list: StateData, index: number) => {
          return (
            <Box my={1} key={index}>
              <Paper className={classes.root}>
                <Box p={2}>
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography variant="subtitle1">
                        {list.state_name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link
                        component="button"
                        onClick={() => {
                          setCityData(list.city);
                          history.push(`/control/state/${list.state_name}`);
                        }}
                      >
                        View City
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
export default StateListView;
