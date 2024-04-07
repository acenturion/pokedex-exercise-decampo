 function adaptListPokemon(data) {
   const formattedData = data.map(pokemonData => {
        return {
            id: pokemonData.id,
            name: pokemonData.name,
            weight: pokemonData.weight,
            type: pokemonData.types.map(type => type.type.name).join(', '),
            urlImg: pokemonData.sprites.other["official-artwork"].front_default
        }
    })
    return formattedData;
}

export default adaptListPokemon;