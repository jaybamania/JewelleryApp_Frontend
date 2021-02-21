import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { getProductOptions } from "../../services/apis";
import ListingView from "./listing.view";

import { ActiveTradeMetal, ProductOptions } from "./listing.model";

export default function Listing() {
  //Const
  type FilterOptions = {
    [key: string]: number;
  };
  const initialFilterOptions: FilterOptions = {
    purity: NaN,
    m_type: NaN, // metal caterory
    time: NaN,
    pay: NaN,
  };
  const intialProductOptionsValue: ProductOptions = {
    delivery_time: [],
    payment_type: [],
    product_options: {},
    product_options_id: {
      metal: [],
      metal_category: [],
      metal_purity: [],
    },
  };
  const TRADE = ["Buy", "Sell"];
  const initialActiveTradeMetal: ActiveTradeMetal = {
    trade: "",
    metal: "",
  };
  const { trade, metal, id } = useParams();
  const history = useHistory();

  //State
  const [value, setValue] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const [isUpdateList, setIsUpdateList] = useState(true);
  const [filterOptions, setFilterOptions] = useState(initialFilterOptions);
  const [show, setShow] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [productOptions, setProductOptions] = useState(
    intialProductOptionsValue
  );

  const [activeTradeMetal, setActiveTradeMetal] = useState(
    initialActiveTradeMetal
  );

  useEffect(() => {
    getProductOptions()
      .then((result) => {
        console.log(result);
        setProductOptions(result.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  useEffect(() => {
    if (trade && metal && id) {
      if (trade === "Sell") {
        setValue(Math.pow(2, parseInt(id)));
        handleMetalCategoryChange(trade, [parseInt(id), metal]);
      } else if (trade === "Buy") {
        setValue(Math.pow(3, parseInt(id) - 1));
        handleMetalCategoryChange(trade, [parseInt(id) + 1, metal]);
      }
    }
    // eslint-disable-next-line
  }, []);

  //Event Handlers
  useEffect(() => {
    if (
      (filterOptions.purity ||
        filterOptions.m_type ||
        filterOptions.time ||
        filterOptions.pay) &&
      !filterOpen
    ) {
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
  }, [filterOptions, isFilter, filterOpen]);
  const handleChange = (
    event: React.ChangeEvent<{}> | undefined,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const handleMetalCategoryChange = (trade: any, metal: any) => {
    console.log("handleMetalCategoryChange", trade, metal);
    setActiveTradeMetal({
      trade: trade,
      metal: metal[0],
    });
    setIsUpdateList(true);
  };

  const handleFilterCheck = (value: any, attribute: any) => {
    console.log(value, "Attribute", attribute);
    console.log(filterOptions);

    if (value[0] === filterOptions[attribute]) {
      setFilterOptions({ ...filterOptions, [attribute]: NaN });
    } else {
      setFilterOptions({ ...filterOptions, [attribute]: value[0] });
    }
  };

  const handleApplyFilter = () => {
    console.log("Handling Apply Filter");
    setIsUpdateList(true);
    setFilterOpen(false);
  };
  return (
    <>
      <ListingView
        TRADE={TRADE}
        handleApplyFilter={handleApplyFilter}
        handleFilterCheck={handleFilterCheck}
        handleMetalCategoryChange={handleMetalCategoryChange}
        handleChange={handleChange}
        productOptions={productOptions}
        value={value}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        activeTradeMetal={activeTradeMetal}
        isUpdateList={isUpdateList}
        setIsUpdateList={setIsUpdateList}
        filterOptions={filterOptions}
        history={history}
        show={show}
        setShow={setShow}
        isFilter={isFilter}
        setFilterOptions={setFilterOptions}
        initialFilterOptions={initialFilterOptions}
      />
    </>
  );
}
