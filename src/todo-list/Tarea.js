import { useState } from "react";
import './Todolist.css';
const Tarea = (props) => {

    const[modoEdit, setModoEdit]= useState(false);
    const[editText, setEditText] = useState("");

    const manejarEdit = (event) =>{
        setEditText(event.target.value);
    }

    const editar=()=>{
        setModoEdit(true);
    }

    const borrarTarea = () =>{
        props.borrar(props.id);
    }

    const submitEdit = (event) =>{
        event.preventDefault();
        props.editar(props.id, editText);
        setEditText("");
        setModoEdit(false);

    }


    return(
    <div className="tarea">

        {!modoEdit ? <>  <div className="caja-texto"><span >{props.tarea}</span> 
        </div>
          <div className="contenedor-boton">
              <span className="btn" id="boton-todolist" onClick={editar}><i class="fas fa-edit"></i> Editar</span> 
              <span className="btn" id="boton-todolist" onClick={borrarTarea}><i class="fas fa-trash-alt"></i> Borrar</span></div>
                    </>
        :
        <form onSubmit={submitEdit}>
            <input placeholder="&#xf002;" id="input-todolist" type="text" class="form-control" value={editText} onChange={manejarEdit}/> <button className="btn" id="boton-todolist"><i class="fas fa-save"></i> Guardar</button>
        </form>
        }  
            

       </div>
    )
    // <> </> mete html al javascript
}

export default Tarea;