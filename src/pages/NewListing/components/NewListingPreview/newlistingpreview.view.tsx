import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Typography,
  Button,
  Paper,
  Container,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Grid,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { ProductDetailInterface } from "../../newlisting.models";
interface NewListingPreviewView {
  productDetail: ProductDetailInterface;
  handleSubmit: () => void;
  handleNewListing: () => void;
}
const NewListingPreviewView: React.FC<NewListingPreviewView> = ({
  handleSubmit,
  productDetail,
  handleNewListing,
}: any) => {
  const {
    type,
    metal,
    metal_category,
    purity,
    quantity,
    delivery_time,
    payment_option,
    premium_value,
    premium_type,
  } = productDetail;
  const [counter, setCounter] = useState(0);

  let myInterval: any;

  const IncCounter = () => {
    myInterval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
  };

  React.useEffect(() => {
    IncCounter();
    setColor(type === "Sell" ? "red" : "green");

    return () => {
      clearInterval(myInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skipTimer = () => {
    setCounter(180);
  };

  React.useEffect(() => {
    if (counter === 180) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const history = useHistory();
  const [color, setColor] = useState("");
  const getTime = () => {
    var date = new Date(0);
    date.setSeconds(180 - counter);
    var timeString = date.toISOString().substr(11, 8);
    return timeString;
  };

  return (
    <Container>
      <Box py={1}>
        <Box my={2}>
          <Card>
            <Box p={2}>
              <Grid container justify="center">
                <Typography variant="h6" color="primary">
                  Preview ending in {getTime()}
                </Typography>
              </Grid>
            </Box>
          </Card>
        </Box>
        <Paper>
          <Box py={3}>
            <Grid container justify="space-around">
              <Typography variant="h6">Type</Typography>
              <Typography variant="h6">Metal</Typography>
              <Typography variant="h6"> Premium</Typography>
              <Typography variant="h6"> Status</Typography>
            </Grid>
            <Box m={3}>
              <Card variant="outlined" color="secondary">
                <CardContent>
                  <Grid container justify="space-around">
                    <Typography variant="h6" style={{ color }}>
                      {type}
                    </Typography>
                    <Typography variant="h6">{metal}</Typography>
                    <Typography variant="h6">{premium_value}</Typography>
                    <Typography variant="h6" style={{ color: "green" }}>
                      Active
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">LISTING ID</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body1">#22325</Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">TYPE</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body1" style={{ color }}>
                  {type}
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">ITEM</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body1">{metal}</Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">CATEGORY</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body1">{metal_category}</Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">PURITY</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body1">{purity}</Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">
                  DELIVERY<small>(T+{delivery_time})</small>
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body1"></Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">PAYMENT</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body1">{payment_option}</Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">QUANTITY</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body1">{quantity}</Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">MCX GOLD 05FEB20</Typography>
                <Typography variant="subtitle2">Premium</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body1">{39000}</Typography>
                <Typography variant="body1">
                  {premium_type}
                  {premium_value}
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1">FINAL SELL PRICE</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body1" style={{ color }}>
                  {39000 + parseFloat(premium_value)}
                </Typography>
              </Grid>
            </Grid>
            <Box m={3}>
              <Grid container justify="space-around" spacing={2}>
                <Button
                  variant="outlined"
                  onClick={() => history.push("/mylisting")}
                  color="secondary"
                >
                  CANCEL
                </Button>
                <Button variant="outlined" onClick={handleNewListing}>
                  EDIT
                </Button>
              </Grid>
            </Box>
            <Box width="100%" mr={1}>
              <LinearProgress
                variant="determinate"
                value={(counter / 180) * 100}
              />
            </Box>
            <Grid container justify="flex-end">
              <Button onClick={skipTimer} color="primary">
                Skip Timer <PlayArrowIcon />
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default NewListingPreviewView;
