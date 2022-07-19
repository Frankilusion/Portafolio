import "../estilos/Sidebar.css";
import React,{useState,useEffect} from "react";
import Inicio from "./Inicio";


function Sidebar() {

    
    return(
   <div id="contenedor-Sidebar">
        
        <div className="SideBar">
            <center>
            <img className="foto" src={require('../imagenes/fotoPerfil.png')}/>
            
            <h4>Franklin Fernández</h4>
           <a href={require('../Documentos/cv.pdf')}  download="cv -fernandez.pdf"> <button id="cv" class="ov-btn-slide-left" type="submit">Currículum Vitae </button>   </a>
            </center>
            <div className="contenedor-lista">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#Contenedor-portafolio">Proyectos</a></li>
                <li><a href="#Contenedor-About">Sobre mi</a></li>    
                <li><a href="#contenedor-contacto">Contacto</a></li>
            </ul>
            </div>
            <div className="redes">
            <ul>
            <a  href="https://wa.me/51981340821" target="_blank"><i class="fab fa-whatsapp-square"></i></a> 
            <a  href="https://github.com/Frankilusion?tab=repositories" target="_blank"><i class="fab fa-github-square"></i></a>
            <a  href="https://linkedin.com/in/frankivan" target="_blank"><i class="fab fa-linkedin"></i></a> 
            </ul>
            </div>

        </div>
        
        

    </div>
    

    );
    
    }
    
export default Sidebar;