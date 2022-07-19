import React from 'react';
import { useState } from "react";
import "../estilos/Contacto.css";



function Contacto() {
 
    return(
    <div id='contenedor-contacto'>
        <div className="fondo-contacto">
            <h1>CONTAC</h1> 
            <div className="titulo-contacto">
            <h2 data-aos="fade-up">Contacto</h2>
            <p>Estoy interesado en oportunidades independientes, especialmente proyectos ambiciosos o grandes. Sin embargo, si tiene otra solicitud o pregunta, no dude en utilizar el formulario.
            </p>
            <div className="contenedor-formulario">

              <h1>@</h1>
                <div className="formulario" >
              <form class="form" action="https://formsubmit.co/franklin12fernandez@gmail.com" method="POST">
       
              <div className="input_nombre">
               
                  <input type="name" name="name" required="required" cols="50" placeholder="Nombres"/>
                  <span className="focus-border"></span> 
              </div>
              <div className="input_mail">
                  <input type="email" name="email" required="required" cols="50" placeholder="Email"/> 
                  <span className="focus-border"></span>
              </div>

              <div className="input_asunto" >
                
                <input type="text"  name="subject" required="required" rows="10" placeholder="Asunto"/> 
                <span className="focus-border"></span>
              </div>

              <div className="input_mensaje"> 
            
                <textarea type="text" name="message" required="required" rows="7" cols="50" placeholder="Mensaje"  ></textarea>
                <span className="focus-border"></span>
              </div>
              
              <div class="cont-button-form">
                <button class="ov-btn-slide-left" type="submit">ENVIAR</button>
              </div>

              <input type="hidden" name="_next" value="https://portafolio-fernandez.000webhostapp.com/"/>
              <input type="hidden" name="_captcha" value="false"/>
       </form>
                </div>
                <div className="imagen-contacto" >
              <img class="animated infinite pulse" src={require('../imagenes/robot.png')}/>
                </div>
            </div>
            </div>                
                 
        </div>
        
      
    </div>
      

    );
    
    }
    
export default Contacto;