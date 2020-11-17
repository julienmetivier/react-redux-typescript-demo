import React from 'react';
import { shallow } from 'enzyme';

// Business domain imports
import IPokemon from './data/IPokemon.interface';
import GetPokemonsMock from './data/GetPokemonsMock';
import PokemonList from './PokemonList';

describe('PokemonList', () => {
  const setPokemon = jest.fn();

  describe('without Pokemons', () => {
    const Pokemons: IPokemon[] = [];
    const wrapper = shallow(<PokemonList Pokemons={Pokemons} setPokemon={setPokemon} />);

    describe('renders', () => {
      it('empty undordered list', () => {
        const element = <ul className="list-group"></ul>;
        expect(wrapper.contains(element)).toEqual(true);
      });
    });
  });

  describe('with Pokemons', () => {
    const Pokemons: IPokemon[] = GetPokemonsMock;
    const wrapper = shallow(<PokemonList Pokemons={Pokemons} setPokemon={setPokemon} />);
    const Pokemon: IPokemon = Pokemons[0];

    describe('renders', () => {
      it('a list item per Pokemon', () => {
        const Pokemon = wrapper.find('li');
        expect(Pokemon).toBeDefined();
      });
    });
  });
});
