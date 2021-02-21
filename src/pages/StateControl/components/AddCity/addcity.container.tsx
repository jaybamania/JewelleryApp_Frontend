import React from "react";
import AddCityView from "./addcity.view";

interface AddCityProps {
  state: string;
  newCity: string;
  handleAddCity: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNewCitySubmit: (state: string) => void;
}

const AddCity: React.FC<AddCityProps> = ({
  state,
  newCity,
  handleAddCity,
  handleNewCitySubmit,
}) => {
  return (
    <>
      <AddCityView
        state={state}
        newCity={newCity}
        handleAddCity={handleAddCity}
        handleNewCitySubmit={handleNewCitySubmit}
      />
    </>
  );
};
export default AddCity;
