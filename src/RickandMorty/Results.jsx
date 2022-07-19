import { useState } from "react";
import { useEffect } from "react";
import "./RickandMorty.css";
import RickandMorty from "./RickandMorty";
function Results(props){    

    return(  
        <div className="container-target-rm">
              <h1 className="title-rm">{props.title}</h1>
            {(props.results).map((character,key)=>{
                return( 
                
                    
                        <div className="target-rm" key={character.id}> 
                                                   
                            <img src={character.image} />    
                            <h1 >{character.name}</h1>
                            <h6>Status: {character.status}</h6>
                            <h6>Specie: {character.species}</h6>
                            <h6>Gender: {character.gender}</h6>
                            <h6>Origin: {character.origin.name}</h6>
                            <h6>Location: {character.location.name}</h6>
                            <h5>Episode: {character.episode.map(
                                                (episode)=><span className="episode">{episode.slice(40)}</span>
                                         )}</h5>
                                      
                        </div>
                  
                    )
            })}   
        </div>
      
        
    )
}

export default Results;