import { createAsyncThunk } from "@reduxjs/toolkit";
import { where, query, getDocs } from "firebase/firestore";
import { pokemonListRef } from "../../utils/FirebaseConfig";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { userPokemonsType } from "../../utils/Types";
import { RootState } from "../store";

export const getUserPokemons = createAsyncThunk(
  "pokemon/userList",
  async (args, { getState }) => {
    try {
      const {
        app: { userInfo },
      } = getState() as RootState;
      if (!userInfo?.email) {
        return;
      }
      const firestoreQuery = query(
        pokemonListRef,
        where("email", "==", userInfo.email)
      );
      const fetchedPokemons = await getDocs(firestoreQuery);
      if (fetchedPokemons.docs.length) {
        const userPokemons: userPokemonsType[] = [];
        fetchedPokemons.forEach(async (pokemon) => {
          const pokemons = await pokemon.data().pokemon;
          //@ts-ignore
          let image = images[pokemon.id];
          if (!image) {
            //@ts-ignore
            image = defaultImages[pokemon.id];
          }
          const types = pokemon.types.map((name: string) => ({
            //@ts-ignore
            [name]: pokemon[name],
          }));
          userPokemons.push({
            ...pokemons,
            firebaseId: pokemon.id,
            image,
            types,
          });
        });
          return userPokemons;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
