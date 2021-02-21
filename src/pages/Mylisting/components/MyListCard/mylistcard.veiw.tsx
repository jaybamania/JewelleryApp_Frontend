import React from "react";

import { Grid, Card, Button, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { ListingListInterface } from "../MyListingList/mylistinglist.models";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      padding: theme.spacing(1),
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

interface ListCard {
  handleStatusChange: (id: number, status: string) => void;
  handleOpenMyListingDetail: (id: number, open: boolean) => void;
  product: ListingListInterface;
}

const MyListCardView: React.FC<ListCard> = ({
  product,
  handleOpenMyListingDetail,
  handleStatusChange,
}) => {
  const classes = useStyles();
  // console.log(product);

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <div className={classes.flex}>
          <Grid container spacing={3} className={classes.text}>
            <Grid item xs={3}>
              <Typography variant="h6" style={{ color: "red" }}>
                <FiberManualRecordIcon />
                {product.trade}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">
                {product.metal} {product.metal_category} {product.metal_purity}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="h6"
                className={classes.flex}
                style={{ color: "red" }}
              >
                {product.premium_type === "+ve" && <AddIcon />}
                {product.premium_type === "-ve" && <RemoveIcon />}
                {product.premium_value}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              {product.is_active ? (
                <Typography variant="h6" style={{ color: "green" }}>
                  Active
                </Typography>
              ) : (
                <Typography variant="h6" style={{ color: "red" }}>
                  Inactive
                </Typography>
              )}
            </Grid>
          </Grid>
        </div>
        <div>
          {product.is_active ? (
            <Button
              className={classes.root}
              variant="outlined"
              style={{ color: "yellow" }}
              onClick={() => handleStatusChange(product.id, "pause")}
            >
              PAUSE
            </Button>
          ) : (
            <Button
              className={classes.root}
              variant="outlined"
              style={{ color: "green" }}
              onClick={() => handleStatusChange(product.id, "active")}
            >
              RESUME
            </Button>
          )}
          <Button
            className={classes.root}
            variant="outlined"
            style={{ color: "red" }}
            onClick={() => handleStatusChange(product.id, "stop")}
          >
            STOP
          </Button>
          <Button
            className={classes.root}
            variant="outlined"
            onClick={() => handleOpenMyListingDetail(product.id, true)}
          >
            OPEN
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MyListCardView;
