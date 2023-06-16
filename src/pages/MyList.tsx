import React from "react";
import { useAppSelector } from "../app/hooks";
import Login from "../components/Login";
import PokemonCardGrid from "../components/PokemonCardGrid";
import Wrapper from "../sections/Wrapper";

function MyList() {
  const { userInfo } = useAppSelector(({ app }) => app);
  const { userPokemons } = useAppSelector(({ pokemon }) => pokemon);

  return (
    <div className="list">
      {userInfo ? <PokemonCardGrid pokemons={userPokemons} /> : <Login />}
    </div>
  );
}

export default Wrapper(MyList);
