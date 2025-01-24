import React from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/Searchicon.svg";

const SearchBar = () => {
  return (
    <div>
      <input  className="search" type="text" placeholder="Search a album of your choice" />
         <button className="searchButton" icon={searchIcon}> </button>

    </div>
  );
}
export default SearchBar;