// Business domain imports
import PokemonActionTypes from './PokemonActionTypes.enum';
import {
  ISetPokemonAction,
  IGetPokemonsStartAction,
  IGetPokemonsSuccessAction,
  IGetPokemonsFailureAction,
  ISearchPokemonsAction
} from './IGetPokemonsActions.interface';
import IPokemon from '../data/IPokemon.interface';

export const setPokemonActionCreator = (Pokemon: IPokemon): ISetPokemonAction => {
  return {
    type: PokemonActionTypes.SET_POKEMON,
    Pokemon: Pokemon,
    isFetching: false,
  };
}

export const searchPokemonsActionCreator = (term: string): ISearchPokemonsAction => {
  return {
    type: PokemonActionTypes.SEARCH_POKEMONS,
    term,
    isFetching: true,
  };
}

export const getPokemonsStartActionCreator = (): IGetPokemonsStartAction => {
  return {
    type: PokemonActionTypes.GET_POKEMONS_START,
    isFetching: true,
  };
}

export const getPokemonsSuccessActionCreator = (Pokemons: IPokemon[]): IGetPokemonsSuccessAction => {
  return {
    type: PokemonActionTypes.GET_POKEMONS_SUCCESS,
    Pokemons,
    isFetching: false,
  };
}

export const getPokemonsFailureActionCreator = (): IGetPokemonsFailureAction => {
  return {
    type: PokemonActionTypes.GET_POKEMONS_FAILURE,
    isFetching: false,
  };
}
