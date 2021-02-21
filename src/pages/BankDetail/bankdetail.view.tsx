import React from "react";

import { Typography, Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Footer from "../../components/Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "76vh",
    },
    text: {
      textAlign: "center",
    },
  })
);

const BankDetailView: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box px={3} className={classes.content}>
        <div className={classes.text}>
          <Typography variant="h5">Bank Details</Typography>
          <Typography variant="h6">
            <strong>Bank Name : </strong> XYZ Bank
          </Typography>
          <Typography variant="h6">
            <strong>IFSC : </strong>XYXY0001112
          </Typography>
          <Typography variant="h6">
            <strong>Account Name : </strong> XYZ Pvt. Ltd
          </Typography>
          <Typography variant="h6">
            <strong>Account No. : </strong>0123456789102
          </Typography>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default BankDetailView;
