import './App.css';
import Boton from './componentes/Boton';
import FreeCodeCamp_logo  from "./imagenes/FreeCodeCamp_logo.png";
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  //acá podemos escribir JavaScript Puro
  //Acá definiendo el estado
  const [numClics, setNumClics] = useState(0);

  //Acá manejamos el estado con las siguientes dos funciones

  const manejarClic = () =>{
   setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setNumClics(0);
  }

   
  


  return (
    <div className="App">
      <div className='freeCodeCamp-logo-contenedor'>
        <img className='freeCodeCamp-logo' alt='Logo de Freecodecamp' src={FreeCodeCamp_logo}  />

      </div>

      <div className="contenedor-contador">
        <Contador  numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic = {manejarClic} />

        <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador} /> 
      </div>
      
    </div>
  );
}

export default App;
