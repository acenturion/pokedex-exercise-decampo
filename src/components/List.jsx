import ListContainer from "./ListContainer.jsx";
import {PokemonCard} from "./PokemonCard.jsx";
import TextPokemon from "./TextPokemon.jsx";
import TitlePokemon from "./TitlePokemon.jsx";
import ImagePokemon from "./ImagePokemon.jsx";


function List({items}) {
    return (
        <ListContainer>
            {items.map(({name, weight, type, urlImg}, index) => (
                <PokemonCard key={index + name}>
                    <ImagePokemon src={urlImg} alt={name}/>
                    <TitlePokemon>{name}</TitlePokemon>
                    <TextPokemon>{type}</TextPokemon>
                    <TextPokemon>{weight} KG</TextPokemon>
                </PokemonCard>
            ))}
        </ListContainer>
    );
}

export default List;