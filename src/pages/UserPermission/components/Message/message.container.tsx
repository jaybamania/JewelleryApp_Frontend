import React, { useEffect, useState } from "react";
import MessageView from "./message.view";
import { sendMessageDetails, getUserPreviewDetail } from "../../../../services/apis";
import { sendMessages } from "../../../../services/models";
import { UserDetail } from "../../userpermission.model";
import { useParams } from "react-router-dom";
interface MessageProps {
  userDetail: UserDetail;
  setUserDetail: React.Dispatch<React.SetStateAction<UserDetail>>;
}
const Messages: React.FC<MessageProps> = ({
  userDetail,
  setUserDetail,
}) => {
  const { id, type } = useParams();
  let dateTime = new Date();
  //Generating Random Number for MessageId
  function getuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)

    }
    return s4() + s4();
  }
  var uid = getuid();
  // dateTime.toLocaleString('en-US', { timeZone: 'India/Bangalore' });
  const initialMessage: sendMessages = {
    id: 0,
    message_content: "",
    current_date: "",
    is_detailed: false,
    name: "",
  };
  const [message, setMessage] = useState(initialMessage);
  const [userpreview, setUserPreview] = useState(userDetail);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage({ ...message, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (type === "seller") {
      getUserPreviewDetail(id)
        .then((result) => {
          setUserPreview(result.user_details);
        })
        .catch((error) => console.log(error));
    } else {
      getUserPreviewDetail(id)
        .then((result) => {
          setUserPreview(result);
        })
        .catch((error) => console.log(error));
    }
  }, [type, id]);
  const handleSubmit = (event: any) => {
    message.id = uid;
    message.name = userpreview.name;
    message.current_date = String(dateTime);
    console.log(message);
    sendMessageDetails(message);
    alert("MEssage Sent Successfully");
    setTimeout("location.reload(true);", 10);
  };
  return (
    <>
      <MessageView
        messages={message}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userDetail={userDetail}
        setUserDetail={setUserDetail}
      />
    </>
  );
};
export default Messages;
