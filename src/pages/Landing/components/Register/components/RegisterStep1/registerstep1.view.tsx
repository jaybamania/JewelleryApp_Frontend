import React from "react";

import { TextField, CheckboxWithLabel } from "formik-material-ui";
import { Button, Typography, Grid } from "@material-ui/core";
import { Formik, Field, Form } from "formik";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { RegisterDetail } from "../../../../landing.models";

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

interface Step1ViewProps {
  validateName: () => string;
  validateFirmName: () => string;
  validateMobileNo: () => string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
  registerDetail: RegisterDetail;
}

const Step1View: React.FC<Step1ViewProps> = ({
  validateName,
  validateFirmName,
  validateMobileNo,
  handleChange,
  handleNextStep,
  registerDetail,
}) => {
  const classes = useStyles();
  const {
    name,
    firm_name,
    country_code,
    mobile_no,
    is_seller,
  } = registerDetail;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.heading}>
          Join us for FREE
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Formik
          initialValues={{
            name: "",
            firm_name: "",
            country_code: "+91",
            mobile_no: "",
            is_seller: false,
          }}
          onSubmit={() => { }}
        >
          <Form autoComplete="off">
            <Grid container spacing={2} style={{ minHeight: "35vh" }}>
              <Grid item xs={12} container justify="space-around" spacing={2}>
                <Grid item xs={10} sm={5}>
                  <Field
                    component={TextField}
                    value={name}
                    name="name"
                    onChange={handleChange}
                    size="small"
                    id="full_name"
                    label="Full Name"
                    variant="outlined"
                    validate={validateName}
                    className={classes.inputField}
                  />
                </Grid>
                <Grid item xs={10} sm={5}>
                  <Field
                    component={TextField}
                    id="farm_name"
                    label="Firm Name"
                    value={firm_name}
                    variant="outlined"
                    name="firm_name"
                    onChange={handleChange}
                    size="small"
                    validate={validateFirmName}
                    className={classes.inputField}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} container justify="center">
                <Grid item xs={2}>
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
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    id="mobile_no"
                    name="mobile_no"
                    type="number"
                    value={mobile_no}
                    onChange={handleChange}
                    label="Mobile Number"
                    variant="outlined"
                    size="small"
                    validate={validateMobileNo}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Field
                  component={CheckboxWithLabel}
                  checked={is_seller}
                  name="is_seller"
                  type="checkbox"
                  onChange={handleChange}
                  color="primary"
                  size="small"
                  Label={{ label: "I am a bullion Dealer" }}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNextStep}
                  disabled={
                    (validateName() ||
                      validateFirmName() ||
                      validateMobileNo()) === ""
                      ? false
                      : true
                  }
                  style={{ padding: "4px 2rem" }}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default Step1View;
