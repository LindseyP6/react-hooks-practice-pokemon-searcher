import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [addName, setAddName] = useState("")
  const [addHP, setAddHP] = useState("")
  const [addFront, setAddFront] = useState("")
  const [addBack, setAddBack] = useState("")

  function handleAddName(e){
    setAddName(e.target.value)
  }
  function handleAddHP(e){
    setAddHP(e.target.value)
  }
  function handleAddFront(e){
    setAddFront(e.target.value)
  }
  function handleAddBack(e){
    setAddBack(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    const newPokemon= {
      name: addName,
      hp: addHP,
      sprites: {
        front: addFront,
        back: addBack,
      },
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newPokemon),
    })
    .then(r => r.json())
    .then(onAddPokemon)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={addName} onChange={handleAddName}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={addHP} onChange={handleAddHP}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={addFront}
            onChange={handleAddFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={addBack}
            onChange={handleAddBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
