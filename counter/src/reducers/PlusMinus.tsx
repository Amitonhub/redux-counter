import { ItemState } from "../types/Types";

const initialState: ItemState = {
    state : 0
};

export const plusMinus = (state: ItemState = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, state: Number(state.state) + 1 };
    case "DECREMENT":
      return { ...state, state: Number(state.state) - 1 };
    default:
      return state;
  }
};