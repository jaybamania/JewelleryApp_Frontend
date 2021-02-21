import React, { useState, useEffect } from "react";
import UpdateAdminView from "./updateadmin.view";

import { getUpdatedAdminDetail, editAdminUser, resetUserPassword } from "../../services/apis";
import { UpdateAdminDetail } from "../../services/models";

const UpdateAdmin = () => {
  const initialAdminDetail: UpdateAdminDetail = {
    name: "",
    mobile_no: "",
    email: "",
    password: "",
  };

  const [adminDetail, setAdminDetail] = useState(initialAdminDetail);
  const [editor, setEditor] = useState(false);
  const [open, setOpen] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [oldPass, setOldPass] = useState("");

  const { mobile_no, email, password } = adminDetail;
  const handleChange = (event: any) => {
    if (editor) {
      const { name, value } = event.target;
      setAdminDetail({ ...adminDetail, [name]: value });
    }
  };
  useEffect(() => {
    getUpdatedAdminDetail()
      .then((result) => {
        setAdminDetail(result);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleSubmit = () => {
    editAdminUser(adminDetail);
    setEditor(false);
  };

  //Event Handlers
  const validateMobileNo = (): string => {
    if (!mobile_no) {
      return "Required";
    } else if (!mobile_no.match(/^\d{10}$/)) {
      return "Invalid Mobile Number";
    }
    return "";
  };
  const validateEmail = (): string => {
    if (!email) {
      return "Required";
    } else if (!email.match(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return "Invalid Email Address";
    }
    return "";
  };
  const validatePin = (): string => {
    if (!password) {
      return "Required";
    } else if (password.length !== 8) {
      return "Password is of 8 digit ";
    }
    return "";
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const handleClickShowPassword1 = () => {
    setShowPass(!showPass);
  };
  const handleChangePass = () => {
    resetUserPassword({ old_password: oldPass, new_password: adminDetail.password });
    handleClose();
  };

  return (
    <>
      <UpdateAdminView
        editor={editor}
        open={open}
        setEditor={setEditor}
        adminDetail={adminDetail}
        handleChange={handleChange}
        validateMobileNo={validateMobileNo}
        validateEmail={validateEmail}
        validatePin={validatePin}
        handleSubmit={handleSubmit}
        showPass={showPass}
        oldPass={oldPass}
        setOldPass={setOldPass}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        handleMouseDownPassword={handleMouseDownPassword}
        handleClickShowPassword1={handleClickShowPassword1}
        handleChangePass={handleChangePass}
      />
    </>
  );
};
export default UpdateAdmin;
