// App imports
import GetPokemonMock from '../data/GetPokemonMock';
import GetPokemonsMock from '../data/GetPokemonsMock';
import {
  setPokemonActionCreator,
  searchPokemonsActionCreator,
  getPokemonsStartActionCreator,
  getPokemonsSuccessActionCreator,
  getPokemonsFailureActionCreator,
} from './PokemonActionCreators';
import PokemonActionTypes from './PokemonActionTypes.enum';

// Tests
describe('setPokemon', () => {
  it('creates ISetPokemonAction', () => {
    const action = setPokemonActionCreator(GetPokemonMock);

    expect(action).toEqual({
      type: PokemonActionTypes.SET_POKEMON,
      Pokemon: GetPokemonMock,
      isFetching: false,
    });
  });
});

describe('searchPokemons', () => {
  it('creates ISearchPokemonsAction', () => {
    const term = "Darth";
    const action = searchPokemonsActionCreator(term);

    expect(action).toEqual({
      type: PokemonActionTypes.SEARCH_POKEMONS,
      term,
      isFetching: true,
    });
  });
});

describe('getPokemonsStart', () => {
  it('creates IGetPokemonsStartAction', () => {
    const action = getPokemonsStartActionCreator();

    expect(action).toEqual({
      type: PokemonActionTypes.GET_POKEMONS_START,
      isFetching: true,
    });
  });
});

describe('getPokemonsSuccess', () => {
  it('creates IGetPokemonsSuccessAction', () => {
    const action = getPokemonsSuccessActionCreator(GetPokemonsMock);

    expect(action).toEqual({
      type: PokemonActionTypes.GET_POKEMONS_SUCCESS,
      Pokemons: GetPokemonsMock,
      isFetching: false,
    });
  });
});

describe('getPokemonsFailure', () => {
  it('creates IGetPokemonsFailureAction', () => {
    const action = getPokemonsFailureActionCreator();

    expect(action).toEqual({
      type: PokemonActionTypes.GET_POKEMONS_FAILURE,
      isFetching: false,
    });
  });
});
