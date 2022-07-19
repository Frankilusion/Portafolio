
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './Step.css';

import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link,
    NavLink
  }from 'react-router-dom';
 
function Step() {
  const [page, setPage]=useState(0);
  function nextPage(){  
    
    if(page>3){
        setPage(3);
    }
    else{
        setPage(page=>page+1)
    }
  }
  function backPage(){
    if(page<0){
        setPage(0);
    }
    else{
        setPage(page=>page-1)
    }
  }

  return (
    <div className='contenedor-steps'>
 
        <div className='steps'>       

           <div className='bolas'>

                    <div className='bola'>
                             <div className={page === 0 ? "active" : "disable" }>1</div>
                    </div>
                    <div className='bola'>
                        <div className={page === 1 ? "active" : "disable" }>2</div>
                    </div>
                    <div className='bola'>
                        <div className={page === 2 ? "active" : "disable" }>3</div>
                    </div>
                    <div className='bola'>
                        <div className={page === 3 ? "active" : "disable" }>4</div>
                    </div>
                    

           </div>     



         <div className="contenido">
        <div className='display'>
             {page === 0 && <Step1 />}
             {page === 1 && <Step2 />}
             {page === 2 && <Step3 />}
             {page === 3 && <Step4 />}
        </div>
        <button className='boton-step-back' onClick={backPage}>Regresar</button>
        <button className='boton-step-next'  onClick={nextPage} >Continuar</button>
        
        </div> 



    </div> 

    </div>

  );
}



export default Step;
