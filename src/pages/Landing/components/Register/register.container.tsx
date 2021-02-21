import React, { useState, useGlobal, useDispatch } from "reactn";
import { useHistory } from "react-router-dom";

import { register, getUserDetail } from "../../../../services/apis";
import { setUserDetailReducer } from "../../../../reducers";
import RegisterView from "./register.view";

import { RegisterDetail } from "../../landing.models";

const Register: React.FC = () => {
  const setIsError = useGlobal("isError")[1];
  const setIsInfo = useGlobal("isInfo")[1];
  const setMessage = useGlobal("message")[1];
  const setGlobalUserDetail = useDispatch(setUserDetailReducer);

  const history = useHistory();

  const [registerDetail, setRegisterDetail] = useState<RegisterDetail>({
    name: "",
    firm_name: "",
    mobile_no: "",
    country_code: "+91",
    is_seller: false,
    country: "India",
    state: "",
    city: "",
    is_terms_and_condition_readed: false,
    password: "",
  });

  const [registerStep, setRegisterStep] = useState(0);

  const handleChange = (event: any): void => {
    let { name, value } = event.target;
    if (name === "is_seller" || name === "is_terms_and_condition_readed") {
      value = event.target.checked;
    }
    setRegisterDetail({ ...registerDetail, [name]: value });
  };

  const handleNextStep = (): void => {
    setRegisterStep(registerStep + 1);
  };

  const handlePreviousStep = (): void => {
    setRegisterStep(registerStep - 1);
  };

  const handleSubmit = (password: string): void => {
    (async () => {
      try {
        registerDetail["password"] = password;
        await register(registerDetail);
        let userData = await getUserDetail();

        setMessage("Registration successfully done");
        setIsInfo(true);
        setGlobalUserDetail(userData.user || {});
        console.log(userData);

        history.push("/listing/MarketWatch");
      } catch (error) {
        // console.dir(error);
        if (!error.response) setMessage(error.message);
        else if (error.response.data.detail)
          setMessage(error.response.data.detail);
        else if (error.response.data.mobile_no)
          setMessage("Mobile number should be unique.");
        setIsError(true);
      }
    })();
  };

  return (
    <RegisterView
      registerStep={registerStep}
      registerDetail={registerDetail}
      handleChange={handleChange}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      handleSubmit={handleSubmit}
    />
  );
};

export default Register;
