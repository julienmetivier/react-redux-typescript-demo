import * as React from 'react';
import { Link } from 'react-router-dom';

import IPokemon from './data/IPokemon.interface';

interface IProps {
  Pokemon: IPokemon,
  setPokemon: Function,
}

const PokemonListItem: React.FunctionComponent<IProps> = ({ Pokemon }: IProps) => {
  return (
    <li
      key={Pokemon.name}
      className="list-group-item">
        <Link to={`/pokemon/${Pokemon.name.toLowerCase()}`}>{Pokemon.name}</Link>
    </li>
  );
};

export default PokemonListItem;
