import React from "react";

import CardView from "./card.view";
import { StateCommodity, Data } from "../../listingcontrol.model";

interface CardProps {
  state: string;
  stateCommodity: StateCommodity;
  handleIsActive: (commodity: StateCommodity) => void;
  handleDelete: (commodity: StateCommodity, value: string) => void;
  handleAdd: (commodity: StateCommodity) => void;
  anchorEl: any;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
  purity: Data[];
  handleNewPurity: (value: string) => void;
}

const Card: React.FC<CardProps> = ({
  state,
  stateCommodity,
  handleIsActive,
  handleDelete,
  handleAdd,
  anchorEl,
  handleClick,
  handleClose,
  purity,
  handleNewPurity,
}) => {
  const handleChange = (): void => {};
  return (
    <CardView
      state={state}
      handleChange={handleChange}
      handleIsActive={handleIsActive}
      stateCommodity={stateCommodity}
      handleDelete={handleDelete}
      handleAdd={handleAdd}
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
      purity={purity}
      handleNewPurity={handleNewPurity}
    />
  );
};

export default Card;
