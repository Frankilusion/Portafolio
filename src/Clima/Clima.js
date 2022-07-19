import './Clima.css';
import React,{useState} from 'react';

function Clima() {
  const apiKey='a54fcc64a9d2044b4a3abfc6f3b139cb';
  const [clima, setclima] =useState([{}]);
  const [ciudad, setCiudad] = useState("");
  var a=false;
  const buscar=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=imperial&lang=es&appid=${apiKey}`).then(
      response =>response.json()
    ).then(
      data =>{
        setclima(data)
      }
    )

    }

const getClima = (p) =>{
if(p.key==="Enter"){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=imperial&lang=es&appid=${apiKey}`).then(
    response =>response.json()
  ).then(
    data =>{
      setclima(data)
    }
  )
}

}

  return (
    <div className="contenedor-clima">
      <div className='clima'>
      <input input type="text" class="form-control  " placeholder='Ciudad...' onChange={e=>setCiudad(e.target.value)} value={ciudad} onKeyPress={getClima}/>
      <button onClick={buscar}  type="button" class="btn btn-primary">Buscar</button>
      {typeof clima.main === 'undefined' ?(
        <div>
          <p>¡Buen Día!</p>
        </div>
      ):(
        <div>
          <p><label>Ubicación:</label> {clima.name}</p>
          <p><label>Temperatura:</label> {(Math.round( Math.round((clima.main.temp)-32)*5/9))} °C</p>
          <p><label>Descripción: </label> {clima.weather[0].description}</p>
        </div>  
      )
      }

      {clima.cod==="404"?(
        <p>Ciudad no encontrada.</p>

      ):(
        <></>
      )}
      </div>
    </div>
  );
}

export default Clima;