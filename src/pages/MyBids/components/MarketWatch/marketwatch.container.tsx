import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MarketWatchView from "./marketwatch.view";
import { getMyBids } from "../../../../services/apis";
import { MyBidInterface } from "./marketwatch.models";
//import {getMyFavorites} from "../../../services/apis";
const MarketWatchContainer = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const initialMyBids: MyBidInterface = {
    id: 0,
    bid_user: "",
    bid_product: "",
    bid_price: "",
    is_notified: false,
  };
  const [mybids, setMyBids] = useState([initialMyBids]);

  useEffect(() => {
    (async () => {
      //const response = await getMyFavorites();
      const response2 = await getMyBids();
      setMyBids(response2);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) return <h2>loading....</h2>;

  return <MarketWatchView
    mybids={mybids}
    history={history} />;
};

export default MarketWatchContainer;
