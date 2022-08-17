import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Home
      </NavLink>
      
      <NavLink
        to="/game"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Play
      </NavLink>
    </>
  );
};

export default NavBar;
