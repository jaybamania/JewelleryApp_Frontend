import React, { useState, useEffect, useGlobal } from "reactn";
import StateControlView from "./statecontrol.view";
import { getStateListDetail, addCity } from "../../services/apis";

import { StateData } from "./statecontrol.model";

const StateControl = () => {
  const initialStateData: StateData = {
    id: 0,
    state_name: "",
    city: [],
  };
  const initilaCityData: string[] = [];
  //State
  const setIsError = useGlobal("isError")[1];
  const setIsInfo = useGlobal("isInfo")[1];
  const setMessage = useGlobal("message")[1];
  const [newState, setNewState] = useState("");
  const [newCity, setNewCity] = useState("");
  const [stateData, setStateData] = useState([initialStateData]);
  const [cityData, setCityData] = useState(initilaCityData);
  useEffect(() => {
    getStateListDetail()
      .then((result) => {
        setStateData(result);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleAddState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewState(value);
  };
  const handleNewStateSubmit = () => {
    setStateData([
      ...stateData,
      { id: stateData.length, state_name: newState, city: [] },
    ]);
    setNewState("");
  };
  const handleAddCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewCity(value);
  };
  const handleNewCitySubmit = (state: string) => {
    addCity(state, newCity)
      .then((message) => {
        setStateData([
          ...stateData,
          {
            id: stateData.length,
            state_name: state,
            city: [...cityData, newCity],
          },
        ]);
        setCityData([...cityData, newCity]);
        setMessage(message.message);
        setIsInfo(true);
      })
      .catch((message) => {
        setMessage(message.message);
        setIsError(true);
      });
    setNewCity("");
  };
  return (
    <>
      <StateControlView
        stateData={stateData}
        cityData={cityData}
        setCityData={setCityData}
        handleAddState={handleAddState}
        newState={newState}
        handleNewStateSubmit={handleNewStateSubmit}
        newCity={newCity}
        handleAddCity={handleAddCity}
        handleNewCitySubmit={handleNewCitySubmit}
      />
    </>
  );
};
export default StateControl;
