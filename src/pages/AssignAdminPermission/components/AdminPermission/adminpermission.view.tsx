import React from "react";
import {
  Paper,
  Grid,
  Box,
  Typography,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
      background: "#F4F4F4",
    },
  })
);

interface AdminPermissionViewProps {
  value: number[];
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    val: number
  ) => void;
}

const AdminPermissionView: React.FC<AdminPermissionViewProps> = ({
  value,
  handleChange,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box my={1}>
        <Paper className={classes.root}>
          <Box p={2}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="subtitle1">
                  Regional Frontiers -States and it's Trade Dependencies
                </Typography>
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Switch
                      checked={value.includes(4)}
                      color="primary"
                      onChange={(e) => {
                        handleChange(e, 4);
                      }}
                    />
                  }
                  style={{ color: value.includes(4) ? "green" : "red" }}
                  label={value.includes(4) ? "Granted" : "Restricted"}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      <Box my={1}>
        <Paper className={classes.root}>
          <Box p={2}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="subtitle1">
                  Access to Permit Trader to Add List - All Traders Profile
                  Details
                </Typography>
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Switch
                      checked={value.includes(2)}
                      color="primary"
                      onChange={(e) => {
                        handleChange(e, 2);
                      }}
                    />
                  }
                  style={{ color: value.includes(2) ? "green" : "red" }}
                  label={value.includes(2) ? "Granted" : "Restricted"}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      <Box my={1}>
        <Paper className={classes.root}>
          <Box p={2}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="subtitle1">
                  Access Trader's Listing functionalities
                </Typography>
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Switch
                      checked={value.includes(1)}
                      color="primary"
                      onChange={(e) => {
                        handleChange(e, 1);
                      }}
                    />
                  }
                  style={{ color: value.includes(1) ? "green" : "red" }}
                  label={value.includes(1) ? "Granted" : "Restricted"}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      <Box my={1}>
        <Paper className={classes.root}>
          <Box p={2}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="subtitle1">
                  Access all the User's Bid functionality
                </Typography>
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Switch
                      checked={value.includes(3)}
                      color="primary"
                      onChange={(e) => {
                        handleChange(e, 3);
                      }}
                    />
                  }
                  style={{ color: value.includes(3) ? "green" : "red" }}
                  label={value.includes(3) ? "Granted" : "Restricted"}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      <Box my={1}>
        <Paper className={classes.root}>
          <Box p={2}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="subtitle1">
                  Access Update Products functionality
                </Typography>
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Switch
                      checked={value.includes(5)}
                      color="primary"
                      onChange={(e) => {
                        handleChange(e, 5);
                      }}
                    />
                  }
                  style={{ color: value.includes(5) ? "green" : "red" }}
                  label={value.includes(5) ? "Granted" : "Restricted"}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
export default AdminPermissionView;
