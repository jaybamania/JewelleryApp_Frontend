import React from "react";
import AdminPermissionView from "./adminpermission.view";

interface AdminPermissionProps {
  value: number[];
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    val: number
  ) => void;
}

const AdminPermission: React.FC<AdminPermissionProps> = ({
  value,
  handleChange,
}) => {
  return (
    <>
      <AdminPermissionView value={value} handleChange={handleChange} />
    </>
  );
};
export default AdminPermission;
