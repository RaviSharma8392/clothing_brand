import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

const Navbar2nd = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      {/* Mobile Navbar */}
      <div className="flex justify-between md:hidden h-[69.2px] py-1.5 px-4">
        <button onClick={() => setMenu(!menu)}>
          <MdMenu className="h-6 w-6" />
        </button>
        <img
          className="h-[41px] w-[161px]"
          src="https://satine.qodeinteractive.com/wp-content/uploads/2017/08/logo-dark-img.png"
          alt="Logo"
        />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center px-8 py-4">
        <img
          className="h-[41px] w-[161px]"
          src="https://satine.qodeinteractive.com/wp-content/uploads/2017/08/logo-dark-img.png"
          alt="Logo"
        />
        <ul className="flex gap-6">
          <li>HOMEPAGES</li>
          <li>PAGES</li>
          <li>SHOP</li>
          <li>BLOG</li>
          <li>LONGBOOK</li>
          <li>ELEMENTS</li>
        </ul>
        <ul className="flex gap-4">
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
        <div className="fixed top-[69.2px] left-0 w-full bg-amber-400 md:hidden shadow px-4 py-2 rounded-b-xl">
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
