import {
  ISetPokemonAction,
  ISearchPokemonsAction,
  IGetPokemonsStartAction,
  IGetPokemonsSuccessAction,
  IGetPokemonsFailureAction
} from './IGetPokemonsActions.interface';

// Combine the action types with a union (we assume there are more)
type PokemonActions =
  ISetPokemonAction
  | ISearchPokemonsAction
  | IGetPokemonsStartAction
  | IGetPokemonsSuccessAction
  | IGetPokemonsFailureAction;

export default PokemonActions;
