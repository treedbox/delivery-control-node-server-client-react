import { FETCH_STATUSES, NEW_STATUS } from "../actions";

const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  console.log(`action.type:`, action.type);

  switch (action.type) {
    case FETCH_STATUSES:
      return {
        ...state,
        items: action.payload
      };
    case NEW_STATUS:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};
