import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Routes from "./routes/Routes";

import 'bootstrap';
import "index.scss";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <App />
      <Routes /> 
    </div>        
  </BrowserRouter>,
  document.getElementById("root")
);
