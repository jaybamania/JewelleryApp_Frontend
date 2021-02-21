import React from "react";
import UserListCardView from "./userlistcard.view";

import { User } from "../../userlist.model";

interface UserListCardProps {
  data: User;
  showDate: boolean;
}

const UserListCard: React.FC<UserListCardProps> = ({ data, showDate }) => {
  return (
    <>
      <UserListCardView data={data} showDate={showDate} />
    </>
  );
};
export default UserListCard;
