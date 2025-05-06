import React from "react";
import Navbar2nd from "../Components/Navbar2nd";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/footer";

export const Layout = () => {
  return (
    <div>
      <Navbar2nd />
      <main className="pt-[100px]">
        {" "}
        {/* to offset the fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
