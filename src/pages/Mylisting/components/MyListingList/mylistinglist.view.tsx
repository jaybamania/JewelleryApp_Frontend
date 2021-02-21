import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Grid, Paper, Button, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

import { getUserListings } from "../../../../services/apis";
import MyListCardView from "../MyListCard";
import BottomTabButton from "../BottomTabButton";
import { ListingListInterface } from "./mylistinglist.models";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      padding: theme.spacing(1),
      minHeight: "79vh",
    },
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      textAlign: "center",
    },
  })
);

const STATUSES: { [key: string]: number } = {
  active: 0,
  stopped: 1,
  paused: 2,
  history: 3,
};

interface Listinglist {
  handleStatusChange: (id: number, status: string) => void;
  handleOpenMyListingDetail: (id: number, open: boolean) => void;
}

const MyListingListView: React.FC<Listinglist> = ({
  handleOpenMyListingDetail,
  handleStatusChange,
}) => {
  const initialiListing: ListingListInterface = {
    id: 0,
    is_active: false,
    is_deleted: false,
    metal: "",
    metal_category: "",
    metal_purity: "",
    premium_value: 0,
    trade: "",
    premium_type: "",
  };
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [userListings, setUserListings] = useState([initialiListing]);

  useEffect(() => {
    getListUsingStatus("active");
  }, []);

  const getListUsingStatus = (status: string) => {
    setActiveTab(STATUSES[status ? status : "history"]);
    getUserListings(status)
      .then((data) => {
        setUserListings(data.results);
        //console.log(`My Listing ${status} `, data);
      })
      .catch((error) => {
        console.log("MYListing ERROR", error);
      });
  };

  return (
    <div>
      <Paper>
        <Grid
          container
          alignContent="center"
          justify="flex-end"
          style={{ height: "4em" }}
        >
          <Grid item>
            <Button color="inherit" component={RouterLink} to="/newlisting">
              <Typography color="primary" className={classes.flex}>
                <AddIcon />
                Add new Listing
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.root}>
        <Grid container spacing={3} className={classes.text}>
          <Grid item xs={3}>
            <Typography variant="h6">Type</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Metal</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6"> Premium</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6"> Status</Typography>
          </Grid>
        </Grid>
        {console.log(userListings)}
        {userListings.length === 0 ? (
          <h2>No Product Available</h2>
        ) : (
          userListings.map((val, index) => {
            return (
              <MyListCardView
                key={index}
                product={val}
                handleStatusChange={handleStatusChange}
                handleOpenMyListingDetail={handleOpenMyListingDetail}
              />
            );
          })
        )}

        <Paper
          style={{
            width: "88%",
            padding: "1em",
            position: "fixed",
            bottom: "2em",
            backgroundColor: "#F5F5F5",
          }}
        >
          <Grid container justify="space-around">
            <Typography color="primary">Filters</Typography>
            <BottomTabButton
              getListUsingStatus={getListUsingStatus}
              text="Active"
              status="active"
              variant={activeTab === 0 ? "contained" : "outlined"}
            />
            <BottomTabButton
              getListUsingStatus={getListUsingStatus}
              text="Stopped"
              status="stopped"
              variant={activeTab === 1 ? "contained" : "outlined"}
            />
            <BottomTabButton
              getListUsingStatus={getListUsingStatus}
              text="Paused"
              status="paused"
              variant={activeTab === 2 ? "contained" : "outlined"}
            />
            <BottomTabButton
              getListUsingStatus={getListUsingStatus}
              text="History"
              status=""
              variant={activeTab === 3 ? "contained" : "outlined"}
            />
          </Grid>
        </Paper>
      </Paper>
    </div>
  );
};

export default MyListingListView;
