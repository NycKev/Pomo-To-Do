// Content.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '/src/styles/Content.css';

// eslint-disable-next-line react/prop-types
function Content({ selectedButton }) {
  let content = null;

  switch (selectedButton) {
    case "Hoy":
      content = <div>Hola Mundo</div>; // Contenido para el botón "Hoy"
      break;
    case "Mañana":
      content = (
        <div>
          <h2>Lista de Nombres Aleatorios:</h2>
          <ul>
            <li>Juan</li>
            <li>Maria</li>
            <li>Carlos</li>
            <li>Sofia</li>
            <li>Luis</li>
          </ul>
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <div className="content">
      {content}
    </div>
  );
}

export default Content;
