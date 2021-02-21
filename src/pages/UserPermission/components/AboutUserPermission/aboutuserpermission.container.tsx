import React, { useGlobal } from "reactn";
import AboutUserView from "./aboutuserpermission.view";
import { useParams } from "react-router-dom";
import { UserDetail, CompanyDetail } from "../../userpermission.model";
import { updateUserPreviewDetail } from "../../../../services/apis";

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
  const { id } = useParams();
  const setIsError = useGlobal("isError")[1];
  const setIsInfo = useGlobal("isInfo")[1];
  const setMessage = useGlobal("message")[1];
  const handleChange = () => {
    updateUserPreviewDetail(
      id,
      !userDetail.is_active,
      companyDetail.is_permitted
    )
      .then((message) => {
        setUserDetail({
          ...userDetail,
          is_active: !userDetail.is_active,
        });
        setMessage(message.message);
        setIsInfo(true);
      })
      .catch((message) => {
        setMessage(message.message);
        setIsError(true);
      });
  };
  const handlePermission = () => {
    updateUserPreviewDetail(
      id,
      userDetail.is_active,
      !companyDetail.is_permitted
    )
      .then((message) => {
        setCompanyDetail({
          ...companyDetail,
          is_permitted: !companyDetail.is_permitted,
        });
        setMessage(message.message);
        setIsInfo(true);
      })
      .catch((message) => {
        setMessage(message.message);
        setIsError(true);
      });
  };
  return (
    <>
      <AboutUserView
        userDetail={userDetail}
        setUserDetail={setUserDetail}
        companyDetail={companyDetail}
        setCompanyDetail={setCompanyDetail}
        handleChange={handleChange}
        handlePermission={handlePermission}
      />
    </>
  );
};
export default AboutUser;
