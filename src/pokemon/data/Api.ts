import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2';

export const getPokemonsFromApi = (): Promise<any> => {
  return axios.get(`${baseUrl}/pokemon?limit=1000`);
}

export const searchPokemonFromApi = (name: String): Promise<any> => {
  return axios.get(`${baseUrl}/pokemon/${name}`);
}
