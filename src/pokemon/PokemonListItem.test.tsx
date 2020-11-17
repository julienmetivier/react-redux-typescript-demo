import React from 'react';
import { mount } from 'enzyme';

import IPokemon from './data/IPokemon.interface';
import GetPokemonMock from './data/GetPokemonMock';
import PokemonListItem from './PokemonListItem';

describe('PokemonListItem', () => {
  const setPokemon = jest.fn();
  const Pokemon: IPokemon = GetPokemonMock;
  const wrapper = mount(<PokemonListItem key={Pokemon.name} Pokemon={Pokemon} setPokemon={setPokemon} />);

  describe('renders', () => {
    it('a list item', () => {
      const Pokemon = wrapper.find('li')
      expect(Pokemon).toBeDefined();
    });

    it('handles submission', () => {
      const Pokemon = wrapper.find('li');
      Pokemon.simulate('click');
      expect(setPokemon).toHaveBeenCalledTimes(1);
    });

  });
});
