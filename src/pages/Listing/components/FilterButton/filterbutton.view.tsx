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
      size="large"
      // color="primary"
      // className={classes.filterButton}
      startIcon={<FilterListIcon />}
      onClick={() => setFilterOpen(!filterOpen)}
    >
      Filter
    </Button>
  );
};

export default FilterButton;
