// Third-Party dependencies
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store
} from 'redux';

// React Sagas
import createSagaMiddleware from 'redux-saga';

// Chrome Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';

// Business domain imports
import IAppState from './IAppState.interface';
import PokemonReducer from '../pokemon/reducers/PokemonReducer';
import { PokemonsSaga } from '../pokemon/sagas/Pokemon';

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  PokemonState: PokemonReducer,
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(
                  rootReducer,
                  undefined,
                  composeWithDevTools(applyMiddleware(sagaMiddleware))
                );

  sagaMiddleware.run(PokemonsSaga);

  return store;
}
