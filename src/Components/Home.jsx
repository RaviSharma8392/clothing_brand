import Data from "../Data/data.json";
import productData from "../Data/data1.json";
import { OurTeam } from "../Pages/ChildPages/OurTeam";
// import { Collection } from "./Collection";
import Collection1st from "./Collection1st";
import { StepsCreating } from "./StepsCreating";

const Home = () => {
  return (
    <div className=" ">
      {/* First data list */}
      <div className=" ">
        <img
          src="https://www.kenthaste.co.uk/wp-content/uploads/2024/01/Mask-Group-11.jpg"
          alt="main image"
        />{" "}
      </div>
      <div className="bg-[#000080] font-[Minion Pro] ">
        <h1 className="text-center p-5 border-b-2 border-[#ffd700] text-2xl font-bold text-[#cfd1d9] ">
          What you can expect from our Bespoke Tailoring Service
        </h1>
      </div>
      <StepsCreating />

      <div className="bg-white">
        <Collection1st list={Data} />
      </div>

      {/* Centered Section */}
      <div className="text-center bg-[#000080]  text-[#cfd1d9] md:mb-10">
        <button className="border mt-3 items-center h-7 w-fit px-3 md:px-4 md:py-2 md:mb-4 text-sm ">
          Best Fashion Deals
        </button>
        <h1 className="md:text-2xl font-bold m-5 mb-2">
          New Summer Collection
        </h1>
        <p className=" text-[#cfd1d9] text-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
          ullamcorper.
        </p>
      </div>

      {/* Second data list */}
      <div className="bg-white">
        <Collection1st list={productData} />
      </div>
      <div>
        <OurTeam />
      </div>
    </div>
  );
};

export default Home;
