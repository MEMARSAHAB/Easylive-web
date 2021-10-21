import React from "react";
import { Link } from "react-router-dom";

import "./header.css";
import RoomSearch from "../home/searchbar/roomsearch";
import ProfileDropdown from "../home/dropdown/profilemenu";
import logo from "../../assets/images/tolet4.png";

function Header() {
  return (
    <div className="header_con">
      <div className="header">
        <Link to="/">
          <img className="header_logo" src={logo} alt="Tolet.Com" />
        </Link>

        <div className="header_center">
          <RoomSearch />
        </div>

        <div className="header_right">
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}

export default Header;
