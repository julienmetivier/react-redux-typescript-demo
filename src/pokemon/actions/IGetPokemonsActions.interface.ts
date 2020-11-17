import IPokemon from '../data/IPokemon.interface';
import PokemonActionTypes from './PokemonActionTypes.enum';

export interface ISetPokemonAction {
  type: PokemonActionTypes.SET_POKEMON,
  Pokemon: IPokemon,
  isFetching: false,
}

export interface ISearchPokemonsAction {
  type: PokemonActionTypes.SEARCH_POKEMONS,
  term: string,
  isFetching: true,
}

export interface IGetPokemonsStartAction {
  type: PokemonActionTypes.GET_POKEMONS_START,
  isFetching: true,
}
export interface IGetPokemonsSuccessAction {
  type: PokemonActionTypes.GET_POKEMONS_SUCCESS,
  Pokemons: IPokemon[],
  isFetching: false,
}
export interface IGetPokemonsFailureAction {
  type: PokemonActionTypes.GET_POKEMONS_FAILURE,
  isFetching: false,
}
