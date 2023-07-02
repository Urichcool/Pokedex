import { signOut } from "firebase/auth";
import React from "react";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { useAppDispatch } from "../app/hooks";
import { setToast, setUserStatus } from "../app/slices/AppSlice";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { pokemonTabs } from "../utils/Constants";
import { useLocation } from "react-router-dom";

function Footer() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const handleLogOut = () => {
    signOut(firebaseAuth);
    dispatch(setUserStatus(undefined));
    dispatch(setToast("Logged out successfully."));
  };

  const routes = [
    {
      name: pokemonTabs.description,
      value: "Description",
    },
    {
      name: pokemonTabs.evolution,
      value: "Evolution",
    },
    {
      name: pokemonTabs.locations,
      value: "Catching",
    },
    {
      name: pokemonTabs.moves,
      value: "Capable Moves",
    },
  ];

  return (
    <footer>
      <div className="block"></div>
      <div className="data">
        {location.pathname.includes("/pokemon")   &&
          <ul>
          {routes.map((route) => {
            return (
              <li key={route.name} className="" onClick={() => { }}>
                {route.value}
              </li>
            );
          })}
        </ul>} 
      </div>
      <div className="block">
        <MdOutlinePowerSettingsNew onClick={handleLogOut} />
      </div>
    </footer>
  );
}

export default Footer;
