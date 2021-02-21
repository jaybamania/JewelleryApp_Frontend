import React from "react";

import RegisterStep1View from "./registerstep1.view";
import { RegisterDetail } from "../../../../landing.models";

interface RegisterStep1Props {
  registerDetail: RegisterDetail;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
}

const RegisterStep1: React.FC<RegisterStep1Props> = ({
  registerDetail,
  handleChange,
  handleNextStep,
}) => {
  const { name, firm_name, mobile_no } = registerDetail;

  const validateName = (): string => (!name ? "Required" : "");
  const validateFirmName = (): string => (!firm_name ? "Required" : "");
  const validateMobileNo = (): string => {
    if (!mobile_no) {
      return "Required";
    } else if (!mobile_no.match(/^\d{10}$/)) {
      return "Invalid Mobile Number";
    }
    return "";
  };

  return (
    <RegisterStep1View
      validateName={validateName}
      validateFirmName={validateFirmName}
      validateMobileNo={validateMobileNo}
      handleChange={handleChange}
      handleNextStep={handleNextStep}
      registerDetail={registerDetail}
    />
  );
};

export default RegisterStep1;
