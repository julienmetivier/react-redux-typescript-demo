import React, { useState } from 'react';

// Create interface for Props
interface IProps {
  searchPokemons: Function,
}

const PokemonSearch: React.FunctionComponent<IProps> = ({ searchPokemons }: IProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeHandler = (event: React.ChangeEvent) => {
    const input = (event.target as HTMLInputElement).value;
    setSearchTerm(input);
  }

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    searchPokemons(searchTerm);
  }

  return (
    <form
      className="form-inline"
      onSubmit={onSubmitHandler}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={onChangeHandler} />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
      >Search</button>
    </form>
  );
};

export default PokemonSearch;
