import React from "react";

import { Grid, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: "1rem",
    margin: "5px",
  },
}));
interface FilterOptionsProps {
  productOptions: any;
  handleFilterCheck: (value: any, attribute: any) => void;
  filterOptions: any;
  handleApplyFilter: () => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({
  productOptions,
  handleFilterCheck,
  filterOptions,
  handleApplyFilter,
}) => {
  const { purity, m_type, time, pay } = filterOptions;
  const classes = useStyles();

  return (
    <>
      <Grid container style={{ marginTop: "15px" }}>
        <Grid item container xs={3}>
          {productOptions.product_options_id.metal_category.map(
            (value: any, index: number) => {
              return (
                <Grid key={index} item xs={12}>
                  <Button
                    className={classes.button}
                    color="primary"
                    variant={value[0] === m_type ? "contained" : "outlined"}
                    onClick={() => handleFilterCheck(value, "m_type")}
                  >
                    {value[1]}
                  </Button>
                </Grid>
              );
            }
          )}
        </Grid>
        <Grid item container xs={3}>
          {productOptions.product_options_id.metal_purity.map(
            (value: any, index: number) => {
              return (
                <Grid key={index} item xs={12}>
                  <Button
                    className={classes.button}
                    color="primary"
                    variant={value[0] === purity ? "contained" : "outlined"}
                    onClick={() => handleFilterCheck(value, "purity")}
                  >
                    {value[1]}
                  </Button>
                </Grid>
              );
            }
          )}
        </Grid>
        <Grid item container xs={3}>
          {productOptions.delivery_time.map((value: any, index: number) => {
            return (
              <Grid key={index} item xs={12}>
                <Button
                  className={classes.button}
                  color="primary"
                  variant={value[0] === time ? "contained" : "outlined"}
                  onClick={() => handleFilterCheck(value, "time")}
                >
                  {value[1]}
                </Button>
              </Grid>
            );
          })}
        </Grid>
        <Grid item container xs={3}>
          {productOptions.payment_type.map((value: any, index: number) => {
            return (
              <Grid key={index} item xs={12}>
                <Button
                  className={classes.button}
                  color="primary"
                  variant={value[0] === pay ? "contained" : "outlined"}
                  onClick={() => handleFilterCheck(value, "pay")}
                >
                  {value[1]}
                </Button>
              </Grid>
            );
          })}
        </Grid>
        <Grid item container justify="flex-end" xs={12}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="small"
            onClick={handleApplyFilter}
          >
            Apply
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FilterOptions;
