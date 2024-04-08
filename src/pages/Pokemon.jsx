import {PokemonCard} from "../components/PokemonCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import ImagePokemon from "../components/ImagePokemon.jsx";
import TitlePokemon from "../components/TitlePokemon.jsx";
import TextPokemon from "../components/TextPokemon.jsx";
import Container from "../components/Container.jsx";
import Title from "../components/Title.jsx";
import {useEffect} from "react";
import {getPokemonData, selectPokemon, setSelectedData} from "../store/slice/pokemonSlice.js";
import {useParams} from "react-router-dom";
import {getPokemonInfo} from "../service/PokemonApi.js";

function Pokemon() {
    const dispatch = useDispatch()
    let {name} = useParams();

    const pokemon = useSelector(selectPokemon);
    const isEmpty = JSON.stringify(pokemon) === '{}';

    useEffect(() => {
        async function getPokemon() {
            const dataResult = await getPokemonInfo(name);
            dispatch(setSelectedData(dataResult))
        }

        if (isEmpty) {
            getPokemon();
        } else {
            dispatch(getPokemonData(name))
        }
    }, []);

    return (
        <Container className={"container"}>
            {isEmpty ? (<p>loading pokemon...</p>)
                : (<>
                    <Title>{name}</Title>
                    <PokemonCard key={name}>
                        <ImagePokemon src={pokemon?.urlImg} alt={name}/>
                        <TitlePokemon>{pokemon?.name}</TitlePokemon>
                        <TextPokemon>{pokemon?.type}</TextPokemon>
                        <TextPokemon>{pokemon?.weight} KG</TextPokemon>
                    </PokemonCard>
                </>)}
        </Container>
    );
}

export default Pokemon;