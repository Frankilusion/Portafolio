import { useState } from "react";
import { useEffect } from "react";
import "./RickandMorty.css";
import SearchRick from "./SearchRick";
import Results from "./Results";


function Nav(){

    return(
        <div className="nav">
            <nav>
               <a href="#"><img src={require('../imagenes/rick.png')} width="200"/></a>
                
            </nav>             
             
        </div>          
     );
}

export default Nav;