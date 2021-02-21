import React from "react";
import AboutUserView from "./aboutuser.view";

import { UserDetail, CompanyDetail } from "../../userpermission.model";

interface AboutUserProps {
  userDetail: UserDetail;
  setUserDetail: React.Dispatch<React.SetStateAction<UserDetail>>;
  companyDetail: CompanyDetail;
  setCompanyDetail: React.Dispatch<React.SetStateAction<CompanyDetail>>;
}

const AboutUser: React.FC<AboutUserProps> = ({
  userDetail,
  setUserDetail,
  companyDetail,
  setCompanyDetail,
}) => {
  return (
    <>
      <AboutUserView
        userDetail={userDetail}
        setUserDetail={setUserDetail}
        companyDetail={companyDetail}
        setCompanyDetail={setCompanyDetail}
      />
    </>
  );
};
export default AboutUser;
