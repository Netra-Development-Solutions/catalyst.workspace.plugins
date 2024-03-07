import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import TextField from "./TextField";

const App = () => (
  <TextField label="Hello"/>
);

const root = ReactDOM.createRoot(document.getElementById("input-textfield"));
root.render(<React.StrictMode><App /></React.StrictMode>);