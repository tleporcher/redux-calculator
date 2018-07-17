import React from "react";

const ComputeButton = ({ onClick, value }) => (
  <button className="compute-button" onClick={onClick}>
    {value}
  </button>
);

export default ComputeButton;
