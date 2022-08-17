import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Guess the Sample!</h1>
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
