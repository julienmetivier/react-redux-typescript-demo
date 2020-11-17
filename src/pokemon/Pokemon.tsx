import * as React from 'react';

import IPokemon from './data/IPokemon.interface';

interface IProps {
  Pokemon: IPokemon
}

const Pokemon: React.FunctionComponent<IProps> = ({ Pokemon }: IProps) => (
  <>
    <h2>{Pokemon.name}</h2>

    <table className="table">
      <thead>
        <tr>
          <th scope="col">Info</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
    </table>
  </>
)

export default Pokemon;
