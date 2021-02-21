import React, { useState, useGlobal } from "reactn";

import { Box, Grid, Paper, IconButton } from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

import { updateMetals } from "../../../../../../../../../../services/apis";

interface MetalDisplaycardViewProps {
  value: any;
  key?: any;
  type: number;
  id: number;
  product: string;
}

const MetalDisplaycardView: React.FC<MetalDisplaycardViewProps> = ({
  value,
  type,
  id,
  product,
}) => {
  const setIsError = useGlobal("isError")[1];
  const setIsInfo = useGlobal("isInfo")[1];
  const setMessage = useGlobal("message")[1];
  const [isEditing, setIsEditing] = useState(false);
  const [updateMetalValue, setUpdateMetalValue] = useState(value);
  const [newMetalValue, setNewMetalValue] = useState(value);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdateMetalValue(value);
  };

  const handleSave = () => {
    setIsEditing(false);
    updateMetals(product, id, updateMetalValue)
      .then((message) => {
        setNewMetalValue(updateMetalValue);
        setMessage(message.message);
        setIsInfo(true);
      })
      .catch((message) => {
        setMessage(message.message);
        setIsError(true);
      });
    console.log("UpdateMetalValue : ", updateMetalValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUpdateMetalValue(value);
  };

  return (
    <Paper>
      <Box p={1} my={1}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            {isEditing ? (
              <input value={updateMetalValue} onChange={handleChange} />
            ) : (
              newMetalValue
            )}
          </Grid>
          <Grid item>
            {isEditing ? (
              <>
                <IconButton
                  aria-label="save"
                  color="secondary"
                  onClick={handleSave}
                >
                  <SaveIcon />
                </IconButton>
                <IconButton
                  aria-label="cancel"
                  color="primary"
                  onClick={handleCancel}
                >
                  <CancelIcon />
                </IconButton>
              </>
            ) : (
              <IconButton
                aria-label="edit"
                color="primary"
                onClick={handleEdit}
              >
                <EditIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default MetalDisplaycardView;
