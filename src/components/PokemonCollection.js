import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonArray}) {

  const pokeCard = pokemonArray.map(pokemon => {
    return <PokemonCard 
            key={pokemon.id}
            {...pokemon}
          />
  } )

  return (
    <Card.Group itemsPerRow={6}>
      {pokeCard}
    </Card.Group>
  );
}

export default PokemonCollection;
