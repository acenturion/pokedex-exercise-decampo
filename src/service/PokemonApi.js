import adaptListPokemon from "./adapters/adaptListPokemon.js";
import {LIMIT} from "./constants.js";

const URL = "https://pokeapi.co/api/v2/"

/*Hago el fetch y traigo lista de pokemon con su nombre y la url que contiene la informacion del pokemon*/
async function getPokemon(
    offset = 0
) {

    try {
        const response = await fetch(URL + "pokemon?limit=" + LIMIT + "&offset=" + offset)
        const data = await response.json();
        const results = data.results;

        const pokemonArrayInfo = await Promise.all(results.map(pokemon => getPokemonData(pokemon)));

        return await adaptListPokemon(pokemonArrayInfo);
    } catch (error) {
        console.log("Error calling Api pokemon", error)
    }
}

/*Hago el fetch de cada pokemon especifico*/
async function getPokemonData(pokemon) {
    const result = await fetch(pokemon.url)
    const data = await result.json();
    return await data;
}

export {
    getPokemon,
}