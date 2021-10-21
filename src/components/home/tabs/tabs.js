import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import RoomSearch from "../searchbar/roomsearch";
import MateSearch from "../searchbar/matesearch";

import "./tab.css";

function SearchTabs() {
  const [selectedTab, setselectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setselectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab
          className="tabs"
          icon={<HomeWorkOutlinedIcon fontSize="large" />}
          fontSize="large"
          label="Rooms/Homes"
          disableRipple="true"
        />
        <Tab
          className="tabs"
          icon={<PeopleOutlineIcon fontSize="large" />}
          fontSize="large"
          label="Mates"
          disableRipple="true"
        />
      </Tabs>
      <div className="searchContainer">
        {selectedTab === 0 && <RoomSearch />}
      </div>
      <div className="searchContainer">
        {selectedTab === 1 && <MateSearch />}
      </div>
    </>
  );
}

export default SearchTabs;
