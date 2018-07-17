import React from "react";

import AddOperatorButton from "../containers/AddOperatorButton";
import ClearButton from "../containers/ClearButton";
import ResultButton from "../containers/ResultButton";

const Keyboard = () => (
  <div>
    <div>
      {renderComputeButton(1)}
      {renderComputeButton(2)}
      {renderComputeButton(3)}
      {renderComputeButton("/")}
    </div>
    <div>
      {renderComputeButton(4)}
      {renderComputeButton(5)}
      {renderComputeButton(6)}
      {renderComputeButton("*")}
    </div>
    <div>
      {renderComputeButton(7)}
      {renderComputeButton(8)}
      {renderComputeButton(9)}
      {renderComputeButton("-")}
    </div>
    <div>
      {renderComputeButton(0)}
      {renderComputeButton(".")}
      <ResultButton value="=" />
      {renderComputeButton("+")}
    </div>
    <ClearButton value="C" />
  </div>
);

const renderComputeButton = operator => {
  return <AddOperatorButton value={operator} />;
};

export default Keyboard;
