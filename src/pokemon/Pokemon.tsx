import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { capitalizeWord } from '../helpers/utils';

import IPokemon from './data/IPokemon.interface';

class Pokemon extends React.Component<PokemonProps, PokemonState> {
  constructor(props: PokemonProps) {
      super(props);
      this.state = {
          name : this.props.match.params.name,
          error: false,
          Pokemon: {name: '', url: ''}
      };
  }

  componentDidMount() {
      this.findPokemon(this.state.name);
  }

  componentWillReceiveProps(nextProps: any){
      if(nextProps.match.params.name !== this.state.name){
          this.findPokemon(nextProps.match.params.name);
      }
  }

  findPokemon = (name: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      res => {
        if(res.status !== 200){
          this.setState({ error:true });
          return;
        }
        res.json().then(
          data => {
            console.log(data);
            let types: string[] = [];
              for (let type of data.types) {
                  let typeCapitalized:string = type.type.name;
                  types.push(typeCapitalized[0].toUpperCase() + typeCapitalized.slice(1));
              }

              this.setState({
                name: name,
                error: false,
                Pokemon: {
                  name: capitalizeWord(data.name),
                  url: data.url,
                  numberOfAbilities: data.abilities.length,
                  baseExperience: data.base_experience,
                  numberOfMoves: data.moves.length,
                  types: types,
                  imageUrl: data.sprites.front_default
              }
            });
          }
        )
      }
    )
  }

  render() {
    const {error, Pokemon} = this.state;
    let resultMarkup;

    if(error){
      resultMarkup = (<p>Pokemon not found, please try again</p>);
    } else if (this.state.Pokemon) {
      resultMarkup = (
        <div className="col-sm-12 col-md-8">
          Name: {Pokemon.name}
          <br/>
          URL: {Pokemon.url}
          <br/>
          Base experience: {Pokemon.baseExperience}
          <br/>
          Number of abilities: {Pokemon.numberOfAbilities}
          <br/>
          Number of moves: {Pokemon.numberOfMoves}
        </div>
      );
    }
    else {
      resultMarkup = [];
      resultMarkup.push(<p>Still looking...</p>);
    }

    return (
      resultMarkup
    )
  }
}

interface PokemonProps extends RouteComponentProps<{ name: string }> {

}

interface PokemonState {
  name: string;
  error: boolean;
  Pokemon: IPokemon;
}


export default Pokemon;
