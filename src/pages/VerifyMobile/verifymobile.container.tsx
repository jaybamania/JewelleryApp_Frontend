import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { verifyOtp } from "../../services/apis";
import VerifyMobileView from "./verifymobile.view";

import { HandleOtpEvent } from "./verifymobile.model";

const VerifyMobile: React.FC = () => {
  const history = useHistory();
  const [message, setMessage] = useState("");

  const handleOtp = (event: HandleOtpEvent) => {
    const { name, value } = event.target;
    if (name === "otp" && value.length === 6) {
      verifyOtp(value)
        .then((result) => {
          setMessage(result.message);
          setTimeout(() => {
            history.push("/listing");
          }, 3000);
        })
        .catch((error) => {
          setMessage(error.message);
        });
    }
  };

  return <VerifyMobileView message={message} handleOtp={handleOtp} />;
};
export default VerifyMobile;
