import React from "react";

import { Grid, Box, Paper, Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
      background: "#F4F4F4",
    },
  })
);

interface CityListViewProps {
  cityData: string[];
}

const CityListView: React.FC<CityListViewProps> = ({ cityData }) => {
  const classes = useStyles();
  return (
    <>
      <Box my={2}>
        {cityData.map((city: string, index: number) => {
          return (
            <Box my={1} key={index}>
              <Paper className={classes.root}>
                <Box p={2}>
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography variant="subtitle1">{city}</Typography>
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
export default CityListView;
