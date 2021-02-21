import React from "react";
import StateListView from "./statelist.view";
import { StateData } from "../../statecontrol.model";

interface StateListProps {
  stateData: StateData[];
  setCityData: React.Dispatch<React.SetStateAction<string[]>>;
}

const StateList: React.FC<StateListProps> = ({ stateData, setCityData }) => {
  return (
    <>
      <StateListView stateData={stateData} setCityData={setCityData} />
    </>
  );
};
export default StateList;
