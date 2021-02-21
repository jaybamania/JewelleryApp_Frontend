import React, { useEffect, useState } from "react";
import MessageView from "./message.view";
import { sendMessageDetails, getUserPreviewDetail } from "../../../../services/apis";
import { sendMessages } from "../../../../services/models";
import { AdminPreviewDetail } from "../../assignadminpermission.model";
import { useParams } from "react-router-dom";
const Messages = () => {
  const { id } = useParams();
  let dateTime = new Date();
  const initialUserDetail: AdminPreviewDetail = {
    id: 0,
    name: "",
    email: "",
    mobile_no: "",
    is_verified: false,
    is_active: false,
    is_admin: true,
    groups: [],
  };
  const initialMessage: sendMessages = {
    id: 0,
    message_content: "",
    current_date: String(dateTime),
    is_detailed: false,
    name: "",
  };
  const [message, setMessage] = useState(initialMessage);
  const [adminpreview, setUserPreview] = useState(initialUserDetail);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage({ ...message, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    getUserPreviewDetail(id)
      .then((results) => {
        setUserPreview(results);
      })
      .catch((error) => console.log(error));

  }, [id]);
  const handleSubmit = (event: any) => {
    message.name = adminpreview.name;
    sendMessageDetails(message);
    event.preventDefault();
  };
  return (
    <>
      <MessageView
        messages={message}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        adminpreview={adminpreview}
      />
    </>
  );
};
export default Messages;
