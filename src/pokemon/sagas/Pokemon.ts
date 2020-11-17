import { call, put, takeEvery, all } from 'redux-saga/effects';
import PokemonActionTypes from '../actions/PokemonActionTypes.enum';

import {
  getPokemonsFromApi,
  searchPokemonsFromApi,
} from '../data/Api';

import {
  getPokemonsSuccessActionCreator,
  getPokemonsFailureActionCreator
} from '../actions/PokemonActionCreators';

import {
  ISearchPokemonsAction
} from '../actions/IGetPokemonsActions.interface';


export function* getPokemonsSaga() : any {
  try {
    const response = yield call(getPokemonsFromApi);
    const Pokemons = response.data.results;
    yield put(getPokemonsSuccessActionCreator(Pokemons))
  } catch(e) {
    yield put(getPokemonsFailureActionCreator());
  }
}

export function* searchPokemonsSaga(action: ISearchPokemonsAction) : any {
  try {
    const response = yield call(searchPokemonsFromApi, action.term);
    const Pokemons = response.data.results;
    yield put(getPokemonsSuccessActionCreator(Pokemons))
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
