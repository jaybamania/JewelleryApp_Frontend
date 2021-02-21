import React from "reactn";
import UserAccessView from "./useraccess.view";
import { UserDetail } from "../../userpermission.model";

interface UserAccessProps {
  userDetail: UserDetail;
}

const UserAccess: React.FC<UserAccessProps> = ({ userDetail }) => {
  return (
    <>
      <UserAccessView
        userDetail={userDetail}
      />
    </>
  );
};
export default UserAccess;
