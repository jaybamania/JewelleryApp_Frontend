import React from "react";
import CityListView from "./citylist.view";

interface CityListProps {
  cityData: string[];
}

const CityList: React.FC<CityListProps> = ({ cityData }) => {
  return (
    <>
      <CityListView cityData={cityData} />
    </>
  );
};
export default CityList;
