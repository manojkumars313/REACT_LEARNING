export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export const IncrementCounter = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};

export const DecrementCounter = () => {
  return {
    type: "DECREMENT_COUNTER",
  };
};
