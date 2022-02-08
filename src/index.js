import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context from "./context/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import {TransactionProvier} from './context/TransactionContext.js';

ReactDOM.render(
  <TransactionProvier>
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
  </TransactionProvier>,
  document.getElementById("root")
);
