import React from "react";

import { Grid, TextField, Button } from "@material-ui/core";

interface AddMetalFormViewProps {
  newData: string;
  handleChange: any;
  handleAddMetal: any;
  product: string;
}

const AddMetalFormView: React.FC<AddMetalFormViewProps> = ({
  newData,
  handleChange,
  handleAddMetal,
  product,
}) => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6} md={5}>
        <TextField
          id={product}
          label={product}
          variant="outlined"
          size="small"
          value={newData}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleAddMetal}>
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddMetalFormView;
