import React, { useState } from "react";

import LoginWithOtpStep1View from "./loginwithotpstep1.view";

interface LoginWithOTPStep1Props {
  mobile_no: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendLoginOTP: () => void;
}

const LoginWithOTPStep1: React.FC<LoginWithOTPStep1Props> = ({
  mobile_no,
  handleChange,
  handleSendLoginOTP,
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
    <LoginWithOtpStep1View
      mobile_no={mobile_no}
      handleChange={handleChange}
      handleSendLoginOTP={handleSendLoginOTP}
      errorMobileNo={errorMobileNo}
      seterrorMobileNo={seterrorMobileNo}
      validateMobileNo={validateMobileNo}
    />
  );
};

export default LoginWithOTPStep1;
