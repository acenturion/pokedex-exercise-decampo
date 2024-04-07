import {createSlice} from "@reduxjs/toolkit";
import {OFFSET_INCREMENT} from "../../service/constants.js";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        value: [],
        loading: true,
        offset: 0,
    },
    reducers: {
        load: (state, action) => {
            state.loading = action.payload
        },
        loadPokemon: (state, action) => {
            state.value = action.payload;
            state.offset = state.offset + OFFSET_INCREMENT;
        },
        getNextPokemon: (state, action) => {
            state.value = [...state.value, ...action.payload];
            state.offset = state.offset + OFFSET_INCREMENT;
        }
    }
})

export const {
    getNextPokemon,
    loadPokemon,
    load,
} = pokemonSlice.actions;

export const selectPokemon = state => state.pokemon.value
export const selectOffset = state => state.pokemon.offset
export const selectLoading = state => state.pokemon.loading

export default pokemonSlice.reducer;