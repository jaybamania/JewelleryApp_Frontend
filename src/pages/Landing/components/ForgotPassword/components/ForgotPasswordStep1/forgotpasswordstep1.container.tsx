import React, { useState } from "react";

import ForgotPasswordStep1View from "./forgotpasswordstep1.view";

interface ForgotPasswordStep1Props {
  mobile_no: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendForgotPasswordOTP: () => void;
}

const ForgotPasswordStep1: React.FC<ForgotPasswordStep1Props> = ({
  mobile_no,
  handleChange,
  handleSendForgotPasswordOTP,
}) => {
  const [errorMobileNo, seterrorMobileNo] = useState<boolean>(false);

  const validateMobileNo = () => {
    if (!mobile_no) {
      return "Required";
    } else if (!mobile_no.match(/^\d{10}$/)) {
      return "Invalid Mobile Number";
    }
  };

  return (
    <ForgotPasswordStep1View
      mobile_no={mobile_no}
      validateMobileNo={validateMobileNo}
      errorMobileNo={errorMobileNo}
      seterrorMobileNo={seterrorMobileNo}
      handleChange={handleChange}
      handleSendForgotPasswordOTP={handleSendForgotPasswordOTP}
    />
  );
};

export default ForgotPasswordStep1;
