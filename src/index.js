import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa tu componente principal
import reportWebVitals from './reportWebVitals';

// Librerías de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si deseas medir el rendimiento de tu aplicación, puedes usar reportWebVitals
reportWebVitals();
