import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Paper, Typography, Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AddIcon from "@material-ui/icons/Add";
import PaymentIcon from "@material-ui/icons/Payment";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { ListDetail } from "../../listing.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
    flex: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      margin: theme.spacing(2, 0),
    },
    flexbet: {
      display: "flex",
      justifyContent: "space-between",
    },
    flexcol: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

interface ListingCardProps {
  listDetail: ListDetail;
}

const ListingCard: React.FC<ListingCardProps> = ({ listDetail }) => {
  const classes = useStyles();
  const setProductColor = (trade: any) => {
    if (trade === "BUY") {
      return "green";
    }
    return "red";
  };
  const color = setProductColor(listDetail.trade);
  return (
    <Paper className={classes.root}>
      <div className={classes.flexbet}>
        <div className={classes.flex}>
          <Typography variant="subtitle2" style={{ marginRight: "5px", color }}>
            {listDetail.trade + " -"}
          </Typography>
          <Typography variant="h6">
            {listDetail.metal} {listDetail.metal_category}{" "}
            {listDetail.metal_purity}
          </Typography>
        </div>
        <div className={classes.flexcol}>
          <Typography variant="h4" style={{ color }}>
            39100
          </Typography>
          <Typography variant="body2">
            {"Lowest " + listDetail.trade + " Rate"}
          </Typography>
        </div>
      </div>
      <div className={classes.flexbet}>
        <div className={classes.flex}>
          <div className={classes.flexcol} style={{ marginRight: "5px" }}>
            <Typography style={{ color }}>Premium</Typography>
            <div style={{ display: "flex" }}>
              <AddIcon />
              <Typography>{" " + listDetail.premium_value + " "}</Typography>
            </div>
          </div>
          <AccessTimeIcon />
          <Typography style={{ marginRight: "5px", color }}>
            {listDetail.delivery_time}
          </Typography>
          <PaymentIcon />
          <Typography style={{ color }}>
            {" " + listDetail.payment_type + " "}
          </Typography>
        </div>
        <div style={{ padding: "20px 0px" }}>
          <Button
            component={RouterLink}
            to={"/listdetail/" + 5}
            style={{ color }}
            endIcon={<ArrowForwardIosIcon />}
          >
            {"View More " + listDetail.trade + "er"}
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default ListingCard;
