import React, { useState, useEffect, useGlobal } from "reactn";
import { useHistory, useRouteMatch } from "react-router-dom";
import MyBidDetailView from "./mybiddetail.view";
import { getMyBids } from "../../services/apis";
import { MyBidInterface } from "./mybid.models";
import { sendMessages } from "./../../services/models";
import { getMessageNotifications, updateMessageDetails } from "../../services/apis";
//import {getMyFavorites} from "../../../services/apis";
const MyBidDetailContainer = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const initialMyBids: MyBidInterface = {
    id: 0,
    bid_user: "",
    bid_product: "",
    bid_price: "",
    is_notified: false,
  };
  const initialNotifications: sendMessages = {
    id: 0,
    message_content: "",
    name: "",
    current_date: "",
    is_detailed: false,
  };
  const [mybids, setMyBids] = useState([initialMyBids]);
  let notices = 0;
  const [notifications, setNotified] = useState(0);
  const [notifiedMsg, setNotifiedMsg] = useState([initialNotifications]);
  const globalUserDetail = useGlobal("userDetail")[0];
  const { name } = globalUserDetail;
  const match = useRouteMatch();

  const handleClick = (event: React.ChangeEvent<HTMLInputElement> | any) => {
    history.push(`/mybids/notifications`);
    for (let i = 0; i < notifiedMsg.length; i++) {
      if (notifiedMsg[i].name === name) {
        notifiedMsg[i].is_detailed = true;
        updateMessageDetails(notifiedMsg[i], notifiedMsg[i].id);
      }
    }
    setNotified(0)
  }
  const handleNotifications = (notifiedMsg: sendMessages[] | any, name: String) => {
    for (let i = 0; i < notifiedMsg.length; i++) {
      if (notifiedMsg[i].name === name) {
        if (notifiedMsg[i].is_detailed === false) {
          notices = notices + 1;
        }
      }
    }
    setNotified(notices);
  }
  useEffect(() => {
    (async () => {
      if ("/mybids" === match.path) {
        getMessageNotifications()
          .then((result) => {
            setNotifiedMsg(result);
            handleNotifications(result, name);
          })
          .catch((error) => console.log(error));
      }
    })();
  },[]);
  useEffect(() => {
    (async () => {
      //const response = await getMyFavorites();
      const response2 = await getMyBids();
      setMyBids(response2);
      setIsLoading(false);
    })();
  }, []);
  // useEffect(() => {
  //   getMessageNotifications()
  //     .then((result) => {
  //       setNotifiedMsg(result);
  //       handleNotifications(result, name);
  //     })
  //     .catch((error) => console.log(error));

  // }, []);

  if (isLoading) return <h2>loading....</h2>;

  return <MyBidDetailView
    mybids={mybids}
    history={history}
    notifications={notifications}
    handleClick={handleClick}
    notifiedMsg={notifiedMsg}
    handleNotifications={handleNotifications} />;
};

export default MyBidDetailContainer;
