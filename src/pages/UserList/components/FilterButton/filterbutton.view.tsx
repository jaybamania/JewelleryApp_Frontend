import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Button } from "@material-ui/core";

interface FilterButtonProps {
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterOpen: Boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  setFilterOpen,
  filterOpen,
}) => {
  return (
    <Button
      variant="outlined"
      size="small"
      // color="primary"
      // className={classes.filterButton}
      startIcon={<FilterListIcon />}
      onClick={() => setFilterOpen(!filterOpen)}
      style={{
        fontSize: "calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)))",
        minWidth: "30%",
      }}
    >
      Filter
    </Button>
  );
};

export default FilterButton;
