import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListingControlView from "./listingcontrol.view";
import {
  getStateCommodity,
  updateStateCommodity,
  getMetals,
} from "../../services/apis";
import { StateCommodity, Data } from "./listingcontrol.model";

const ListingControl = () => {
  //Const
  const { state, id } = useParams();
  const initOpen: boolean = false;
  const initialStateCommodity: StateCommodity = {
    id: 0,
    metal: "",
    metal_category: "",
    purity: [],
    is_active: false,
  };
  const initialData: Data = {
    id: 0,
    name: "",
  };
  //State
  const [open, setOpen] = useState(initOpen);
  const [stateCommodity, setStateCommodity] = useState([initialStateCommodity]);
  const [purityCommodity, setPurityCommodity] = useState(initialStateCommodity);
  const [metal, setMetal] = useState([initialData]);
  const [metalcategory, setMetalCategory] = useState([initialData]);
  const [purity, setPurity] = useState([initialData]);
  const [update, setUpdate] = useState(false);
  const [valueState, setValueState] = useState({
    metalavailability: "",
    category: "",
    metalpurity: "",
  });
  //Event Handlers
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const addRelation = () => {
    if (open === false) {
      setOpen(true);
      setValueState({
        metalavailability: "",
        category: "",
        metalpurity: "",
      });
    } else {
      setOpen(false);
    }
  };
  // const handleAddPurity
  const handleAdd = (commodity: StateCommodity) => {
    setPurityCommodity(commodity);
  };
  const handleNewPurity = (value: any) => {
    const item_id: number = purityCommodity.id;
    const metal_id: number = metal.filter(
      (item) => item.name === purityCommodity.metal
    )[0].id;
    const metal_category_id: number = metalcategory.filter(
      (item) => item.name === purityCommodity.metal_category
    )[0].id;
    const purity_id: number[] = purityCommodity.purity
      .map((com) => {
        const pur: Data[] = purity.filter((item) => item.name === com);
        return pur[0];
      })
      .map((data) => data.id);
    setAnchorEl(null);
    updateStateCommodity(item_id, {
      state_id: id,
      metal: metal_id,
      metal_category: metal_category_id,
      metal_purity: [
        ...purity_id,
        purity.filter((item) => item.name === value)[0].id,
      ],
      is_active: purityCommodity.is_active,
    })
      .then(() => {
        setUpdate(!update);
        setPurityCommodity(initialStateCommodity);
        setOpen(false);
      })
      .catch((error) => console.log(error));
  };
  const handleDelete = (commodity: StateCommodity, value: any) => {
    const item_id: number = commodity.id;
    const metal_id: number = metal.filter(
      (item) => item.name === commodity.metal
    )[0].id;
    const metal_category_id: number = metalcategory.filter(
      (item) => item.name === commodity.metal_category
    )[0].id;
    const purity_id: number[] = commodity.purity
      .map((com) => {
        const pur: Data[] = purity.filter((item) => item.name === com);
        return pur[0];
      })
      .map((data) => data.id);
    const e: number = purity.map((data) => data.name).indexOf(value) + 1;
    updateStateCommodity(item_id, {
      state_id: id,
      metal: metal_id,
      metal_category: metal_category_id,
      metal_purity: purity_id.filter((data) => data !== e),
      is_active: commodity.is_active,
    })
      .then(() => {
        setUpdate(!update);
      })
      .catch((error) => console.log(error));
  };
  const handleIsActive = (commodity: StateCommodity) => {
    const item_id: number = commodity.id;
    const metal_id: number = metal.filter(
      (item) => item.name === commodity.metal
    )[0].id;
    const metal_category_id: number = metalcategory.filter(
      (item) => item.name === commodity.metal_category
    )[0].id;
    const purity_id: number[] = commodity.purity
      .map((com) => {
        const pur: Data[] = purity.filter((item) => item.name === com);
        return pur[0];
      })
      .map((data) => data.id);
    updateStateCommodity(item_id, {
      state_id: id,
      metal: metal_id,
      metal_category: metal_category_id,
      metal_purity: purity_id,
      is_active: !commodity.is_active,
    })
      .then(() => {
        setUpdate(!update);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getStateCommodity(id)
      .then((result) => {
        setStateCommodity(result);
      })
      .catch((error) => console.log(error));
  }, [id, update]);
  useEffect(() => {
    getMetals("metal")
      .then((result: any) => {
        setMetal(result);
      })
      .catch((error) => console.log(error));
    getMetals("metalcategory")
      .then((result: any) => {
        setMetalCategory(result);
      })
      .catch((error) => console.log(error));
    getMetals("metalpurity")
      .then((result: any) => {
        setPurity(result);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <ListingControlView
      open={open}
      addRelation={addRelation}
      state={state}
      id={id}
      stateCommodity={stateCommodity}
      handleIsActive={handleIsActive}
      metal={metal}
      metalcategory={metalcategory}
      purity={purity}
      setOpen={setOpen}
      update={update}
      setUpdate={setUpdate}
      handleDelete={handleDelete}
      valueState={valueState}
      setValueState={setValueState}
      handleAdd={handleAdd}
      handleNewPurity={handleNewPurity}
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  );
};

export default ListingControl;
