import React from "react";
import MyListingListView from "./components/MyListingList";
import MyListingDetailView from "./components/MyListingDetail";

interface ListingView {
  openDetail: boolean;
  activeProductID: number;
  handleOpenMyListingDetail: (id: number, open: boolean) => void;
  handleStatusChange: (id: number, status: string) => void;
}
const MyListingView: React.FC<ListingView> = ({
  openDetail,
  activeProductID,
  handleOpenMyListingDetail,
  handleStatusChange,
}) => {
  return (
    <>
      {openDetail ? (
        <MyListingDetailView
          id={activeProductID}
          handleOpenMyListingDetail={handleOpenMyListingDetail}
          handleStatusChange={handleStatusChange}
        />
      ) : (
        <MyListingListView
          handleOpenMyListingDetail={handleOpenMyListingDetail}
          handleStatusChange={handleStatusChange}
        />
      )}
    </>
  );
};

export default MyListingView;
