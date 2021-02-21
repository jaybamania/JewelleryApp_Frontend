import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getStoreDetail, setStoreFavorite } from "../../services/apis";

import StoreProfileView from "./storeprofile.view";

import { Item } from "./storeprofile.model";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const StoreProfile = () => {
  //Const
  const query = useQuery();
  const storeId = parseInt(query.get("store") || "");
  const item: Item = {
    id: "",
    trade: "",
    payment_type: "",
    Cash: "",
    premium_value: "",
    delivery_time: "",
  };
  let initialStoreDetail: any;

  //State
  const [selectedCard, setSelectedCard] = useState(item);
  const [productListing, setProductListing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [storeDetail, setStoreDetail] = useState(initialStoreDetail);
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    getStoreDetail(storeId)
      .then((result) => {
        console.log("Result Store Detail", result);
        setProductListing(result["list_details"]);
        setStoreDetail(result["store_details"]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Event Handlers
  const setProductColor = (trade: any) => {
    if (trade === "BUY") {
      return "green";
    }
    return "red";
  };
  const handleMakingFavorite = () => {
    (async () => {
      const response = await setStoreFavorite(
        storeDetail.details.id,
        !storeDetail.is_favourite
      );
      setStoreDetail({
        ...storeDetail,
        is_favourite: !storeDetail.is_favourite,
      });
      console.log("Response : ", response);
    })();
    console.log("For making Favorite");
  };

  return (
    <>
      <StoreProfileView
        isLoading={isLoading}
        show={show}
        setShow={setShow}
        productListing={productListing}
        storeDetail={storeDetail}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        color={color}
        setColor={setColor}
        setProductColor={setProductColor}
        handleMakingFavorite={handleMakingFavorite}
      />
    </>
  );
};

export default StoreProfile;
