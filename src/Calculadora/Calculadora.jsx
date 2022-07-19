import { useState } from 'react';
import './Calculadora.css';

function Calculadora(){

    const[Output, setOutput]=useState("");
    const[Resultado, setResultado]=useState(false);

    const Sets =(e)=> {        
             setOutput(Output.concat(e.target.value));//una sola cadena ("")
                                 //cadena anterior(nueva cadena)
            console.log(Output);
          }

    const Igual=()=>{
        try {
            setResultado(true);
            setOutput(eval(Output).toString()); //
        } catch (error) {
            setOutput("ERROR")
        }    
    }

    const Limpiar=()=>{
        setOutput("");
    }

    const Borrar=()=>{
        setOutput(Output.slice(0,-1));
    }

    return(
    <div className='contenedor-calculadora'>
        <div className="calculadora">
                    <div>

        {!Resultado ? <>  
        <div className='output-caluladora'>
        <span >{Output}</span>
        </div>
       
                    </>
        : <> <div className='output-caluladora'>
             <span >{Output}</span>
             </div>
              </> 
        }  
    

        <div className="contenedor-boton-caluladora">
            <button  className="boton-calculadora-grande" onClick={Limpiar}>Limpiar</button>
            <button className='boton-calculadora-clear' onClick={Borrar} >Borrar</button>        
            <button onClick={Sets} value={"1"} className="boton-calculadora">1</button>
            <button onClick={Sets} value={"2"} className="boton-calculadora">2</button>
            <button onClick={Sets} value={"3"} className="boton-calculadora">3</button>
            <button onClick={Sets} value={"+"} className="boton-calculadora-operadores">+</button>
            <button onClick={Sets} value={"4"} className="boton-calculadora">4</button>
            <button onClick={Sets} value={"5"} className="boton-calculadora">5</button>
            <button onClick={Sets} value={"6"} className="boton-calculadora">6</button>
            <button onClick={Sets} value={"-"} className="boton-calculadora-operadores">-</button>
            <button onClick={Sets} value={"7"} className="boton-calculadora">7</button>
            <button onClick={Sets} value={"8"} className="boton-calculadora">8</button>        
            <button onClick={Sets} value={"9"} className="boton-calculadora">9</button>
            <button onClick={Sets} value={"*"} className="boton-calculadora-operadores">x</button>  
            <button onClick={Sets} value={"0"} className="boton-calculadora">0</button>
            <button onClick={Sets} value={"."} className="boton-calculadora">.</button>            
            <button onClick={Igual} className="boton-calculadora-operadores">=</button>
            <button onClick={Sets} value={"/"} className="boton-calculadora-operadores">&#247;</button>       
        </div>    

        </div>
        </div>
     </div>
   
     
     )

}

export default Calculadora;