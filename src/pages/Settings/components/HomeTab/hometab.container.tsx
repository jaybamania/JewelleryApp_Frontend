import React, { useState, useEffect } from "react";

import { getProfileDetails } from "../../../../services/apis";

import HomeTabView from "./hometab.view";

import { ProfileDetail } from "../../settings.model";

const HomeTab = () => {
  //Const
  const initialProfileDetail: ProfileDetail = {
    user_details: {
      name: "",
      mobile_no: "",
      is_verified: false,
      is_seller: false,
      is_active: false,
    },
    company_details: {
      company: "",
      branch_address_line_1: "",
      branch_address_line_2: "",
      branch_city: "",
      branch_state: "",
      branch_country: "",
      is_permitted: false,
      permission_date: "",
      permission_last_date: "",
    },
  };

  //State
  const [color, setColor] = useState("");
  const [profileDetail, setProfileDetail] = useState(initialProfileDetail);

  useEffect(() => {
    getProfileDetails()
      .then((result) => {
        setProfileDetail(result);
        if (result.user_details.is_seller) {
          setColor("red");
        } else {
          setColor("green");
        }
      })
      .catch((error) => console.log(error));
  }, []);
  const handleSubmit = () => {
    // updatePersonalDetails(personalDetail);
    // setEditor(false);
  };
  return (
    <>
      <HomeTabView
        profileDetail={profileDetail}
        color={color}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default HomeTab;
