import React from "react";
// importing icons
import { FaMobileAlt } from "react-icons/fa";
import { MdAccessTime, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="border bg-[#1A1110] text-white ">
      {/* this div containg full 90%content of footer */}
      <div className="border  gap-20 m-20  justify-between  flex ">
        {/* 1st section  */}
        <div className="border px-15 mx-20">
          <div className=" ">
            <h3>Simple</h3>
            <p>
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>
          </div>

          <div>
            <ul className="flex border ">
              <li>
                <FaMobileAlt />
                <span>1-677-124-44227</span>
              </li>

              <li>
                <MdLocationOn /> <span>184 Main Collins Street West 8007</span>
              </li>
              <li>
                <MdAccessTime className="" />
                <span>184 Main Collins Street West 8007</span>
              </li>
            </ul>
          </div>
        </div>
        {/* 2nd section */}
        <div>
          <h3>LATEST NEWS</h3>
          <p>Writing a Fashion Blog: Beauty & Style</p>
          <p>July 31, 2017</p>
          <h3>LATEST NEWS</h3>
          <p>Writing a Fashion Blog: Beauty & Style</p>
          <p>July 31, 2017</p>
          <h3>LATEST NEWS</h3>
          <p>Writing a Fashion Blog: Beauty & Style</p>
          <p>July 31, 2017</p>
        </div>
        <div className="border">
          <h1>categories</h1>
          {[
            "Everyday Gadgets",
            "Flower Collection",
            "Furniture Nude Collection",
            " Ready for Beach Sandals",
            "Summer Nude Collection Sweets",
            "Uncategorized Variations",
            "Wedding Rings",
          ].map((item, id) => (
            <div className="" key={id}>
              {item}
            </div>
          ))}
        </div>
        {/* 4th section for creating instagram */}
        <div>Instagram</div>
      </div>
      <div>
        {" "}
        <h1>2025 Your Company. All rights reserved.</h1>{" "}
      </div>
    </div>
  );
};

export default Footer;
