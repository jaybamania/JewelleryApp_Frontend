import React, { useState, useEffect } from "react";

import { Grid, Paper, Button, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

import { getUserListingDetail } from "../../../../services/apis";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { ListingDetailInterface } from "./mylistingdetail.models";

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

interface ListingDetail {
  handleStatusChange: (id: number, status: string) => void;
  handleOpenMyListingDetail: (id: number, open: boolean) => void;
  id: number;
}

const MyListingDetailView: React.FC<ListingDetail> = ({
  handleOpenMyListingDetail,
  id,
  handleStatusChange,
}) => {
  const classes = useStyles();
  const initialValue: ListingDetailInterface = {
    delivery_time: "",
    id: 0,
    is_active: false,
    is_deleted: false,
    metal: "",
    metal_category: "",
    metal_purity: "",
    payment_type: "",
    premium_value: 0,
    quantity: 0,
    trade: "",
  };
  const [product, setProduct] = useState<ListingDetailInterface>(initialValue);

  useEffect(() => {
    getUserListingDetail(id)
      .then((data) => {
        console.log(`My Listing Detail  `, data);
        setProduct(data);
      })
      .catch((error) => {
        console.log("MYListing ERROR", error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Paper>
        <Grid
          container
          alignContent="center"
          justify="flex-start"
          style={{ height: "4em" }}
        >
          <Grid item>
            <Button
              color="inherit"
              onClick={() => handleOpenMyListingDetail(1, false)}
            >
              <Typography color="primary" className={classes.flex}>
                <ArrowBackIcon />
                Go Back
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
      {product.id ? (
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
          <div>
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="h6">LISTING ID</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">#{product.id}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="h6">TYPE</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">{product.trade}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="h6">ITEM</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">{product.metal}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="h6">PURITY</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">
                  {product.metal_purity}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="h6">DELIVERY</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">
                  {product.delivery_time}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="h6">PAYMENT</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">
                  {product.payment_type}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="h6">QUANTITY</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">
                  {product.quantity || ""}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="h6">MCX GOLD 05FEB20</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">39000</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="h6">FINAL SELL PRICE</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">
                  {39000 + product.premium_value}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Button
                  variant="outlined"
                  onClick={() => handleStatusChange(product.id, "stop")}
                >
                  STOP
                </Button>
                {/* {product.is_active ? ( */}
                <Button
                  variant="outlined"
                  onClick={() => handleStatusChange(product.id, "pause")}
                >
                  PAUSE
                </Button>
                {/* ) : ( */}
                <Button
                  variant="outlined"
                  onClick={() => handleStatusChange(product.id, "active")}
                >
                  RESUME
                </Button>
                {/* )} */}
              </Grid>
              <Grid item xs={5}>
                <Button variant="outlined" style={{ color: "orange" }}>
                  ANALYSE
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default MyListingDetailView;
