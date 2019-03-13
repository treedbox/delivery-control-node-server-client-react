import { FETCH_SHIPMENTS, NEW_SHIPMENT, UPDATE_SHIPMENTS } from "../actions";

const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  console.log(`action.type:`, action.type);

  switch (action.type) {
    case FETCH_SHIPMENTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_SHIPMENT:
      return {
        ...state,
        item: action.payload
      };
    case UPDATE_SHIPMENTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
