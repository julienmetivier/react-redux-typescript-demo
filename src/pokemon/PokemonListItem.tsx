import * as React from 'react';

import IPokemon from './data/IPokemon.interface';

interface IProps {
  Pokemon: IPokemon,
  setPokemon: Function,
}

const PokemonListItem: React.FunctionComponent<IProps> = ({ Pokemon, setPokemon }: IProps) => {
  const onClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setPokemon(Pokemon);
  }

  return (
    <li
      key={Pokemon.name}
      className="list-group-item"
      onClick={onClickHandler}>
      {Pokemon.name}
    </li>
  );
};

export default PokemonListItem;
