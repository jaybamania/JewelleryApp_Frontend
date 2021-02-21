import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  heading: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "50px",
    lineHeight: "59px",
    color: "#000000",
    marginTop: "18px",
    marginBottom: "18px",
  },
  submit_btn: {
    marginTop: "18px",
    display: "flex",
    justifyContent: "center",
  },
  accordion_summary: {
    marginTop: "18px",
    background: "#F9F9F9",
    borderRadius: "4px",
  },
  accordion_summary_heading: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "35px",
    lineHeight: "24px",
  },
  accordion_details: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "25px",
    lineHeight: "26px",
    letterSpacing: "0.15px",
    color: "rgba(0, 0, 0, 0.54)",
  },
});

const HelpAndFaqView: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid item xs={12}>
          <Typography align="center" className={classes.heading}>
            Frequently Asked Questions
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <TextField
              id="outlined-secondary"
              label="Type your question here"
              variant="outlined"
              color="secondary"
              fullWidth
            />
            <div className={classes.submit_btn}>
              <Button variant="contained" color="primary" size="large">
                Submit
              </Button>
            </div>
          </form>
        </Grid>
        <Container maxWidth="md">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.accordion_summary}
            >
              <Typography className={classes.accordion_summary_heading}>
                Use Google’s location service?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordion_details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default HelpAndFaqView;
