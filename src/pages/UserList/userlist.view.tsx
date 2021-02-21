import React from "react";
import { Grid, Paper, Box, Button, Typography } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

//Components Imports
import Search from "./components/Search";
import FilterButton from "./components/FilterButton";
import UserListingCard from "./components/UserListCard";
import FilterOption from "./components/FilterOption";

import { User } from "./userlist.model";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
    },
    headerFont: {
      fontSize: "calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)))",
      fontWeight: "bold",
    },
  })
);

interface UserListViewProps {
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterOpen: Boolean;
  userList: User[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  formatDate: (date: Date) => string;
}
const UserListView: React.FC<UserListViewProps> = ({
  filterOpen,
  setFilterOpen,
  userList,
  filter,
  setFilter,
  formatDate,
}) => {
  const classes = useStyles();
  let prevoiusDate: string = "";
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
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
                    <Button size="large">
                      <KeyboardBackspaceIcon />
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Search />
                  </Grid>
                  <Grid item xs={4}>
                    <FilterButton
                      filterOpen={filterOpen}
                      setFilterOpen={setFilterOpen}

                    />
                  </Grid>
                </Grid>
                {filterOpen && (
                  <Box my={2}>
                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                    >
                      <FilterOption filter={filter} setFilter={setFilter} />
                    </Grid>
                  </Box>
                )}
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid xs={12} md={10}>
          <Paper className={classes.root}>
            <Box py={1}>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    color="primary"
                    className={classes.headerFont}
                  >
                    UserName
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    color="primary"
                    className={classes.headerFont}
                  >
                    UserId
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    color="primary"
                    className={classes.headerFont}
                  >
                    Location
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    color="primary"
                    className={classes.headerFont}
                  >
                    Account Type
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid xs={12} md={10}>
          <Box my={1}>
            <Paper className={classes.root} style={{ minHeight: "60vh" }}>
              <Box py={1}>
                {userList.map((data: User, index: number) => {
                  const date = formatDate(data.timestrap);
                  let showDate = false;
                  if (index !== 0) {
                    prevoiusDate = formatDate(userList[index - 1].timestrap);
                  }
                  if (prevoiusDate !== date) {
                    showDate = true;
                  }
                  return <UserListingCard data={data} showDate={showDate} />;
                })}
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default UserListView;
