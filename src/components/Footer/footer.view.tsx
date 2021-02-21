import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Link, Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { FOOTER_HEX_COLOR } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: "block",
      padding: theme.spacing(2, 1),
      backgroundColor: FOOTER_HEX_COLOR,
      textAlign: "right",
    },
  })
);

const FooterView = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div>
        <Typography variant="h6">
          &copy; 2020 Jeweller |{" "}
          <Link component={RouterLink} to="/termsandconditions">
            T&amp;C
          </Link>{" "}
          |{" "}
          <Link component={RouterLink} to="/bankdetail">
            Bank Details
          </Link>
        </Typography>
        <Box mt={2}>
          <Typography variant="body2">
            DISCLAIMER: Prices obtained from various sources believed to be
            reliable. But we do not guarantee their accuracy. Our gold and
            silver price data are provided without warranty or clain of
            reliablity.
          </Typography>
        </Box>
      </div>
    </div>
  );
};
export default FooterView;
