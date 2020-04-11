import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/landing.css";
import "./css/register.css";
import "./css/checkins.css";
import "./css/organization.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
//import $ from 'jquery';
//import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
