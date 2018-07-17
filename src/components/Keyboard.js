import React from "react";

import AddOperatorButton from "../containers/AddOperatorButton";
import ClearButton from "../containers/ClearButton";
import ResultButton from "../containers/ResultButton";

const Keyboard = () => (
  <div className="keyboard">
    {renderComputeButton(1)}
    {renderComputeButton(2)}
    {renderComputeButton(3)}
    {renderComputeButton("/")}
    {renderComputeButton(4)}
    {renderComputeButton(5)}
    {renderComputeButton(6)}
    {renderComputeButton("*")}
    {renderComputeButton(7)}
    {renderComputeButton(8)}
    {renderComputeButton(9)}
    {renderComputeButton("-")}
    {renderComputeButton(0)}
    {renderComputeButton(".")}
    <ResultButton value="=" />
    {renderComputeButton("+")}
    <ClearButton value="C" />
  </div>
);

const renderComputeButton = operator => {
  return <AddOperatorButton value={operator} />;
};

export default Keyboard;
