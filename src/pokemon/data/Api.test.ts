import axios from 'axios';
import {
  getPokemonsFromApi,
  searchPokemonFromApi,
} from './Api';

// Tests
describe('getPokemons', () => {
  beforeEach(() => {
    axios.get = jest.fn();
  })

  describe('getPokemons', () => {
    it('httpClient is called as expected', () => {
      getPokemonsFromApi();
      expect(axios.get).toHaveBeenCalledWith('https://swapi.co/api/people/');
    });
  });

  describe('searchPokemons', () => {
    const searchString = 'Luke';

    it('httpClient is called as expected', () => {
      searchPokemonFromApi(searchString);
      expect(axios.get).toHaveBeenCalledWith(`https://swapi.co/api/people/?search=${searchString}`);
    });
  });
});
