import { INCREMENT, DECREMENT, RESET } from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count++ };
    case DECREMENT:
      if (state.count === 0) {
        return { count: (state.count = 0) };
      }
      return { count: state.count-- };
    case RESET:
      return { count: (state.count = 0) };

    default:
      throw new Error();
  }
};
