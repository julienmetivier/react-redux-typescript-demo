import React from 'react';
import { shallow } from 'enzyme';

// Business domain imports
import App from './App';
import PokemonContainer from '../pokemon/PokemonContainer';

describe('App', () => {
  const wrapper = shallow(<App />);

  describe('renders', () => {
    it('PokemonContainer', () => {
      const element = <PokemonContainer />;
      expect(wrapper.contains(element)).toEqual(true);
    });
  });
});
