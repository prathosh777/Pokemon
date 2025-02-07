import { useEffect, useState } from "react";
import dataObject from "../api/trainers.json";
import RegionCard from "../components/RegionCard";
import Carousel from "../components/Carousel";

const FunFacts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataObject.regions);
  }, []);

  console.log(data);

  return (
    <div className="my-5 mb-5 ">
      <img src="/src/assets/Regions.png" className="md:w-[15%] sm:w-[25%] w-[50%] mx-auto" alt="" />

      <RegionCard regionName={data} />
      <img src="/src/assets/Fun-Facts.png" className="md:w-[18%] py-5 sm:w-[35%] w-[50%] mx-auto" alt="" />
      <Carousel />
    </div>
  );
};

export default FunFacts;
