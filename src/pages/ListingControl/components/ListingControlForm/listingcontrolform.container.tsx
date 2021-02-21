import React from "react";
import { useParams } from "react-router-dom";
import FormView from "./listingcontrolform.view";
import { addStateCommodity } from "../../../../services/apis";
import { Data } from "../../listingcontrol.model";

interface FormProps {
  metal: Data[];
  metalcategory: Data[];
  purity: Data[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  update: boolean;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  valueState: any;
  setValueState: React.Dispatch<React.SetStateAction<any>>;
}

const Form: React.FC<FormProps> = ({
  metal,
  metalcategory,
  purity,
  setOpen,
  update,
  setUpdate,
  valueState,
  setValueState,
}) => {
  const { id } = useParams();
  const validateMetalAvailability = (): string =>
    !valueState.metalavailability ? "Required" : "";

  const validateCategory = (): string =>
    !valueState.category ? "Required" : "";

  const validateMetalPurity = (): string =>
    !valueState.metalpurity ? "Required" : "";

  const storeValues = () => {
    const metal_id: number = metal.filter(
      (item) => item.name === valueState.metalavailability
    )[0].id;
    const metal_category_id: number = metalcategory.filter(
      (item) => item.name === valueState.category
    )[0].id;
    const purity_id: number[] = [
      purity.filter((item) => item.name === valueState.metalpurity)[0].id,
    ];

    console.log("Values", valueState);
    addStateCommodity({
      state_id: id,
      metal: metal_id,
      metal_category: metal_category_id,
      metal_purity: purity_id,
    })
      .then(() => {
        setValueState({
          metalavailability: "",
          category: "",
          metalpurity: "",
        });
        setUpdate(!update);
        setOpen(false);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (
    event: React.ChangeEvent<{
      // TODO: remove any type::  name?: string | undefined;
      name?: any;
      value: unknown;
    }>
  ): void => {
    let { name, value } = event.target;
    if (name !== undefined) {
      setValueState((prevValue: any) => ({
        ...prevValue,
        [name]: value,
      }));
    }
  };

  return (
    <FormView
      valueState={valueState}
      metal={metal}
      metalcategory={metalcategory}
      purity={purity}
      validateMetalAvailability={validateMetalAvailability}
      validateCategory={validateCategory}
      validateMetalPurity={validateMetalPurity}
      storeValues={storeValues}
      handleChange={handleChange}
    />
  );
};

export default Form;
