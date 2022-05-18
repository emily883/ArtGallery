import { ADD_CART, REMOVE_CART } from "../Types";

const initialState = {
  storage: [],
};

export default function storageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      if (state.storage.length === 0) {
        return {
          ...state,
          storage: [...state.storage, action.payload],
        };
      } else {
        var check = false;
        state.storage.map((item, key) => {
          if (item[0].id === action.payload[0].id) {
            //  state.storage[key][1].quantity++
            check = true;
          }
          return check;
        });
        if (!check) {
          return {
            ...state,
            storage: [...state.storage, action.payload],
          };
        }
      }
      return state;
     
    case REMOVE_CART:
      var CartFiltered = state.storage.filter(
        (m) => m[0].id !== action.payload.id
      );
      return {
        ...state,
        storage: [...state.storage, CartFiltered]
      }

      
    default:
      return state;
  }
}
