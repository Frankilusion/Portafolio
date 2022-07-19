
import { useState } from 'react';
import './Todolist.css';
import FormTarea from './FormTarea';
import Tarea from './Tarea';

function Todolist() {
const [listaTareas, setListaTareas] = useState([]);

const nuevatarea = (tarea) =>{
    setListaTareas([tarea, ...listaTareas]) // spread operator   //[tarea,tareas-anteriores] //1 array {},{},{},{}
                            
}

const borrar = (id) =>{
    const listaFiltrada = listaTareas.filter((e, index)=> index !==id); //seteas todo el array filtranto el id seleccionado
    setListaTareas(listaFiltrada); // sin el id seleccionado
}

const actualizarTarea = (id,tarea)=>{
    const listaActualizada = listaTareas.map((e, index) => {
        if(index ===id){
            e=tarea;
        }
        return e;

    })
        setListaTareas(listaActualizada);
}




  return (
    <div className='contenedor-todolist'>
        <div className='todolist'>
        <div className="targeta-formulario">
              <div className='todolist-form'>
             
             <FormTarea
                nuevatarea ={nuevatarea} //props (nuevataera:objeto | {nuevatarea}:contenido)
                 //nomre del props = {contenido}gdfvebr scxz
             />
             </div>
              </div>
        <div className='contenedor-tareas'>
        
          {
          listaTareas.map((e , index) => 
          <div className='todolist-tareas'>
          <Tarea 
            tarea={e}
            borrar={borrar}  
            id={index} 
            editar={actualizarTarea}

            //ya es un objeto
            />
          </div>            
            )
              }
        </div>



        </div>

    </div>
  );
}



export default Todolist;
