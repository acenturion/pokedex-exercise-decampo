import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from "./slice/pokemonSlice.js";

export default configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
})