import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";

interface AddCityViewProps {
  state: string;
  newCity: string;
  handleAddCity: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNewCitySubmit: (state: string) => void;
}

const AddCityView: React.FC<AddCityViewProps> = ({
  state,
  newCity,
  handleAddCity,
  handleNewCitySubmit,
}) => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <TextField
        variant="outlined"
        label="Add City"
        id="add_city"
        size="small"
        value={newCity}
        onChange={handleAddCity}
      />
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => handleNewCitySubmit(state)}
      >
        ADD
      </Button>
    </Grid>
  );
};
export default AddCityView;
