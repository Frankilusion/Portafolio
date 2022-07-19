import { useState } from "react";


const TareaForm=(props) => {
    const [inputText, setInputText]= useState("");
    const [validacion, setValidacion]= useState(true);


    const manejarFormulario = (event) =>{
        setInputText(event.target.value);

    }



    const submit =(event) =>{  //envio y validacion
        event.preventDefault();
        if(inputText.trim() !== ""){  //.trim recorta las cadenas(espacios,etc) 
            props.nuevatarea(inputText);
            setInputText("");
            setValidacion(true);
        } else {
            setValidacion(false);
        }  
    }



    return(

        <div >
            <form className="form" onSubmit={submit}>
                    <span className="label" > AGREGAR TAREA</span>
                    <input type="text" class="form-control" id="input-todolist" value={inputText} onChange={manejarFormulario} placeholder="&#xf002;"/>
                    <div className="contenedor-boton"> <button class="btn " id="boton-todolist"><i class="fas fa-plus"></i> AGREGAR </button> </div>

            </form>
            {
                !validacion && <div className="label"> Añada una tarea</div>
            }
        </div>

    )
}

export default TareaForm;