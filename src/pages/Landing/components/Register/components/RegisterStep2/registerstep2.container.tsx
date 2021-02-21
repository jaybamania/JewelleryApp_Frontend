import React, { useState, useEffect } from "react";

import RegisterStep2View from "./registerstep2.view";
import { RegisterDetail, StateList } from "../../../../landing.models";
import { getStateListDetail } from "../../../../../../services/apis";
interface RegisterStep2Props {
  registerDetail: RegisterDetail;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const RegisterStep2: React.FC<RegisterStep2Props> = ({
  registerDetail,
  handlePreviousStep,
  handleChange,
  handleNextStep,
}) => {
  //Const
  const { state, city, is_terms_and_condition_readed } = registerDetail;
  const initialStateList: StateList = {
    id: 0,
    state_name: "",
    city: [],
  };
  const [stateList, setStateData] = useState([initialStateList]);
  const [cityData, setCityData] = useState([]);
  //Event Handlers
  useEffect(() => {
    getStateListDetail()
      .then((result) => {
        setStateData(result);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: any = stateList.filter(
      (data) => data.state_name === event.target.value
    );
    setCityData(value[0].city);
    handleChange(event);
  };
  const validateState = () =>
    !state ? "Enter the state before procceding" : undefined;

  const validateCity = () =>
    !city ? "Enter the city before procceding" : undefined;

  const validateCheckTerms = () =>
    !is_terms_and_condition_readed ? "Read terms & conditions" : undefined;

  return (
    <RegisterStep2View
      registerDetail={registerDetail}
      handleChange={handleChange}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      validateState={validateState}
      validateCity={validateCity}
      validateCheckTerms={validateCheckTerms}
      handleStateChange={handleStateChange}
      stateList={stateList}
      cityData={cityData}
    />
  );
};

export default RegisterStep2;
