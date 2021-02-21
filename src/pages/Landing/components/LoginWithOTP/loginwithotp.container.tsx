import React, { useState, useGlobal, useDispatch, useEffect } from "reactn";
import { useHistory } from "react-router-dom";

import {
  sendLoginOTP,
  validateLoginOTP,
  getUserDetail,
} from "../../../../services/apis";

import { setUserDetailReducer } from "../../../../reducers";
import LoginWithOtpView from "./loginwithotp.view";
import { LoginWithOtpDetail } from "../../landing.models";

const LoginWithOTP = () => {
  const history = useHistory();

  const [loginWithOtpDetail, setLoginWithOtpDetail] = useState<
    LoginWithOtpDetail
  >({
    mobile_no: "",
    otp: "",
  });
  const [loginStep, setLoginStep] = useState<number>(0);

  const setIsError = useGlobal("isError")[1];
  const setIsInfo = useGlobal("isInfo")[1];
  const setMessage = useGlobal("message")[1];
  const setBackDropLoading = useGlobal("backDropLoading")[1];
  const setGlobalUserDetail = useDispatch(setUserDetailReducer);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setLoginWithOtpDetail({ ...loginWithOtpDetail, [name]: value });
  };

  // For Sending the OTP for verification
  useEffect(() => {
    if (loginWithOtpDetail.otp.length === 6) {
      setBackDropLoading(true);
      (async () => {
        try {
          await validateLoginOTP(loginWithOtpDetail);
          let userData = await getUserDetail();
          setMessage("Login Success");
          setIsInfo(true);
          setGlobalUserDetail(userData.user || {});
          history.push("/listing/MarketWatch");
        } catch (error) {
          setLoginWithOtpDetail({ ...loginWithOtpDetail, otp: "" });
          if (!error.response) setMessage(error.message);
          else setMessage("Invalid OTP");
          setIsError(true);
        }
        setBackDropLoading(false);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginWithOtpDetail]);

  const handleSendLoginOTP = (): void => {
    (async () => {
      setBackDropLoading(true);
      try {
        await sendLoginOTP({ mobile_no: loginWithOtpDetail.mobile_no });
        setMessage("Login Otp Sended");
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

  return (
    <LoginWithOtpView
      loginStep={loginStep}
      setLoginStep={setLoginStep}
      handleChange={handleChange}
      handleSendLoginOTP={handleSendLoginOTP}
      loginWithOtpDetail={loginWithOtpDetail}
    />
  );
};

export default LoginWithOTP;
