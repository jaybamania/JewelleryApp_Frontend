import React, { useState, useEffect } from "react";

import UserListView from "./userlist.view";

import { getAllUserList, getFilterUserList } from "../../services/apis";

import { User } from "./userlist.model";

const UserList = () => {
  const initialUserList: User[] = [
    {
      id: 0,
      name: "",
      mobile_no: "",
      city: "",
      is_seller: false,
      is_admin: false,
      timestrap: new Date(),
    },
  ];
  //State
  const [filterOpen, setFilterOpen] = useState(false);
  const [userList, setUserList] = useState(initialUserList);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter === "") {
      getAllUserList()
        .then((result) => {
          setUserList(result.results);
        })
        .catch((error) => console.log(error));
    } else {
      getFilterUserList(filter)
        .then((result) => {
          setUserList(result.results);
        })
        .catch((error) => console.log(error));
    }
  }, [filter]);

  //Event Handlers
  const formatDate = (date: Date): string => {
    const d = new Date(date);
    return d.toDateString();
  };

  return (
    <>
      <UserListView
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        userList={userList}
        filter={filter}
        setFilter={setFilter}
        formatDate={formatDate}
      />
    </>
  );
};
export default UserList;
