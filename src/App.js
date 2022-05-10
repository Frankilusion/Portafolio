import Sidebar from './componentes/Sidebar';
import "./App.css";
import Inicio from './componentes/Inicio';
import Portafolio from './componentes/Portafolio';
import About from './componentes/About';
import Wi from './componentes/Wi';
import Contacto from './componentes/Contacto';
import Capa from './componentes/Capa';
function App() {
  return (
    <div className="App">
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

export default App;
