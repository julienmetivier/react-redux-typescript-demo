import IPokemon from './IPokemon.interface';

export default interface IPokemonState {
  readonly Pokemon?: IPokemon,
  readonly Pokemons: IPokemon[],
  readonly isFetching: Boolean,
}
