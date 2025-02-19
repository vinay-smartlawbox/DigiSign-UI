import React from "react";
import search from "../../../assets/search.svg";
import searchSubmit from "../../../assets/searchSubmit.svg";

const Search = () => {
  const styles = {
    searchContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
      borderRadius: "50px",
      padding: "8px 20px",
      width: "100%",
      border: "1px solid#D5D5D5",
    },
    searchInput: {
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      padding: "0px 8px",
      fontSize: "14px",
      width: "100%",
      color: "#202224",
    },
    searchIcon: {
      margin: "0px 4px 0px 0 5px",
      display: "inline-block",
    },
  };

  return (
    <div className="search-container">
      {/* Search Icon */}
      <span style={styles.searchIcon}>
        <img src={search} alt="search" />
      </span>
      {/* Search Input */}
      <input type="text" placeholder="Search" style={styles.searchInput} />
      <div>
        <img src={searchSubmit} alt="searchSubmit" />
      </div>
    </div>
  );
};

export default Search;
