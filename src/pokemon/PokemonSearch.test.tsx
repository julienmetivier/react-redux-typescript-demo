import React from 'react';
import { mount } from 'enzyme';

import PokemonSearch from './PokemonSearch';

describe('PokemonSearch', () => {
  const searchPokemons = jest.fn();
  const wrapper = mount(<PokemonSearch searchPokemons={searchPokemons} />);

  describe('renders', () => {
    it('a form', () => {
      const form = wrapper.find('form');
      expect(form).toBeDefined();
    });

    it('handles submission', () => {
      const form = wrapper.find('form');
      const input = wrapper.find('input');
      const newValue = 'Ch-ch-changes';
      input.simulate('change', { target: { value: newValue } })
      form.simulate('submit');
      expect(searchPokemons).toHaveBeenCalledWith(newValue);
    });
  });
});
