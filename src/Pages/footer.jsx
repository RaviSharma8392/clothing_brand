import React from "react";
// importing icons
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdAccessTime, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-[#36454F] text-white font-[Open Sans] text-[13px] ">
      {/* this div containg full 90%content of footer */}
      <div className="border-b  align-left  md:pt-[85px] pb-[25px] md:mx-[92.6px]  justify-between md:flex">
        {/* 1st section  */}
        <div className="  md: mx-[25px]  ">
          <div className="md:mb-[35px]">
            <h5 className="font-[lora] uppercase text-[17px]">Simple</h5>
            <p className="font-sans mt-[10px] text-[13px] ">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>
          </div>

          <div>
            <ul className="flex flex-col text-[15px] border-amber-200 ">
              <li
                className="flex my-0 mb-5 mt-5 md:mb-[20px] mr-[20px] ml-0
              "
              >
                <FaMobileAlt className="" />
                <span className="mr-[15px]">1-677-124-44227</span>
              </li>

              <li className="flex my-0   mb-5 md:mb-[20px] mr-[20px] ml-0">
                <MdLocationOn />{" "}
                <span className="mr-[15px] ">
                  184 Main Collins Street West 8007
                </span>
              </li>
              <li className="flex my-0  mb-5 md:mb-[20px] mr-[20px] ml-0">
                <MdAccessTime className="" />
                <span className="mr-[15px]">
                  184 Main Collins Street West 8007
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* 2nd section */}
        <div className=" mx-[15px] ">
          <h3 className="font-[lora] uppercase mb-[8px] text-[17px]">
            LATEST NEWS
          </h3>
          <div className="border-b pt-[10px] pb-[10px]">
            <h3 className="font-[lora] pb-[10px] text-[#000000] uppercase text-[20px]">
              Writing a Fashion Blog: Beauty & Style{" "}
            </h3>
            <p className="text-[#868686]">July 31, 2017</p>
          </div>
          <div className="border-b pb-[10px]">
            <h3 className=" pt-[10px] pb-[10px]">
              30 Blog Post Ideas for Fashion Bloggers{" "}
            </h3>

            <p className="text-[#868686] pb-[10px]">July 31, 2017</p>
          </div>
          <div className="border-b pt-[10px] pb-[10px]">
            {" "}
            <h3>30 Blog Post Ideas for Fashion Bloggers</h3>
            <p className="text-[#868686] mt-[10px] pb-[10px]">July 31, 2017</p>
          </div>
        </div>
        {/* 3rd sect */}
        <div className=" px-8 md:px-20 ml-0 text-left">
          <h1 className="font-[lora] mb-[8px] uppercase text-[17px]">
            {" "}
            categories
          </h1>
          {[
            "Everyday Gadgets",
            "Flower Collection",
            "Furniture Nude Collection",
            " Ready for Beach Sandals",
            "Summer Nude Collection Sweets",
            "Uncategorized Variations",
            "Wedding Rings",
          ].map((item, id) => (
            <div className="font-[Open Sans]  py-[10px]" key={id}>
              {item}
            </div>
          ))}
        </div>
        {/* 4th section for creating instagram */}
        <div className="font-[lora] mx-[15px]   mb-[8px] uppercase text-[17px]">
          Instagram
        </div>
      </div>
      <div className="text-[13px]  p-2.5 mt-[20px]   md:mx-[92.6px]  flex">
        {" "}
        <div className="md:w-full ">
          {" "}
          <h1 className="">© 2025 ravi. All rights reserved.</h1>{" "}
        </div>
        <div className="flex justify-end  mx-[15px] md:w-full">
          <ul className="flex   gap-2.5 ">
            <li>FOLLOW US</li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
