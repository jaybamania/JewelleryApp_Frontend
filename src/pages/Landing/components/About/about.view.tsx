import React from "react";

import { Typography, Container, Grid } from "@material-ui/core/";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      textAlign: "center",
      padding: theme.spacing(2, 0),
    },
  })
);

const AboutView: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.content}>
      <Grid item>
        <Container>
          <Typography variant="h4">About Us</Typography>
          <Typography style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
            We are reputed organisation establishing an easy means of bullion
            trade for a hassle free trading process for you.
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default AboutView;
