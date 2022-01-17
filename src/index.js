import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Repairs } from "./components/Repairs";
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Repairs /> 
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
