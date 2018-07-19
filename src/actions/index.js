export const ADD_OPERATOR = "ADD_OPERATOR";
export const CLEAR_OPERATORS = "CLEAR_OPERATORS";
export const GET_RESULT = "GET_RESULT";

export const addOperator = operator => ({
  type: ADD_OPERATOR,
  operator
});

export const clearOperators = () => ({
  type: CLEAR_OPERATORS
});

export const getResult = () => ({
  type: GET_RESULT
});
