import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 180,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

interface FieldViewProps {
  name: string;
  label: string;
  value: string;
  options: string[];
  handleChange: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
}

const FieldView: React.FC<FieldViewProps> = ({
  name,
  label,
  value,
  handleChange,
  options,
}) => {
  const classes = useStyles();
  //   const [state, setState] = React.useState("");

  //   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //     setAge(event.target.value as string);
  //   };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="">{label}</InputLabel>
      <Select
        labelId=""
        id=""
        value={value}
        onChange={handleChange}
        name={name}
      >
        {options.map((value: any, index: any) => {
          return (
            <MenuItem value={value} key={index}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default FieldView;
