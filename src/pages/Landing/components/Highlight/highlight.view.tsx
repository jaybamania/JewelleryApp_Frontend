import React from "react";

import { Grid, Typography } from "@material-ui/core";

const HighlightsView: React.FC = () => {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            color="primary"
            style={{ textAlign: "center", fontSize: "2.4rem" }}
          >
            Online Bullion Trading Market
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ul
            style={{
              fontSize: "1.5rem",
            }}
          >
            <li>
              <Typography style={{ fontSize: "1.4rem" }}>
                Watch and compare live gold and silver rates
              </Typography>
            </li>
            <li>
              <Typography style={{ fontSize: "1.4rem" }}>
                Compare rates from local bullion dealers
              </Typography>
            </li>
            <li>
              <Typography style={{ fontSize: "1.4rem" }}>
                Search Bullion Dealers around you
              </Typography>
            </li>
            <li>
              <Typography style={{ fontSize: "1.4rem" }}>
                Free Registration
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography
            color="primary"
            style={{
              margin: "0.5rem 0 0.5rem 2rem",
              fontSize: "1.2rem",
            }}
          >
            Are you a bullion dealer ?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            style={{
              marginLeft: "2rem",
              fontSize: "1.4rem",
            }}
          >
            Register with us to display live rates
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HighlightsView;
