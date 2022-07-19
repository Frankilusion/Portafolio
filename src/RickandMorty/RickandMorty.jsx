import { useState } from "react";
import { useEffect } from "react";
import "./RickandMorty.css";
import SearchRick from "./SearchRick";
import Results from "./Results";
import Nav from "./Nav";
import InfiniteScroll from 'react-infinite-scroll-component';

function RickandMorty(){

    const [contain, setContein]= useState([]);
    const [page, setPage]= useState(1);

    useEffect(()=>{          
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(async (data) => {
            if (data.ok) {
                data = await data.json()
            
                    setContein([...contain,...data.results]); // OR setContein(contain.concat(data.results));
            }
            else if(!data.ok){
                           }
        }).catch(e => console.log('Connection error(-)', e)) ;                
    },[page])
  
    return(
        <div className="contenedor-rm">
          
           <Nav/>
           <SearchRick/>
            <InfiniteScroll
            dataLength={contain} //This is important field to render the next data
            next={()=>setPage(page+1)}
            hasMore={true}
            >
                    <Results results={contain} title="826 characters"/>
            </InfiniteScroll> 
                    
        </div>          
     );
}

export default RickandMorty;