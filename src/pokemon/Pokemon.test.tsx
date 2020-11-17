import React from 'react';
import { mount } from 'enzyme';

import IPokemon from './data/IPokemon.interface';
import GetPokemonMock from './data/GetPokemonMock';
import Pokemon from './Pokemon';

describe('Pokemon', () => {
  const Pokemon: IPokemon = GetPokemonMock;
  const wrapper = mount(<Pokemon Pokemon={Pokemon} />);

  describe('renders', () => {
    it('a list item', () => {
      const Pokemon = wrapper.find('li')
      expect(Pokemon).toBeDefined();
    });

    it('handles submission', () => {
      const heading = wrapper.find('h2');
      expect(heading.text()).toEqual(Pokemon.name);
    });
  });
});
