import PokemonTrainers from "./PokemonTrainers";
import pokeBall from "../assets/pokeball.png";
import card from '../assets/card1.png'
const RegionCard = ({ regionName }) => {
  return (
    <div className="flex w-90 flex-wrap  justify-center gap-20">
      {regionName.map((reg, index) => (
        <div key={index}>
          {Object.keys(reg).map((regName) => (
            <div className="card image-full w-63  ">
              <figure>
                <img
                  src={card}
                  alt="Region images"
                  className="italic "
                />
              </figure>
              <div className="card-body  ">
                <h2 className=" text-shadow-border text-center  font-bold text-zinc-900">{regName}</h2>
              

                <div className="card-actions justify-center">
                  <PokemonTrainers
                    trainerData={reg[regName]}
                    id={index}
                    regionName={regName}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RegionCard;
