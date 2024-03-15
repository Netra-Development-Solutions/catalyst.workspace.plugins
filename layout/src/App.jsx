import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ResponsiveHeaderNavigation from "./HeaderNavigation";

const App = () => (
  <ResponsiveHeaderNavigation />
);
ReactDOM.render(<App />, document.getElementById("app"));
