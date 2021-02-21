import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";

interface AddStateViewProps {
  handleAddState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newState: string;
  handleNewStateSubmit: () => void;
}

const AddStateView: React.FC<AddStateViewProps> = ({
  handleAddState,
  newState,
  handleNewStateSubmit,
}) => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <TextField
        variant="outlined"
        label="Add State"
        id="add_state"
        size="small"
        value={newState}
        onChange={handleAddState}
      />
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => handleNewStateSubmit()}
      >
        ADD
      </Button>
    </Grid>
  );
};
export default AddStateView;
