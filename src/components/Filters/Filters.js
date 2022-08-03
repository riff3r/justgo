import React from "react";
import ToggleButton from "../UI/ToggleButton";
import GenderFilter from "./GenderFilter";
import SearchFilter from "./SearchFilter";

const Filters = ({ setGenderFilter, setSearchInput }) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-10">
        <SearchFilter setSearchInput={setSearchInput} />
        <GenderFilter setGenderFilter={setGenderFilter} />
      </div>
      <ToggleButton />
    </div>
  );
};

export default Filters;
