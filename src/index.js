import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { animales } from './animales';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const titulo = "";
const mostrarFondo= true;
const imagenes = [];



for (const animal in animales) {
  imagenes.push(
    <img 
      key={animal}
      className="animal"
      alt={animal}
      src={animales[animal].imagen}
      ariaLabel={animal}
      role="button"
      onClick={mostrarHecho}
    />
  )
}

function mostrarHecho(e) {
  const animalSeleccionado = e.target.alt;
  const animalInfo = animales[animalSeleccionado];
  const indiceOpcion = Math.floor(Math.random() * animalInfo.hechos.length);
  const hecho = animalInfo.hechos[indiceOpcion];
  document.getElementById("hecho").innerHTML = hecho;
}
const fondo = (
  <img 
    className='fondo'
    alt='fondoOceano'
    src='/imagenes/fondoOceano.png'
  />
);



const hechosSobreAnimales = (
  <div>
    <h1>{titulo === "" ? "Quieres conocer el mar, haz click sobre un animal" : titulo}</h1>
    {mostrarFondo && fondo}
    <p id='hecho'></p>
    <div className="animales">
      {imagenes}
    </div>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {hechosSobreAnimales}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
