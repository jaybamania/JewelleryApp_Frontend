import React, { useEffect, useState } from "react";
import { getMyFavorites } from "../../services/apis";
import MyFavouritesView from "./myfavourites.view";
import { MyFavouritesInterface } from "./myfavourites.models";

const MyFavouritesContainer = () => {
  const initialListDetail: MyFavouritesInterface = {
    id: 0,
    company: "",
    branch_city: "",
    branch_country: "",
    branch_pincode: "",
    branch_state: "",
    delivery_time: "",
    geo_latitude: "",
    geo_longitude: "",
    branch_address_line_1: "",
    branch_address_line_2: "",
    mobile_no1: 0,
    mobile_no2: 0,
  };

  const [isLoading, setIsLoading] = useState(true);
  const [myFavourites, setMyFavourites] = useState([initialListDetail]);

  useEffect(() => {
    (async () => {
      const response = await getMyFavorites();
      setMyFavourites(response.results);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) return <h2>loading....</h2>;
  return <MyFavouritesView myFavourites={myFavourites} />;
};

export default MyFavouritesContainer;
