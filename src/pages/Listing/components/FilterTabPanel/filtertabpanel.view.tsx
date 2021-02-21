import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Slide,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AddIcon from "@material-ui/icons/Add";
import PaymentIcon from "@material-ui/icons/Payment";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { makeStyles, Theme, createStyles } from "@material-ui/core";

import ListingCard from "./components/ListingCard/listingcard.view";

import { ListDetail } from "../../listing.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1, 0),
      padding:theme.spacing(0,1)
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
  })
);

interface FilterTabPanelViewProps {
  isLoading: Boolean;
  productListing: ListDetail[];
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCard: ListDetail;
  setSelectedCard: React.Dispatch<React.SetStateAction<ListDetail>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const FilterTabPanelView: React.FC<FilterTabPanelViewProps> = ({
  isLoading,
  productListing,
  show,
  setShow,
  selectedCard,
  setSelectedCard,
  color,
  setColor,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  if (isLoading) return <h2>loading...</h2>;

  return (
    <Grid xs={12} container>
      {matches ? (
        <Grid
          item
          md={show ? 7 : 12}
          xs={12}
          style={{ maxHeight: "600px", overflow: "auto" }}
        >
          {productListing.map((value: any, index: any) => {
            return (
              <ListingCard
                key={index}
                listDetail={value}
                show={show}
                setShow={setShow}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
                color={color}
                setColor={setColor}
              />
            );
          })}
        </Grid>
      ) : (
        <Slide direction="right" in={!show} mountOnEnter unmountOnExit>
          <Grid
            item
            md={show ? 7 : 12}
            xs={12}
            style={{ maxHeight: "600px", overflow: "auto" }}
          >
            {productListing.map((value: any, index: any) => {
              return (
                <ListingCard
                  key={index}
                  listDetail={value}
                  show={show}
                  setShow={setShow}
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                  color={color}
                  setColor={setColor}
                />
              );
            })}
          </Grid>
        </Slide>
      )}
      {productListing.length === 0 && <h2>No matching Product found.</h2>}
      {show && (
        <Slide direction="left" in={show} mountOnEnter unmountOnExit>
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
        </Slide>
      )}
    </Grid>
  );
};

export default FilterTabPanelView;
