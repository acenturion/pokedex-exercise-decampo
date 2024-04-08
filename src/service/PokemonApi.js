import {LIMIT} from "./constants.js";
import adaptInfoPokemon from "./adapters/adaptInfoPokemon.js";

const URL = "https://pokeapi.co/api/v2/"

/*Hago el fetch y traigo lista de pokemon con su nombre y la url que contiene la informacion del pokemon*/
async function getPokemon(
    offset = 0
) {

    try {
        const response = await fetch(URL + "pokemon?limit=" + LIMIT + "&offset=" + offset)
        const data = await response.json();
        const results = data.results;

        const pokemonArrayInfo = await Promise.all(results.map(pokemon => getPokemonInfo(pokemon.name)));
        return pokemonArrayInfo;
    } catch (error) {
        console.log("Error calling Api pokemon", error)
    }
}

/*Hago el fetch de cada pokemon especifico si quisiera mas informacion del pokemon lo agrego en el adapter*/
async function getPokemonInfo(name) {
    const result = await fetch(URL + "pokemon/" + name)
    const data = await result.json();
    return adaptInfoPokemon(data);
}

export {
    getPokemon,
    getPokemonInfo
}