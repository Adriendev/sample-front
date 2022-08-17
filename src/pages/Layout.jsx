import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div className="outlet">
        <Outlet />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
