import ListContainer from "./ListContainer.jsx";
import {PokemonCard} from "./PokemonCard.jsx";
import TextPokemon from "./TextPokemon.jsx";
import TitlePokemon from "./TitlePokemon.jsx";
import ImagePokemon from "./ImagePokemon.jsx";
import {useNavigate} from "react-router-dom";


function List({items}) {
    const navigate = useNavigate();

    const handleOpressCard = (name) => {
        navigate(name)
    }
    return (
        <ListContainer>
            {items.map(({name, weight, type, urlImg}, index) => (
                <PokemonCard onClick={() => handleOpressCard(name)} key={index + name}>
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