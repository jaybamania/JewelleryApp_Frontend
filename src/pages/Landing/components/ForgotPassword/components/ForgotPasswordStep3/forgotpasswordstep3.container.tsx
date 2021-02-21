import React, { useState } from "react";

import ForgotPasswordStep3View from "./forgotpasswordstep3.view";
import { Passwords } from "../../../../landing.models";

interface ForgotPasswordStep3Props {
  handleResetPassword: (password: string) => void;
}

const ForgotPasswordStep3: React.FC<ForgotPasswordStep3Props> = ({
  handleResetPassword,
}) => {
  const [passwords, setPasswords] = useState<Passwords>({
    password1: "",
    password2: "",
  });

  const validatePassword = (): void => {
    const { password1, password2 } = passwords;

    if (password1 && password2 && password1 === password2) {
      handleResetPassword(password1);
    }
  };

  const validatePassword1 = () =>
    !passwords.password1 ? "Required" : undefined;

  const validatePassword2 = () => {
    const { password1, password2 } = passwords;
    if (!password2) {
      return "Required";
    } else if (password1 !== password2) {
      return "The passwords do not match please try again";
    }
  };

  return (
    <ForgotPasswordStep3View
      passwords={passwords}
      setPasswords={setPasswords}
      validatePassword={validatePassword}
      validatePassword1={validatePassword1}
      validatePassword2={validatePassword2}
    />
  );
};

export default ForgotPasswordStep3;
