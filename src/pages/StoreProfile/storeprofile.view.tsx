import React from "react";
import {
  Paper,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AddIcon from "@material-ui/icons/Add";
import PaymentIcon from "@material-ui/icons/Payment";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { Item } from "./storeprofile.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1, 0),
    },
    flex: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      margin: theme.spacing(1, 0),
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
    sflex: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
    },
    card: {
      padding: theme.spacing(3, 0, 3, 4),
      margin: theme.spacing(3),
    },
    profile: {
      margin: theme.spacing(3),
    },
  })
);

interface StoreProfileViewProps {
  isLoading: boolean;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  productListing: never[];
  storeDetail: any;
  selectedCard: Item;
  setSelectedCard: React.Dispatch<React.SetStateAction<Item>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setProductColor: React.Dispatch<React.SetStateAction<string>>;
  handleMakingFavorite: () => void;
}

const StoreProfileView: React.FC<StoreProfileViewProps> = ({
  isLoading,
  show,
  setShow,
  productListing,
  storeDetail,
  selectedCard,
  setSelectedCard,
  color,
  setColor,
  setProductColor,
  handleMakingFavorite,
}) => {
  const classes = useStyles();
  if (isLoading) return <h2>loading....</h2>;
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={show ? 7 : 12} xs={12}>
          <Card className={classes.profile}>
            <CardContent>
              <div className={classes.flexbet}>
                <Typography variant="h6">
                  {storeDetail.details.company}
                </Typography>
                <IconButton
                  style={{ color: "red" }}
                  onClick={handleMakingFavorite}
                >
                  {storeDetail.is_favourite ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </div>
              <div>
                <Typography variant="subtitle1">Delivery Time</Typography>
                <Typography variant="body1">
                  {storeDetail.details.delivery_time}
                </Typography>
              </div>
              <Typography variant="h6">ADDRESS</Typography>
              <Grid container>
                <Grid
                  item
                  xs={1}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "red",
                  }}
                >
                  <LocationOnIcon />
                </Grid>
                <Grid item xs={5} md={3}>
                  <Typography>
                    Demo Jewellers Cross Street Kucha Mahajani, Old Delhi
                  </Typography>
                </Grid>
                <Grid item xs={4} md={6}></Grid>
                <Grid item xs={2}>
                  <a href="!#">View Map</a>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6">Today's Listing</Typography>
            </CardContent>
            {productListing.map((value: any, index: any) => {
              setProductColor(value.trade);
              return (
                <Paper key={index} className={classes.root}>
                  <div className={classes.flexbet}>
                    <div
                      className={classes.flexcol}
                      style={{ marginLeft: "20px" }}
                    >
                      <div className={classes.flex}>
                        <Typography
                          variant="subtitle2"
                          style={{ marginRight: "20px", color }}
                        >
                          {value.trade + " -"}
                        </Typography>
                        <Typography variant="h6"> Gold Bar 995</Typography>
                      </div>
                      <div className={classes.flex}>
                        <div
                          className={classes.flexcol}
                          style={{ marginRight: "20px" }}
                        >
                          <Typography style={{ color }}>Premium</Typography>
                          <div style={{ display: "flex" }}>
                            <AddIcon />
                            <Typography>
                              {" " + value.premium_value + " "}
                            </Typography>
                          </div>
                        </div>
                        <AccessTimeIcon />
                        <Typography style={{ marginRight: "20px", color }}>
                          {" T+" + value.delivery_time + " "}
                        </Typography>
                        <PaymentIcon />
                        <Typography style={{ color }}>
                          {" " + value.payment_type + " "}
                        </Typography>
                      </div>
                    </div>
                    {show === false && (
                      <div className={classes.flexcol}>
                        <Typography variant="h4" style={{ color }}>
                          39100
                        </Typography>
                        <Typography variant="body2">
                          {"Lowest " + value.trade + " Rate"}
                        </Typography>
                      </div>
                    )}
                    <Button
                      style={{ color }}
                      onClick={() => {
                        if (selectedCard.id === value.id) {
                          setShow(show ? false : true);
                        } else {
                          setShow(true);
                          setSelectedCard(value);
                          setColor(color);
                        }
                      }}
                    >
                      {show && selectedCard.id === value.id ? (
                        <CloseIcon />
                      ) : (
                        <PlayArrowIcon />
                      )}
                    </Button>
                  </div>
                </Paper>
              );
            })}
            <CardActions>
              <Button variant="contained" color="primary">
                Call
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {show && (
          <Grid item md={5} xs={12} className={classes.root}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={2}>
                    <Typography variant="h6" style={{ color }}>
                      {selectedCard.trade + " -"}
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="h6"> Gold Bar 995</Typography>
                  </Grid>
                  <Grid item xs>
                    <div className={classes.flexcol}>
                      <Typography variant="h5" style={{ color }}>
                        39100
                      </Typography>
                      <Typography variant="body2">
                        {"Lowest " + selectedCard.trade + " Rate"}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid container>
                  <div className={classes.flex}>
                    <PaymentIcon />
                    <Typography style={{ marginRight: "20px", color }}>
                      {"Cash/Bank"}
                    </Typography>
                    <AccessTimeIcon />
                    <Typography style={{ color }}>
                      {" T+" + selectedCard.delivery_time + " "}
                    </Typography>
                  </div>
                </Grid>
                <Typography variant="h6">
                  {selectedCard.trade + "ER"}
                </Typography>
                <Typography variant="body1">
                  Demo Jeewellers Kucha Mahajan, Delhi
                </Typography>
                <Typography variant="h6">PURITY</Typography>
                <Typography variant="body1">99.50%</Typography>
                <Typography variant="h6">
                  DELIVERY DATE (T+{selectedCard.delivery_time})
                </Typography>
                <Typography variant="body1">03-12-2019/Thursday</Typography>
                <Typography variant="h6">ORDER LIMIT</Typography>
                <div style={{ display: "flex" }}>
                  <Typography variant="body1">Min. </Typography>
                  <Typography variant="body1">50gm. </Typography>
                  <Typography variant="body1">Max. </Typography>
                  <Typography variant="body1">1000gm.</Typography>
                </div>
                <Typography variant="h6">PRICE BREAKUP</Typography>
                <Typography variant="body1">MCX</Typography>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h6">GOLD 05FEB20</Typography>
                  </Grid>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={3}>
                    <Typography variant="subtitle1">39100</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="body1">Premium</Typography>
                  </Grid>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={3}>
                    <div style={{ display: "flex", color }}>
                      <AddIcon />
                      <Typography>
                        {" " + selectedCard.premium_value + " "}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h6">TOTAL</Typography>
                  </Grid>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={3}>
                    <Typography variant="subtitle1">39200</Typography>
                  </Grid>
                </Grid>
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </Button>
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to={"/newbid/" + 1}
                  >
                    Bid
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
export default StoreProfileView;
