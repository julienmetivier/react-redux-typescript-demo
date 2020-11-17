import * as React from 'react';

// Business domain imports
import IPokemon from './data/IPokemon.interface';
import PokemonListItem from './PokemonListItem';

interface IProps {
  setPokemon: Function,
  Pokemons: IPokemon[];
}

const PokemonList: React.FunctionComponent<IProps> = ({ Pokemons, setPokemon }) => (
  <ul className="list-group">
    {Pokemons && Pokemons.map(Pokemon => (
      <PokemonListItem
        key={Pokemon.name}
        Pokemon={Pokemon}
        setPokemon={setPokemon} />
    ))}
  </ul>
);

export default PokemonList;
