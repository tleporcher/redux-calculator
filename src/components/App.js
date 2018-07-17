import React from "react";
import "./App.css";

import Keyboard from "./Keyboard";
import OperationLabel from "../containers/OperationLabel";
import ResultLabel from "../containers/ResultLabel";

const App = () => (
  <div className="App">
    <div className="header">
      <OperationLabel />
      <ResultLabel />
    </div>
    <Keyboard />
  </div>
);

export default App;
