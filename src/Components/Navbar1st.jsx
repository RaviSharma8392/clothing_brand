import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const Navbar1st = () => {
  return (
    <div className="bg-black text-white flex justify-between ">
      <div>
        {" "}
        <h1>welcome to our clothing brand</h1>
      </div>
      <div className="">
        <ul className="flex gap-5 ">
          <li>
            {" "}
            <nav to={"/contact"}>contact us</nav>{" "}
          </li>
          <li>
            {" "}
            <nav to={"/about"}>About us</nav>{" "}
          </li>
          <li>
            {" "}
            <nav to={"/about"}>Our Team </nav>{" "}
          </li>
          <li>
            {" "}
            <FaTwitter />
          </li>
          <li>
            {" "}
            <FaFacebookF />
          </li>
          <li>
            {" "}
            <TiSocialLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar1st;
