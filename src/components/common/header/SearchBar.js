import React from "react";
import SearchIcon from "../../../assets/svg/Search";
import FilterIcon from "../../../assets/svg/Filter";
import "../../../styles/Search.scss";

const SearchBar = ({ filter }) => {
  return (
    <div className="col-search-container">
      <div className="search-input-block">
        <SearchIcon />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      {filter && <FilterIcon />}
    </div>
  );
};

export default SearchBar;
