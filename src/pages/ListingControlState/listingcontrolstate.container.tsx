import React, { useState, useEffect } from "react";
import ListingControlStateView from "./listingcontrolstate.view";

import { getStateListDetail } from "../../services/apis";

import { StateData } from "./listingcontrolstate.model";

const ListingControlState = () => {
  const initialStateData: StateData = {
    id: 0,
    state_name: "",
    city: [],
  };
  const [stateData, setStateData] = useState([initialStateData]);
  useEffect(() => {
    getStateListDetail()
      .then((result) => {
        setStateData(result);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <ListingControlStateView stateData={stateData} />
    </>
  );
};
export default ListingControlState;
