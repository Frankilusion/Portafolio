import { useState } from "react";
import { useEffect } from "react";
import Results from "./Results";
import { Circle, Default,  Hourglass } from 'react-spinners-css';
function SearchRick(){    
    const [inputText, setInputText]= useState('');
    const [results, setResults]= useState([]);
    const [error, setError] =useState(false);
    const [loading, setLoading] =useState(false);
  

    const SetInput= (event) => setInputText(event.target.value);                 
    
    
    useEffect(()=>{    
        
        //al quedar en blanco se salta el fetch y se queda con el estado anterior que es "false" por eso el true antes de empezar el salto
       
           setLoading(true);
        fetch(`https://rickandmortyapi.com/api/character/?name=${inputText}`)
        .then(async (data) => {  
                                        if (data.ok) {
                                            data = await data.json()
                                            setResults(data.results);
                                            setError(false);
                                            setLoading(false); 
                                            if(inputText===''){
                                                setError(true);
                                                setLoading(false);
                                            }
                                        }
                                        else if(!data.ok){     
                                            setError(true);               
                                        }                                       
        }).catch(e => console.log('Connection error', e)) ;   
        
        
            
        
            

                 
    },[inputText])
    console.log(inputText);

    console.log(loading);
    return(    
        <div > 
              <h1 className="title-search-rm">Find your favorite character</h1>
            <div className="searchRick">
          
            <img width="500" src={require('../imagenes/portal.png')} />
            <input type="text" value={inputText} onChange={SetInput} placeholder="&#xf002; "/>
            </div>  
            

            { error===true?<div className="carga"><span >...</span></div>:
            loading===true?<div className="carga"><Default color="#d65aad"/></div>:
            <Results results={results} title="Results"/>}    
                                          
        </div>

        
    )
}

export default SearchRick;