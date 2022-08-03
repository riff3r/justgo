import React from "react";

const SearchFilter = ({ setSearchInput }) => {
  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Type here"
        class="input input-sm input-bordered w-full max-w-xs"
        onChange={searchInputHandler}
      />
    </div>
  );
};

export default SearchFilter;
