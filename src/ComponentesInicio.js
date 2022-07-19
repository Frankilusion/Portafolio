import React from 'react';

import Inicio from './componentes/Inicio';
import Portafolio from './componentes/Portafolio';
import About from './componentes/About';
import Wi from './componentes/Wi';
import Contacto from './componentes/Contacto';
import Capa from './componentes/Capa';
import Sidebar from './componentes/Sidebar';

function componentesInicio() {
 
    return(
        <div className='componentes-inicio'>
            <Capa/>
            <Sidebar/>
            <Inicio/> 
            <Portafolio/>
            <About/> 
            <Wi/>
            <Contacto/>
       
       </div>
      
      

    );
    
    }
    
export default componentesInicio;