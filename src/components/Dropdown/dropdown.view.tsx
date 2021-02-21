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

interface DropdownProps {
  id: string | undefined;
  value: string;
  name: string | undefined;
  handleChange: (event: any) => void;
  options: string[];
  label: string;
  style: {} | undefined;
  variant?: "filled" | "standard" | "outlined" | undefined;
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
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
    <Grid item xs={12}>
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
          id={id || "demo-simple-select-outlined"}
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
          {options.map((value: any, index: any) => {
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

export default Dropdown;
