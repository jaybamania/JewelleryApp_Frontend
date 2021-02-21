import React, { useState, useEffect, useGlobal } from "reactn";
import AssignAdminPermissionView from "./assignadminpermission.view";
import { useParams } from "react-router-dom";

import { getAdminDetail, updateAdminDetail } from "../../services/apis";

import { AdminPreviewDetail, Group } from "./assignadminpermission.model";

const AssignAdminPermission = () => {
  const { id } = useParams();
  const initialGroup: Group = {
    id: 0,
    name: "",
  };
  const initialUserDetail: AdminPreviewDetail = {
    id: 0,
    name: "",
    email: "",
    mobile_no: "",
    is_verified: false,
    is_admin: false,
    is_active: false,
    groups: [initialGroup],
  };
  const initialValue: number[] = [];
  //State
  const setIsError = useGlobal("isError")[1];
  const setIsInfo = useGlobal("isInfo")[1];
  const setMessage = useGlobal("message")[1];
  const [userDetail, setUserDetail] = useState(initialUserDetail);
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    getAdminDetail(id)
      .then((result) => {
        setUserDetail(result);
        setValue(result.groups.map((group) => group.id));
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  //Event Handlers
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    val: number
  ) => {
    var num = value.filter((v) => v !== val);
    if (value.includes(val)) {
      updateAdminDetail(id, {
        name: userDetail.name,
        email: userDetail.email,
        mobile_no: userDetail.mobile_no,
        is_active: userDetail.is_active,
        groups_id: num,
      })
        .then((message) => {
          setMessage(message.message);
          setIsInfo(true);
        })
        .catch((message) => {
          setMessage(message.message);
          setIsError(true);
        });
    } else {
      updateAdminDetail(id, {
        name: userDetail.name,
        email: userDetail.email,
        mobile_no: userDetail.mobile_no,
        is_active: userDetail.is_active,
        groups_id: [...num, val],
      })
        .then((message) => {
          setMessage(message.message);
          setIsInfo(true);
        })
        .catch((message) => {
          setMessage(message.message);
          setIsError(true);
        });
    }
    getAdminDetail(id)
      .then((result) => {
        setUserDetail(result);
        setValue(result.groups.map((group) => group.id));
      })
      .catch((error) => console.log(error));
  };
  const handleIsActive = (is_active: boolean) => {
    updateAdminDetail(id, {
      name: userDetail.name,
      email: userDetail.email,
      mobile_no: userDetail.mobile_no,
      is_active,
      groups_id: value,
    })
      .then((message) => {
        setMessage(message.message);
        setIsInfo(true);
        setUserDetail({
          ...userDetail,
          is_active,
        });
      })
      .catch((message) => {
        setMessage(message.message);
        setIsError(true);
      });
  };
  return (
    <>
      <AssignAdminPermissionView
        id={id}
        userDetail={userDetail}
        setUserDetail={setUserDetail}
        value={value}
        handleChange={handleChange}
        handleIsActive={handleIsActive}
      />
    </>
  );
};
export default AssignAdminPermission;
