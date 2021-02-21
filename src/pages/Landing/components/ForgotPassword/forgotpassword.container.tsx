import React, { useState, useGlobal, useEffect } from "reactn";
import { useHistory } from "react-router-dom";

import {
  resetPasswordWithOtp,
  sendForgotPasswordOTP,
  validateForgotPasswordOTP,
} from "../../../../services/apis";
import ForgotPasswordView from "./forgotpassword.view";
import { ForgotPasswordDetail } from "../../landing.models";

const ForgotPassword: React.FC = () => {
  const [forgotPasswordDetail, setForgotPasswordDetail] = useState<
    ForgotPasswordDetail
  >({
    mobile_no: "",
    otp: "",
    password: "",
  });

  const [loginStep, setLoginStep] = useState<number>(0);
  const setIsError = useGlobal("isError")[1];
  const setIsInfo = useGlobal("isInfo")[1];
  const setMessage = useGlobal("message")[1];
  const setBackDropLoading = useGlobal("backDropLoading")[1];

  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    setForgotPasswordDetail({ ...forgotPasswordDetail, [name]: value });
  };

  // For Sending the OTP for verification
  useEffect(() => {
    if (forgotPasswordDetail.otp.length === 6) {
      setBackDropLoading(true);
      (async () => {
        try {
          await validateForgotPasswordOTP({
            mobile_no: forgotPasswordDetail.mobile_no,
            otp: forgotPasswordDetail.otp,
          });
          setMessage("Otp Verified");
          setIsInfo(true);
          setLoginStep(2);
        } catch (error) {
          setForgotPasswordDetail({ ...forgotPasswordDetail, otp: "" });
          if (!error.response) setMessage(error.message);
          else setMessage("Invalid OTP");
          setIsError(true);
        }
        setBackDropLoading(false);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forgotPasswordDetail]);

  const handleSendForgotPasswordOTP = (): void => {
    (async () => {
      setBackDropLoading(true);
      try {
        await sendForgotPasswordOTP({
          mobile_no: forgotPasswordDetail.mobile_no,
        });
        setMessage("Otp Sended");
        setIsInfo(true);
        setLoginStep(1);
      } catch (error) {
        if (!error.response) setMessage(error.message);
        else setMessage(error.response.data.message);
        setIsError(true);
      }
      setBackDropLoading(false);
    })();
  };

  const handleResetPassword = (password: string): void => {
    (async () => {
      setBackDropLoading(true);
      try {
        await resetPasswordWithOtp({
          mobile_no: forgotPasswordDetail.mobile_no,
          password,
        });
        setMessage("Password reset done");
        setIsInfo(true);
        setLoginStep(1);
        history.push("/login");
      } catch (error) {
        if (!error.response) setMessage(error.message);
        else setMessage(error.response.data.message);
        setIsError(true);
      }
      setBackDropLoading(false);
    })();
  };

  return (
    <ForgotPasswordView
      forgotPasswordDetail={forgotPasswordDetail}
      handleChange={handleChange}
      handleSendForgotPasswordOTP={handleSendForgotPasswordOTP}
      handleResetPassword={handleResetPassword}
      loginStep={loginStep}
      setLoginStep={setLoginStep}
    />
  );
};

export default ForgotPassword;
