import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { withUser } from "./ContextProvider/withProvider";

const MainLayout = ({ isLoggedIn }) => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default withUser(MainLayout);
