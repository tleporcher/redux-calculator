import React from "react";
import "./App.css";

import Keyboard from "./Keyboard";
import Operation from "../containers/Operation";
import ResultLabel from "../containers/ResultLabel";

const App = () => (
  <div className="App">
    <div className="App-header">
      <Operation />
      <ResultLabel />
    </div>
    <Keyboard />
  </div>
);

export default App;
