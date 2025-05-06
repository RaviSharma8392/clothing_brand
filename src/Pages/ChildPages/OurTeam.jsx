import React from "react";
import teamData from "../../Data/teamData.json";

export const OurTeam = () => {
  return (
    <div>
      <div className="border md-px-100 m-7">
        <h2>
          {" "}
          <strong className="md:text-[28px] ">
            MEET OUR TEAM OF EXEPERTS
          </strong>{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 h-full md:grid-cols-3 ">
        {teamData.map((item) => (
          <div
            className="shadow  rounded-2xl items-center h-full m-5 p-2"
            key={item.id}
          >
            <img src={item.image} className="px-23 py-10 " alt={item.name} />

            <div className=" pl-7">
              <h3>{item.name}</h3>
              <p>
                <strong>Role:</strong> {item.role}
              </p>
              <p>
                <strong>Best Skill:</strong> {item.bestSkill}
              </p>
              <p>
                <strong>Achievement:</strong> {item.achievement}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
