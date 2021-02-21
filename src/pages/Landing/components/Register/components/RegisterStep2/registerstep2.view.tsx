import React from "react";

import { Button, Typography, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { TextField, CheckboxWithLabel } from "formik-material-ui";
import { Formik, Field, Form } from "formik";
import { RegisterDetail, StateList } from "../../../../landing.models";

import Dropdown from "../../../../../../components/Dropdown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    inputField: {
      width: "100%",
    },
    country_code: {
      "& > *": {
        width: "7ch",
      },
    },
  })
);

interface RegisterStep2ViewProps {
  registerDetail: RegisterDetail;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleStateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  validateState: () => string | undefined;
  validateCity: () => string | undefined;
  validateCheckTerms: () => string | undefined;
  stateList: StateList[];
  cityData: string[];
}

const RegisterStep2View: React.FC<RegisterStep2ViewProps> = ({
  handlePreviousStep,
  handleChange,
  handleNextStep,
  validateState,
  validateCity,
  validateCheckTerms,
  registerDetail,
  handleStateChange,
  stateList,
  cityData,
}) => {
  const classes = useStyles();
  const {
    country_code,
    country,
    state,
    city,
    is_terms_and_condition_readed,
  } = registerDetail;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.heading}>
          Enter Location
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Formik
          initialValues={{
            country_code,
            country,
            state,
            city,
            is_terms_and_condition_readed,
          }}
          onSubmit={() => {}}
        >
          <Form autoComplete="off">
            <Grid
              container
              spacing={2}
              justify="center"
              style={{ minHeight: "35vh" }}
            >
              <Grid item xs={12} container justify="center">
                <Grid xs={2} item>
                  <Field
                    component={TextField}
                    id="country_code"
                    name="country_code"
                    className={classes.country_code}
                    label=""
                    value={country_code}
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid xs={8} sm={6} item>
                  <Field
                    component={TextField}
                    id="country"
                    label="Country"
                    variant="outlined"
                    value={country}
                    InputProps={{ readOnly: true }}
                    name="country"
                    size="small"
                    className={classes.inputField}
                  />
                </Grid>
              </Grid>
              <Grid item xs={10} sm={8} md={7}>
                <Dropdown
                  value={state}
                  id="state"
                  name="state"
                  handleChange={handleStateChange}
                  options={stateList.map(({ state_name }) => state_name)}
                  label="State"
                  variant="outlined"
                  style={{
                    minWidth: "300px",
                  }}
                />
              </Grid>
              <Grid item xs={10} sm={8} md={7}>
                <Dropdown
                  value={city}
                  id="city"
                  name="city"
                  handleChange={handleChange}
                  options={cityData}
                  label="City"
                  variant="outlined"
                  style={{
                    minWidth: "300px",
                  }}
                />
              </Grid>
              <Grid item xs={10} sm={8} md={7}>
                <Field
                  component={CheckboxWithLabel}
                  checked={is_terms_and_condition_readed}
                  name="is_terms_and_condition_readed"
                  onChange={handleChange}
                  type="checkbox"
                  color="primary"
                  size="small"
                  validate={validateCheckTerms}
                />
                <span>
                  I have read and agree to the{" "}
                  <a href="/termsandconditions" target="_blank">
                    Terms &amp; Conditions
                  </a>
                </span>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justify="space-around"
                spacing={2}
                style={{ marginTop: "1rem" }}
              >
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePreviousStep}
                    className={classes.inputField}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextStep}
                    className={classes.inputField}
                    disabled={
                      (validateState() ||
                        validateCity() ||
                        validateCheckTerms()) === undefined
                        ? false
                        : true
                    }
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default RegisterStep2View;
