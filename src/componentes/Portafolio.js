import "../estilos/Portafolio.css";
import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link
  }from 'react-router-dom';
function Portafolio() {
    useEffect(() => {
        AOS.init({
            duration : 900
        });
        AOS.refresh();
      }, []);
    return(
    <div id="Contenedor-portafolio" >
        <div className="fondo">
            <h1>WORK </h1> 
            <div className="portafolio">
            <h2 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  >Portafolio</h2>
            <p>Una pequeña galería de proyectos recientes elegidos por mí. 
            </p>
            <div   className="work">
                <div id="c1" className="caja"><a href="#"><div className="text_caja"><h3>Ir</h3> </div></a></div>
                <div id="c2"className="caja"><a href="#"><div className="text_caja"><h3>Ir</h3></div></a></div>
                <div id="c3" className="caja"><a href="#"><div className="text_caja"><h3>Ir</h3> </div></a></div>
                <div id="c4" className="caja"><a href="https://frankilusion.github.io/Kinder/" target="_blank"><div className="text_caja"><h3>Ir</h3> </div></a></div>
                <div id="c5" className="caja"><Link to="/rickandmorty" target="_blank"><div className="text_caja"><h3>Ir</h3> </div></Link></div>
                <div id="c6" className="caja"><Link to="/todolist" target="_blank"><div className="text_caja"><h3>Ir</h3></div></Link></div>
                <div id="c7" className="caja"><Link to="/calculadora" target="_blank"><div className="text_caja"><h3>Ir</h3></div></Link></div>
                <div id="c8" className="caja"><Link to="/step" target="_blank"><div className="text_caja"><h3>Ir</h3></div></Link></div>
                <div id="c9"className="caja"><Link to='/buscador-contacto' target="_blank"><div className="text_caja"><h3>Ir</h3></div></Link></div> 
                <div id="c10" className="caja"><Link to="/clima" target="_blank"><div className="text_caja"><h3>Ir</h3></div></Link></div>
                
            </div>
            </div>    
            
                
                 
        </div>
        

        
    </div>
    );
    
    }
    
export default Portafolio;