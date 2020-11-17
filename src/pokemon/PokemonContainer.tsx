import React from 'react';
import { connect } from 'react-redux';

import IAppState from '../store/IAppState.interface';
import IPokemon from './data/IPokemon.interface';

import {
  setPokemonActionCreator,
  getPokemonsStartActionCreator,
  searchPokemonsActionCreator
} from './actions/PokemonActionCreators';

import Pokemon from './Pokemon';
import PokemonList from './PokemonList';
import PokemonMissing from './PokemonMissing';
import PokemonSearch from './PokemonSearch';
import Loader from './Loader';
import NavigationBar from './NavigationBar';

interface IProps {
  getPokemons: Function,
  setPokemon: Function,
  searchPokemons: Function,
  Pokemon: any,
  Pokemons: IPokemon[],
  isFetching: Boolean
}

// Note: This is mainly done to enable testing
export const PokemonContainer: React.FunctionComponent<IProps> = ({
  getPokemons,
  setPokemon,
  searchPokemons,
  Pokemon,
  Pokemons,
  isFetching
}) => {
  // Workaround for Enyzme testing of useEffect, allows stubbing
  // See: https://blog.carbonfive.com/2019/08/05/shallow-testing-hooks-with-enzyme/
  React.useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <div className="Pokemons-container">
      <NavigationBar>
        <PokemonSearch searchPokemons={searchPokemons} />
      </NavigationBar>

      { isFetching
        ? <Loader></Loader>
        : (
          <div className="row">
            <div className="col-sm">
              <PokemonList
                Pokemons={Pokemons}
                setPokemon={setPokemon} />
            </div>

            <div className="col-sm">
              {Pokemon
                ? <Pokemon Pokemon={Pokemon} />
                : <PokemonMissing />}
            </div>
          </div>
        )
      }
    </div>
  );
}

// Make data available on props
const mapStateToProps = (store: IAppState) => {
  return {
    Pokemon: store.PokemonState.Pokemon,
    Pokemons: store.PokemonState.Pokemons,
    isFetching: store.PokemonState.isFetching,
  };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
  return {
    getPokemons: () => dispatch(getPokemonsStartActionCreator()),
    setPokemon: (Pokemon: any) => dispatch(setPokemonActionCreator(Pokemon)),
    searchPokemons: (term: string) => dispatch(searchPokemonsActionCreator(term)),
  }
}

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
