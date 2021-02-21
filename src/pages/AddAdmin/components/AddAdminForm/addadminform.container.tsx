import React, { useState, useEffect } from "react";
import AddAdminFormView from "./addadminform.view";
import {
  addAdminUser,
  editAdminDetails,
  getStateListDetail,
  getAdminDetail,
} from "../../../../services/apis";
import {
  AdminDetail,
  StateList,
  AdminPreviewDetail,
} from "../../addadmin.model";
import { useHistory, useParams } from "react-router-dom";

const AddAdminForm = () => {
  //Const
  const initialAdminDetail: AdminDetail = {
    name: "",
    country_code: "+91",
    mobile_no: "",
    email: "",
    password: "",
    address_line_1: "",
    city: "",
    pincode: "",
    state: "",
    country: "India",
    is_seller: false,
  };
  const initialEditAdminDetail: AdminPreviewDetail = {
    id: 0,
    name: "",
    country_code: "+91",
    email: "",
    mobile_no: "",
    password: "",
    address_line_1: "",
    city: "",
    pincode: "",
    state: "",
    country: "India",
    is_seller: false,
    is_verified: true,
    is_admin: true,
    is_active: false,
    groups: [],
  };
  const initialStateList: StateList = {
    id: 0,
    state_name: "",
    city: [],
  };

  const history = useHistory();

  //State
  const { id, type } = useParams();
  const [adminDetail, setAdminDetail] = useState(initialAdminDetail);
  const [mode, setMode] = useState(false);
  const [editor, setEditor] = useState(false);
  const [editAdmin, setEditAdmin] = useState(initialEditAdminDetail);
  const [stateList, setStateList] = useState([initialStateList]);
  const [cityData, setCityData] = useState([]);
  console.log(type);
  useEffect(() => {
    getStateListDetail()
      .then((result) => {
        setStateList(result);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    if (type === "add") {
      setMode(false);

      getStateListDetail()
        .then((result) => {
          setStateList(result);
        })
        .catch((error) => console.log(error));
    } else {
      setMode(true);

      getAdminDetail(id)
        .then((results) => {
          setEditAdmin(results);
        })
        .catch((error) => console.log(error));
    }
  }, [id, type]);
  //Event Handlers
  //   const handlers = () => {
  //     if (type === "add") { }
  //     else { const { name, mobile_no, state, email, city, password } = editAdmin; }
  //   }

  // };
  // const { state, email, city, password } = adminDetail;
  // if (type !== "add") { const { state, email, city, password } = editAdmin; }
  // const { name, mobile_no, state, email, city, password } = editAdmin;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "state") {
      const value: any = stateList.filter(
        (data) => data.state_name === event.target.value
      );
      if (mode) {
        setCityData(value[0].city);
      } else {
        setCityData(value[0].city);
      }
      console.log(value);
    }

    if (type === "add") {
      setMode(false);
      setAdminDetail({
        ...adminDetail,
        [event.target.name]: event.target.value,
      });
    } else {
      setMode(true);
      if (editor) {
        const { name, value } = event.target;
        setEditAdmin({ ...editAdmin, [name]: value });
      }
      // setEditAdmin({ ...editAdmin, [event.target.name]: event.target.value });
    }
  };
  const handleSubmit = () => {
    if (mode) {
      editAdminDetails(id, editAdmin);
      setEditor(false);
    } else {
      addAdminUser(adminDetail);
      history.push("/userlist");
    }
  };

  const validateName = (): string => {
    if (mode) {
      const { name } = editAdmin;
      if (!name) {
        return "Required";
      }
      return "";
    } else {
      const { name } = adminDetail;
      if (!name) {
        return "Required";
      }
      return "";
    }
  };
  const validateMobileNo = (): string => {
    if (mode) {
      const { mobile_no } = editAdmin;
      if (!mobile_no) {
        return "Required";
      } else if (!mobile_no.match(/^\d{10}$/)) {
        return "Invalid Mobile Number";
      }
      return "";
    } else {
      const { mobile_no } = adminDetail;
      if (!mobile_no) {
        return "Required";
      } else if (!mobile_no.match(/^\d{10}$/)) {
        return "Invalid Mobile Number";
      }
      return "";
    }
  };
  //validating email
  const validateEmail = (): string => {
    if (mode) {
      const { email } = editAdmin;
      if (!email) {
        return "Required";
      } else if (
        !email.match(
          /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        return "Invalid Email Address";
      }
      return "";
    } else {
      const { email } = adminDetail;
      if (!email) {
        return "Required";
      } else if (
        !email.match(
          /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        return "Invalid Email Address";
      }
      return "";
    }
  };

  const validatePin = (): string => {
    if (mode) {
      const { password } = editAdmin;
      if (!password) {
        return "Required";
      } else if (password.length !== 8) {
        return "Password is of 8 digit ";
      }
      return "";
    } else {
      const { password } = adminDetail;
      if (!password) {
        return "Required";
      } else if (password.length !== 8) {
        return "Password is of 8 digit ";
      }
      return "";
    }
  };
  //pending
  // const validateState = () =>
  //   !state ? "Enter the state" : undefined;

  // const validateCity = () =>
  //   !city ? "Enter the city" : undefined;

  return (
    <>
      <AddAdminFormView
        mode={mode}
        editor={editor}
        validateName={validateName}
        validateMobileNo={validateMobileNo}
        validateEmail={validateEmail}
        // validateState={validateState}
        // validateCity={validateCity}
        validatePin={validatePin}
        setEditor={setEditor}
        adminDetail={adminDetail}
        editAdmin={editAdmin}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cityData={cityData}
        stateList={stateList}
      />
    </>
  );
};
export default AddAdminForm;
