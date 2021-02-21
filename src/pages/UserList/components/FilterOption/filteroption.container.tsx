import React from "react";
import FilterOptionView from "./filteroption.view";

interface FilterOptionProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
const FilterOption: React.FC<FilterOptionProps> = ({ filter, setFilter }) => {
  return (
    <>
      <FilterOptionView filter={filter} setFilter={setFilter} />
    </>
  );
};
export default FilterOption;
