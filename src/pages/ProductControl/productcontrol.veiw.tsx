import React from "react";

import { Grid } from "@material-ui/core";

import Header from "./components/Header";
import TabContainer from "./components/TabContainer";

const ProductControlview = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10}>
        <Header />
      </Grid>
      <Grid item xs={12} md={10}>
        <TabContainer />
      </Grid>
    </Grid>
  );
};
export default ProductControlview;
