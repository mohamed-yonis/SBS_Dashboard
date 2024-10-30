// src/components/Header.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faCog } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <div className="bg-gray-100 p-4 flex justify-between items-center shadow-md">
    <h1 className="text-lg font-semibold">Dashboard / Home</h1>
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Search"
        className="border rounded-lg p-2 mr-4"
      />
      <button className="p-2">
        <FontAwesomeIcon icon={faUser} />
      </button>
      <button className="p-2">
        <FontAwesomeIcon icon={faBell} />
      </button>
      <button className="p-2">
        <FontAwesomeIcon icon={faCog} />
      </button>
    </div>
  </div>
);

export default Header;
