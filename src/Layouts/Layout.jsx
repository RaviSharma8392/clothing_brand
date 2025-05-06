import React from "react";
import Navbar2nd from "../Components/Navbar2nd";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Navbar2nd />
      <main>
        {" "}
        <Outlet />
      </main>
    </div>
  );
};
