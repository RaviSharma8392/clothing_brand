import React from "react";
import teamData from "../../Data/teamData.json";

export const OurTeam = () => {
  return (
    <div>
      <div className="bg-[#000080] font-[Minion Pro] ">
        <h1 className="text-center  uppercase p-5 border-b-2 border-[#ffd700] text-2xl font-bold text-[#cfd1d9] ">
          Meet Our Team Of Experts
        </h1>
      </div>
      <div className="grid grid-cols-1 bg-white sm:grid-cols-2 sm:gap-8 h-full md:grid-cols-3 ">
        {teamData.map((item) => (
          <div className=" items-center h-full m-5 p-2" key={item.id}>
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
