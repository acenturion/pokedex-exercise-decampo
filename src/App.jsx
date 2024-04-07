import './App.css'
import List from "./components/List.jsx";
import Title from "./components/Title.jsx";
import {useEffect} from "react";
import {getPokemon} from "./service/PokemonApi.js";
import Container from "./components/Container.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
    getNextPokemon, load,
    loadPokemon,
    selectLoading,
    selectOffset,
    selectPokemon,
} from "./store/slice/pokemonSlice.js";
import Button from "./components/Button.jsx";

function App() {
    const dispatch = useDispatch()

    const pokemon = useSelector(selectPokemon);
    const offset = useSelector(selectOffset);
    const loading = useSelector(selectLoading);

    useEffect(() => {
        async function loadPokemonData() {
            dispatch(load(true))
            const dataResult = await getPokemon();
            dispatch(loadPokemon(dataResult))
            dispatch(load(false))
        }

        loadPokemonData();
    }, []);

    const handleOnLoadMore = async () => {
        dispatch(load(true))
        const dataResult = await getPokemon(offset);
        dispatch(getNextPokemon(dataResult));
        dispatch(load(false))
    }


    return (
        <Container className={"container"}>
            <Title>Pokedex</Title>
            {pokemon.length > 0 && (
                <>
                    <List items={pokemon}/>
                    <Button onClick={handleOnLoadMore}>Load More</Button>
                </>
            )}
            {loading && (<p>Pokedex is loading...</p>)}
        </Container>
    )
}

export default App
