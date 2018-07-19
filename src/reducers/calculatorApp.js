import { ADD_OPERATOR, CLEAR_OPERATORS, GET_RESULT } from "../actions";

const initialState = {
  operators: [],
  result: 0
};

const calculatorApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OPERATOR:
      return {
        ...state,
        operators: [...state.operators, action.operator]
      };
    case GET_RESULT:
      return {
        ...state,
        result: calculateResult(state.operators)
      };
    case CLEAR_OPERATORS:
      return initialState;
    default:
      return state;
  }
};

const calculateResult = operators => {
  const result = eval(operators.join(""));
  return result ? result : "ERROR";
};

export default calculatorApp;
