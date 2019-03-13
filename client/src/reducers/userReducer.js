import { FETCH_USERS, NEW_USER, UPDATE_USERS } from "../actions";

const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  console.log(`action.type:`, action.type);

  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_USER:
      return {
        ...state,
        item: action.payload
      };
    case UPDATE_USERS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
