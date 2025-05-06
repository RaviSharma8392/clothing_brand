import React from "react";

const Collection1st = ({ list }) => {
  return (
    <div>
      <div className="grid  gap-7  md:mb-10  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {list.map((item) => (
          <div key={item.id} className="   rounded-2xl ">
            <div>
              {" "}
              <img
                className=" rounded-md p-6 px-10  h-full"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className=" mx-10">
              <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold mt-1">${item.price}</p>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Collection1st;
