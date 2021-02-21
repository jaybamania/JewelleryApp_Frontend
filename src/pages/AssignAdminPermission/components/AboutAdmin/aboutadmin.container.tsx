import React from "react";
import AboutAdminView from "./aboutadmin.view";

import { AdminPreviewDetail } from "../../assignadminpermission.model";

interface AboutAdminProps {
  userDetail: AdminPreviewDetail;
  setUserDetail: React.Dispatch<React.SetStateAction<AdminPreviewDetail>>;
  handleIsActive: (is_active: boolean) => void;
}

const AboutAdmin: React.FC<AboutAdminProps> = ({
  userDetail,
  setUserDetail,
  handleIsActive,
}) => {
  return (
    <>
      <AboutAdminView
        userDetail={userDetail}
        setUserDetail={setUserDetail}
        handleIsActive={handleIsActive}
      />
    </>
  );
};
export default AboutAdmin;
