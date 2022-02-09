import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([])
  const [pokeSearch, setPokeSearch] = useState("")

  useEffect(() =>{
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(setPokemonArray)
  }, [] )

  const filteredPokemon = pokemonArray.filter(poke => 
    poke.name.includes(pokeSearch))

  function handleSetSearchInput(e){
    setPokeSearch(e.target.value)
  }

  function handleAddPokemon(newPokemon){
    setPokemonArray([...pokemonArray, newPokemon]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        onAddPokemon={handleAddPokemon}
      />
      <br />
      <Search 
        handleSetSearchInput={handleSetSearchInput}
        pokeSearch={pokeSearch}
      />
      <br />
      <PokemonCollection 
        pokemonArray={filteredPokemon}
      />
    </Container>
  );
}

export default PokemonPage;
