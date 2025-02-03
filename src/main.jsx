import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Asegúrate de que este archivo exista

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Asegúrate de que el componente App esté correctamente implementado */}
  </React.StrictMode>,
  document.getElementById('app')
);
