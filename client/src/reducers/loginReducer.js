import { FETCH_LOGIN, REMOVE_LOGIN } from "../actions";

const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  console.log(`action.type:`, action.type);

  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        item: action.payload
      };
    case REMOVE_LOGIN:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};
