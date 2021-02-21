import React from "react";

import { InputAdornment, FormControl, OutlinedInput } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function Search() {
  return (
    <>
      <FormControl variant="outlined" size="small">
        <OutlinedInput
          id="search"
          name="search"
          placeholder="Search"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          style={{
            fontSize: "calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)))",
            minWidth: "30%",
          }}
        />
      </FormControl>
    </>
  );
}
