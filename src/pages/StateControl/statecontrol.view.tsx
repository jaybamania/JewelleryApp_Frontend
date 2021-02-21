import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useParams, useHistory } from "react-router-dom";

import AddState from "./components/AddState";
import StateList from "./components/StateList";
import AddCity from "./components/AddCity";
import CityList from "./components/CityList";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import { StateData } from "./statecontrol.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
    },
  })
);

interface StateControlViewProps {
  stateData: StateData[];
  cityData: string[];
  setCityData: React.Dispatch<React.SetStateAction<string[]>>;
  handleAddState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newState: string;
  handleNewStateSubmit: () => void;
  newCity: string;
  handleAddCity: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNewCitySubmit: (state: string) => void;
}

const StateControlView: React.FC<StateControlViewProps> = ({
  stateData,
  cityData,
  setCityData,
  handleAddState,
  newState,
  handleNewStateSubmit,
  newCity,
  handleAddCity,
  handleNewCitySubmit,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { state } = useParams();

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
                      onClick={() => {
                        if (state) {
                          history.push("/control/state");
                        } else {
                          history.push("/userlist");
                        }
                      }}
                    >
                      <KeyboardBackspaceIcon />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      {state ? state : "State - Regional Frontiers"}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
          <Box mx={1}>
            <Paper className={classes.root}>
              <Box px={1} py={2}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  {state ? (
                    <>
                      <Grid item xs={12}>
                        <AddCity
                          state={state}
                          newCity={newCity}
                          handleAddCity={handleAddCity}
                          handleNewCitySubmit={handleNewCitySubmit}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <CityList cityData={cityData} />
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item xs={12}>
                        <AddState
                          handleAddState={handleAddState}
                          newState={newState}
                          handleNewStateSubmit={handleNewStateSubmit}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <StateList
                          stateData={stateData}
                          setCityData={setCityData}
                        />
                      </Grid>
                    </>
                  )}
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default StateControlView;
