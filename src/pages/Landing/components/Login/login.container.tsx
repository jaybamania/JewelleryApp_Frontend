import React, { useState, useGlobal, useDispatch } from "reactn";
import { useHistory } from "react-router-dom";

import { login, getUserDetail } from "../../../../services/apis";
import { setUserDetailReducer } from "../../../../reducers";

import LoginView from "./login.view";
import { LoginDetail } from "../../landing.models";

const Login = () => {
  const history = useHistory();

  const setIsError = useGlobal("isError")[1];
  const setIsInfo = useGlobal("isInfo")[1];
  const setMessage = useGlobal("message")[1];
  const setGlobalUserDetail = useDispatch(setUserDetailReducer);

  const [loginDetail, setUserDetail] = useState<LoginDetail>({
    mobile_no: "",
    password: "",
  });

  const [errorMobileNo, seterrorMobileNo] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    setUserDetail({ ...loginDetail, [name]: value });
  };

  const handleSubmit = (): void => {
    (async () => {
      try {
        await login(loginDetail);
        const userData = await getUserDetail();
        setMessage("Login Success");
        setIsInfo(true);
        setGlobalUserDetail(userData.user || {});

        history.push("/listing/MarketWatch");
      } catch (error) {
        if (!error.response) setMessage(error.message);
        else setMessage(error.response.data.detail);
        setIsError(true);
      }
    })();
  };

  function validateMobileNo() {
    let error;
    if (!loginDetail.mobile_no) {
      error = "Required";
    } else if (!loginDetail.mobile_no.match(/^\d{10}$/)) {
      error = "Invalid Mobile Number";
    }
    return error;
  }

  function validatePassword() {
    if (!loginDetail.password) {
      return "Required";
    }
  }

  const handleClickShowPassword = (): void => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

  return (
    <LoginView
      loginDetail={loginDetail}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      validateMobileNo={validateMobileNo}
      validatePassword={validatePassword}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      errorMobileNo={errorMobileNo}
      seterrorMobileNo={seterrorMobileNo}
      showPass={showPass}
    />
  );
};

export default Login;
