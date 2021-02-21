import React from "react";
import AddStateView from "./addstate.view";

interface AddStateProps {
  handleAddState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newState: string;
  handleNewStateSubmit: () => void;
}

const AddState: React.FC<AddStateProps> = ({
  handleAddState,
  newState,
  handleNewStateSubmit,
}) => {
  return (
    <>
      <AddStateView
        handleAddState={handleAddState}
        newState={newState}
        handleNewStateSubmit={handleNewStateSubmit}
      />
    </>
  );
};
export default AddState;
