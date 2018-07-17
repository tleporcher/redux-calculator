import calculatorApp from "./calculatorApp";

const initialState = { operators: [], result: 0 };

describe("calculatorApp reducer", () => {
  it("should handle the initial state", () => {
    expect(calculatorApp(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_OPERATOR", () => {
    expect(
      calculatorApp(initialState, {
        type: "ADD_OPERATOR",
        operator: 1
      })
    ).toEqual({
      operators: [1],
      result: 0
    });

    expect(
      calculatorApp(
        {
          operators: [1],
          result: 0
        },
        {
          type: "ADD_OPERATOR",
          operator: "+"
        }
      )
    ).toEqual({
      operators: [1, "+"],
      result: 0
    });

    expect(
      calculatorApp(
        {
          operators: [1, "+"],
          result: 0
        },
        {
          type: "ADD_OPERATOR",
          operator: 2
        }
      )
    ).toEqual({
      operators: [1, "+", 2],
      result: 0
    });
  });

  it("should handle GET_RESULT", () => {
    expect(
      calculatorApp(
        {
          operators: [1, "+", 2],
          result: 0
        },
        { type: "GET_RESULT" }
      )
    ).toEqual({
      operators: [1, "+", 2],
      result: 3
    });
  });

  it("should handle CLEAR_OPERATORS", () => {
    expect(
      calculatorApp(
        {
          operators: [1, "+", 2],
          result: 3
        },
        {
          type: "CLEAR_OPERATORS"
        }
      )
    ).toEqual(initialState);
  });
});
