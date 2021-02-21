import React from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  makeStyles,
  createStyles,
  Theme,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      textAlign: "center",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

interface MyDropDownView {
  value: string;
  name: string;
  handleChange: (
    event: React.ChangeEvent<{ value: unknown; name?: string | undefined }>
  ) => void;
  options: any;
  label?: string;
  style?: any;
  variant?: any;
}

const MyDropDownView: React.FC<MyDropDownView> = ({
  value,
  name,
  handleChange,
  options,
  label,
  style,
  variant,
}) => {
  const classes = useStyles();
  variant = variant || "outlined";

  return (
    <Grid item xs={12} sm={4}>
      <FormControl
        variant={variant}
        className={classes.formControl}
        size="small"
        style={style || { minWidth: "90%" }}
      >
        {label && (
          <InputLabel id="demo-simple-select-outlined-label">
            {label}
          </InputLabel>
        )}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
          name={name}
          label={label}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
        >
          {options.map((value: any, index: number) => {
            if (value instanceof Array) {
              return (
                <MenuItem key={index} dense selected value={value[0]}>
                  {value[1]}
                </MenuItem>
              );
            } else {
              return (
                <MenuItem key={index} dense selected value={value}>
                  {value}
                </MenuItem>
              );
            }
          })}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default MyDropDownView;
