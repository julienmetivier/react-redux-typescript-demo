import {
  setPokemonActionCreator,
  getPokemonsStartActionCreator,
  getPokemonsSuccessActionCreator,
  getPokemonsFailureActionCreator
} from '../actions/PokemonActionCreators';
import IPokemonState from "../data/IPokemonState.interface";
import GetPokemonMock from '../data/GetPokemonMock';
import GetPokemonsMock from '../data/GetPokemonsMock';
import PokemonReducer from './PokemonReducer';

const initialState: IPokemonState = {
  Pokemons: [],
  isFetching: false,
};

describe('PokemonReducer action type responses for', () => {
  describe('SET_POKEMON', () => {
    const action = setPokemonActionCreator(GetPokemonMock);
    const newState = PokemonReducer(initialState, action);

    it('Pokemon is set', () => {
      expect(newState.Pokemon).toEqual(GetPokemonMock);
    });
  });

  describe('GET_POKEMONS_START', () => {
    const action = getPokemonsStartActionCreator();
    const newState = PokemonReducer(initialState, action);

    it('is fetching', () => {
      expect(newState.isFetching).toBe(true);
    });
  });

  describe('GET_POKEMONS_SUCCESS', () => {
    const data = GetPokemonsMock ;
    const action = getPokemonsSuccessActionCreator(data);
    const newState = PokemonReducer(initialState, action);
    it('fetched Pokemons', () => {
      expect(newState.Pokemons).toEqual(GetPokemonsMock);
    });

    it('is not fetching', () => {
      expect(newState.isFetching).toBe(false);
    });
  });

  describe('GET_POKEMONS_FAILURE', () => {
    const action = getPokemonsFailureActionCreator();
    const newState = PokemonReducer(initialState, action);

    it('has not fetched Pokemons', () => {
      expect(newState.Pokemons).toEqual([]);
    });

    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });
});
