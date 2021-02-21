import React, { useGlobal } from "reactn";
import { useRouteMatch, Redirect } from "react-router-dom";

import { Grid, Container, Box, Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Register from "./components/Register";
import Login from "./components/Login";
import LoginWithOTP from "./components/LoginWithOTP";
import ForgotPassword from "./components/ForgotPassword";

import Highlight from "./components/Highlight";
import Media from "./components/Media";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: "1rem",
      minHeight: "25rem",
    },
  })
);

const LandingView: React.FC = () => {
  const classes = useStyles();
  const match = useRouteMatch();

  const globalUserDetail = useGlobal("userDetail")[0];

  if (globalUserDetail.isLoginned)
    return <Redirect to="/listing/MarketWatch" />;

  return (
    <>
      <Container>
        <Box py={2}></Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            container
            justify="center"
            style={{ marginBottom: "1rem" }}
          >
            <Grid item xs={12} sm={10} md={6}>
              <Highlight />
            </Grid>
            <Grid item xs={12} sm={10} md={6}>
              <Paper className={classes.paper}>
                {["/", "", "/register"].includes(match.path) && <Register />}
                {["/login"].includes(match.path) && <Login />}
                {["/loginwithotp"].includes(match.path) && <LoginWithOTP />}
                {["/forgotpassword"].includes(match.path) && <ForgotPassword />}
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Media />
            <About />
            <Contact />
          </Grid>
        </Grid>
      </Container>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </>
  );
};

export default LandingView;
