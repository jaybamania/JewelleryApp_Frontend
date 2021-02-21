import React, { useEffect, useState } from "react";
import { getProductListings } from "../../../../services/apis";
import FilterTabPanelView from "./filtertabpanel.view";

import { ListDetail } from "../../listing.model";

const FilterTabPanel = ({
  activeTradeMetal,
  filterOptions,
  setIsUpdateList,
  isUpdateList,
  show,
  setShow,
}: any) => {
  //Const
  const initialListDetail: ListDetail = {
    delivery_time: "",
    id: 0,
    metal: "",
    metal_category: "",
    metal_purity: "",
    payment_type: "",
    premium_type: "",
    premium_value: 0,
    trade: "",
  };

  //State
  const [productListing, setproductListing] = useState([initialListDetail]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(initialListDetail);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (isUpdateList) {
      console.log("Updating list...");
      getProductListing();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdateList]);

  const getProductListing = () => {
    const query: any = {
      metal: activeTradeMetal.metal,
      trade: activeTradeMetal.trade,
    };

    console.log("Filter Options", filterOptions);
    for (const name in filterOptions) {
      if (!isNaN(filterOptions[name])) {
        query[name] = filterOptions[name];
      }
    }
    console.log(query);
    getProductListings(query)
      .then((result) => {
        console.log("Result", result.results);
        setproductListing(result.results);
        setIsUpdateList(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <>
      <FilterTabPanelView
        isLoading={isLoading}
        productListing={productListing}
        show={show}
        setShow={setShow}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        color={color}
        setColor={setColor}
      />
    </>
  );
};
export default FilterTabPanel;
