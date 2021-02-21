import React from "react";
import { Paper, Card, Container, CardContent } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink } from "react-router-dom";
import { MyFavouritesInterface } from "./myfavourites.models";

interface MyFavouritesProps {
  myFavourites: MyFavouritesInterface[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1, 1),
      background: "#F4F4F4",
      borderRadius: "0",
      padding: "1em",
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
      padding: theme.spacing(3, 0, 3, 3),
      margin: theme.spacing(3),
    },
    heading: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "25px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: "rgba(0, 0, 0, 0.87)",
    },
    dtime: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      letterSpacing: "0.15px",
      color: "#000000",
    },
    address: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "22px",
      lineHeight: "23px",
      letterSpacing: "0.15px",
      color: "#888888",
    },
    t_ime: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: "#727272",
    },
  })
);
const MyFavouritesView: React.FC<MyFavouritesProps> = ({ myFavourites }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        <Card
          className={classes.card}
          style={{ borderRadius: "1rem", height: "80vh" }}
        >
          <CardContent>
            <Paper style={{ border: "1px solid #E0E0E0", width: "99%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  height: "3em",
                  alignItems: "center",
                }}
              >
                <div>
                  <Button component={RouterLink} to={"/listing"}>
                    <KeyboardBackspaceIcon />
                  </Button>
                </div>
                <div style={{ marginLeft: "20%" }}> Product</div>
                <div style={{ marginLeft: "30%" }}>Rate (10gm.)</div>
              </div>
            </Paper>
          </CardContent>
          {myFavourites.map((value: any, index: number) => {
            return (
              <Paper
                key={index}
                className={classes.root}
                style={{ marginRight: "2rem" }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span className={classes.heading}>{value.company}</span>
                    <div style={{ width: "159px", height: "46px" }}>
                      <span className={classes.address}>
                        Cross, Street Kucha Mahajani
                      </span>
                    </div>
                  </div>
                  <div className={classes.address}>
                    <span style={{ marginTop: "25%", display: "inline-block" }}>
                      Old Delhi
                    </span>
                  </div>
                  <div>
                    <span className={classes.dtime}>Delivery Time</span>
                    <div
                      style={{
                        width: "196px",
                        height: "24px",
                        marginTop: "1em",
                        display: "block",
                      }}
                    >
                      <span className={classes.t_ime}>
                        {value.delivery_time}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button
                      component={RouterLink}
                      to={"/storeprofile?store=" + value.id}
                      style={{
                        marginTop: "25%",
                        color: "#0D3C61",
                        width: "33px",
                        height: "41.8px",
                      }}
                    >
                      <PlayArrowIcon />
                    </Button>
                  </div>
                </div>
              </Paper>
            );
          })}
        </Card>
      </Grid>
    </Container>
  );
};

export default MyFavouritesView;
