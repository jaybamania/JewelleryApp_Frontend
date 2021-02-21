import React, { useState, useEffect } from "react";
import NotificationView from "./messagenotifications.view";
import { sendMessages } from "./../../../../services/models";
import { getMessageNotifications } from "../../../../services/apis";
const NotificationContainer = () => {
  const initialNotifications: sendMessages = {
    id: 0,
    message_content: "",
    name: "",
    current_date: "",
    is_detailed: false,
  };
  const [notification, setNotifications] = useState([initialNotifications]);

  // const { id } = useParams();
  useEffect(() => {
    getMessageNotifications()
      .then((result) => {
        setNotifications(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return <NotificationView
    notifications={notification}
  />;
};

export default NotificationContainer;
