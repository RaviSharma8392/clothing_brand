import Data from "../Data/data.json";
import productData from "../Data/data1.json";
import { OurTeam } from "../Pages/ChildPages/OurTeam";
// import { Collection } from "./Collection";
import Collection1st from "./Collection1st";
import ManualCarousel from "./imageSlide";

const Home = () => {
  return (
    <div className=" md:px-16">
      {/* First data list */}
      <div className="mt-20">
        <ManualCarousel />
      </div>
      <div>
        <Collection1st list={Data} />
      </div>

      {/* Centered Section */}
      <div className="text-center md:mb-10">
        <button className="border mt-3 items-center h-7 w-fit px-3 md:px-4 md:py-2 md:mb-4 text-sm ">
          Best Fashion Deals
        </button>
        <h1 className="md:text-2xl font-bold m-5 mb-2">
          New Summer Collection
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
          ullamcorper.
        </p>
      </div>

      {/* Second data list */}
      <div>
        <Collection1st list={productData} />
      </div>
      <div>
        <OurTeam />
      </div>
    </div>
  );
};

export default Home;
