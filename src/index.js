import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
// import"../node_modules/bootstrap/dist/css/bootstrap.main.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);
