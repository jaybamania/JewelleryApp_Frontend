import React, { useState } from "react";
import RegisterStep3View from "./registerstep3.view";
import { Passwords } from "../../../../landing.models";

interface RegisterStep3Props {
  handlePreviousStep: () => void;
  handleSubmit: (password: string) => void;
}

const RegisterStep3: React.FC<RegisterStep3Props> = ({
  handlePreviousStep,
  handleSubmit,
}) => {
  const [passwords, setPasswords] = useState<Passwords>({
    password1: "",
    password2: "",
  });

  const validatePassword = () => {
    const { password1, password2 } = passwords;

    if (password1 && password2 && password1 === password2) {
      handleSubmit(password1);
    }
  };

  function validatePassword1() {
    if (!passwords.password1) {
      return "Required";
    }
  }

  function validatePassword2() {
    const { password1, password2 } = passwords;
    if (!password2) {
      return "Required";
    } else if (password1 !== password2) {
      return "The passwords do not match please try again";
    }
  }

  return (
    <RegisterStep3View
      handlePreviousStep={handlePreviousStep}
      validatePassword={validatePassword}
      validatePassword1={validatePassword1}
      validatePassword2={validatePassword2}
      setPasswords={setPasswords}
      passwords={passwords}
    />
  );
};

export default RegisterStep3;
