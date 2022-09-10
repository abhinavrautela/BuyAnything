import React from "react";
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom";

function MainLayout({totalProduts}) {
  return (
    <div>
        <Navbar totalItems={totalProduts}/>
        <div><Outlet /></div>
    </div>
  );
}

export default MainLayout;