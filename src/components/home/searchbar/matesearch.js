import React from "react";
import Autocomplete from "react-google-autocomplete";
import SearchIcon from "@material-ui/icons/Search";

import "./style.css";

function MateSearch() {
  const onPlaceSelected = (place) => {
    console.log("plc", place);
  };

  return (
    <div className="searchContainer">
      <form className="searchBox">
        <Autocomplete
          placeholder="Where you want to search Mate"
          onPlaceSelected={onPlaceSelected}
          types={["(regions)"]}
        />

        <button className="submitbtn">
          <SearchIcon fontSize="large" />
        </button>
      </form>
    </div>
  );
}

export default MateSearch;
