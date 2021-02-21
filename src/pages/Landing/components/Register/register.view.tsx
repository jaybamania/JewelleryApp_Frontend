import React from "react";

import RegisterStep1 from "./components/RegisterStep1";
import RegisterStep2 from "./components/RegisterStep2";
import RegisterStep3 from "./components/RegisterStep3";
import { RegisterDetail } from "../../landing.models";

interface RegisterViewProps {
  registerStep: number;
  registerDetail: RegisterDetail;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleSubmit: (password: string) => void;
}

const RegisterView: React.FC<RegisterViewProps> = ({
  registerStep,
  registerDetail,
  handleChange,
  handleNextStep,
  handlePreviousStep,
  handleSubmit,
}) => {
  return (
    <div>
      {registerStep === 0 && (
        <RegisterStep1
          registerDetail={registerDetail}
          handleChange={handleChange}
          handleNextStep={handleNextStep}
        />
      )}
      {registerStep === 1 && (
        <RegisterStep2
          registerDetail={registerDetail}
          handleChange={handleChange}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      )}
      {registerStep === 2 && (
        <RegisterStep3
          handlePreviousStep={handlePreviousStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default RegisterView;
