import { call, put, takeEvery, all } from 'redux-saga/effects';
import PokemonActionTypes from '../actions/PokemonActionTypes.enum';

import {
  getPokemonsFromApi,
  searchPokemonFromApi,
} from '../data/Api';

import {
  getPokemonsSuccessActionCreator,
  getPokemonsFailureActionCreator
} from '../actions/PokemonActionCreators';

import IPokemon from '../data/IPokemon.interface';
import { ISearchPokemonsAction } from '../actions/IGetPokemonsActions.interface';
import { capitalizeWord } from '../../helpers/utils';


export function* getPokemonsSaga() : any {
  try {
    const response = yield call(getPokemonsFromApi);
    const pokemons = response.data.results;
    pokemons.forEach((pokemon: IPokemon ) => {
      pokemon.name = capitalizeWord(pokemon.name);
    });
    yield put(getPokemonsSuccessActionCreator(pokemons))
  } catch(e) {
    yield put(getPokemonsFailureActionCreator());
  }
}

export function* searchPokemonsSaga(action: ISearchPokemonsAction) : any {
  try {
    const response = yield call(searchPokemonFromApi, action.term);
    const pokemon = response.data.results;
    yield put(getPokemonsSuccessActionCreator(pokemon))
  } catch(e) {
    yield put(getPokemonsFailureActionCreator());
  }
};

export function* PokemonsSaga() {
  yield all([
    takeEvery(PokemonActionTypes.GET_POKEMONS_START, getPokemonsSaga),
    takeEvery(PokemonActionTypes.SEARCH_POKEMONS, searchPokemonsSaga)
  ]);
}
