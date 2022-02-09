import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, sprites}) {
  const [toggleImg, setToggleImg] = useState(true)

  function handleToggleClick(){
    setToggleImg((toggleImg) => !toggleImg)
  }

  return (
    <Card>
      <div> 
        {toggleImg ? 
          (<div 
            onClick={handleToggleClick}
            className="image"> <img src={sprites.front} alt={name} />
          </div>) : 
          (<div 
            onClick={handleToggleClick} 
            className="image"><img src={sprites.back} alt={name} />
          </div>)
        }

        <div className="content">
          <div className="header">{name}</div>
        </div>

        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>

      </div>
    </Card>
  );
}

export default PokemonCard;
