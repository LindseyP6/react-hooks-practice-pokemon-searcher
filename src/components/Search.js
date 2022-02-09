import React from "react";

function Search({handleSetSearchInput, pokeSearch}) {


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          value={pokeSearch}
          onChange={handleSetSearchInput}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
