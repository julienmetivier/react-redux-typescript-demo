// Import Reducer type
import { Reducer } from 'redux';

// Busines domain imports
import PokemonActions from '../actions/PokemonActions.type';
import PokemonActionTypes from '../actions/PokemonActionTypes.enum';
import IPokemonState from '../data/IPokemonState.interface';

// Business logic
const initialPokemonState: IPokemonState = {
  Pokemon: undefined,
  Pokemons: [],
  isFetching: false,
};

const PokemonReducer: Reducer<IPokemonState, PokemonActions> = (
  state = initialPokemonState,
  action
) => {
  switch (action.type) {
    case PokemonActionTypes.SET_POKEMON: {
      return {
        ...state,
        Pokemon: action.Pokemon,
      };
    }
    case PokemonActionTypes.SEARCH_POKEMONS: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case PokemonActionTypes.GET_POKEMONS_START: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case PokemonActionTypes.GET_POKEMONS_SUCCESS: {
      return {
        ...state,
        Pokemons: action.Pokemons,
        isFetching: action.isFetching,
      };
    }
    case PokemonActionTypes.GET_POKEMONS_FAILURE: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};

export default PokemonReducer;
