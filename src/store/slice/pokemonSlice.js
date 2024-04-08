import {createSlice} from "@reduxjs/toolkit";
import {OFFSET_INCREMENT} from "../../service/constants.js";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        value: [],
        loading: true,
        offset: 0,
        selected: {}
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
        },
        setSelectedData: (state, action) => {
            state.selected = action.payload;
        },
        getPokemonData: (state, action) => {
            state.selected = state.value.find(pokemon => pokemon.name === action.payload);
        }
    }
})

export const {
    getNextPokemon,
    loadPokemon,
    load,
    getPokemonData,
    setSelectedData,
} = pokemonSlice.actions;

export const selectListPokemon = state => state.pokemon.value
export const selectPokemon = state => state.pokemon.selected
export const selectOffset = state => state.pokemon.offset
export const selectLoading = state => state.pokemon.loading

export default pokemonSlice.reducer;