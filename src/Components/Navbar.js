import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between p-3 shadow-sm"
      style={{ backgroundColor: "#2C041D" }}
    >
      <div className="flex-shrink-0">
        <img
          src={logo}
          alt="something"
          className="h-12 w-auto rounded-full ml-[12px]"
        />
      </div>

      <div
        className="mr-1"
        style={{
          width: "545px",
          height: "21px",
        }}
      >
        <ul className="flex space-x-8 text-white">
          <li className=" hover:text-blue-700 font-medium cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-700 font-medium cursor-pointer">
            Service
          </li>
          <li className="hover:text-gray-700 font-medium cursor-pointer">
            About Us
          </li>
          <li className="hover:text-gray-700 font-medium cursor-pointer">
            FAQ
          </li>
          <li className="hover:text-gray-700 font-medium cursor-pointer">
            Contact Us
          </li>
          <li className="hover:text-gray-700 font-medium cursor-pointer">
            Gallery
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
