// Libraries
import { call, put } from 'redux-saga/effects';

// App imports
import {
  searchPokemonsActionCreator,
  getPokemonsStartActionCreator,
  getPokemonsSuccessActionCreator,
  getPokemonsFailureActionCreator,
} from '../actions/PokemonActionCreators';

import GetPokemonsMock from '../data/GetPokemonsMock';

import {
  getPokemonsFromApi,
  searchPokemonFromApi,
} from '../data/Api';

import {
  getPokemonsSaga,
  searchPokemonsSaga,
} from './Pokemon';

// Tests
describe('getPokemons', () => {
  it('success triggers success action with Pokemons', () => {
    const generator = getPokemonsSaga();
    const response = { data: { results: GetPokemonsMock } };

    expect(generator.next().value)
      .toEqual(call(getPokemonsFromApi));

    expect(generator.next(response).value)
      .toEqual(put(getPokemonsSuccessActionCreator(GetPokemonsMock)));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });

  it('failure triggers failure action', () => {
    const generator = getPokemonsSaga();
    const response = {};

    expect(generator.next().value)
      .toEqual(call(getPokemonsFromApi));

    expect(generator.next(response).value)
      .toEqual(put(getPokemonsFailureActionCreator()));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });
});

describe('searchPokemons', () => {
  it('success triggers success action with Pokemons', () => {
    const term = 'Luke';
    const generator = searchPokemonsSaga(searchPokemonsActionCreator(term));
    const response = { data: { results: GetPokemonsMock } };

    expect(generator.next().value)
      .toEqual(call(searchPokemonFromApi, term));

    expect(generator.next(response).value)
      .toEqual(put(getPokemonsSuccessActionCreator(GetPokemonsMock)));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });

  it('failure triggers failure action', () => {
    const term = 'Luke';
    const generator = searchPokemonsSaga(searchPokemonsActionCreator(term));
    const response = {};

    expect(generator.next().value)
      .toEqual(call(searchPokemonFromApi, term));

    expect(generator.next(response).value)
      .toEqual(put(getPokemonsFailureActionCreator()));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });
});
