import "./BuscadorContacto.css";
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react' ;
import React from 'react';

function BuscadorContacto() {
    const [searchTerm, setSearchTerm] =useState("");
    return(
        <div className="contenedor-BuscadorContacto">
        <div className='primero'>
         <h1> <i class="bi bi-search"></i> Buscar contacto</h1>
         <input type="text" class="form-control  " placeholder='Buscar...' onChange={event =>{setSearchTerm(event.target.value)}}/>


      <div className='overflow'>
         {JSONDATA.filter((val)=>{
           if(searchTerm==""){
             return val
           } else if (val.first_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
             return val
           }

         }).map((val,key)=>{
           return (<div className='cont-contactos' key={key}> 
           <p className='contacto'><i class="bi bi-person-lines-fill"> </i>{val.first_name}</p><div className='span'></div>
           </div>);

           
         })}
            </div>
            </div>
      </div>
    
     


    );    
    }
    
export default BuscadorContacto;