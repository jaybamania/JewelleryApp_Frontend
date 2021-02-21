import React, { useState, useEffect } from "react";

import {
  getPersonalDetails,
  updatePersonalDetails,
  resetUserPassword,
} from "../../../../services/apis";
import PersonalTabView from "./personaltab.view";

import { PersonalDetail } from "../../settings.model";

const PersonalTab = () => {
  //Const
  const initialPersonalDetail: PersonalDetail = {
    name: "",
    mobile_no: "",
    home_address: "",
    city: "",
    state: "",
    country: "",
  };

  //State
  const [personalDetail, setPersonalDetail] = useState(initialPersonalDetail);
  const [editor, setEditor] = useState(false);
  const [open, setOpen] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showPass3, setShowPass3] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  useEffect(() => {
    getPersonalDetails()
      .then((result) => setPersonalDetail(result))
      .catch((error) => console.log(error));
  }, []);

  //Event Handlers
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickShowPassword1 = () => {
    setShowPass1(!showPass1);
  };
  const handleClickShowPassword2 = () => {
    setShowPass2(!showPass2);
  };
  const handleClickShowPassword3 = () => {
    setShowPass3(!showPass3);
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const handleChangePass = () => {
    resetUserPassword({ old_password: oldPass, new_password: newPass });
    setOldPass("");
    setNewPass("");
    setConfirmNewPass("");
    handleClose();
  };
  const handleChange = (event: any) => {
    if (editor) {
      const { name, value } = event.target;
      setPersonalDetail({ ...personalDetail, [name]: value });
    }
  };
  const handleSubmit = () => {
    updatePersonalDetails(personalDetail);
    setEditor(false);
  };
  const cancelChange = () => {
    setEditor(false);
    getPersonalDetails()
      .then((result) => setPersonalDetail(result))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <PersonalTabView
        editor={editor}
        setEditor={setEditor}
        open={open}
        showPass1={showPass1}
        showPass2={showPass2}
        showPass3={showPass3}
        oldPass={oldPass}
        setOldPass={setOldPass}
        newPass={newPass}
        setNewPass={setNewPass}
        confirmNewPass={confirmNewPass}
        setConfirmNewPass={setConfirmNewPass}
        personalDetail={personalDetail}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        handleClickShowPassword1={handleClickShowPassword1}
        handleClickShowPassword2={handleClickShowPassword2}
        handleClickShowPassword3={handleClickShowPassword3}
        handleMouseDownPassword={handleMouseDownPassword}
        handleChangePass={handleChangePass}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelChange={cancelChange}
      />
    </>
  );
};

export default PersonalTab;
