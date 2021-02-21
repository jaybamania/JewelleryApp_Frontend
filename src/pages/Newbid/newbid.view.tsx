import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles({
  gold_h: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "24px",
    color: "#000000",
    marginLeft: "2%",
  },
  gold_h2: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "20px",
    color: "#00AC30",
    marginLeft: "2%",
    marginTop: "2%",
  },
  gold_h3: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "24px",
    color: "#BDBDBD",
    marginLeft: "2%",
    marginTop: "4%",
  },
  gold_h4: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "24px",
    color: "##000000",
    marginLeft: "2%",
    marginTop: "4%",
    marginBottom: "4%",
  },
  gold_h5: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "35px",
    lineHeight: "24px",
    color: "#00AC30",
    marginLeft: "2%",
    letterSpacing: "0.15px",
  },
  gold_h6: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#BDBDBD",
    marginLeft: "2%",
    letterSpacing: "0.15px",
  },
  field_bidRate: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#BDBDBD",
    marginLeft: "2%",
    marginTop: "2%",
    letterSpacing: "0.15px",
    width: "20em",
  },
});

const NewBidView = () => {
  const classes = useStyles();
  return (
    <Container fixed>
      <Paper style={{ marginTop: "2rem" }}>
        <Grid container justify="space-between">
          <Grid item xs={8} style={{ marginTop: "1rem" }}>
            <Grid container alignItems="center">
              <Grid item xs={8} className={classes.gold_h}>
                Gold Bar 995
              </Grid>
              <Grid item xs={8} className={classes.gold_h2}>
                <b style={{ color: "black", marginRight: "5px" }}>₹</b>Cash/Bank
                <AccessTimeIcon
                  style={{
                    padding: "0",
                    margin: 0,
                    width: "1rem",
                    height: "1rem",
                    color: "black",
                    marginLeft: "1rem",
                    marginRight: "0.5rem",
                  }}
                />
                <span>T+4</span>
              </Grid>
              <Grid item xs={8} className={classes.gold_h3}>
                SELLER
              </Grid>
              <Grid item xs={8} className={classes.gold_h4}>
                Demo Jewellers <br />
                <span style={{ marginTop: "3px" }}>Kucha Mahajani, Delhi</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} md={3} style={{ marginTop: "1rem" }}>
            <Grid item xs={4} className={classes.gold_h5}>
              39000
            </Grid>
            <Grid item xs={4} className={classes.gold_h6}>
              Sell Rate
            </Grid>
            <Grid item xs={4} style={{ marginTop: "18%" }}>
              <Button
                style={{
                  border: "none",
                  color: "#0198E1",
                  margin: 0,
                  padding: 0,
                  clear: "right",
                  float: "right",
                  textAlign: "right",
                }}
              >
                View Detail
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ marginTop: "2rem" }}>
        <Grid container justify="space-between">
          <Grid item xs={12} style={{ marginTop: "1rem" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} className={classes.gold_h}>
                Bidding Card
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Enter Bid Rate"
                  className={classes.field_bidRate}
                />
              </Grid>
              <Grid
                item
                xs={12}
                className={classes.gold_h}
                style={{ marginTop: "2.5%", color: "#2196F3" }}
              >
                <Typography variant="body2">
                  You will get an SMS when the price matches
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Button
                    size="large"
                    href="#"
                    style={{
                      backgroundColor: "#00AC30",
                      color: "white",
                      borderRadius: "4px",
                    }}
                  >
                    Bid Now
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Button size="large" href="#">
                    <KeyboardBackspaceIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default NewBidView;
