import * as React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Business domain imports
import PokemonContainer from '../pokemon/PokemonContainer';
import PokemonList from '../pokemon/PokemonList';
import Pokemon from '../pokemon/Pokemon';
import TopHeader from './nav/TopHeader';

function App() {
  return (
    <div className="App">
      <Router>
        <TopHeader></TopHeader>
        <div className="row">
          <div className="col-12 mt-5">
              <Switch>
                <Route exact path="/" component={PokemonContainer}></Route>
                {/* <Route exact path="/search" component={PokemonSearch}></Route> */}
                <Route exact path="/pokemon" component={PokemonList}></Route>
                <Route path="/pokemon/:name" component={Pokemon}/>
              </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
