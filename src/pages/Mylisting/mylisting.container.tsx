import React, { useState } from "react";
import MyListingView from "./mylisting.view";
import { updateListingStatus } from "../../services/apis";

const MyListingContainer = () => {
  const initList: number = 0;
  const initOpen: boolean = false;
  const [openDetail, setOpenDetail] = useState(initOpen);
  const [activeProductID, setActiveProductID] = useState(initList);

  const handleOpenMyListingDetail = (id: number, open: boolean) => {
    console.log("ID ", id);
    if (open) {
      setActiveProductID(id);
    } else {
      setActiveProductID(0);
    }
    setOpenDetail(open);
  };

  const handleStatusChange = (id: number, status: string) => {
    console.log("ID", id, "STATUS", status);

    updateListingStatus(id, status)
      .then((data) => {
        console.log("STATUS CHANGE ", data);
      })
      .catch((error) => {
        console.log("ERROR ", error);
      });
  };
  return (
    <MyListingView
      openDetail={openDetail}
      activeProductID={activeProductID}
      handleOpenMyListingDetail={handleOpenMyListingDetail}
      handleStatusChange={handleStatusChange}
    />
  );
};

export default MyListingContainer;
