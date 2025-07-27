<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // or global.css
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);