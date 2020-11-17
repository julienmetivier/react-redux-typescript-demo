import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Business domain imports
import GetPokemonMock from './data/GetPokemonsMock';
import GetPokemonsMock from './data/GetPokemonsMock';
import { PokemonContainer } from './PokemonContainer';
import IPokemon from './data/IPokemon.interface';
import Loader from './Loader';

// Extract to helper?
interface renderElementParameters {
  getPokemons: jest.Mock,
  searchPokemons: jest.Mock,
  setPokemon: jest.Mock,
  Pokemon: IPokemon,
  Pokemons: IPokemon[],
  isFetching: Boolean,
}

const defaultProps:renderElementParameters  = {
  getPokemons: jest.fn(),
  setPokemon: jest.fn(),
  searchPokemons: jest.fn(),
  Pokemons: [],
  Pokemon: GetPokemonMock,
  isFetching: false,
}

const renderPokemonListContainer = (overrides: any): ShallowWrapper => {
  return shallow(
    <PokemonContainer
      {...defaultProps}
      {...overrides}
    />
  );
}

// Workaround for Enyzme testing of useEffect
// See: https://blog.carbonfive.com/2019/08/05/shallow-testing-hooks-with-enzyme/
const mockUseEffect = (): jest.SpyInstance => {
  return jest.spyOn(React, 'useEffect').mockImplementation(f => f());
}

// Tests
describe('PokemonListContainer', () => {
  describe('when fetching', () => {
    const wrapper = renderPokemonListContainer({ isFetching: true });

    it('display "Loader"', () => {
      const element = <Loader />;

      expect(wrapper.contains(element)).toBe(true);
    });
  });

  describe('on initial render', () => {
    const Pokemons: IPokemon[] = [];
    const getPokemons = jest.fn().mockResolvedValue(GetPokemonsMock);
    mockUseEffect();
    const wrapper = renderPokemonListContainer({ Pokemons, getPokemons });

    it('calls getPokemons', () => {
      expect(getPokemons).toHaveBeenCalledTimes(1);
    });

    it('a Pokemon container', () => {
      expect(wrapper.find('div.Pokemons-container')).toHaveLength(1);
    });
  });
});
