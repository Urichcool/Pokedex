import React from "react";
import pokeballIcon from "../assets/pokeball-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function NavBar() {
  const navigationRoutes = [
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Compare",
      route: "/compare",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "My List",
      route: "/list",
    },
    {
      name: "About",
      route: "/about",
    },
  ];

  const ul = (index: number) => {
    const underlines = document.querySelectorAll<HTMLElement>(".underline")
    for (let i = 0; i < underlines.length; i += 1){
      underlines[i].style.transform = "translate3d(" + index * 100 + " %,0,0)"
    }
}


  return (
    <nav>
      <div className="block">
        <img src={pokeballIcon} alt="pokeball icon" />
      </div>
      <div className="data">
        <ul>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          {navigationRoutes.map(({ route, name }, index) => (
            <Link to={route} key={index}>
              <li>{name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

export default NavBar;
