import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

// App imports
import createSagaMiddleware from 'redux-saga';
import {
  getPokemonsStartActionCreator,
  getPokemonsSuccessActionCreator,
  getPokemonsFailureActionCreator,
} from '../pokemon/actions/PokemonActionCreators';
import GetPokemonsMock from '../pokemon/data/GetPokemonsMock';
import { PokemonsSaga } from '../pokemon/sagas/Pokemon';

// Configure the mockStore function
// Note: if this begins to be used in several places, make a helper
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

// Tests
describe('getPokemonsStart', () => {
  beforeEach(() => { moxios.install(); });
  afterEach(() => { moxios.uninstall(); });

  it('creates GET_PokemonS_START, GET_PokemonS_SUCCESS after successfuly fetching Pokemons', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { results: GetPokemonsMock },
      });
    });

    const expectedActions = [
      getPokemonsStartActionCreator(),
      getPokemonsSuccessActionCreator(GetPokemonsMock),
    ];

    const initialState = {
      Pokemons: [],
      isFetching: false,
    };
    const store = mockStore(initialState);
    sagaMiddleware.run(PokemonsSaga);

    store.subscribe(() => {
      const actions = store.getActions();
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });

    store.dispatch(getPokemonsStartActionCreator());
  });

  it('creates GET_PokemonS_START, GET_PokemonS_FAILURE after failing to fetch Pokemons', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {},
      });
    });

    const expectedActions = [
      getPokemonsStartActionCreator(),
      getPokemonsFailureActionCreator(),
    ];

    const initialState = { Pokemons: [] };
    const store = mockStore(initialState);
    sagaMiddleware.run(PokemonsSaga);

    store.subscribe(() => {
      const actions = store.getActions();
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });

    store.dispatch(getPokemonsStartActionCreator());
  });
});
