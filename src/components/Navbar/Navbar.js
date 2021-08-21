import React from "react";

import { Nav } from "./navbarStyles";
import { NavLink } from "react-router-dom";
import { HiIdentification, HiFingerPrint, HiUser } from "react-icons/hi";

import { IoArrowRedo } from "react-icons/io5";
const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/home">
            <HiIdentification />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/attend">
            <HiFingerPrint />
            <span>Attend</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/leave">
            <IoArrowRedo />
            <span>Leave</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <HiUser />
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
