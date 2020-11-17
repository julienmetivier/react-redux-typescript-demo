import React from 'react';
import { mount } from 'enzyme';

import PokemonMissing from './PokemonMissing';

describe('PokemonMissing', () => {
  const wrapper = mount(<PokemonMissing />);

  describe('renders', () => {
    it('a heading', () => {
      const Pokemon = wrapper.find('h2')
      expect(Pokemon.text()).toEqual('Select a Pokemon');
    });
  });
});
