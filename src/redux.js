import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

//action type
const SET_INITIAL_POKEMON = "GET_INITIAL_POKEMON";
const SET_RANDOM_POKEMON = "SET_RANDOM_POKEMON";
const SET_FETCH_STATUS = "SET_FETCH_STATUS";

//action creators
export const setInitialPokemon = (initialPokemon) => ({
  type: SET_INITIAL_POKEMON,
  payload: initialPokemon,
});

export const setRandomPokemon = (randomPokemon) => ({
  type: SET_RANDOM_POKEMON,
  payload: randomPokemon,
});

export const setFetchStatus = () => ({
  type: SET_FETCH_STATUS,
});

export const getInitialPokemon = () => {
  return async function thunk(dispatch) {
    const squirtle = axios.get("https://pokeapi.co/api/v2/pokemon/squirtle");
    const charmander = axios.get(
      "https://pokeapi.co/api/v2/pokemon/charmander"
    );
    const bulbasaur = axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur");

    const values = await Promise.all([squirtle, charmander, bulbasaur]);

    const data = values.map((pokemon) => pokemon.data);
    dispatch(setInitialPokemon(data));
  };
};

export const getRandomPokemon = () => {
  return async function thunk(dispatch) {
    const randomNumber = Math.floor(Math.random() * 898) + 1;
    const random = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    );
    dispatch(setRandomPokemon(random.data));
  };
};

// initial state of the store
const initialState = { pokemon: [], fetchStatus: false };

// reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INITIAL_POKEMON:
      return {
        pokemon: action.payload,
      };
    case SET_RANDOM_POKEMON:
      return {
        pokemon: [...state.pokemon.slice(0, 3), action.payload],
        fetchStatus: !state.fetchStatus,
      };
    case SET_FETCH_STATUS:
      return {
        ...state,
        fetchStatus: !state.fetchStatus,
      };
    default:
      return state;
  }
}

//store
export const store = createStore(rootReducer, applyMiddleware(thunk));
