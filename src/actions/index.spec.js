import * as actions from "./index";

describe("calculatorApp actions", () => {
  it("addOperator should create ADD_OPERATOR action", () => {
    expect(actions.addOperator("+")).toEqual({
      type: "ADD_OPERATOR",
      operator: "+"
    });
  });

  it("clearOperators should create CLEAR_OPERATORS action", () => {
    expect(actions.clearOperators()).toEqual({
      type: "CLEAR_OPERATORS"
    });
  });

  it("getResult should create GET_RESULT action", () => {
    expect(actions.getResult()).toEqual({
      type: "GET_RESULT"
    });
  });
});
