import factsData from "../api/facts.json";
import { useEffect, useState } from "react";
import pikachu from "../assets/pokeAnniv21.jpg";
import bulbasar from "../assets/bulbasar.jpg";

const Carousel = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    setFacts(factsData);
  }, []);

  return (
    <div className="carousel md:w-3/4 w-[90vw]  flex mx-auto rounded-xl h-[250px] md:h-3/4">
      {facts.map((fact, index) => (
        <div id={`slide${index}`} className="carousel-item relative w-full" key={fact.factId}>
          <img
            src={pikachu}
            className="w-full"
            alt="Carousel"
          />
          <div className="absolute  inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white ">
            <h1 className="md:text-3xl w-50 md:pl-0 pl-16 text-xl font-bold my-5" style={{ textShadow: "2px 2px 5px black" }}>{fact.title}</h1>
            <p className="w-3/4 text-center md:text-inherit text-sm font-medium" style={{ textShadow: "2px 2px 5px black" }}>{fact.fact}</p>
          </div>
          <div className="absolute left-0 md:left-5 right-0 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${index === 0 ? facts.length - 1 : index - 1}`} className="btn btn-circle ">
              ❮
            </a>
            <a href={`#slide${index === facts.length - 1 ? 0 : index + 1}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
