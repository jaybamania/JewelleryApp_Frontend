import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import QRCode from "qrcode.react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const QRCodeView = () => {
  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Box py={1}>
          <Grid item container justify="center" alignItems="center">
            <Grid item>
              <VerifiedUserIcon style={{ color: "green" }} />
            </Grid>
            <Grid item>
              <Typography>Verified Trader By Jweler</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <QRCode
            style={{ width: "15em", height: "15em" }}
            value="http://facebook.github.io/react/"
          />
        </Grid>
      </Grid>
    </>
  );
};
export default QRCodeView;
