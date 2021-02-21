import React, { useState, useEffect } from "react";
import UserPermissionView from "./userpermission.view";
import { useParams } from "react-router-dom";

import { getUserPreviewDetail } from "../../services/apis";

import { UserDetail, CompanyDetail } from "./userpermission.model";

const UserPermission = () => {
  const { type, id } = useParams();
  const initialUserDetail: UserDetail = {
    id: 0,
    name: "",
    email: "",
    mobile_no: "",
    is_verified: false,
    is_seller: false,
    is_active: false,
  };
  const initialCompanyDetail: CompanyDetail = {
    company: "",
    branch_city: "",
    branch_state: "",
    branch_country: "",
    is_permitted: false,
    permission_date: "",
    permission_last_date: "",
  };
  //State
  const [userDetail, setUserDetail] = useState(initialUserDetail);
  const [companyDetail, setCompanyDetail] = useState(initialCompanyDetail);

  useEffect(() => {
    if (type === "seller") {
      getUserPreviewDetail(id)
        .then((result) => {
          setUserDetail(result.user_details);
          setCompanyDetail(result.Company_details);
        })
        .catch((error) => console.log(error));
    } else {
      getUserPreviewDetail(id)
        .then((result) => {
          setUserDetail(result);
        })
        .catch((error) => console.log(error));
    }
  }, [type, id]);

  return (
    <>
      <UserPermissionView
        userDetail={userDetail}
        setUserDetail={setUserDetail}
        companyDetail={companyDetail}
        setCompanyDetail={setCompanyDetail}
      />
    </>
  );
};
export default UserPermission;
