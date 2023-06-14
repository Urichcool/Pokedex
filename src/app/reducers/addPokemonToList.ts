import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonStatType, pokemonTypeInterface } from "../../utils/Types";

export const addPokemonToList = createAsyncThunk("pokemon/addPokemon", async (pokemon: {
    id: number;
    name: string;
    types: pokemonTypeInterface[] | string[]
    stats?: pokemonStatType
}) => {

})