import React, { useState } from "react";
import PasswordFieldsView from "./passwordfields.view";
import { Passwords } from "../../pages/Landing/landing.models";

interface PasswordFieldsProps {
  passwords: Passwords;
  setPasswords: React.Dispatch<React.SetStateAction<Passwords>>;
}

const PasswordFields: React.FC<PasswordFieldsProps> = ({
  passwords,
  setPasswords,
}) => {
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const handleClickShowPassword1 = () => {
    setShowPass1(!showPass1);
  };
  const handleClickShowPassword2 = () => {
    setShowPass2(!showPass2);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <PasswordFieldsView
      handleClickShowPassword1={handleClickShowPassword1}
      handleClickShowPassword2={handleClickShowPassword2}
      handlePasswordChange={handlePasswordChange}
      handleMouseDownPassword={handleMouseDownPassword}
      passwords={passwords}
      showPass1={showPass1}
      showPass2={showPass2}
    />
  );
};

export default PasswordFields;
