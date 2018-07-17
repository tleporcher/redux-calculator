import React from "react";

const ComputeButton = ({ onClick, value }) => (
  <button className={`compute-button ${value}-operator`} onClick={onClick}>
    {value}
  </button>
);

export default ComputeButton;
