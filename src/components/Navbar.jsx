
import { Link } from "react-router-dom";
import { useState } from "react";
import pokemonTitle from "../assets/pokemon.png";
import ThemeController from "./ThemeController";
import closedball from "../assets/pokeball-close.png";
import openball from "../assets/pokeball-open.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-3 bg-red-600">
      <div className="navbar  px-2 md:px-8 bg-white rounded-full">
        <div className="flex-1">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className=""
              onClick={handleToggle}
            >
              <div className="rounded-full cursor-pointer">
                <img
                  src={isOpen ? openball : closedball}
                  alt="Pokeball"
                  className="w-[35px] md:w-[50px] h-[50px] md:h-[70px]"
                />
              </div>
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 ml-2 relative left-1 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/" onClick={handleLinkClick}>
                   <img src="/src/assets/Evolution.png" className="w-[80%]" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/pokemons" onClick={handleLinkClick}>
                   <img src="/src/assets/Search.png" className="w-2/3" alt="" />
                    
                  </Link>
                </li>
                <li>
                  <Link to="/funfacts" onClick={handleLinkClick}>
                  <img src="/src/assets/Regions.png" className="w-2/3" alt="" />

                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="flex-1">
          <a href="/">
            <img
              src={pokemonTitle}
              alt="pokemon title"
              className="md:w-[35%] w-52 rounded-full p-2 -ml-5 sm:-ml-10 md:-ml-20"
            />
          </a>
        </div>
        <ThemeController />
      </div>
    </div>
  );
};

export default Navbar;