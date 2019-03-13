import { FETCH_CLIENTS, NEW_CLIENT } from "../actions";

const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  console.log(`action.type:`, action.type);

  switch (action.type) {
    case FETCH_CLIENTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_CLIENT:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};
