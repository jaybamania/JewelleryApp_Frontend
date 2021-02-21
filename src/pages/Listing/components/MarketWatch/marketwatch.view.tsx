import React, { useEffect, useState } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

import ListingCard from "../ListingCard";
import { getProductListings } from "../../../../services/apis";

import { ListDetail } from "../../listing.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexbet: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

const MarketWatchTab = () => {
  //Const
  const initialListDetail: ListDetail = {
    delivery_time: "",
    id: 0,
    metal: "",
    metal_category: "",
    metal_purity: "",
    payment_type: "",
    premium_type: "",
    premium_value: 0,
    trade: "",
  };

  //State
  const [productListing, setproductListing] = useState([initialListDetail]);
  const classes = useStyles();

  useEffect(() => {
    getProductListings()
      .then((result) => {
        console.log("Result", result);
        setproductListing(result.results);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div>
      <div className={classes.flexbet}>
        <Typography variant="h6">Product</Typography>
        <Typography variant="subtitle1">Rate(10grms.)</Typography>
      </div>
      <hr />
      {productListing.map((value: any, index: any) => (
        <ListingCard key={index} listDetail={value} />
      ))}
    </div>
  );
};

export default MarketWatchTab;
