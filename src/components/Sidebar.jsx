import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBook, faBell, faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-1/4 bg-white m-4 text-gray-600 h-screen rounded-md p-5">
    <h2 className="text-lg font-bold bg-gray-900  text-white rounded-lg p-2 mb-8">BUSINESS REGISTRATION SYSTEM</h2>
    <ul>
      <li className="py-2 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer">
        <FontAwesomeIcon icon={faHome} className="mr-2" />
        <Link to="/">Dashboard</Link>
      </li>
      <li className="py-2 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer">
        <FontAwesomeIcon icon={faBook} className="mr-2" />
        <Link to="/profile">Manage Business</Link>
      </li>
      <li className="py-2 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer">
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        <Link to="/tables">Manage User's</Link>
      </li>
      <li className="py-2 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer">
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        <Link to="/notifications">Owner's</Link>
      </li>
    </ul>
    <div className="mt-10">
      <h3 className="text-sm font-semibold mb-2">AUTH PAGES</h3>
      <ul>
        <li className="py-2 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer">
          <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
          <Link to="/signin">Sign In</Link>
        </li>
        <li className="py-2 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer">
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
