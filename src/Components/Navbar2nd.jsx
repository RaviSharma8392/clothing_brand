import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar2nd = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="fixed md:px-16 font-[Open Sans] text-[13px] top-0 left-0 w-full h-[98px] z-50 bg-white border-b-2 border-[#ffd700]">
      {/* Mobile Navbar */}
      <div className="flex justify-between md:hidden h-[69.2px] py-1.5 px-4">
        <button onClick={() => setMenu(!menu)}>
          <MdMenu className="h-6 w-6" />
        </button>
        <h1 className="font-signature pt-2.5 items-center text-4xl">NARK</h1>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden   font-semibold md:flex text-[13px] justify-between items-center px-8 py-4">
        <h1 className="font-signature  text-4xl">NARK</h1>
        <ul className="flex tracking-wide gap-6">
          <li className="pr-[22px] hover:text-[#ffd700] ">
            <NavLink to={"/"}>HOMEPAGES</NavLink>{" "}
          </li>
          <li className="relative group  hover:text-[#ffd700]  cursor-pointer">
            PAGES{" "}
            <div className="absolute top-full left-0 bg-white shadow-md rounded-md w-40 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
              <nav className="flex flex-col p-2">
                <NavLink to="/about" className="py-1 px-2 hover:bg-gray-100">
                  About Us
                </NavLink>
                <NavLink to="/team" className="py-1 px-2 hover:bg-gray-100">
                  Our Team{" "}
                </NavLink>
                <NavLink to="/team" className="py-1 px-2 hover:bg-gray-100">
                  Contact Us
                </NavLink>
              </nav>
            </div>
          </li>
          <li className="hover:text-[#ffd700] ">SHOP </li>
          <li className="hover:text-[#ffd700] "> BLOG </li>
          <li className="hover:text-[#ffd700] ">LONGBOOK </li>
          <li className="hover:text-[#ffd700] ">ELEMENTS </li>
        </ul>
        <ul className="flex text-2xl  gap-4">
          <li>
            <FaCartShopping />
          </li>
          <li>
            <CiSearch />
          </li>
          <li>
            <MdMenu />
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      {menu && (
        <div className="fixed top-20 left-0 transparent bg-white  md:hidden shadow px-4 py-2 rounded-b-xl">
          <ul>
            <li className="py-2">HOMEPAGES</li>
            <li className="py-2">PAGES</li>
            <li className="py-2">SHOP</li>
            <li className="py-2">BLOG</li>
            <li className="py-2">LONGBOOK</li>
            <li className="py-2">ELEMENTS</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar2nd;
