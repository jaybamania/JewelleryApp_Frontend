import React from "react";

import { Card, CardContent, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Data } from "../../listingcontrol.model";

import Field from "../Field";

const useStyles = makeStyles({
  fontsize: {
    fontSize: "calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)))",
  },
  root: {
    width: "98%",
    border: "1px solid #000000",
    borderRadius: "10px",
    backgroundColor: "#FAFAFA",
    marginBottom: "1rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 0px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
  },
});

interface ListingControlFormViewProps {
  valueState: {
    metalavailability: string;
    category: string;
    metalpurity: string;
  };
  metal: Data[];
  metalcategory: Data[];
  purity: Data[];
  validateMetalAvailability: () => string;
  validateCategory: () => string;
  validateMetalPurity: () => string;
  storeValues: () => void;
  handleChange: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
}

const ListingControlFormView: React.FC<ListingControlFormViewProps> = ({
  valueState,
  metal,
  metalcategory,
  purity,
  validateMetalAvailability,
  validateCategory,
  validateMetalPurity,
  storeValues,
  handleChange,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="center">
          <Grid item lg={3} xs={12} md={3} sm={4} justify="center">
            <Field
              name="metalavailability"
              label="Metal Availability"
              value={valueState.metalavailability}
              handleChange={handleChange}
              options={metal.map((item) => item.name)}
            />
          </Grid>
          <Grid item lg={3} xs={12} md={3} sm={4} justify="center">
            <Field
              name="category"
              label="Metal Category"
              value={valueState.category}
              handleChange={handleChange}
              options={metalcategory.map((item) => item.name)}
            />
          </Grid>
          <Grid item lg={3} xs={12} md={3} sm={4} justify="center">
            <Field
              name="metalpurity"
              label="Metal Purity"
              value={valueState.metalpurity}
              handleChange={handleChange}
              options={purity.map((item) => item.name)}
            />
          </Grid>
          <Grid item lg={3} xs={12} md={3} sm={3} style={{ marginTop: "1rem" }}>
            <Typography align="center">
              <Button
                type="submit"
                size="large"
                disabled={
                  (validateMetalAvailability() ||
                    validateCategory() ||
                    validateMetalPurity()) === ""
                    ? false
                    : true
                }
                style={{
                  color: "white",
                  borderRadius: "4px",
                }}
                variant="contained"
                color="primary"
                onClick={storeValues}
              >
                {"ADD"}
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ListingControlFormView;
